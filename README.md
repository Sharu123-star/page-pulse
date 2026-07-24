# 🚀 Page Pulse

Page Pulse is a simple SEO and website performance analyzer built using **Node.js**, **Express.js**, **HTML**, **CSS**, and **JavaScript**.

It accepts a website URL, fetches the webpage, and returns useful SEO information such as:

- HTTP Status
- Response Time
- Page Title
- Meta Description
- H1 Count
- Images Missing Alt Text
- Approximate Word Count

This project was built for the **Digital Heroes Training Task**.

---

# Live Demo

Frontend:
https://19ro-6tjix35ap-sharanyanaik2026.vercel.app

Backend API:
https://page-pulse-kappa.vercel.app

GitHub Repository:
https://github.com/Sharu123-star/page-pulse

---

# Features

- Analyze any valid website URL
- Fetch page title
- Detect meta description
- Count H1 tags
- Count images without alt attributes
- Calculate approximate word count
- Measure response time
- Handle invalid URLs
- Handle timeout errors
- Handle non-HTML responses
- Responsive frontend interface
- Automated API tests using Jest

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js
- Axios
- Cheerio
- CORS

## Testing

- Jest
- Supertest

---

# Project Structure

```
page-pulse/

│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── tests/
│   └── server.test.js
│
├── README.md
└── .gitignore
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/Sharu123-star/page-pulse.git
```

Go inside the project

```bash
cd page-pulse
```

Install backend dependencies

```bash
cd backend
npm install
```

Start the server

```bash
npm start
```

Server runs on

```
http://localhost:5000
```

---

# API Contract

## POST /audit

### Request

```json
{
  "url": "https://example.com"
}
```

### Success Response

```json
{
  "status": 200,
  "responseTime": "42 ms",
  "title": "Example Domain",
  "metaDescription": "No description",
  "h1Count": 1,
  "missingAltImages": 0,
  "wordCount": 17
}
```

### Error Response

```json
{
  "error": "URL is required."
}
```

Possible errors include:

- URL is required
- Invalid URL
- Website unavailable
- Request timed out
- Non-HTML response

---

# Running Tests

Install dependencies

```bash
npm install
```

Run tests

```bash
npm test
```

The test suite checks:

- Happy Path
- Missing URL
- Invalid URL

---

# Design Decisions

## 1. Axios for HTTP Requests

Axios was used because it provides simple timeout handling, response status codes, redirects, and cleaner error handling than the built-in fetch API.

---

## 2. Cheerio for HTML Parsing

Cheerio provides jQuery-like syntax, making it easy to extract HTML elements such as titles, headings, meta tags, and images.

---

## 3. Centralized Error Handling

The backend returns meaningful JSON error messages for invalid URLs, timeouts, non-HTML responses, and unreachable websites instead of crashing. This makes the API easier to use and more reliable.

---

# Future Improvements

If I had another day, I would:

- Add Lighthouse performance scoring
- Add keyword density analysis
- Detect broken links
- Check Open Graph and Twitter meta tags
- Generate downloadable PDF reports
- Improve UI with charts and graphs

---

# AI Usage

I used ChatGPT to understand Jest testing, improve error handling, and refine the project documentation. I reviewed the generated suggestions, modified the implementation where necessary, and verified that the final code worked correctly before submission.

---

Built for **Digital Heroes Training Task**

https://digitalheroesco.com
