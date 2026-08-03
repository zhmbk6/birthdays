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
/* ============================= */
/* ДАУЫСТЫҚ ФИНАЛ */
/* ============================= */

/* ================================= */
/* ДАУЫСТЫҚ ВИДЕО ФИНАЛ */
/* ================================= */

const sendPromo =
    document.getElementById("sendPromo");

const voiceSection =
    document.getElementById("voiceSection");

const voiceBox =
    document.getElementById("voiceBox");

const voiceBtn =
    document.getElementById("voiceBtn");

const voiceMessage =
    document.getElementById("voiceMessage");

const voiceBackgroundVideo =
    document.getElementById("voiceBackgroundVideo");

const theEnd =
    document.getElementById("theEnd");

/*
Сайттың негізгі музыкасы.
Бұрынғы const music айнымалысымен қайталанбас үшін
басқа атау қолдандық.
*/

const finalBackgroundMusic =
    document.getElementById("bgMusic");


let voiceFinalOpened = false;

let originalMusicVolume = null;

let finalMusicFadeTimer = null;


/* ================================= */
/* МУЗЫКАНЫ БАЯУ БӘСЕҢДЕТУ */
/* ================================= */

function fadeFinalMusicTo(
    targetVolume,
    duration = 700
) {

    if (!finalBackgroundMusic) {
        return;
    }

    clearInterval(finalMusicFadeTimer);

    const startVolume =
        finalBackgroundMusic.volume;

    const difference =
        targetVolume - startVolume;

    const steps = 20;

    let currentStep = 0;

    finalMusicFadeTimer = setInterval(() => {

        currentStep++;

        const newVolume =
            startVolume +
            difference *
            (currentStep / steps);

        finalBackgroundMusic.volume =
            Math.max(
                0,
                Math.min(1, newVolume)
            );

        if (currentStep >= steps) {

            clearInterval(finalMusicFadeTimer);

            finalBackgroundMusic.volume =
                targetVolume;

        }

    }, duration / steps);

}


/* ================================= */
/* WHATSAPP БАТЫРМАСЫ */
/* ================================= */

if (sendPromo) {

    sendPromo.addEventListener("click", () => {

        localStorage.setItem(
            "showVoiceFinal",
            "yes"
        );

    });

}


/* ================================= */
/* ДАУЫС ФИНАЛЫН АШУ */
/* ================================= */

function showVoiceFinal() {

    if (voiceFinalOpened) {
        return;
    }

    if (
        !voiceSection ||
        !voiceBox ||
        !voiceBtn ||
        !voiceMessage ||
        !theEnd
    ) {

        console.error(
            "Дауыс финалының HTML элементтері табылмады"
        );

        return;

    }

    voiceFinalOpened = true;


    /* Промокод терезесін жабады */

    const currentGiftModal =
        document.getElementById("giftModal");

    if (currentGiftModal) {

        currentGiftModal.style.display = "none";

    }


    /* Беттің төмен-жоғары қозғалуын тоқтатады */

    document.body.style.overflow = "hidden";


    /* Дауыс пен видеоны бастапқы күйге әкеледі */

    voiceMessage.pause();
    voiceMessage.currentTime = 0;

    if (voiceBackgroundVideo) {

        voiceBackgroundVideo.pause();

        try {

            voiceBackgroundVideo.currentTime = 0;

        } catch (error) {

            console.log(
                "Видео әлі толық жүктелмеді"
            );

        }

        voiceBackgroundVideo.muted = true;

    }


    /* Карточканы бастапқы күйге әкеледі */

    voiceBox.style.display = "";

    voiceBox.classList.remove("finished");

    theEnd.classList.remove("show");

    voiceBtn.textContent =
        "▶ Послушать меня";

    voiceBtn.classList.remove("playing");


   /* Финал экранын ашады */

voiceSection.classList.add("active");


/* Видео сайтқа қайтқан бойда басталады */

if (voiceBackgroundVideo) {

    voiceBackgroundVideo.muted = true;
    voiceBackgroundVideo.loop = true;

    try {

        voiceBackgroundVideo.currentTime = 0;

    } catch (error) {

        console.log("Видео әлі жүктелмеді");

    }

    voiceBackgroundVideo
        .play()
        .catch(error => {

            console.error(
                "Фондық видео қосылмады:",
                error
            );

        });

}


/* Музыка сайтқа қайтқан бойда бәсеңдейді */

if (finalBackgroundMusic) {

    if (originalMusicVolume === null) {

        originalMusicVolume =
            finalBackgroundMusic.volume;

    }

    fadeFinalMusicTo(0.12, 700);

}

}

