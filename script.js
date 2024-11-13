// Get elements from the DOM
const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const qrCodeContainer = document.getElementById('qr-code');

// Function to generate the QR code
function generateQRCode() {
    const text = textInput.value.trim();

    if (text === '') {
        alert('Please enter some text or URL');
        return;
    }

    // Clear any existing QR code before generating a new one
    qrCodeContainer.innerHTML = '';

    // Use the QRCode.js library to generate the QR code
    QRCode.toCanvas(qrCodeContainer, text, function (error) {
        if (error) {
            console.error(error);
        } else {
            console.log('QR Code generated!');
        }
    });
}

// Add event listener to generate button
generateBtn.addEventListener('click', generateQRCode);
