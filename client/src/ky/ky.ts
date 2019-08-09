import kyDefault from "ky";

const apiUrl = `http://localhost:8080`;

const ky = kyDefault.extend({
  prefixUrl: `${apiUrl}/api/`
});

export default ky;
