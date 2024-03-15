const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://trefle.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v1'
      }
    })
  );
};