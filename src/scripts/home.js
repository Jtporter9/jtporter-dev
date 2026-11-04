// Homepage behaviour: draggable portrait, active nav, EN/ES toggle, Room Matrix demo.
/* ---------- portrait: drag to snap onto the grid ---------- */
const S = 32;
const pf = document.getElementById('portrait');
let px = 0, py = 0, pd = null;
const hint = document.getElementById('drag-hint');
const setP = (x, y) => { px = x; py = y; pf.style.transform = `translate(${x}px, ${y}px)`; };
function snap() {
  const r = pf.getBoundingClientRect();
  let x = px + (Math.round(r.left / S) * S - r.left), y = py + (Math.round(r.top / S) * S - r.top);
  // keep it on screen
  const nl = r.left + (x - px), nt = r.top + (y - py);
  if (nl < 0) x += Math.ceil(-nl / S) * S; if (nl + r.width > innerWidth) x -= Math.ceil((nl + r.width - innerWidth) / S) * S;
  if (nt < 0) y += Math.ceil(-nt / S) * S; if (nt + r.height > innerHeight) y -= Math.ceil((nt + r.height - innerHeight) / S) * S;
  setP(x, y);
}
const foot = () => { const r = pf.getBoundingClientRect(); window.__foot = r; window.__redraw?.(); };
pf.addEventListener('pointerdown', e => {
  if (e.button !== 0) return;
  e.preventDefault(); pf.setPointerCapture(e.pointerId);
  pd = { sx: e.clientX, sy: e.clientY, ox: px, oy: py }; pf.classList.add('dragging');
});
pf.addEventListener('pointermove', e => { if (!pd) return; setP(pd.ox + e.clientX - pd.sx, pd.oy + e.clientY - pd.sy); foot(); });
const end = () => {
  if (!pd) return; const moved = px !== pd.ox || py !== pd.oy; pd = null;
  pf.classList.remove('dragging'); window.__foot = null;
  if (moved) { pf.style.transition = 'transform 0.18s ease'; snap(); hint.classList.add('gone'); }
  window.__redraw?.();
};
pf.addEventListener('pointerup', end); pf.addEventListener('pointercancel', end);
pf.addEventListener('dblclick', () => setP(0, 0));
pf.addEventListener('keydown', e => {
  const d = { ArrowLeft: [-S, 0], ArrowRight: [S, 0], ArrowUp: [0, -S], ArrowDown: [0, S] }[e.key];
  if (e.key === 'Escape') { setP(0, 0); return; }
  if (!d) return; e.preventDefault(); setP(px + d[0], py + d[1]); hint.classList.add('gone');
});
addEventListener('resize', () => setP(0, 0));

