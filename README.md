# MetaMask Birthday Login App

A colorful, futuristic Web3 application that lets users log in with MetaMask, verifies their signature, and celebrates with a "Happy Birthday" message in multiple languages. After login, a profile picture appears with a clickable dropdown showing the wallet address and a logout option.

## Features
- **MetaMask Login**: Authenticate using MetaMask with signature verification via `ethers.js`.
- **Colorful UI**: A vibrant login page with a multi-color gradient and pulsing background.
- **Birthday Celebration**: Displays "Happy Birthday to You!!!!!" with Web3-themed, unisex wishes in English, Spanish, and French, plus floating balloons.
- **Profile Section**: Post-login, a glowing profile pic in the top-right shows your wallet address and a logout button when clicked.
- **Logout**: Returns to the login page, clearing the session.

## Demo
1. Visit the login page, click "Login with MetaMask".
2. Sign the message in MetaMask.
3. Enjoy the birthday page with your profile in the top-right corner!

## Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MetaMask](https://metamask.io/) browser extension
- A GitHub account

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/metamask-birthday.git
   cd metamask-birthday

metamask-birthday/
├── public/
│   ├── index.html        # Login page
│   ├── success.html      # Success page with birthday wishes and profile
│   ├── style.css         # Styles for both pages
│   └── script.js         # Client-side logic (login, balloons, profile)
├── server.js             # Node.js server with signature verification
├── package.json          # Dependencies and scripts
└── README.md             # This file

Technologies Used:
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Web3: MetaMask, ethers.js for signature verification
Styling: Custom CSS with gradients and animations


Usage:
On the login page, click "Login with MetaMask".
Approve the connection and sign the message in MetaMask.
See the success page with birthday wishes and a profile pic.
Click the profile pic to view your wallet address and logout option.
Click "Logout" to return to the login page.


Contributing:
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make changes and commit (git commit -m "Add feature").
Push to your fork (git push origin feature-branch).
Open a Pull Request.


License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Built with ❤️ by barnazaka
Icons from Icons8
Inspired by Web3 and birthday vibes!


Contact
For questions, reach out via  barnazaka@gmail.com or open an issue on GitHub.
