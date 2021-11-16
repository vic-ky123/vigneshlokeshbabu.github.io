// Contact Form Section

// Form Validation Section

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("contactform");
const errormessage = document.getElementById("errormsg");

// form.addEventListener("submit", (e) => {
//     let errmsg = [];
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     var validmail = email.value.match(mailformat);

//     if(fullname.value === '' || fullname.value === null) {
//         errmsg.push("Please enter your NAME...:(");
//     }

//     if(email.value === '' || email.value === null) {
//         errmsg.push("Please enter your EMAIL ID...:(");
//     } else {
//         if(!validmail) {
//             errmsg.push("Please enter a VALID EMAIL ID...:(");
//         }
//     }

//     if(message.value === '' || message.value === null) {
//         errmsg.push("Please enter your MESSAGE...:(");
//     }

//     if(errmsg.length > 0) {
//         e.preventDefault();
//         errormessage.innerHTML = errmsg.join(", ");
//     } else {
//         // return true;
//     }
// })

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    sendMessage();
})

function checkInputs() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validmail = email.value.match(mailformat);

    // for trimming the whitespaces
    const fullNameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (fullNameValue === '' || fullNameValue === null) {
        setErrorFor(fullname, 'Name Can\'t be empty.')
        form.reset() = false;
    }

    if (emailValue === '' || emailValue === null) {
        setErrorFor(email, 'Email can\'t be empty.');
        form.reset() = false;
    } else {
        if (!validmail) {
            setErrorFor(email,'Please enter a valid Email ID.');
            form.reset() = false;
        }
    }

    if (messageValue === '' || messageValue === null) {
        setErrorFor(message, 'Please enter a Message.')
        form.reset() = false;
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-element error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-element success';
}

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
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var body = 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message;

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
