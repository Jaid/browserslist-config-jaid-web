import configure from "webpack-config-jaid"

export default configure({
  publishimo: {fetchGithub: true},
  terserOptions: false,
  output: {
    libraryTarget: "commonjs",
    libraryExport: "commonjs",
    umdNamedDefine: false,
    library: null,
  },
})