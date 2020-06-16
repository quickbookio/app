import path from 'path';
import svelte from 'vite-plugin-svelte';

let config = {
	alias: {
		'/src/': path.resolve(__dirname, './src'),
    },
    serviceWorker: process.env.NODE_ENV,
    plugins: [
        svelte(),
    ],
	optimizeDeps: {
        include: [
            '@intrnl/pako-esm/deflate',
            '@intrnl/pako-esm/inflate',
            'ace-builds/src-noconflict/ace',
            'ace-builds/src-noconflict/mode-markdown',
            'ace-builds/src-noconflict/ext-searchbox',
            'marked/src/helpers',
            'prismjs/components/prism-core',
            'prismjs/plugins/autoloader/prism-autoloader',
            'svelte/internal',
            'svelte/store',
        ]
    },
};

export default config;