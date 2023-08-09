/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com', 'another.domain.com']
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig