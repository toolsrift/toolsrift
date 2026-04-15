const withPWA = (() => {
  try {
    return require('next-pwa')({
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
      register: true,
      skipWaiting: true,
    });
  } catch (e) {
    return (config) => config;
  }
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // paste whatever was already inside your nextConfig here
};

module.exports = withPWA(nextConfig);
