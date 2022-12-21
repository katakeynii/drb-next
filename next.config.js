/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    async redirects() {
    return [
      {
        source: '/inscription',
        destination: 'https://bit.ly/drb-odc-24dec',
        permanent: true,
      },
      {
        source: '/questions',
        destination: 'https://cutt.ly/F0FR3Dx',
        permanent: true
      }
    ]
  },
}

module.exports = nextConfig
