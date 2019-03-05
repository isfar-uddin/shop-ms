let startServer = async () => {
    try {
        //Connect database
        let dbConfig = require('./server/config/db.connect').dbConnect();

        //Initialize express application
        let app = require('./server/config/express.config').init();

        const port = process.env.PORT || 5000;

        app.db = dbConfig;

        app.listen(port, () => console.log(`Server running on port ${port}`));
        return app;

    }catch (error) {
        console.info('server error====', error);
    }
};

startServer();

module.exports = {
    startServer: startServer
};