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
 
/* ================================= */
/* МУЗЫКА МЕН ДАУЫСТЫ АРАЛАСТЫРУ */
/* ================================= */

let audioContext = null;

let musicSourceNode = null;
let musicGainNode = null;

let voiceSourceNode = null;
let voiceGainNode = null;


function initAudioMixer() {

    if (
        audioContext &&
        musicGainNode &&
        voiceGainNode
    ) {

        return true;

    }

    const AudioContextClass =
        window.AudioContext ||
        window.webkitAudioContext;

    const voiceAudio =
        document.getElementById("voiceMessage");

    if (
        !AudioContextClass ||
        !music ||
        !voiceAudio
    ) {

        console.error(
            "Аудио элементтерінің бірі табылмады"
        );

        return false;

    }

    try {

        audioContext =
            new AudioContextClass();


        /* Сайттың музыкасы */

        musicSourceNode =
            audioContext
                .createMediaElementSource(music);

        musicGainNode =
            audioContext.createGain();

        musicGainNode.gain.value = 1;

        musicSourceNode
            .connect(musicGainNode)
            .connect(audioContext.destination);


        /* Сенің даусың */

        voiceSourceNode =
            audioContext
                .createMediaElementSource(voiceAudio);

        voiceGainNode =
            audioContext.createGain();

        voiceGainNode.gain.value = 1;

        voiceSourceNode
            .connect(voiceGainNode)
            .connect(audioContext.destination);


        return true;

    } catch (error) {

        console.error(
            "Аудио миксер қосылмады:",
            error
        );

        return false;

    }

}


