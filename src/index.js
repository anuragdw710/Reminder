const express = require('express');
const bodyParser = require('body-parser');
var cron = require('node-cron');

const app = express();


const { PORT } = require('./config/serverConfig');

const jobs = require('./utils/job');

const setupAndStartServ = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))


    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'hazariprasad1908@gmail.com',
        //     'hazariprasad1907@gmail.com',
        //     'This is atesting email',
        //     'Hey,'
        // );
    });
}

setupAndStartServ();