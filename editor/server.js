const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files (e.g., CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the template1.ftl file
app.get('/', (req, res) => {
    const templatePath = path.join(__dirname, '../model/templates/template1.ftl');
    fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading template file');
            return;
        }

        // Replace placeholders with sample data
        const rendered = data
            .replace('${name}', 'John Doe')
            .replace('${address}', '123 Main St, Anytown, USA')
            .replace('${accountNumber}', '123456789');

        res.send(rendered);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});