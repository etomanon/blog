module.exports = function(app) {
    const controller = require('./controller');

    app.route('/api/post')
        .get(controller.getAll)
        .post(controller.create);

    app.route("/api/post/:id")
        .get(controller.get)
        .delete(controller.delete);

    app.route("/api/categories")
        .get(controller.getCategories);

};