// Сколько баллов набрано, в процентах от кольца (0 - 1).
// Замени на реальный расчёт (например current / max), когда появятся живые данные.
const PROGRESS_PERCENT = 0.33;

const RADIUS = 84;
const ARC_DEGREES = 270; // кольцо не замкнуто, снизу разрыв в 90°

const ring = document.querySelector('.ring-progress');
const circumference = 2 * Math.PI * RADIUS;
const trackLength = circumference * (ARC_DEGREES / 360);

const progressLength = trackLength * PROGRESS_PERCENT;
ring.style.strokeDasharray = `${progressLength} ${circumference - progressLength}`;
ring.style.strokeDashoffset = progressLength;

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.getElementById('progressModule').classList.add('is-ready');
    ring.style.strokeDashoffset = 0;
  });
});
