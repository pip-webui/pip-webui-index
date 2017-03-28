module.exports = {
    build: {
        js: false,
        ts: false,
        tsd: false,
        bundle: false,
        html: false,
        sass: false,
        lib: true,
        images: false,
        dist: false
    },
    file: {
        lib: [
            '../pip-webui-lib/dist/**/*'          
        ]
    },
    samples: {
        port: 8160
    },
    api: {
        port: 8161
    }
};
