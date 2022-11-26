const fs = require("fs");
const path = require("path");

const database = require("../database/database.json");
const dirName = path.join(__dirname, "../database", "database.json");

const getPosts = (req, res, next) => {
    res.status(200).send(database);
};

const findPost = (req, res, next) => {
    const { id } = req.params;
    let post = database.courses.coursesList.filter(
        (item) => item.idCourse === Number(id)
    );

    res.status(200).send(post);
};

const addPosts = (req, res, next) => {
    const { title, description, url, classes } = req.body;

    let data = { ...database };
    let idCourse = data.courses.coursesList.length - 1;

    data.courses.totalCourses += 1;
    data.courses.coursesList = [
        ...data.courses.coursesList,
        {
            idCourse: data.courses.coursesList[idCourse].idCourse + 1,
            title,
            description,
            url,
            classes,
        },
    ];

    writeJSON(data);
    res.send({ sucess: "Post added." });
};

const updatePosts = (req, res, next) => {
    const { id } = req.params;
    const { title, description, url, classes } = req.body;

    let data = { ...database };

    let newPostIndex = data.courses.coursesList.findIndex(
        (item) => item.idCourse === Number(id)
    );

    data.courses.coursesList[newPostIndex] = {
        idCourse: Number(id),
        title,
        description,
        url,
        classes,
    };

    writeJSON(data);
    res.send({ sucess: "Post Updated." });
};

const delPosts = (req, res, next) => {
    const { id } = req.params;
    let data = { ...database };

    let newPostIndex = data.courses.coursesList.filter(
        (item) => item.idCourse !== Number(id)
    );

    data.courses.coursesList = newPostIndex;
    data.courses.totalCourses -= 1;

    writeJSON(data);
    res.send({ sucess: "Post Deleted." });
};

function writeJSON(data) {
    fs.writeFile(dirName, JSON.stringify(data), (err) => {
        err && console.log(err);
    });
}

module.exports = { getPosts, findPost, addPosts, updatePosts, delPosts };
