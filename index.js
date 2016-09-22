const schema = require('./lib/schema');
const lib = require('zdc-client').bearer;

module.exports = function (options = {
  endpoint: {
    protocol: 'https',
    hostname: 'api.zdc.com'
  }
}) {
  const apiDef = schema.api;
  const namespaces = Object.keys(apiDef);
  const defs = namespaces.map(n=> {
    return {name: n, schema: apiDef[n]}
  });
  const {endpoint} = options;
  const api = {};
  defs.forEach(function ({name:namespace, schema}) {
    api[namespace] = lib({
      namespace,
      schema,
      endpoint
    });
  });
  return Object.create(api, {
    version: {value: schema.version}
  });
};