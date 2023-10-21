module.exports = {
  ...require('@questbound/prettier-config-react'),
  importOrder: ["react", "^@questbound/(.*)$", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
}