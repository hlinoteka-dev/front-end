/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hlinoteka.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
	experimental: {
		serverActions: true,
	},
}

module.exports = nextConfig