async function resumeAudioMixer() {

    if (!initAudioMixer()) {

        return false;

    }

    if (audioContext.state === "suspended") {

        await audioContext.resume();

    }

    return true;

}
startBtn.addEventListener("click", async () => {

    await resumeAudioMixer();

    music.play().catch(error => {

        console.error(
            "Негізгі музыка қосылмады:",
            error
        );

    });
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

if (showGift) {

    showGift.addEventListener("click", () => {

        /* Финал экранын ғана ашады.
           Видео мен дауыс әлі басталмайды. */

        showVoiceFinal();

    });

}

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
/* ДАУЫСТЫҚ ВИДЕО ФИНАЛ */
/* ============================= */

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

const finalBackgroundMusic =
    document.getElementById("bgMusic");


let voiceFinalOpened = false;
let finalStarted = false;
let originalMusicVolume = null;


/* ================================= */
/* МУЗЫКАНЫ БӘСЕҢДЕТУ */
/* ================================= */

function fadeFinalMusicTo(
    targetVolume,
    duration = 700
) {

    if (!initAudioMixer()) {

        if (finalBackgroundMusic) {

            finalBackgroundMusic.volume =
                targetVolume;

        }

        return;

    }

    if (audioContext.state === "suspended") {

        audioContext
            .resume()
            .catch(() => {});

    }

    const now =
        audioContext.currentTime;

    const gain =
        musicGainNode.gain;

    gain.cancelScheduledValues(now);

    gain.setValueAtTime(
        gain.value,
        now
    );

    gain.linearRampToValueAtTime(
        targetVolume,
        now + duration / 1000
    );

}


/* ================================= */
/* ФИНАЛ ЭКРАНЫН АШУ */
/* ================================= */

function showVoiceFinal() {

    if (
        !voiceSection ||
        !voiceBox ||
        !voiceBtn ||
        !voiceMessage ||
        !voiceBackgroundVideo ||
        !theEnd
    ) {

        console.error(
            "Финалдың HTML элементтері табылмады"
        );

        return;

    }


    voiceFinalOpened = true;
    finalStarted = false;


    /* Бетті тоқтату */

    document.body.style.overflow =
        "hidden";


    /* Финал экранын көрсету */

    voiceSection.classList.add(
        "active"
    );

    voiceSection.classList.remove(
        "started"
    );


    /* Начать карточкасын көрсету */

    voiceBox.style.display = "";

    voiceBox.classList.remove(
        "finished"
    );


    /* Концовканы жасыру */

    theEnd.classList.remove(
        "show"
    );


    /* Батырма */

    voiceBtn.disabled = false;

    voiceBtn.classList.remove(
        "playing"
    );

    voiceBtn.textContent =
        "▶ Начать";


    /* Дауыс әлі басталмайды */

    voiceMessage.pause();

    voiceMessage.currentTime = 0;

    voiceMessage.muted = false;


    /* Видео да әлі басталмайды */

    voiceBackgroundVideo.pause();

    voiceBackgroundVideo.muted = true;

    voiceBackgroundVideo.loop = true;

    try {

        voiceBackgroundVideo.currentTime =
            0;

    } catch (error) {}

}


/* ================================= */
/* ▶ НАЧАТЬ */
/* ================================= */

if (
    voiceBtn &&
    voiceMessage &&
    voiceBackgroundVideo
) {

    voiceBtn.addEventListener(
        "click",
        async () => {

            if (finalStarted) {

                return;

            }


            finalStarted = true;


            voiceBtn.disabled = true;

            voiceBtn.textContent =
                "Начинаем... ❤️";


            try {

                /* Аудио миксерді іске қосу */

                await resumeAudioMixer();


                /* ======================= */
                /* НЕГІЗГІ МУЗЫКА */
                /* ======================= */

                if (finalBackgroundMusic) {

                    if (
                        originalMusicVolume ===
                        null
                    ) {

                        originalMusicVolume =
                            finalBackgroundMusic.volume;

                    }


                    /* Музыка тоқтап тұрса */

                    if (
                        finalBackgroundMusic.paused
                    ) {

                        await finalBackgroundMusic
                            .play()
                            .catch(() => {});

                    }

                }


                /* Музыканы 5%-ға түсіреміз */

                fadeFinalMusicTo(
                    0.05,
                    700
                );


                /* ======================= */
                /* ВИДЕО */
                /* ======================= */

                voiceBackgroundVideo.pause();

                try {

                    voiceBackgroundVideo.currentTime =
                        0;

                } catch (error) {}


                voiceBackgroundVideo.muted =
                    true;

                /*
                Видео біткен сайын
                қайта басталады.
                Концовка шыққанда да
                тоқтамайды.
                */

                voiceBackgroundVideo.loop =
                    true;


                /* ======================= */
                /* ДАУЫС */
                /* ======================= */

                voiceMessage.pause();

                voiceMessage.currentTime =
                    0;

                voiceMessage.muted =
                    false;

                voiceMessage.volume =
                    1;


                /* Дауысты күшейту */

                if (
                    voiceGainNode &&
                    audioContext
                ) {

                    voiceGainNode.gain
                        .setValueAtTime(
                            1.35,
                            audioContext.currentTime
                        );

                }


                /* ======================= */
                /* ВИДЕО + ДАУЫС БІРГЕ */
                /* ======================= */

                const videoPromise =
                    voiceBackgroundVideo.play();

                const voicePromise =
                    voiceMessage.play();


                await Promise.all([

                    videoPromise,
                    voicePromise

                ]);


                /*
                Видео дәл қазір ғана
                көрінеді
                */

                voiceSection.classList.add(
                    "started"
                );


                /*
                Начать карточкасын
                жоғалтамыз
                */

                voiceBox.classList.add(
                    "finished"
                );


                setTimeout(() => {

                    voiceBox.style.display =
                        "none";

                }, 900);


            } catch (error) {

                console.error(
                    "Финал қосылмады:",
                    error
                );


                finalStarted = false;


                voiceBtn.disabled =
                    false;

                voiceBtn.textContent =
                    "▶ Начать";

            }

        }
    );


    /* ================================= */
    /* ДАУЫС БІТКЕНДЕ */
    /* ================================= */

    voiceMessage.addEventListener(
        "ended",
        () => {


            /*
            ВИДЕОНЫ ТОҚТАТПАЙМЫЗ
            */

            voiceBackgroundVideo.loop =
                true;


            if (
                voiceBackgroundVideo.paused
            ) {

                voiceBackgroundVideo
                    .play()
                    .catch(() => {});

            }


            /*
            Музыка да тоқтамайды.
            Тек қайта бұрынғы
            дауысына көтеріледі.
            */

            if (
                finalBackgroundMusic &&
                originalMusicVolume !== null
            ) {

                fadeFinalMusicTo(
                    originalMusicVolume,
                    1500
                );

            }


            /*
            Концовка шығады.
            Видео артында
            ары қарай ойнайды.
            */

            setTimeout(() => {

                theEnd.classList.add(
                    "show"
                );

            }, 700);

        }
    );

}