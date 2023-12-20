/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "",
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'out',
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
};

module.exports = nextConfig;
