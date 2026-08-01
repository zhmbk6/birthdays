const images = document.querySelectorAll(".gallery-container img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const close = document.querySelector(".close");

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=image.src;

    });

});

close.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});
const startDate = new Date("2024-07-27T00:00:00");

function updateCounter(){

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter,1000);
const reasons = [

"❤️ Потому что рядом с тобой я счастлив.",

"🌸 Потому что твоя улыбка делает мой день лучше.",

"🤍 Потому что ты понимаешь меня.",

"🥹 Потому что ты заботишься обо мне.",

"💖 Потому что ты делаешь мою жизнь ярче.",

"🌹 Потому что с тобой хочется строить будущее.",

"✨ Потому что рядом с тобой я настоящий.",

"💍 Потому что я вижу тебя в своем будущем.",

"🌙 Потому что ты — мой любимый человек.",

"❤️ Потому что я просто люблю тебя."

];

let index = 0;

const reasonText = document.getElementById("reasonText");
const reasonCount = document.getElementById("reasonCount");

document.getElementById("nextReason").addEventListener("click", () => {

    reasonCount.style.display = "block";

    reasonText.style.opacity = 0;

    setTimeout(() => {

        reasonText.textContent = reasons[index];

        reasonCount.textContent = `Причина ${index + 1} из ${reasons.length}`;

        reasonText.style.opacity = 1;

        index++;
if(index >= reasons.length){

    document.getElementById("nextReason").style.display = "none";

    reasonCount.style.display = "none";

    setTimeout(()=>{

        reasonText.style.display = "none";

        const finalMessage = document.getElementById("finalMessage");

        finalMessage.style.display = "block";

        setTimeout(()=>{

            finalMessage.style.opacity = "1";

        },100);

    },700);

}

    }, 200);

});
const intro = document.getElementById("intro");

const hero = document.querySelector(".hero");

const startBtn = document.getElementById("startBtn");

const music = document.getElementById("bgMusic");

startBtn.addEventListener("click",()=>{

    music.play();

    intro.classList.add("glow");

    for(let i=0;i<25;i++){

        setTimeout(()=>{

            createHeart();

        },i*100);

    }

    setTimeout(()=>{

    intro.classList.add("hide");

    hero.classList.add("show");

},2200);

});
function createHeart(){

    const heart=document.createElement("div");

    heart.className="fly-heart";

    heart.innerHTML=Math.random()>0.5 ? "❤️" : "💖";

    heart.style.left=Math.random()*100+"%";

    document.querySelector(".intro-hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },3000);

}
const galleryImages = document.querySelectorAll(".gallery-container img");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

galleryImages.forEach(image=>{

    observer.observe(image);

});
const showGift = document.getElementById("showGift");

const giftModal = document.getElementById("giftModal");

const giftLoading = document.getElementById("giftLoading");

const giftContent = document.getElementById("giftContent");

showGift.addEventListener("click",()=>{

    giftModal.style.display="flex";

    giftLoading.style.display="block";

    giftContent.style.display="none";

    setTimeout(()=>{

        giftLoading.style.display="none";

        giftContent.style.display="block";

    },2500);

});
const loveBtn = document.getElementById("loveBtn");
const loveValue = document.getElementById("loveValue");
const loveMessage = document.getElementById("loveMessage");

loveBtn.addEventListener("click", () => {

    loveBtn.disabled = true;

    let percent = 0;

    const timer = setInterval(() => {

        percent++;

        loveValue.innerHTML = percent + "%";

        if(percent >= 100){

            clearInterval(timer);

            setTimeout(() => {

                loveValue.innerHTML = "∞ ❤️";

                loveMessage.innerHTML =
                "Потому что моя любовь к тебе бесконечна ❤️";

                loveMessage.style.opacity = "1";
                loveMessage.style.transform = "translateY(0)";

            },500);

        }

    },100);

});

const sendPromo = document.getElementById("sendPromo");

if (sendPromo) {

    sendPromo.addEventListener("click", () => {

        localStorage.setItem("showFinal", "yes");

    });

}


function startFinal() {

    const before = document.getElementById("beforeFinal");
    const finalStory = document.getElementById("finalStory");
    const giftModal = document.getElementById("giftModal");

    if (!before || !finalStory) {
        return;
    }

    if (giftModal) {
        giftModal.style.display = "none";
    }

    const texts = document.querySelectorAll(".before-text");
    const lines = document.querySelectorAll(".final-box p");

    texts.forEach(text => {
        text.classList.remove("show");
    });

    lines.forEach(line => {
        line.classList.remove("show");
    });

    finalStory.style.display = "none";
    before.style.display = "flex";

    texts.forEach((text, index) => {

        setTimeout(() => {

            text.classList.add("show");

        }, index * 2500);

        setTimeout(() => {

            text.classList.remove("show");

        }, index * 2500 + 1800);

    });

    setTimeout(() => {

        before.style.display = "none";

        finalStory.style.display = "block";
        finalStory.scrollTop = 0;

        document.body.classList.add("final-open");

        lines.forEach((line, index) => {

            setTimeout(() => {

                line.classList.add("show");

                line.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, index * 2000);

        });

    }, 10500);

}


function checkFinal() {

    if (localStorage.getItem("showFinal") !== "yes") {
        return;
    }

    localStorage.removeItem("showFinal");

    startFinal();

}


window.addEventListener("focus", checkFinal);

window.addEventListener("pageshow", checkFinal);

document.addEventListener("visibilitychange", () => {

    if (document.visibilityState === "visible") {

        checkFinal();

    }

});