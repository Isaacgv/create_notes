const { Router } = require('express');

const UsersController = require('../controllers/UsersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const usersRouter = Router();

function myMiddleware(request, response, next) {
    console.log('I am a middleware');

    if(!request.body.isAdmin) {
        return response.status(400).json({error: 'User are not admin'});
    }

    next();
}

const usersController = new UsersController();

//usersRouter.use(myMiddleware);

usersRouter.post('/', myMiddleware, usersController.create);
usersRouter.put('/', ensureAuthenticated, usersController.update);

//Query params -> /users?id=1&user=Jhon
usersRouter.get('/users', (request, response) => {
    const {id, user} = request.query;
    response.send(`
        Id message: ${id}.
        User ${user}.
    `);

});

module.exports = usersRouter;