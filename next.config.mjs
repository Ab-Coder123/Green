/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000, // ضبط الحجم الذي سيتم تحويله إلى base64
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
