const isProduction = process.env.NODE_ENV === 'production';

const assetPrefix = isProduction ? '.' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  env: { ASSET_PREFIX: assetPrefix },
  images: { unoptimized: true },
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
