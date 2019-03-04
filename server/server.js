let path = require('path');
let log4js = require('log4js');
let logger = log4js.getLogger();
let express = require('express');
let app = express();
const config = require('../config/config.js');

let tmpRouter = require("./routes/tmp");

// Configure log4j
log4js.configure({
    appenders: {
        dateFile: {
            type: 'dateFile',
            filename: config.LOGGER_PATH + "/logger",
            pattern: "-yyyy-MM-dd.log",
            alwaysIncludePattern: true
        },
        out: { type: 'stdout' }
    },
    categories: {
        default: { appenders: ['dateFile', 'out'], level: 'debug' }
    }
});

// Dev
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Configure static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../build')));

// Configure controller router
app.use('/tmp', tmpRouter);

// Send resource
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../build', 'index.html'));
});

// App start
const port = process.env.PORT || 8083;
app.listen(port, () => {
    logger.info(`app listening on port: ${port}`);
});