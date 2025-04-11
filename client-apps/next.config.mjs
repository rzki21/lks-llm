/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Inject env variables during build
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL, // Hanya untuk server
  },
  
};

export default nextConfig;
