import kyDefault from 'ky';

const ky = kyDefault.extend({
  prefixUrl: "/api/",
  json: true,
})

export default ky;