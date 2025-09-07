import express from "express";
import path from "path";
import { fileURLToPath } from "url";  // <-- add this

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
