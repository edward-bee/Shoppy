import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'xvrj2r',
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173'
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
})
