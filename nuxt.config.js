
const webpack =require("webpack")
module.exports={
    router: {
        base: "/mypath"
    },
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "~assets/css/style.css"
    ],
    build: {
        vendor:["bootstrap"],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ],
    },
    serverMiddleware: [
        // API middleware
        '~/api/index.js'
      ]
}