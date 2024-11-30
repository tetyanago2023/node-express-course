// logger.js

const logger = (req, res, next) => {
    const currentTime = new Date().toISOString();
    const fullUrl = req.originalUrl;
    console.log(`outerLogger function. Time: [${currentTime}] method: ${req.method} request to "${fullUrl}" route`);
    next()
}

module.exports = logger;
