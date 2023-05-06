/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental : {
    appDir : true,
  },
  images : {
    domains : ['pbs.twimg.com', 'images.unsplash.com', 'avatars.githubusercontent.com']
  },
}

module.exports = nextConfig

