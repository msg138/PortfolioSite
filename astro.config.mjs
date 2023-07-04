import { defineConfig } from 'astro/config';
import astroCompress from 'astro-compress';
import astroCompressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    integrations: [
        astroCompress(),
        astroCompressor({ brotli: true, gzip: false }),
    ],
});
