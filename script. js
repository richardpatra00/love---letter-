const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const musicBtn = document.getElementById("musicBtn");
const loveBtn = document.getElementById("loveBtn");
const typing = document.getElementById("typing");
const music = document.getElementById("bgmusic");

const message = `Terima kasih sudah hadir dalam hidupku.

Mungkin website ini sederhana, tapi setiap kata di dalamnya dibuat khusus untukmu.

Semoga hari-harimu selalu dipenuhi kebahagiaan, kesehatan, dan senyuman.

Kalau suatu saat kamu merasa lelah, ingat ya...
Selalu ada seseorang yang menyayangimu dan percaya padamu.

Terima kasih karena sudah menjadi bagian terindah dalam hidupku.

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
            origin: { y: 0.6 }
        });
    }
}

openBtn.onclick = () => {

    envelope.classList.add("open");

    openBtn.style.display = "none";

    setTimeout(() => {

        typeWriter();

    },600);

}

musicBtn.onclick = ()=>{

    music.play();

}

loveBtn.onclick = ()=>{

    confetti({
        particleCount:250,
        spread:180
    });

    alert("❤️ Aku Sayang Kamu ❤️");
}
