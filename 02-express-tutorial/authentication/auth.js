// auth.js

function auth(req, res, next) {
    if (req.cookies.name) {
        req.user = req.cookies.name;
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

module.exports = auth;
