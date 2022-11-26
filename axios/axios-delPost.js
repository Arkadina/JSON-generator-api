const axios = require("axios");

const id = 3;

axios.delete(`http://localhost:3000/${id}`).then((res) => {
    console.log(res.data);
});
