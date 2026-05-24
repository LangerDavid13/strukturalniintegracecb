// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            e.preventDefault();
            target.scrollIntoView({behavior: 'smooth'});
        }
    };
});

const rezervaceBtn = document.querySelector('.btn[href="#rezervace"]');
const modal = document.getElementById('rezervace-form');
const closeBtn = document.querySelector('.close');

rezervaceBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = "block";
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

function toggleText() {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("toggleBtn");

    moreText.classList.toggle("open");

    if (moreText.classList.contains("open")) {
        btn.innerText = "Zobrazit méně ↑";
    } else {
        btn.innerText = "Zobrazit více ↓";
    }
}


function toggleText() {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("toggleBtn");

    if (moreText.style.maxHeight) {
        moreText.style.maxHeight = null;
        btn.innerText = "Zobrazit více ↓";
    } else {
        moreText.style.maxHeight = moreText.scrollHeight + "px";
        btn.innerText = "Zobrazit méně ↑";
    }
}
