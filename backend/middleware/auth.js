const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
    try {
        // 🔹 Get token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const token = authHeader.split(" ")[1]; // Bearer <token>

        // 🔹 Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded user info to request
        req.user = decoded;

        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

module.exports = isAuth;
