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

const videos = document.querySelectorAll("video");


videos.forEach(vid => {
    vid.addEventListener("click", () =>{
        document.querySelector('.popup-video').style.display = "block";
        document.querySelector(".popup-video video").src = vid.getAttribute("src")
        vid.classList.toggle("active");

    if (vid.paused){
        vid.play();
    }
    else{
        vid.pause();
        vid.currentTime = 0;
        }
    });
});

document.querySelector('.popup-video span').addEventListener("click", () =>{
    document.querySelector('.popup-video').style.display = "none";
});



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












async function fetchData() {
    try {
        const response = await fetch('http://localhost:8080/tutorials');
        const data = await response.json();
        const ans = data.tutorials
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to populate video tutorials
async function populateVideos() {
    const data = await fetchData();
    const tutorialsDiv = document.querySelector('.tutorials');

    data.videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video');
        const videoElement = document.createElement('video');
        videoElement.src = video.src;
        videoDiv.appendChild(videoElement);
        tutorialsDiv.appendChild(videoDiv);
    });
}

// Function to populate articles
async function populateArticles() {
    const data = await fetchData();
    const articlesSection = document.getElementById('articlesSection');

    data.articles.forEach(article => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.src = article.imageSrc;
        cardDiv.appendChild(img);

        const h4 = document.createElement('h4');
        h4.textContent = article.title;
        cardDiv.appendChild(h4);

        const p1 = document.createElement('p');
        p1.textContent = article.paragraph1;
        cardDiv.appendChild(p1);

        const p2 = document.createElement('p');
        p2.textContent = article.paragraph2;
        cardDiv.appendChild(p2);

        const readMoreLink = document.createElement('a');
        readMoreLink.href = article.link;
        readMoreLink.textContent = 'Read more';
        cardDiv.appendChild(readMoreLink);

        articlesSection.appendChild(cardDiv);
    });
}

// Populate videos and articles when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    await populateVideos();
    await populateArticles();
});