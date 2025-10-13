import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'e2e-tests',
  timeout: 30000,
  use: {
    headless: true,
    baseURL: 'http://localhost:5000',
  },
  webServer: {
    command: 'npm run start-prod',
    port: 5000,
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },
})