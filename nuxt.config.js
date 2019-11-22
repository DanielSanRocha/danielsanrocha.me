const pkg = require('./package')

module.exports = {
    mode: 'universal',

    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
            }
        ]
    },
    globalName: 'global',

    loading: { color: '#fff' },
    css: [],
    script: [
    ],
    plugins: [],
    modules: [],
    build: {
        postcss: {
            plugins: {
                'postcss-custom-properties': false,
            },
        },
        extend(config, ctx) { }
    }
}