/* ---------- active nav ---------- */
const links = [...document.querySelectorAll('.nav a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section').forEach(s => io.observe(s));
links[0].classList.add('active');

/* ---------- i18n ---------- */
const ES = {
  role: 'Ingeniero de Software Sénior',
  pitch: 'Construyo interfaces que la gente puede agarrar, arrastrar y en las que puede confiar, para resorts, familias y pacientes.',
  nav_about: 'Sobre mí', nav_exp: 'Experiencia',
  nav_now: 'TimeShareWare', nav_work: 'Proyectos',
  hint_photo: 'Arrástrame. Me ajusto a la cuadrícula.',
  tsw_meta: 'Más reciente · Ingeniero de Software Sénior · 2022 — 2026',
  tsw_title: 'Construyo las herramientas con las que operan los resorts',
  tsw_lede: 'TimeShareWare crea la plataforma que de 7 a 10 empresas de resorts, incluidas Vidanta y Hyatt, usan para operar cientos de resorts. En un equipo de UI de unas siete personas, desarrollé con React, Redux y TypeScript sobre un backend en C# / .NET, revisé código, gestioné lanzamientos y fui el ingeniero de referencia para diseño y estilos.',
  b1: '<strong>Reconstruí la Room Matrix con arrastrar y soltar.</strong> El personal asigna reservaciones a habitaciones, cambia fechas y bloquea habitaciones por mantenimiento directamente en el tablero.',
  b2: '<strong>Reemplacé un tablero que no permitía arrastrar</strong> y tenía problemas constantes al asignar habitaciones y al mostrar las estancias correctamente.',
  b3: '<strong>La hice rápida.</strong> Una API de datos más veloz y carga diferida redujeron los tiempos de carga de 30–90 segundos a 1–10, en miles de habitaciones.',
  pl1: 'Reservaciones', pl1d: 'Construí las pantallas de búsqueda de habitaciones, reservación y pago con uso o puntos, integradas de cerca con las APIs del backend.',
  pl2: 'Líder de diseño y estilos', pl2d: 'Implementé la apariencia modernizada en gran parte de la aplicación.',
  pl3: 'Desarrollo con IA', pl3d: 'Adopté Claude Code desde el inicio. Enseñé Claude Skills al equipo y configuré nuestro contexto compartido de IA.',

  about1: 'Durante los últimos cuatro años fui ingeniero sénior en <strong>TimeShareWare</strong>, donde reconstruí la <strong>Room Matrix</strong>, el tablero de arrastrar y soltar que empresas de resorts como Vidanta y Hyatt usan para gestionar miles de habitaciones, y reduje su tiempo de carga de hasta 90 segundos a 10 o menos. Es el tipo de interfaz que me encanta: densa, rápida y difícil de hacer bien.',
  about2: 'Antes dirigí un equipo de siete en <strong>Readeo</strong> para lanzar una app de lectura familiar, y fui uno de los primeros cinco empleados de <strong>LowestMed</strong>, que creció 7 veces y fue adquirida por RetailMeNot.',
  about3: 'Trabajo principalmente con React y TypeScript, uso Claude Code a diario y con gusto resuelvo problemas en inglés o en español. Busco un equipo a largo plazo donde pueda seguir programando y ayudar a definir las decisiones de arquitectura y diseño que mejoran un producto.',
  d_tsw: '2022 — Hoy',
  j_tsw: 'Reconstruí la Room Matrix (cargas de 30–90 s a 1–10 s), construí pantallas clave de reservación y lideré la modernización de la UI para empresas de resorts como Vidanta y Hyatt.',
  j_readeo: 'Contratado como líder. Dirigí un equipo de 7 ingenieros además de sprints y planeación, y lancé la app de Readeo en App Store y Google Play.',
  j_pfg: 'Ayudé a crear la librería de diseño usada en toda esta empresa Fortune 250 y actualicé principal.com.',
  j_rmn: 'Migré Rx Saver de Angular a React/Redux y aumenté la cobertura de pruebas un 40%. Rx Saver fue adquirida después por GoodRx.',
  j_lm: 'Empleado #5. Creé la búsqueda mientras escribes entre nombres de medicamentos de marca y genéricos mientras las transacciones mensuales crecían de 7 mil a más de 50 mil, hasta la adquisición.',
  open: 'Disponible para trabajar · Remoto de preferencia', nav_contact: 'Contacto',
  st1: 'Tiempo de carga de la Room Matrix', st2: 'Reconstrucción', st2v: '~2 meses', st3: 'Escala', st3v: 'Cientos de resorts',
  rm_more: 'Leer la historia de la Room Matrix →',
  p_rm: 'Reconstruyendo la Room Matrix', p_rm_d: 'Tiempo de carga tras la reconstrucción, antes de 30–90 segundos, en cientos de resorts.',
  ct_title: 'Construyamos algo juntos',
  ct_body: 'Busco puestos de ingeniero frontend sénior, full-stack, ingeniero de software de IA o líder de ingeniería, idealmente remotos, con un equipo con el que pueda crecer a largo plazo. La forma más rápida de contactarme es por correo o LinkedIn.',
  cv: 'Ver currículum completo →', resume: 'Currículum', more: 'Leer la historia →',
  demo_title: 'La Room Matrix', sample: 'Datos de ejemplo',
  demo_intro: 'Una versión mínima del tablero que reconstruí. Arrastra una estancia o un bloqueo de mantenimiento a otra habitación o noche. Los traslapes se rechazan, igual que en la versión real.',
  p_lm: 'De empleado #5 a la adquisición', p_lm_d: 'Transacciones mensuales en LowestMed antes de que RetailMeNot la comprara.',
  p_rx: 'Reescribiendo Rx Saver en React', p_rx_d: 'Cobertura de pruebas del frontend tras migrar de Angular a React.',
  p_rd: 'Liderando un equipo hasta las tiendas de apps', p_rd_d: 'Ingenieros que dirigí para lanzar Readeo en iOS y Android.'
};
const EN = {}; document.querySelectorAll('[data-i18n]').forEach(el => { EN[el.dataset.i18n] ??= el.innerHTML; });
let lang = 'en';
const T = { en: { moved: (g, r, n) => `Moved ${g} to room ${r}, nights ${n}.`, clash: (g, o) => `Can’t drop ${g} there. It overlaps ${o}.`, out: g => `${g} doesn’t fit in that window.`, hint: 'Drag any stay.' },
            es: { moved: (g, r, n) => `${g} movido a la habitación ${r}, noches ${n}.`, clash: (g, o) => `No se puede soltar ${g} ahí. Se traslapa con ${o}.`, out: g => `${g} no cabe en ese rango.`, hint: 'Arrastra cualquier estancia.' } };
function setLang(l) {
  lang = l; document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; el.innerHTML = (l === 'es' ? ES[k] : EN[k]) ?? EN[k]; });
  document.getElementById('lang-en').setAttribute('aria-pressed', l === 'en');
  document.getElementById('lang-es').setAttribute('aria-pressed', l === 'es');
  renderHead(); say(T[lang].hint);
  stays.forEach((st, i) => { if (st.m) els[i].textContent = l === 'es' ? 'Mantenimiento' : 'Maintenance'; });
  try { localStorage.setItem('jt-lang', l); } catch (e) {}
}
document.getElementById('lang-en').onclick = () => setLang('en');
document.getElementById('lang-es').onclick = () => setLang('es');

