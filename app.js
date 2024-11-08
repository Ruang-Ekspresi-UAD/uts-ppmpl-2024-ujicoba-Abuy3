import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

// Serve static files like CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// API route untuk melayani HTML file
app.get('/home', (req, res) => {
    fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the HTML file:', err); // Menampilkan error jika ada
            return res.status(500).send('Error reading the HTML file');
        }
        res.send(data); // Kirim HTML ke klien
    });
});

// Rute default
app.get('/', (req, res) => {
    res.redirect('/home'); // Arahkan ke /home jika rute utama diakses
});

// Menjalankan server pada port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
