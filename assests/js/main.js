// |------------- Contact Form Section -------------|

// Form Validation Section

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("contactform");

form.addEventListener('submit', (e) => {
    console.log("event listener is working")
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
    const messageValue = message.value;

    if (fullNameValue === '' || fullNameValue === null) {
        setErrorFor(fullname, 'Name Can\'t be empty.')
        // form.preventDefault();
    }

    if (emailValue === '' || emailValue === null) {
        setErrorFor(email, 'Email can\'t be empty.');
        // form.preventDefault();
    } else {
        if (!validmail) {
            setErrorFor(email,'Please enter a valid Email ID.');
            // form.preventDefault();
        }
    }

    if (messageValue === '' || messageValue === null) {
        setErrorFor(message, 'Please enter a Message.')
        // form.preventDefault();
    }

    return true;
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
    window.setInterval('refresh()', 2000); 
}

function error() {
    const status = document.getElementById("status");
    form.reset();
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
}

// Refresh or reload page.

function refresh() {
    window.location.reload();
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

// |------------- Go-to-top Scroll Section -------------|

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

// |------------- Prevent Inspect Element Section -------------|

document.onkeydown = function(e) {
    if(event.keyCode === 123)
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) 
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
    {
        return false;
    }
    
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    {
        return false;
    }
}

// |------------- Project Model Section -------------|

const modal = document.querySelector('#modal');
const mimModalBtn = document.querySelector('#mim-modal-btn');
const mimStudPortalModalBtn = document.querySelector('#mim-stud-portal-modal-btn');
const goVeganModalBtn = document.querySelector('#go-vegan-modal-btn');

mimModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.getElementById("project-title").innerHTML = "MEASI Institute of Management";
    document.getElementById("description").innerHTML = "MEASI Institute of Management is a real-time website for our college, which was proposed by the management of our institute. Under the guidance of our faculty members and Branding Guidelines provided by the management, we students (a team of 5 members) partitioned the website into modules and implemented the project using HTML, CSS, JavaScript along with Bootstrap Template. <br><br> <span style=\"margin-left: 25px;\"></span>In this project, I was chosen as the team leader for the project team. The result for my part of work is the Homepage, Admission Module and PRIME module. And I brought in the responsiveness wherever required and helped my fellow team-mates to complete the tasks.";
    document.getElementById("tech-used").innerHTML = "HTML, CSS, JavaScript, BootStrap & few templates.";
    document.getElementById("no-of-personnel").innerHTML = "5 + 2 (Faculties)";
    document.getElementById("duration").innerHTML = "2 months (approx.)";
    document.getElementById("project-status").innerHTML = "Completed";
    document.getElementById("link").innerHTML = "https://drive.google.com/drive/folders/1-7j2oS0TdXVYvV5dJ3zdUI9_0ljGluNb?usp=sharing";
    document.getElementById("link").href = "https://drive.google.com/drive/folders/1-7j2oS0TdXVYvV5dJ3zdUI9_0ljGluNb?usp=sharing";
    document.getElementById("link").target = "_blank";
    document.getElementById("link-desc").innerHTML = "(Website is not active. Open the above link for sample images.)"
})

mimStudPortalModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.getElementById("project-title").innerHTML = "MIM Student Portal"
    document.getElementById("description").innerHTML = "MEASI Institute of Management (MIM) Student Portal is a real-time Student Management Portal that is primarily an extension of the MIM website responsible for the digital handling process of the academic and co-curricular marks and scores of all the students. This is a role-based system which allows all the/specific privileges to a user as per the role of the respective user. <br><br> <span style=\"margin-left: 25px;\"></span> This project was proposed by the management, and a team of 7 students where chosen for which I was the team leader again and provided with the SRS and Branding Guidelines. The team was further splitted into Frontend and Backend teams. <br><br> <span style=\"margin-left: 25px;\"></span> In this project, I dealt with Frontend. I, along with other fellow team-mates used React.JS for the UI part of the web-app.";
    document.getElementById("tech-used").innerHTML = "MERN Stack";
    document.getElementById("no-of-personnel").innerHTML = "7 + 3 (Faculties)";
    document.getElementById("duration").innerHTML = "5 months (approx.)";
    document.getElementById("project-status").innerHTML = "Partially completed";
    document.getElementById("link").innerHTML = "https://drive.google.com/drive/folders/1HYkU_Cm_id4waT0_hizIy7ZUuEBwniYY?usp=sharing";
    document.getElementById("link").href = "https://drive.google.com/drive/folders/1HYkU_Cm_id4waT0_hizIy7ZUuEBwniYY?usp=sharing";
    document.getElementById("link").target = "_blank";
    document.getElementById("link-desc").innerHTML = "(Portal is not active. Open the above link for sample images.)"
})

goVeganModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.getElementById("project-title").innerHTML = "GoVegan"
    document.getElementById("description").innerHTML = "GoVegan is a blog website, which I developed out of my own interest using the ThemeForest Canvas HTML Template to bring the awareness on the benefits of turning vegan over non-veganism.";
    document.getElementById("tech-used").innerHTML = "HTML Template";
    document.getElementById("no-of-personnel").innerHTML = "1";
    document.getElementById("duration").innerHTML = "3 days";
    document.getElementById("link").innerHTML = "#";
    document.getElementById("link").href = "#";
    document.getElementById("link").target = "_blank";
    document.getElementById("project-status").innerHTML = "Completed";
})

function closeModal() { 
    modal.style.display = 'none';
}

// |------------- Feedback Section -------------|

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}
