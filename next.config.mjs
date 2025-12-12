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
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/محصولات",
        destination: "/product-list",
        permanent: false,
      },
      // With / at the end
      {
        source: "/محصولات/",
        destination: "/product-list",
        permanent: false,
      },
      //  /محصولات/anything -> /product-list/anything
      {
        source: "/محصولات/:path*",
        destination: "/product-list/:path*",
        permanent: false,
      },
      //  Encoded URL
      {
        source: "/%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA",
        destination: "/product-list",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
