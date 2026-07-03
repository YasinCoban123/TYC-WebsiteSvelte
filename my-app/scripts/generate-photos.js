import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '..', 'static', 'photography');
const cacheDir = path.join(__dirname, '..', 'static', 'photography-optimized');

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;
const MAX_WIDTH = 1800;
const QUALITY = 75;

fs.mkdirSync(cacheDir, { recursive: true });

const files = fs.readdirSync(sourceDir).filter((f) => IMAGE_EXTENSIONS.test(f)).sort();

console.log(`[generate-photos] ${files.length} photos found, optimizing...`);

for (const file of files) {
	const sourcePath = path.join(sourceDir, file);
	const webpName = `${path.parse(file).name}.webp`;
	const webpPath = path.join(cacheDir, webpName);

	const sourceStat = fs.statSync(sourcePath);
	const webpStat = fs.existsSync(webpPath) ? fs.statSync(webpPath) : null;
	if (webpStat && webpStat.mtimeMs >= sourceStat.mtimeMs) {
		continue;
	}

	try {
		await sharp(sourcePath, { failOn: 'none' })
			.rotate()
			.resize({ width: MAX_WIDTH, withoutEnlargement: true })
			.webp({ quality: QUALITY })
			.toFile(webpPath);
		console.log(`[generate-photos] converted ${file}`);
	} catch (err) {
		console.warn(`[generate-photos] failed ${file}, copying original:`, err.message);
		fs.copyFileSync(sourcePath, path.join(cacheDir, file));
	}
}

console.log('[generate-photos] done.');
