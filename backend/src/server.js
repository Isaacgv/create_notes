require('express-async-errors')
const migrationsRun = require('./database/sqlite/migrations');
const AppError = require('./utils/AppError');
const uploadConfig = require("./configs/upload");

const express = require('express');

const routes = require('./routes');

migrationsRun();

const app = express();
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

const PORT = 3000;

//Route params -> /message/1/Jhon
app.get('/message/:id/:user', (request, response) => {
    const {id, user} = request.params;
    response.send(`
        Id message: ${id}.
        User ${user}.
    `);
    }
);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});