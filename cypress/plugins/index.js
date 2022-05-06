/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

// need to install the "del" module as a dependency
// npm i del --save-dev
// const del = require("del");
// module.exports = (on, config) => {
//   on("before:run", () => {
//     const deletedFilePaths = del([
//       "mkdir",
//     ]);
//     //const deletedDirectoryPaths = del(["temp", "public"]);
//     return this;
//   });
// };

// module.exports = (on, config) => {
//   on('before:spec', (spec) => {

//     return this;
//   });
// };
