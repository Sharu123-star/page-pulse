const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Page Pulse Backend is Running!");
});

// Audit Route
app.post("/audit", async (req, res) => {

    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            error: "URL is required."
        });
    }

    try {

        const start = Date.now();

        const response = await axios.get(url, {
    timeout: 5000,
    maxRedirects: 5,
    headers: {
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept":
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9"
    }
});

        // Check if the response is HTML
        const contentType = response.headers["content-type"] || "";

        if (!contentType.includes("text/html")) {
            return res.status(400).json({
                error: "The URL does not point to an HTML page."
            });
        }

        const responseTime = Date.now() - start;

        const $ = cheerio.load(response.data);

        const title = $("title").text() || "No title";

        const metaDescription =
            $('meta[name="description"]').attr("content") || "No description";

        const h1Count = $("h1").length;

        let missingAltImages = 0;

        $("img").each((index, img) => {
            if (!$(img).attr("alt")) {
                missingAltImages++;
            }
        });

        const bodyText = $("body").text();

        const wordCount = bodyText
            .trim()
            .split(/\s+/)
            .filter(word => word.length > 0).length;

        res.json({
            status: response.status,
            responseTime: responseTime + " ms",
            title,
            metaDescription,
            h1Count,
            missingAltImages,
            wordCount
        });

    } catch (error) {

        if (error.code === "ECONNABORTED") {
            return res.status(408).json({
                error: "Request timed out."
            });
        }

        if (error.response) {
            return res.status(error.response.status).json({
                error: "Website returned an error."
            });
        }

        if (error.request) {
            return res.status(500).json({
                error: "Unable to reach the website."
            });
        }

        return res.status(500).json({
            error: "Invalid URL or website unavailable."
        });
    }

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});