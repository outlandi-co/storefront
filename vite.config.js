import { defineConfig } from 'vite';

export default defineConfig({
  // other Vite config options
  optimizeDeps: {
    exclude: [
      // Add the problematic dependencies here
      'dependency-name', // Replace with actual dependency name
    ],
  },
});
