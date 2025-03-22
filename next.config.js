// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/inici',
        permanent: true,
      },
      {
        source: '/bereal',
        destination: '/bereals.html',
        permanent: true,
      },
      {
        source: '/grups/2425',
        destination: '/equips_24_25.html',
        permanent: true,
      },
    ];
  },
};
