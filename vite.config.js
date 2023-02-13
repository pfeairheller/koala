const Path = require('path');
const vuePlugin = require('@vitejs/plugin-vue')
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

const { defineConfig } = require('vite');

/**
 * https://vitejs.dev/config
 */
const config = defineConfig({
    root: Path.join(__dirname, 'src', 'renderer'),
    publicDir: 'public',
    server: {
        port: 8080,
    },
    open: false,
    build: {
        outDir: Path.join(__dirname, 'build', 'renderer'),
        emptyOutDir: true,
    },
    plugins: [
      vuePlugin(),
        wasm(),
        topLevelAwait()
    ],
});

module.exports = config;
