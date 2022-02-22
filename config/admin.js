module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '68585d2ffebae46b6fa115e0f3d043f5'),
  },
});
