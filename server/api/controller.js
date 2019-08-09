const low = require("lowdb");
// const uuidv1 = require("uuid/v1");

const db = low("api/db.json");

exports.getAll = function(req, res) {
  const posts = db
    .get("posts")
    .sortBy("createdDate")
    .reverse()
    .value();
  res.send(posts);
};

exports.create = function(req, res) {
  if (!req.body.title) {
    res.status(422).send("'title' field must be present in json");
  } else {
    const written = db
      .get("posts")
      .push({
        id: req.body.id,
        title: req.body.title,
        categories: req.body.categories,
        content: req.body.content,
        dateCreated: new Date().getTime()
      })
      .last()
      .write();
    res.send(written);
  }
};

exports.get = function(req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(422).send("'id' must be present in params");
  } else {
    const post = db.get("posts").value({ id: id });
    if (post.length === 0) {
      res.status(404).send("id not found, nothing to delete");
    } else {
      res.send();
    }
  }
};

exports.delete = function(req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(422).send("'id' must be present in params");
  } else {
    const deleted = db
      .get("posts")
      .remove({ id: id })
      .write();
    if (deleted.length === 0) {
      res.status(404).send("id not found, nothing to delete");
    } else {
      res.send();
    }
  }
};

exports.getCategories = function(req, res) {
  const posts = db
    .get("posts")
    .map("categories")
    .flatten()
    .union()
    .value();

  res.send(posts);
};
