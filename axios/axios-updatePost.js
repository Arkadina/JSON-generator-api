const axios = require("axios");

const id = 3;

axios
    .put(`http://localhost:3000/${id}`, {
        title: "2",
        description: "2",
        url: "2",
        classes: [],
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
