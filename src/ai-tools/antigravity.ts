import type { AIToolConfig } from './index.js';

const config: AIToolConfig = {
  type: 'ide',
  userName: 'Antigravity',
  userEmail: 'noreply@antigravity.google',
  envVars: [
    { key: '__CFBundleIdentifier', value: 'com.google.antigravity' },
    { key: 'ANTIGRAVITY_AGENT', value: '1' },
  ],
};

export default config;
