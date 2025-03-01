const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// ✅ Middleware to serve static files & parse JSON
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

// ✅ Serve main HTML page
app.get("/main.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.html"));
});

// ✅ Handle form submission
app.post("/submit", (req, res) => {
    const { projName, projDesc } = req.body;
    console.log(`📩 Received: ${projName} - ${projDesc}`);

    res.json({ message: "Project Created Successfully", projName, projDesc });
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
