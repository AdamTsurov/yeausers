import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@providers': path.resolve(__dirname, 'src/providers'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@icons': path.resolve(__dirname, 'src/icons'),
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    },
})
