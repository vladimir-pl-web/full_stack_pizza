/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false // Отключаем PPR — актуально и корректно для Next.js 16
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.dodostatic.net',
        port: '',
        pathname: '/**' // Полное разрешение любых путей
      }
    ]
  }
}

export default nextConfig
