async function analyzeWebsite() {

    const url = document.getElementById("url").value;
    const result = document.getElementById("result");

    result.innerHTML = `
<p style="color:#007BFF;font-weight:bold;">
⏳ Analyzing website...
</p>
`;

    try {

       const response = await fetch("https://page-pulse-kappa.vercel.app/audit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        if (data.error) {
            result.innerHTML = `<p style="color:red;">${data.error}</p>`;
            return;
        }

       result.innerHTML = `
<h3>📊 Analysis Result</h3>

<div class="card">
    <p><strong>HTTP Status:</strong> ${data.status}</p>
    <p><strong>Response Time:</strong> ${data.responseTime}</p>
    <p><strong>Page Title:</strong> ${data.title}</p>
    <p><strong>Meta Description:</strong> ${data.metaDescription}</p>
    <p><strong>H1 Count:</strong> ${data.h1Count}</p>
    <p><strong>Images Missing Alt:</strong> ${data.missingAltImages}</p>
    <p><strong>Word Count:</strong> ${data.wordCount}</p>
</div>
`;

    } catch (error) {
        result.innerHTML = `<p style="color:red;">Something went wrong.</p>`;
    }

}
