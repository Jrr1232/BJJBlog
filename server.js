const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, "dist")));

// Handle all routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Listen on Heroku port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
