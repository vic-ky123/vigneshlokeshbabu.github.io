// Contact Form Section

// Form Validation Section

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
    } else {
        // return true;
    }
})

// Success & Error Messages Section 

function success() {
    const status = document.getElementById("status");
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Your message got recorded. Thank you for connecting...:)";
}

function error() {
    const status = document.getElementById("status");
    form.reset();
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

// Sending Message from Form to Mail ID Section

function sendMessage() {
    console.log("This function is working");
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var body = 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message;
    console.log(name, email, message);

    Email.send({
        SecureToken: "02a53baa-a290-44cf-b2d2-809c706d3f13",
        To : "vigneshlokeshbabu131@gmail.com",
        From : `${email}`,
        Subject : `New Message from ${name} via NewGen CV.`,
        Body : body
    }).then (
      message => {
            if(message == 'OK') {
                success();
            } else {
                error();
            }
        }
    );
}

// Go-to-top Scroll Section

const scrollTopBtn = document.getElementById("scrolltop");
scrollTopBtn.style.display = "none";

window.onscroll = function () { scrollToTopFunction() };

function scrollToTopFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function goToTopFunc() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
