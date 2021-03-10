module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3442c726d47d9562c4be76af4ce9a254'),
    },
  },
  cron: {
    enabled: true
  }
});
