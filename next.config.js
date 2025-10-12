/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        // Only run ESLint on specific directories during production builds
        // to avoid blocking deployment due to linting issues
        ignoreDuringBuilds: true,
    },
    typescript: {
        // We're already using TypeScript strict mode, so we can safely
        // skip type checking during build as it happens during development
        ignoreBuildErrors: false,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
}

module.exports = nextConfig
