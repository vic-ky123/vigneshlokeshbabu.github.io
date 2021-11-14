// const sendEmail = () => {
//     window.location.href = "mailto:vigneshlokeshbabu131@gmail.com";
// }

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("contactform");
const errormessage = document.getElementById("errormsg");

form.addEventListener("submit", (e) => {
    let errmsg = [];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validmail = email.value.match(mailformat);

    if(fullname.value === '' || fullname.value === null) {
        errmsg.push("Please enter your NAME...:(");
    }

    if(email.value === '' || email.value === null) {
        errmsg.push("Please enter your EMAIL ID...:(");
    } else {
        if(!validmail) {
            errmsg.push("Please enter a VALID EMAIL ID...:(");
        }
    }

    if(message.value === '' || message.value === null) {
        errmsg.push("Please enter your MESSAGE...:(");
    }

    if(errmsg.length > 0) {
        e.preventDefault();
        errormessage.innerHTML = errmsg.join(", ");
    }
})
