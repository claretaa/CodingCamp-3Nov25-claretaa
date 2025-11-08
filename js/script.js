function welcomeUser() {
    let userName = prompt("What is your name?", ""); 

    if (userName != null && userName != "") {
        document.getElementById("hero-title").innerHTML = 
            '<span class="greeting">Hi <span id="user-name">' + userName + '</span>,</span>' +
            '<span class="welcome-message">Welcome to Bloom & Bold</span>';
    } 
}

window.onload = welcomeUser;

function validateForm() {
    const nama = document.forms["message-form"]["nama"].value;
    const tglLahir = document.forms["message-form"]["tgl_lahir"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const pesan = document.forms["message-form"]["pesan"].value;

    if (nama == "" || tglLahir == "" || gender == "" || pesan == "") {
        alert("Please fill out every section of the form.");
        return false; 
    }

    const hurufRegex = /^[a-zA-Z\s]+$/;

    if (!hurufRegex.test(nama)) {
        alert("Name must contain only letters and spaces.");
        document.forms["message-form"]["nama"].focus();
        return false;
    }

    const now = new Date();
    const timeString = now.toString(); 
    document.getElementById("current-time").innerText = timeString;

    document.getElementById("result-nama").innerText = nama;
    document.getElementById("result-tgl").innerText = tglLahir;
    document.getElementById("result-gender").innerText = gender;
    document.getElementById("result-pesan").innerText = pesan;

    return false; 
}