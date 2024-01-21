/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['apod.nasa.gov', 'www.youtube.com'],
    },
    env: {
        NASA_API_KEY: process.env.NASA_API_KEY
    },
}

module.exports = nextConfig
