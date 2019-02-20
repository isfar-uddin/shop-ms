let startServer = async () => {
    try {
        //Connect database
        let connectDatabase = require('./server/config/db.connect');

        //Initialize express application
        let app = require('./server/config/express.config').init();

        const port = process.env.PORT || 5000;

        app.listen(port, () => console.log(`Server running on port ${port}`));

    }catch (error) {
        console.info('server error====', error);
    }
};

startServer();
