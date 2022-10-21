/**
 * Auth helper function to set query, header params required by service providers
 */
module.exports = function (input) {
  // to set query string key for authorization
  return new Promise((resolve, reject) => {
    return resolve({
      query: {},
      headers: {}
    });
  })
}