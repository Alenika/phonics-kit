// 1. Слушаем нажатие клавиши
window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

// Убираем подсветку, когда анимация закончилась

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Вешаем обработчик на каждую кнопку
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Вешаем обработчик клика 
    keys.forEach(k => k.addEventListener('click', () => {
    const audio = document.querySelector(`audio[data-key="${k.dataset.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    k.classList.add('playing');
    })
);
