// // Sync object
// /** @type {import('@jest/types').Config.InitialOptions} */
// import '@testing-library/jest-dom/extend-expect';
// const config = {
//   verbose: true,
// };

// module.exports = config;

// // // Or async function
// // module.exports = async () => {
// //   return {
// //     verbose: true,
// //   };
// // };

/**
 * Adds custom jest matchers for DOM nodes
 * @see https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom/extend-expect';
