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
    ]
  },
}

module.exports = nextConfig
