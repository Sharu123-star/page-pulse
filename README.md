# Page Pulse - Website SEO & Performance Analyzer

## Overview
Page Pulse is a web application that analyzes a website and generates an SEO and performance report.

## Features
- Analyze any valid website URL
- HTTP status check
- Response time
- Page title
- Meta description
- H1 count
- Images missing alt text
- Approximate word count
- Error handling for invalid URLs, timeouts, and non-HTML pages

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js

## Project Structure
```
page-pulse/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Sharu123-star/page-pulse.git
```

2. Navigate to the backend folder:
```bash
cd backend
```

3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
node server.js
```

5. Open the frontend in your browser.

## API

**Endpoint**

```
POST /analyze
```

**Request Body**

```json
{
  "url": "https://example.com"
}
```

**Response**

Returns:
- HTTP Status
- Response Time
- Page Title
- Meta Description
- H1 Count
- Images Missing Alt Text
- Approximate Word Count

## Design Decisions
1. Used Express.js for a lightweight backend API.
2. Added error handling for invalid URLs and failed requests.
3. Separated frontend and backend for better project organization.

## AI Usage
I used AI to understand concepts, debug issues, and improve the project structure. I reviewed and modified the generated suggestions before using them.

## Author
Sharanya Naik
