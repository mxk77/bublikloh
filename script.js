// script.js

// --- Wheel spin logic ---
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinButton');
const segments = 8; // total slices in the wheel

let currentRotation = 0; // keep track of cumulative rotation so every spin looks the same

spinBtn.addEventListener('click', () => {
  // Disable the button while the wheel is spinning
  spinBtn.disabled = true;

  // Select a random segment for the wheel to stop at
  const randSegment = Math.floor(Math.random() * segments);
  const degreesPerSeg = 360 / segments;
  const extraDeg = randSegment * degreesPerSeg;

  // Each spin makes at least 3 full rotations before landing
  currentRotation += 360 * 3 + extraDeg + degreesPerSeg / 2;

  // Apply CSS transform to trigger the transition
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  // Wait for the transition (4s in CSS) to complete before enabling the button
  setTimeout(() => {
    alert(`অভিনন্দন! আপনি পান 1400 ৳ পুরস্কার`);
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
