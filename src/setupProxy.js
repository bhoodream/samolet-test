const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/opendata/",
        proxy.createProxyMiddleware({
            target: "https://data.gov.ru/sites/default/files",
            changeOrigin: true,
            secure: false,
        })
    );
};
