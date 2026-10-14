// Cursor-lit room grid drawn behind every page.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- cursor-lit room grid ---------- */
const cv = document.getElementById('grid'), ctx = cv.getContext('2d');
const S = 32; let W = 0, H = 0, mx = -999, my = -999, dpr = 1, raf = 0;
const rgb = () => getComputedStyle(document.documentElement).getPropertyValue('--cell').trim();
const line = () => getComputedStyle(document.documentElement).getPropertyValue('--line').trim();
function size() { dpr = devicePixelRatio || 1; W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px'; draw(); }
function draw() {
  raf = 0; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
  const c = rgb(), l = line(), R = 150;
  ctx.strokeStyle = l; ctx.globalAlpha = 0.35; ctx.lineWidth = 1; ctx.beginPath();
  for (let x = 0; x <= W; x += S) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); }
  for (let y = 0; y <= H; y += S) { ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); }
  ctx.stroke(); ctx.globalAlpha = 1;
  if (window.__foot) {
    const f = window.__foot, fx0 = Math.floor(f.left / S), fx1 = Math.ceil(f.right / S), fy0 = Math.floor(f.top / S), fy1 = Math.ceil(f.bottom / S);
    ctx.fillStyle = `rgba(${c}, 0.14)`;
    for (let gx = fx0; gx < fx1; gx++) for (let gy = fy0; gy < fy1; gy++) ctx.fillRect(gx * S + 2, gy * S + 2, S - 3, S - 3);
  }
  if (mx < -100) return;
  const x0 = Math.floor((mx - R) / S), x1 = Math.ceil((mx + R) / S), y0 = Math.floor((my - R) / S), y1 = Math.ceil((my + R) / S);
  for (let gx = x0; gx <= x1; gx++) for (let gy = y0; gy <= y1; gy++) {
    const cx = gx * S + S / 2, cy = gy * S + S / 2, d = Math.hypot(cx - mx, cy - my);
    if (d > R) continue;
    // deterministic "occupancy" so some cells read as booked
    const booked = ((gx * 73856093) ^ (gy * 19349663)) % 7 === 0;
    const a = (1 - d / R) * (booked ? 0.5 : 0.12);
    ctx.fillStyle = `rgba(${c}, ${a})`; ctx.fillRect(gx * S + 2, gy * S + 2, S - 3, S - 3);
  }
}
addEventListener('resize', size);
if (!reduce) addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(draw); });
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', draw);
size();
window.__redraw = () => { if (!raf) raf = requestAnimationFrame(draw); };
export const CELL = S;
