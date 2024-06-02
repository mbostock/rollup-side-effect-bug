import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: ["test.js"],
    output: {file: "./bundle.js", format: "esm"},
    plugins: [resolve()]
  }
];
