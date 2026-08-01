const envelope = document.querySelector(".envelope");
const typing = document.getElementById("typing");

const openBtn = document.getElementById("openBtn");
const musicBtn = document.getElementById("musicBtn");
const loveBtn = document.getElementById("loveBtn");

const music = document.getElementById("bgmusic");

const message = `Hai Sayang ❤️

Aku cuma mau bilang...

Terima kasih ya karena sudah hadir di hidup aku.

Mungkin aku bukan orang yang paling sempurna, tapi aku selalu berusaha menjadi seseorang yang bisa membuat kamu merasa dicintai.

Kalau suatu saat kamu merasa lelah, sedih, atau kehilangan semangat, ingat ya...

Aku akan selalu ada buat kamu.

Aku percaya sama kamu.
Aku bangga sama semua usaha yang kamu lakukan.
Dan aku akan terus mendukung setiap langkahmu.

Semoga hubungan kita selalu dipenuhi kebahagiaan, saling percaya, dan saling menguatkan.

Terima kasih karena sudah menjadi bagian terindah dalam hidup aku.

I Love You ❤️`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 35);
    } else {

        loveBtn.style.display = "inline-block";

        confetti({
            particleCount: 180,
            spread: 120,
            origin: {
                y: 0.6
            }
        });

    }
}

openBtn.onclick = () => {

    envelope.classList.add("open");

    openBtn.style.display = "none";

    setTimeout(() => {
        typeWriter();
    }, 600);

};

musicBtn.onclick = () => {

    music.play();

};

loveBtn.onclick = () => {

    confetti({
        particleCount: 250,
        spread: 180
    });

    alert("❤️ Aku Sayang Kamu ❤️");

};
