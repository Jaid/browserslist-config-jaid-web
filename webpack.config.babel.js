import configure from "webpack-config-jaid"

export default configure({
  publishimo: {fetchGithub: true},
  output: {
    libraryTarget: "commonjs2",
    libraryExport: "commonjs2",
    umdNamedDefine: false,
    library: null,
  },
})