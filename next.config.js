/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/sallymccarthylaw' : ''
}

module.exports = nextConfig
