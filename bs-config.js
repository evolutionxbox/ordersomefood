module.exports = {
    server: {
        baseDir: "public",
        directory: true,
        index: "index.html"
    },
    files: ".",
    https: {
        key: "./.ssl/key.pem",
        cert: "./.ssl/cert.pem"
    }
};