var cron = require('node-cron');
const sendBasicEmail = require('../services/email-services');

const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        const response = await sendBasicEmail.fetchPendingEmails();
        console.log(response);
    });
}
module.exports = setupJobs;