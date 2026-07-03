import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

export async function load() {
	const cacheDir = path.join(process.cwd(), 'static', 'photography-optimized');

	const photos = fs
		.readdirSync(cacheDir)
		.filter((file) => IMAGE_EXTENSIONS.test(file))
		.sort();

	return { photos };
}
