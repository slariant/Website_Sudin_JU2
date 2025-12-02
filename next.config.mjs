/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './imagekit-loader.ts',
    },
};

export default nextConfig;
