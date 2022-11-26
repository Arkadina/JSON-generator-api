const axios = require("axios");

axios
    .post("http://localhost:3000/", {
        title: "1",
        description: "1",
        url: "1",
        classes: [],
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
