/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nit6.ir",
        pathname: "/other/**",
      },
      {
        protocol: "https",
        hostname: "ricksanchezz.ir",
        // pathname: "/other/project/**",
      }
    ],
  },
};

export default nextConfig;


