// Example vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other configurations...
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  }
});
