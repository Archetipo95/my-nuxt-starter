module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [1, "always", ["sentence-case", "start-case", "lower-case"]],
  },
}
