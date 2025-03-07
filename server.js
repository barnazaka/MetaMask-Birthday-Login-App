const express = require('express');
const { ethers } = require('ethers');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/api/auth/metamask', (req, res) => {
    const { address, signature, message } = req.body;

    // Validate input
    if (!address || !signature || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        // Verify the signature
        const recoveredAddress = ethers.verifyMessage(message, signature);
        if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
            res.json({ success: true, redirect: '/success.html' });
        } else {
            res.status(401).json({ success: false, error: 'Invalid signature' });
        }
    } catch (error) {
        console.error('Signature verification failed:', error);
        res.status(500).json({ success: false, error: 'Verification error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});