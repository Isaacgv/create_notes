const { Router } = require('express');
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require('../controllers/UsersController');
const UserAvatarController = require('../controllers/UserAvatarController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRouter = Router();
const upload = multer(uploadConfig.MULTER)

function myMiddleware(request, response, next) {
    console.log('I am a middleware');

    if(!request.body.isAdmin) {
        return response.status(400).json({error: 'User are not admin'});
    }

    next();
}

const usersController = new UsersController();
const userAvatarController = new UserAvatarController()

//usersRouter.use(myMiddleware);

usersRouter.post('/', myMiddleware, usersController.create);
usersRouter.put('/', ensureAuthenticated, usersController.update);
usersRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

//Query params -> /users?id=1&user=Jhon
usersRouter.get('/users', (request, response) => {
    const {id, user} = request.query;
    response.send(`
        Id message: ${id}.
        User ${user}.
    `);

});

module.exports = usersRouter;