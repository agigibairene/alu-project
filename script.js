// NAVBAR
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
});


// PRELOADER
const loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    loader.style.display = "none";
});


// SCROLL UP
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("scrollUp").style.opacity = "1";
        document.getElementById("scrollUp").style.visibility = "visible";
    }
    else{
        document.getElementById("scrollUp").style.opacity = "0";
        document.getElementById("scrollUp").style.visibility = "hidden";
    }
})


const scrollup = document.getElementById("scrollUp")
scrollup.addEventListener("click", () =>{
    window.scrollTo(0,0);
})


const learnMore = document.getElementById("learn-more");
learnMore.addEventListener("click", () =>{
    const aboutUs = document.getElementById("about");
    aboutUs.scrollIntoView()
});

const home = document.getElementById("homepage");
home.addEventListener("click", () =>{
    const homePage = document.getElementById("head");
    homePage.scrollIntoView();
});


const AboutUs = document.getElementById("about-us")
AboutUs.addEventListener("click", () =>{
    const aboutUs = document.getElementById("about");
    aboutUs.scrollIntoView();
});

const Articles = document.getElementById("articles");
Articles.addEventListener("click", () =>{
    const row = document.getElementById("row");
    row.scrollIntoView();
})

// ANIMATIONS - SCROLL Reveal
const viewPort = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-viewPort", entry.isIntersecting);
    });
};

const observation = new IntersectionObserver(viewPort); // Error 1: Corrected here
const obsOptions = {};

const elseViewport = document.querySelectorAll("[data-viewPort]");
elseViewport.forEach(els => {
    observation.observe(els, obsOptions); // Error 2: Pass options here
});





// TUTORIALS SECTION

let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video video");
let title =document.querySelector(".main-video .title");

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid =>{
            vid.classList.remove("active");
            video.classList.add("active");
            if (video.classList.contains("active")){
                let src = video.children[0].getAttribute("src");
                mainVideo.src = src;
                let text = video.children[1].innerHTML;
                title.innerHTML = text
            }
        })
    };
})


// NEWSLETTER

const btn = document.getElementById("btn-subscribe");
btn.addEventListener("click", () =>{
    if (document.getElementById("email").validity.valid){
        alert("You have successfully subscribed to our newsletter")
    }
    else {
        return;
    }
});






