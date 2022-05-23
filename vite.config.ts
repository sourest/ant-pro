import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import project from './package.json'

export default defineConfig({
  esbuild: {
    treeShaking: false
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'source')
    }
  },
  define: {
    VERSION: JSON.stringify(project.version)
  },
  server: {
    host: '0.0.0.0'
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'source/index.ts'),
      name: 'AntPro',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'antd'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'JSX'
        }
      }
    }
  }
})
