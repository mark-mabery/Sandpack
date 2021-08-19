/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const { build } = require("esbuild");

const options = {
  entryPoints: fs
    .readdirSync("./src")
    .filter((src) => src.endsWith(".ts"))
    .map((e) => `src/${e}`),

  minify: true,
  bundle: true,
  sourcemap: true,
};

build({
  ...options,
  format: "esm",
  outdir: "dist/esm",
  target: "es2019",
}).catch(() => process.exit(1));

build({
  ...options,
  format: "cjs",
  outdir: "dist/cjs",
  target: "es6",
}).catch(() => process.exit(1));