/* ---------- Room Matrix demo ---------- */
const ROOMS = [
  { n: '101', en: '1BD Garden', es: '1Rec Jardín' }, { n: '102', en: '1BD Garden', es: '1Rec Jardín' },
  { n: '201', en: '2BD Oceanview', es: '2Rec Vista al mar' }, { n: '202', en: '2BD Oceanview', es: '2Rec Vista al mar' },
  { n: '301', en: '3BD Penthouse', es: '3Rec Penthouse' }
];
const NIGHTS = 7;
const stays = [
  { g: 'Rivera', id: 204, r: 0, s: 0, n: 3 }, { g: 'Okafor', id: 37, r: 0, s: 4, n: 3 },
  { g: 'Chen', id: 1180, r: 1, s: 1, n: 4 }, { g: 'Larsen', id: 562, r: 2, s: 0, n: 2 },
  { g: 'Morales', id: 91, r: 3, s: 2, n: 5 }, { g: 'Nguyen', id: 318, r: 4, s: 3, n: 2 },
  { g: 'Maintenance', r: 2, s: 4, n: 2, m: true }
];
const nm = st => st.m ? (lang === 'es' ? 'Mantenimiento' : 'Maintenance') : `${st.g}:${st.id}`;
const lanes = document.getElementById('lanes'), statusEl = document.getElementById('status');
function say(msg, err) { statusEl.textContent = msg; statusEl.classList.toggle('err', !!err); }
function renderHead() {
  const base = new Date(2026, 9, 14);
  const fmt = new Intl.DateTimeFormat(lang === 'es' ? 'es-MX' : 'en-US', { weekday: 'short', day: 'numeric' });
  document.getElementById('rooms').innerHTML = ROOMS.map(r => `<span><b>${r.n}</b>${r[lang]}</span>`).join('');
  document.getElementById('days').innerHTML = Array.from({ length: NIGHTS }, (_, i) => `<span>${fmt.format(new Date(base.getTime() + i * 864e5))}</span>`).join('');
}
lanes.innerHTML = ROOMS.map(() => '<div class="lane"></div>').join('');
const els = stays.map((st, i) => {
  const el = document.createElement('div'); el.className = st.m ? 'res maint' : 'res'; el.textContent = st.m ? st.g : `${st.g}:${st.id}`; el.tabIndex = 0;
  el.setAttribute('role', 'button'); el.dataset.i = i; if (st.m) el.dataset.i18nName = '1'; lanes.appendChild(el); return el;
});
function place(el, r, s, n) { el.style.left = `calc(${(s / NIGHTS) * 100}% + 3px)`; el.style.width = `calc(${(n / NIGHTS) * 100}% - 6px)`; el.style.top = `calc(${r} * var(--rowh))`; }
function layout() { stays.forEach((st, i) => { place(els[i], st.r, st.s, st.n); els[i].setAttribute('aria-label', `${nm(st)}, room ${ROOMS[st.r].n}, nights ${st.s + 1}–${st.s + st.n}`); }); }
function clash(i, r, s) { const n = stays[i].n; return stays.find((o, j) => j !== i && o.r === r && s < o.s + o.n && o.s < s + n); }

