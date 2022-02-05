function submitData() {
    // DOM mengambil nilai input
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    // Validation Form
    if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
        return alert(`Hai ${name} semua form wajib diisi ya`)
    }
    // Email Process
    // DOM membuat element anchor untuk mengirim email dengan mengambil dari nilai input
    let emailReceiver = 'muhnilham99@gmail.com'
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo my name ${name}, ${subject}, ${message}, this is my phone ${phone}`
    a.click()

    // let data object
    let dataObject = {
        dataName: name,
        dataEmail: email,
        dataPhone: phone,
        dataSubject: subject,
        dataMessage: message
    }
    // console dalam bentuk table
    console.table(dataObject);
}