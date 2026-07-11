// ============================================================
//  Check-in logger — front-end
// ============================================================

// ---- Live clock ----
const clock = document.getElementById('clock');
function updateClock() { clock.textContent = new Date().toLocaleTimeString(); }
updateClock();
setInterval(updateClock, 1000);

// ---- Elements ----
const checkinBtn = document.getElementById('checkin-btn');
const status = document.getElementById('status');
const logList = document.getElementById('log-list');

// Draw the list of timestamps (newest first)
function renderList(entries) {
  logList.innerHTML = '';
  if (entries.length === 0) {
    logList.innerHTML = '<li class="empty">No check-ins yet</li>';
    return;
  }
  // copy + reverse so the newest is on top
  [...entries].reverse().forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `==>${entry.date}  —  ${entry.time}`;
    logList.appendChild(li);
  });
}

// Load whatever the server already has, when the page opens
async function loadCheckins() {
  try {
    const res = await fetch('/api/checkins');
    renderList(await res.json());
  } catch (err) {
    status.textContent = 'Could not load check-ins: ' + err.message;
  }
}

// Send a new check-in to the server, then refresh the list
checkinBtn.addEventListener('click', async () => {
  status.textContent = 'Checking in...';
  try {
    const res = await fetch('/api/checkin', { method: 'POST' });
    if (!res.ok) throw new Error('status ' + res.status);
    const entry = await res.json();
    status.textContent = `Checked in at ${entry.time}`;
    await loadCheckins(); // re-fetch so the new time appears in the list
  } catch (err) {
    status.textContent = 'Something went wrong: ' + err.message;
  }
});

loadCheckins();