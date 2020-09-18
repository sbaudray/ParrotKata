module.exports = {
  spec: "test/**/*.spec.ts",
  require: ["ts-node/register", "source-map-support/register"],
  recursive: true,
  watch: true,
  "watch-files": ["src/*"],
};
