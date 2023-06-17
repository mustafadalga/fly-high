const express = require('express');
const cors = require('cors');

const app = express();

// Allow CORS
app.use(cors());

const mockData = require('./flight-offers.json');

app.get('/api/price-offers', (req, res) => {
    res.json(mockData);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
