async function loginWithMetaMask() {
    if (typeof window.ethereum === 'undefined') {
        alert('Please install MetaMask!');
        return;
    }

    const loginBtn = document.getElementById('loginBtn');
    loginBtn.disabled = true;
    loginBtn.textContent = 'Connecting...';

    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];

        const message = 'Login to Birthday App at ' + new Date().toISOString();
        const signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [message, address]
        });

        const response = await fetch('/api/auth/metamask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address, signature, message })
        });

        const result = await response.json();
        if (result.success) {
            console.log('Login successful!');
            localStorage.setItem('walletAddress', address);
            loginBtn.textContent = 'Success! Redirecting...';
            setTimeout(() => {
                window.location.href = result.redirect;
            }, 1000);
        } else {
            throw new Error(result.error || 'Authentication failed');
        }
    } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed: ' + error.message);
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login with MetaMask';
    }
}

function createBalloons() {
    const balloonContainer = document.getElementById('balloons');
    const colors = ['#ff6f61', '#de4d4d', '#00ffcc', '#007bff'];

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.style.width = '50px';
        balloon.style.height = '70px';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
        balloon.style.position = 'absolute';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animation = `float ${5 + Math.random() * 5}s linear infinite`;
        balloon.style.opacity = '0.8';
        balloonContainer.appendChild(balloon);
    }
}

function setupProfile() {
    const walletAddress = localStorage.getItem('walletAddress');
    const profilePic = document.getElementById('profilePic');
    const dropdown = document.querySelector('.profile-dropdown');
    const logoutBtn = document.getElementById('logoutBtn');

    if (walletAddress) {
        document.getElementById('walletAddress').textContent = walletAddress;

        // Toggle dropdown on click
        profilePic.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });

        // Logout functionality
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('walletAddress');
            window.location.href = '/index.html';
        });
    } else {
        window.location.href = '/index.html';
    }
}