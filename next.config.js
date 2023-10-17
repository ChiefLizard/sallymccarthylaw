/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production"
console.log(isProd)

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/sallymccarthylaw/' : '',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