let drag = null;
lanes.addEventListener('pointerdown', e => {
  const el = e.target.closest('.res'); if (!el) return;
  const i = +el.dataset.i, box = lanes.getBoundingClientRect(), eb = el.getBoundingClientRect();
  drag = { i, el, ox: e.clientX - eb.left, oy: e.clientY - eb.top, box, r: stays[i].r, s: stays[i].s };
  el.setPointerCapture(e.pointerId); el.classList.add('dragging');
});
lanes.addEventListener('pointermove', e => {
  if (!drag) return;
  const { box, i, el } = drag, colW = box.width / NIGHTS, rowH = box.height / ROOMS.length;
  const x = e.clientX - box.left - drag.ox, y = e.clientY - box.top - drag.oy;
  el.style.left = x + 'px'; el.style.top = y + 'px';
  drag.s = Math.round(x / colW); drag.r = Math.max(0, Math.min(ROOMS.length - 1, Math.round(y / rowH)));
  const bad = drag.s < 0 || drag.s + stays[i].n > NIGHTS || clash(i, drag.r, drag.s);
  el.classList.toggle('bad', !!bad);
});
function drop() {
  if (!drag) return;
  const { i, el, r, s } = drag, st = stays[i]; drag = null;
  el.classList.remove('dragging', 'bad');
  if (s < 0 || s + st.n > NIGHTS) { say(T[lang].out(nm(st)), true); bump(el); }
  else { const o = clash(i, r, s); if (o) { say(T[lang].clash(nm(st), nm(o)), true); bump(el); } else if (r !== st.r || s !== st.s) { st.r = r; st.s = s; say(T[lang].moved(nm(st), ROOMS[r].n, `${s + 1}–${s + st.n}`)); } }
  layout();
}
function bump(el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
lanes.addEventListener('pointerup', drop); lanes.addEventListener('pointercancel', drop);
// keyboard: arrows move the focused stay
lanes.addEventListener('keydown', e => {
  const el = e.target.closest('.res'); if (!el) return;
  const d = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] }[e.key]; if (!d) return;
  e.preventDefault(); const i = +el.dataset.i, st = stays[i];
  drag = { i, el, r: Math.max(0, Math.min(ROOMS.length - 1, st.r + d[0])), s: st.s + d[1] }; drop(); el.focus();
});

layout();
let saved = 'en'; try { saved = localStorage.getItem('jt-lang') || 'en'; } catch (e) {}
setLang(saved);
