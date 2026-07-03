import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export const prerender = true;

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;
const MAX_WIDTH = 1800;
const QUALITY = 75;

export async function load() {
	const sourceDir = path.join(process.cwd(), 'static', 'photography');
	const cacheDir = path.join(process.cwd(), 'static', 'photography-optimized');
	fs.mkdirSync(cacheDir, { recursive: true });

	const files = fs
		.readdirSync(sourceDir)
		.filter((file) => IMAGE_EXTENSIONS.test(file))
		.sort();

	const names = await Promise.all(files.map((file) => optimize(path.join(sourceDir, file), cacheDir, file)));

	const photos = names;

	return { photos };
}

/** @param {string} sourcePath @param {string} cacheDir @param {string} file */
async function optimize(sourcePath, cacheDir, file) {
	const webpName = `${path.parse(file).name}.webp`;
	const webpPath = path.join(cacheDir, webpName);

	const sourceStat = fs.statSync(sourcePath);
	const webpStat = fs.existsSync(webpPath) ? fs.statSync(webpPath) : null;
	if (webpStat && webpStat.mtimeMs >= sourceStat.mtimeMs) return webpName;

	try {
		await sharp(sourcePath, { failOn: 'none' })
			.rotate()
			.resize({ width: MAX_WIDTH, withoutEnlargement: true })
			.webp({ quality: QUALITY })
			.toFile(webpPath);
		return webpName;
	} catch (err) {
		// Sommige bestanden zijn corrupt/niet-standaard JPEG en kunnen niet door sharp verwerkt worden.
		console.warn(`[photography] kon ${file} niet optimaliseren, gebruik origineel:`, err instanceof Error ? err.message : err);
		const fallbackPath = path.join(cacheDir, file);
		const fallbackStat = fs.existsSync(fallbackPath) ? fs.statSync(fallbackPath) : null;
		if (!fallbackStat || fallbackStat.mtimeMs < sourceStat.mtimeMs) {
			fs.copyFileSync(sourcePath, fallbackPath);
		}
		return file;
	}
}