/* ================================= */
/* WHATSAPP-ТАН ҚАЙТҚАНЫН ТЕКСЕРУ */
/* ================================= */

function checkVoiceFinal() {

    if (
        localStorage.getItem("showVoiceFinal") !== "yes"
    ) {

        return;

    }

    localStorage.removeItem("showVoiceFinal");

    showVoiceFinal();

}

window.addEventListener(
    "focus",
    checkVoiceFinal
);

window.addEventListener(
    "pageshow",
    checkVoiceFinal
);

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.visibilityState === "visible") {

            checkVoiceFinal();

        }

    }
);

/* ================================= */
/* ДАУЫС БАТЫРМАСЫ */
/* ================================= */

if (voiceBtn && voiceMessage) {

    voiceBtn.addEventListener(
        "click",
        async () => {

            /*
            Дауыс ойнап тұрса:
            дауыс пен видеоны паузаға қояды.
            */

            if (!voiceMessage.paused) {

                voiceMessage.pause();

                if (voiceBackgroundVideo) {

                    voiceBackgroundVideo.pause();

                }


                /*
                Музыканы бұрынғы деңгейіне
                қайта көтереді.
                */

                if (
                    finalBackgroundMusic &&
                    originalMusicVolume !== null
                ) {

                    fadeFinalMusicTo(
                        originalMusicVolume,
                        500
                    );

                }

                voiceBtn.textContent =
                    "▶ Продолжить";

                voiceBtn.classList.remove(
                    "playing"
                );

                return;

            }


            /*
            Фондық музыка тоқтамайды.
            Тек дауыстың астында бәсеңдейді.
            */

            if (finalBackgroundMusic) {

                if (
                    originalMusicVolume === null
                ) {

                    originalMusicVolume =
                        finalBackgroundMusic.volume;

                }


                /*
                Музыка қандай да бір себеппен
                тоқтап тұрса, қайта қосады.
                */

                if (finalBackgroundMusic.paused) {

                    finalBackgroundMusic
                        .play()
                        .catch(() => {});

                }


                /*
                0.12 = музыканың 12% деңгейі.
                */

                fadeFinalMusicTo(
                    0.12,
                    700
                );

            }


            try {

                voiceMessage.volume = 1;


                /*
                Дауыс алғаш рет басталса,
                видео да басынан басталады.
                */

                if (
                    voiceBackgroundVideo &&
                    voiceMessage.currentTime === 0
                ) {

                    try {

                        voiceBackgroundVideo.currentTime = 0;

                    } catch (error) {

                        console.log(
                            "Видео әлі дайын емес"
                        );

                    }

                }


                /* Дыбыссыз видеоны қосады */

                if (voiceBackgroundVideo) {

                    voiceBackgroundVideo.muted = true;

                    voiceBackgroundVideo
                        .play()
                        .catch(error => {

                            console.log(
                                "Фон видео қосылмады:",
                                error
                            );

                        });

                }


                /* Сенің даусыңды қосады */

                await voiceMessage.play();


                voiceBtn.textContent =
                    "⏸ Пауза";

                voiceBtn.classList.add(
                    "playing"
                );

            } catch (error) {

                console.error(
                    "Дауыс қосылмады:",
                    error
                );

                voiceBtn.textContent =
                    "Не удалось включить";


                /*
                Қате болса, музыканы қайта көтереді.
                */

                if (
                    finalBackgroundMusic &&
                    originalMusicVolume !== null
                ) {

                    fadeFinalMusicTo(
                        originalMusicVolume,
                        500
                    );

                }

            }

        }
    );


    /* ================================= */
    /* ДАУЫС АЯҚТАЛҒАНДА */
    /* ================================= */

    voiceMessage.addEventListener(
        "ended",
        () => {

            voiceBtn.textContent =
                "Прослушано ❤️";

            voiceBtn.classList.remove(
                "playing"
            );


            /*
            Музыканы бұрынғы дауысына
            біртіндеп қайта көтереді.
            */

            if (
                finalBackgroundMusic &&
                originalMusicVolume !== null
            ) {

                const volumeToRestore =
                    originalMusicVolume;

                fadeFinalMusicTo(
                    volumeToRestore,
                    1200
                );

                originalMusicVolume = null;

            }


            /* Карточканы жоғалтады */

            voiceBox.classList.add(
                "finished"
            );


            /*
            Видео тоқтамайды.
            Ол The End мәтінінің артында
            ойнай береді.
            */

            setTimeout(() => {

                voiceBox.style.display =
                    "none";

                theEnd.classList.add(
                    "show"
                );

            }, 1000);

        }
    );

}