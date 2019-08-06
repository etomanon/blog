module.exports = function(app) {
    const controller = require('./controller');

    app.route('/api/post')
        .get(controller.getAll)
        .post(controller.create);

    app.route("/api/post/:id")
        .delete(controller.delete);

};