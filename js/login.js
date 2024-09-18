document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;
    document.getElementById('phoneNumber').value = ''
    document.getElementById('pinNumber').value = ''
    console.log(phoneNumber, pinNumber);

    //this is temporary. we should not do like this
    if(phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = '/home.html'
    }
    else {
        alert('wrong phone number or pin')
    }
})