// script.js

// --- Wheel spin logic ---
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinButton');
const segments = 8;

spinBtn.addEventListener('click', () => {
  // disable while spinning
  spinBtn.disabled = true;

  // calculate random spin: at least 3 full rotations + random segment
  const randSegment = Math.floor(Math.random() * segments);
  const degreesPerSeg = 360 / segments;
  const extraDeg = randSegment * degreesPerSeg;
  const totalDeg = 360 * 3 + extraDeg + (degreesPerSeg / 2);

  // apply transform
  wheel.style.transform = `rotate(${totalDeg}deg)`;

  // wait for animation to finish (~4s)
  setTimeout(() => {
    // announce prize (all segments identical here; adapt as needed)
    alert(`অভিনন্দন! আপনি পান ${1400} ৳ পুরস্কার`);
    spinBtn.disabled = false;
  }, 4000);
});

// --- Countdown timer logic ---
let timeLeft = 180; // seconds
const countdownEl = document.getElementById('countdown');

function updateTimer() {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');
  countdownEl.textContent = `${mins}:${secs}`;

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    // disable spin if needed
    spinBtn.disabled = true;
  }
  timeLeft--;
}

const timerInterval = setInterval(updateTimer, 1000);
