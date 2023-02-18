import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react()
    ],
    resolve: {
        alias: {
            '@/': resolve(__dirname, 'resources', 'js'),
            '@components': resolve(__dirname, 'resources', 'js', 'components'),
            '@hooks': resolve(__dirname, 'resources', 'js', 'hooks'),
            '@pages': resolve(__dirname, 'resources', 'js', 'pages'),
            '@utils': resolve(__dirname, 'resources', 'js', 'utils'),
            '@shared': resolve(__dirname, 'resources', 'js', 'shared'),
            '@context': resolve(__dirname, 'resources', 'js', 'context'),
            '@assets': resolve(__dirname, 'resources', 'js', 'assets')
        }
    }
});
