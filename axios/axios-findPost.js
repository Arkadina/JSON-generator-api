const axios = require("axios");

const id = 3;

axios.get(`http://localhost:3000/${id}`).then((res) => {
    console.log(res.data);
});
