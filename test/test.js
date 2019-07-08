import path from "path"

import browserslist from "browserslist"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: browserslistConfig} = indexModule

it("Should return a proper version list for given browserslist query", () => {
  const result = browserslist(browserslistConfig)
  expect(Array.isArray(result)).toBeTruthy()
  expect(result.find(version => version.startsWith("chrome"))).toBeTruthy()
  expect(result.find(version => version.startsWith("and_chr"))).toBeTruthy()
  expect(result.find(version => version.startsWith("firefox"))).toBeTruthy()
  expect(result.find(version => version.startsWith("edge"))).toBeTruthy()
})