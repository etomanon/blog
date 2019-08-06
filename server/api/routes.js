module.exports = function(app) {
    const controller = require('./controller');

    app.route('/blog')
        .get(controller.getAll)
        .post(controller.create);

    app.route("/blog/:id")
        .delete(controller.delete);

};