function payWithPaystack(amount) {
    const email = document.getElementById('emailInput').value.trim();

    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }

    var handler = PaystackPop.setup({
        key: 'YOUR_PUBLIC_KEY',  // Replace with your Paystack public key
        email: email,
        amount: amount * 100,     // Amount in kobo
        currency: 'NGN',
        callback: function(response) {
            alert('Payment Successful! Reference: ' + response.reference);
            localStorage.setItem('accessGranted', true);
            window.location.reload();
        },
        onClose: function() {
            alert('Payment was cancelled.');
        }
    });

    handler.openIframe();
}
