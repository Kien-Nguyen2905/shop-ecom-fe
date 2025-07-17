// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config({
  path: '.env.production',
});

module.exports = {
  apps: [
    {
      name: process.env.PM2_NAME,
      script: 'yarn run preview',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT,
        NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
      },
    },
  ],
};
