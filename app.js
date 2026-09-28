/* =========================================================
   LIC पॉलिसी CRM — app.js
   ========================================================= */

const MONTH_NAMES = {
  mr:["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर"],
  en:["January","February","March","April","May","June","July","August","September","October","November","December"]
};

/* ---------------- i18n ---------------- */
const I18N = {
  mr: {
    appTitle:"पॉलिसी CRM", regTitle:"एजंट रजिस्ट्रेशन",
    regSub:"फक्त एकदाच भरा — ब्रँडिंग व रिमाइंडरसाठी वापरले जाईल.",
    fName:"तुमचे पूर्ण नाव *", fMobile:"मोबाईल / WhatsApp नंबर *",
    fAgentCode:"LIC एजन्सी कोड *", fTagline:"टॅगलाइन / घोषवाक्य",
    fPhoto:"तुमचा फोटो", fLogo:"एजन्सी लोगो (असल्यास)", fLicLogo:"LIC लोगो इमेज (ऐच्छिक)",
    fTheme:"थीम कलर निवडा", btnRegister:"रजिस्ट्रेशन पूर्ण करा",
    regNote:"सबमिट केल्यावर WhatsApp उघडेल — तो मेसेज पाठवायला विसरू नका, त्यामुळे CRM मालकाला कळेल की तुम्ही जॉईन झालात.",
    homeTitle:"🔔 आजचे रिमाइंडर", listTitle:"📋 पॉलिसी यादी", addTitle:"➕ नवीन पॉलिसी",
    fltAll:"सर्व", fPHName:"पॉलिसीधारकाचे नाव *", fPHMobile:"मोबाईल नंबर",
    fPolicyNo:"Policy No *", fDOC:"DOC (सुरुवात तारीख) *", fMode:"Mode *",
    fPlanTerm:"Plan/Term/PPT", fPremium:"Premium *", fSA:"Sum Assured",
    fStatus:"Status *", btnSave:"पॉलिसी सेव्ह करा",
    setBranding:"🏷️ ब्रँडिंग", setWA:"💬 WhatsApp निवड",
    waNormal:"साधे WhatsApp", waBusiness:"WhatsApp Business",
    setPdf:"📄 PDF डेटा अपलोड",
    pdfNote:"Commission Bill अपलोड केल्यास प्रीमियम भरल्याप्रमाणे पुढची Due Date सेट होईल. Premium Due List फक्त पडताळणीसाठी वापरली जाईल.",
    btnUploadCommission:"Commission Bill अपलोड करा", btnUploadDueList:"Premium Due List अपलोड करा (क्रॉस-व्हेरिफिकेशन)",
    setBackup:"💾 बॅकअप / रिस्टोर",
    backupNote:"डेटा या फोनवरच साठवला जातो. बॅकअप घेतल्यास तो Google Drive मध्ये सेव्ह करा; नवीन फोनवर Restore करून परत मिळेल.",
    btnBackup:"⬇️ बॅकअप डाउनलोड करा", btnRestore:"बॅकअप फाईल Restore करा",
    btnSaveSettings:"ब्रँडिंग सेव्ह करा",
    navHome:"होम", navList:"यादी", navAdd:"नवीन", navSettings:"सेटिंग्ज",
    posterTitle:"रिमाइंडर इमेज", btnClose:"बंद करा", btnDownloadSend:"डाउनलोड + WhatsApp पाठवा",
    emptyReminders:"आज कोणतेही रिमाइंडर नाहीत 🎉", emptyPolicies:"अजून कोणतीही पॉलिसी नाही",
    dueOn:"ड्यू तारीख", premiumLbl:"प्रीमियम", saLbl:"Sum Assured",
    overdueTag:"ड्यू संपली", upcomingTag:"लवकरच ड्यू",
    markPaid:"भरले म्हणून मार्क करा", sendReminder:"रिमाइंडर पाठवा",
    fillMissing:"माहिती पूर्ण करा", newFromPdf:"PDF मधून सापडलेली नवीन पॉलिसी",
    agentMismatch:"⚠️ हा PDF तुमच्या एजन्सी कोडशी जुळत नाही आहे. कृपया योग्य एजंटचा PDF अपलोड केला आहे का ते तपासा.",
    commissionDone:"Commission Bill प्रोसेस झाला", dueListDone:"Premium Due List पडताळणी पूर्ण",
    unmatchedTitle:"डेटाबेसमध्ये न सापडलेल्या पॉलिसी", mismatchTitle:"Due Date जुळत नाही अशा पॉलिसी",
    addToDb:"डेटाबेसमध्ये जोडा", added:"जोडले", regSuccess:"रजिस्ट्रेशन यशस्वी!", saved:"सेव्ह झाले",
    confirmDelete:"ही पॉलिसी काढायची का?", restoreConfirm:"रिस्टोर केल्यास सध्याचा डेटा बदलला जाईल. पुढे जायचे का?",
    backupDone:"बॅकअप फाईल डाउनलोड झाली", restoreDone:"डेटा यशस्वीरित्या रिस्टोर झाला",
    fillRequired:"कृपया * असलेले सर्व फील्ड भरा", invalidMobile:"कृपया योग्य 10 अंकी मोबाईल नंबर टाका",
    waSaved:"WhatsApp निवड सेव्ह झाली", noPolicyMobile:"या पॉलिसीधारकाचा मोबाईल नंबर नाही — आधी यादीत जाऊन तो भरा.",
    duplicatePolicyNo:"ही Policy No आधीच डेटाबेसमध्ये आहे — यादीत जाऊन ती एडिट करा.",
    alreadyAdded:"ही पॉलिसी आधीच डेटाबेसमध्ये आहे",
    viewAll:"सर्व पॉलिसी बघा", allPolicies:"सर्व पॉलिसी",
    folderSummary:"महिन्यावर टॅप करा — त्या महिन्यात ड्यू असलेल्या पॉलिसी दिसतील",
    policiesCount:"पॉलिसी"
  },
  en: {
    appTitle:"Policy CRM", regTitle:"Agent Registration",
    regSub:"Fill only once — used for branding & reminders.",
    fName:"Your full name *", fMobile:"Mobile / WhatsApp number *",
    fAgentCode:"LIC Agency code *", fTagline:"Tagline / slogan",
    fPhoto:"Your photo", fLogo:"Agency logo (if any)", fLicLogo:"LIC logo image (optional)",
    fTheme:"Choose theme color", btnRegister:"Complete registration",
    regNote:"WhatsApp will open after submit — please send that message so the CRM owner knows you joined.",
    homeTitle:"🔔 Today's reminders", listTitle:"📋 Policy list", addTitle:"➕ New policy",
    fltAll:"All", fPHName:"Policyholder name *", fPHMobile:"Mobile number",
    fPolicyNo:"Policy No *", fDOC:"DOC (start date) *", fMode:"Mode *",
    fPlanTerm:"Plan/Term/PPT", fPremium:"Premium *", fSA:"Sum Assured",
    fStatus:"Status *", btnSave:"Save policy",
    setBranding:"🏷️ Branding", setWA:"💬 WhatsApp choice",
    waNormal:"Regular WhatsApp", waBusiness:"WhatsApp Business",
    setPdf:"📄 Upload PDF data",
    pdfNote:"Uploading a Commission Bill will push the next due date forward. Premium Due List is only used for cross-check.",
    btnUploadCommission:"Upload Commission Bill", btnUploadDueList:"Upload Premium Due List (cross-check)",
    setBackup:"💾 Backup / Restore",
    backupNote:"Data lives on this phone only. Save your backup to Google Drive; restore it on a new phone to get it back.",
    btnBackup:"⬇️ Download backup", btnRestore:"Restore a backup file",
    btnSaveSettings:"Save branding",
    navHome:"Home", navList:"List", navAdd:"Add", navSettings:"Settings",
    posterTitle:"Reminder image", btnClose:"Close", btnDownloadSend:"Download + Send on WhatsApp",
    emptyReminders:"No reminders today 🎉", emptyPolicies:"No policies yet",
    dueOn:"Due date", premiumLbl:"Premium", saLbl:"Sum Assured",
    overdueTag:"Overdue", upcomingTag:"Due soon",
    markPaid:"Mark as paid", sendReminder:"Send reminder",
    fillMissing:"Complete details", newFromPdf:"New policy found in PDF",
    agentMismatch:"⚠️ This PDF does not match your agency code. Please check you uploaded the right agent's PDF.",
    commissionDone:"Commission Bill processed", dueListDone:"Premium Due List cross-check complete",
    unmatchedTitle:"Policies not found in database", mismatchTitle:"Policies with a due-date mismatch",
    addToDb:"Add to database", added:"Added", regSuccess:"Registration successful!", saved:"Saved",
    confirmDelete:"Remove this policy?", restoreConfirm:"Restoring will replace your current data. Continue?",
    backupDone:"Backup file downloaded", restoreDone:"Data restored successfully",
    fillRequired:"Please fill all fields marked *", invalidMobile:"Please enter a valid 10-digit mobile number",
    waSaved:"WhatsApp choice saved", noPolicyMobile:"This policyholder has no mobile number — add it in the list first.",
    duplicatePolicyNo:"This Policy No already exists in the database — edit it from the list instead.",
    alreadyAdded:"This policy is already in the database",
    viewAll:"View all policies", allPolicies:"All Policies",
    folderSummary:"Tap a month to see policies due that month",
    policiesCount:"policies"
  }
};
function t(key){ return (I18N[state.lang] && I18N[state.lang][key]) || I18N.mr[key] || key; }
function applyI18n(){
  document.documentElement.lang = state.lang === "mr" ? "mr" : "en";
  document.getElementById("langLabel").textContent = state.lang === "mr" ? "EN" : "मर";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  // re-render dynamic screens so their generated text updates too
  renderHome(); renderList(); renderSettingsStatic();
}
function toggleLang(){
  state.lang = state.lang === "mr" ? "en" : "mr";
  localStorage.setItem("licCrm_lang", state.lang);
  applyI18n();
}

/* ---------------- toast ---------------- */
let toastTimer=null;
function showToast(msg){
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove("show"), 2400);
}

/* ---------------- storage ---------------- */
function loadState(){
  try{
    const a = localStorage.getItem(LS_AGENT);
    const p = localStorage.getItem(LS_POLICIES);
    state.agent = a ? JSON.parse(a) : null;
    state.policies = p ? JSON.parse(p) : [];
    state.lang = localStorage.getItem("licCrm_lang") || (state.agent && state.agent.lang) || "mr";
  }catch(e){ console.error(e); }
}
function saveAgent(){ localStorage.setItem(LS_AGENT, JSON.stringify(state.agent)); }
function savePolicies(){ localStorage.setItem(LS_POLICIES, JSON.stringify(state.policies)); }

/* ---------------- policyNo is the single source of truth ---------------- */
function findPolicyByNo(policyNo){
  return state.policies.find(p=>p.policyNo === policyNo);
}
function dedupePolicies(){
  const seen = new Map();
  let changed = false;
  state.policies.forEach(p=>{
    if(!seen.has(p.policyNo)){
      seen.set(p.policyNo, p);
    } else {
      // merge: keep the first entry, but fill any blanks from the duplicate
      const keep = seen.get(p.policyNo);
      ["name","mobile","doc","dueDate","planTerm","mode","premium","sa","status"].forEach(k=>{
        if((!keep[k] && keep[k]!==0) && (p[k] || p[k]===0)) keep[k] = p[k];
      });
      changed = true;
    }
  });
  if(changed){
    state.policies = Array.from(seen.values());
    savePolicies();
  }
}

/* ---------------- date / money utils ---------------- */
function pad2(n){ return String(n).padStart(2,"0"); }
function toISO(d){ return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`; }
function fromISO(s){ if(!s) return null; const [y,m,d] = s.split("-").map(Number); return new Date(y, m-1, d); }
function fmtDMY(iso){
  const d = fromISO(iso); if(!d) return "-";
  return `${pad2(d.getDate())}-${pad2(d.getMonth()+1)}-${d.getFullYear()}`;
}
function addMonthsSafe(d, months){
  const nd = new Date(d.getTime());
  const day = nd.getDate();
  nd.setDate(1);
  nd.setMonth(nd.getMonth()+months);
  const lastDay = new Date(nd.getFullYear(), nd.getMonth()+1, 0).getDate();
  nd.setDate(Math.min(day, lastDay));
  return nd;
}
function modeMonths(mode){
  return { YLY:12, HLY:6, QLY:3, MLY:1, SGL:0 }[mode] || 12;
}
function reminderLeadDays(mode){
  // MLY/QLY -> 15 days before; HLY/YLY -> 1 month (30 days) before
  if(mode === "MLY" || mode === "QLY") return 15;
  return 30;
}
function moneyFmt(n){
  n = Number(n)||0;
  return "₹" + n.toLocaleString("en-IN");
}
function todayISO(){ return toISO(new Date()); }

/* ---------------- screens / navigation ---------------- */
function goScreen(name){
  state.currentScreen = name;
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById("screen-"+name).classList.add("active");
  document.querySelectorAll(".navbtn").forEach(b=>{
    b.classList.toggle("active", b.getAttribute("data-screen")===name);
  });
  if(name==="home") renderHome();
  if(name==="list"){ state.currentMonthFilter = null; renderList(); }
  if(name==="settings") renderSettingsStatic();
  window.scrollTo(0,0);
}

function boot(){
  loadState();
  dedupePolicies();
  applyI18n();
  populateThemeSwatches("r_themeSwatches", null);
  if(!state.agent){
    document.getElementById("bottomnav").classList.add("hidden");
    goScreenRaw("register");
  } else {
    document.getElementById("bottomnav").classList.remove("hidden");
    document.getElementById("agentHeaderName").textContent = state.agent.name || "";
    populateThemeSwatches("s_themeSwatches", state.agent.themeColor);
    applyTheme(state.agent.themeColor);
    goScreen("home");
  }
  populateStatusFilter();
}
function goScreenRaw(name){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById("screen-"+name).classList.add("active");
}
function applyTheme(color){
  if(!color) return;
  document.documentElement.style.setProperty("--theme", color);
}

/* ---------------- photo pick ---------------- */
function handlePhotoPick(inputId, previewId){
  const inp = document.getElementById(inputId);
  const file = inp.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e=>{
    const dataUrl = e.target.result;
    const prev = document.getElementById(previewId);
    prev.innerHTML = `<img src="${dataUrl}">`;
    prev.dataset.value = dataUrl;
  };
  reader.readAsDataURL(file);
}

/* ---------------- theme swatches ---------------- */
function populateThemeSwatches(containerId, selected){
  const c = document.getElementById(containerId);
  c.innerHTML = "";
  THEME_COLORS.forEach(col=>{
    const s = document.createElement("div");
    s.className = "swatch" + (col===selected || (!selected && col===THEME_COLORS[0]) ? " selected":"");
    s.style.background = col;
    s.onclick = ()=>{
      c.querySelectorAll(".swatch").forEach(x=>x.classList.remove("selected"));
      s.classList.add("selected");
      c.dataset.value = col;
    };
    c.appendChild(s);
  });
  c.dataset.value = selected || THEME_COLORS[0];
}

/* ---------------- registration ---------------- */
function normalizeAgentCode(s){
  return (s||"").toUpperCase().replace(/[^A-Z0-9]/g,"");
}
function submitRegistration(){
  const name = document.getElementById("r_name").value.trim();
  const mobile = document.getElementById("r_mobile").value.trim();
  const agentcode = document.getElementById("r_agentcode").value.trim();
  const tagline = document.getElementById("r_tagline").value.trim();
  if(!name || !/^[6-9]\d{9}$/.test(mobile) || !agentcode){
    showToast(t("fillRequired")); return;
  }
  const photo = document.getElementById("r_photoPreview").dataset.value || "";
  const logo = document.getElementById("r_logoPreview").dataset.value || "";
  const themeColor = document.getElementById("r_themeSwatches").dataset.value || THEME_COLORS[0];

  state.agent = {
    name, mobile, agentCode: agentcode, tagline, photo, logo,
    licLogo:"", themeColor, whatsappApp:"normal", lang: state.lang
  };
  saveAgent();

  // seed data only if agent code matches the original portfolio owner
  if(normalizeAgentCode(agentcode).includes(SEED_OWNER_AGENT_CODE) || SEED_OWNER_AGENT_CODE.includes(normalizeAgentCode(agentcode).replace(/^LIC/,""))){
    state.policies = SEED_POLICIES.map((p,i)=>({ id: "seed_"+i, ...p }));
  } else {
    state.policies = [];
  }
  savePolicies();

  // notify CRM owner via WhatsApp
  const msg = encodeURIComponent(
    `नवीन एजंट रजिस्टर झाला:\nनाव: ${name}\nमोबाईल: ${mobile}\nएजन्सी कोड: ${agentcode}`
  );
  window.open(`https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${msg}`, "_blank");

  showToast(t("regSuccess"));
  document.getElementById("bottomnav").classList.remove("hidden");
  document.getElementById("agentHeaderName").textContent = name;
  applyTheme(themeColor);
  goScreen("home");
}

/* ---------------- reminders (home) ---------------- */
function computeDueInfo(policy){
  const due = fromISO(policy.dueDate);
  if(!due) return null;
  const lead = reminderLeadDays(policy.mode);
  const reminderFrom = new Date(due.getTime());
  reminderFrom.setDate(reminderFrom.getDate() - lead);
  return { due, reminderFrom };
}
function getTodaysReminders(){
  const today = new Date(); today.setHours(0,0,0,0);
  return state.policies.filter(p=>{
    if((p.status||"").trim() !== "In Force") return false;
    if((p.mode||"").trim().toUpperCase() === "SGL") return false;
    const info = computeDueInfo(p);
    if(!info) return false;
    return today >= info.reminderFrom;
  }).sort((a,b)=> (a.dueDate||"").localeCompare(b.dueDate||""));
}
function renderHome(){
  if(!state.agent) return;
  const list = getTodaysReminders();
  document.getElementById("homeSummary").textContent =
    (state.lang==="mr" ? `${list.length} पॉलिसीधारकांना आज रिमाइंडर ड्यू आहे` : `${list.length} policyholder(s) due for a reminder today`);
  const wrap = document.getElementById("reminderList");
  if(list.length===0){
    wrap.innerHTML = `<div class="empty"><div class="ic">🎉</div><p>${t("emptyReminders")}</p></div>`;
    return;
  }
  const today = new Date(); today.setHours(0,0,0,0);
  wrap.innerHTML = list.map(p=>{
    const due = fromISO(p.dueDate);
    const overdue = due < today;
    return `
    <div class="card reminder-card ${overdue?'overdue':''}">
      <div style="display:flex;justify-content:space-between">
        <div>
          <div class="plist-name">${escapeHtml(p.name||"-")}</div>
          <div class="plist-meta">${p.policyNo} · ${p.planTerm||""} · ${p.mode}</div>
        </div>
        <span class="pill ${overdue?'pill-warn':'pill-ok'}">${overdue?t("overdueTag"):t("upcomingTag")}</span>
      </div>
      <p class="muted" style="margin-top:8px">${t("dueOn")}: <b>${fmtDMY(p.dueDate)}</b> · ${t("premiumLbl")}: <b>${moneyFmt(p.premium)}</b></p>
      <div class="reminder-actions">
        <button class="btn btn-primary btn-sm" onclick="openPoster('${p.id}')">📤 ${t("sendReminder")}</button>
      </div>
    </div>`;
  }).join("");
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ---------------- policy list: month folders ---------------- */
function monthsForPolicy(p){
  const anchor = fromISO(p.doc) || fromISO(p.dueDate);
  if(!anchor) return [];
  const base = anchor.getMonth()+1; // 1-12
  const mode = (p.mode||"").trim().toUpperCase();
  const step = { MLY:1, QLY:3, HLY:6 }[mode];
  if(mode === "MLY") return [1,2,3,4,5,6,7,8,9,10,11,12];
  if(step){
    const count = 12/step;
    const arr = [];
    for(let i=0;i<count;i++) arr.push(((base-1+i*step)%12)+1);
    return arr;
  }
  return [base]; // YLY, SGL, or unknown mode: single month
}
function renderList(){
  if(!state.agent) return;
  if(state.currentMonthFilter===null){
    document.getElementById("listFolders").classList.remove("hidden");
    document.getElementById("listMonthDetail").classList.add("hidden");
    renderListFolders();
  } else {
    document.getElementById("listFolders").classList.add("hidden");
    document.getElementById("listMonthDetail").classList.remove("hidden");
    renderMonthDetail();
  }
}
function renderListFolders(){
  document.getElementById("folderSummary").textContent = t("folderSummary");
  const names = MONTH_NAMES[state.lang] || MONTH_NAMES.mr;
  const grid = document.getElementById("folderGrid");
  grid.innerHTML = names.map((nm,i)=>{
    const m = i+1;
    const count = state.policies.filter(p=>monthsForPolicy(p).includes(m)).length;
    return `<div class="folder-card" onclick="openMonthDetail(${m})">
      <div class="fic">📁</div>
      <div class="fname">${nm}</div>
      <div class="fcount"><b>${count}</b> ${t("policiesCount")}</div>
    </div>`;
  }).join("");
}
function openMonthDetail(m){
  state.currentMonthFilter = m;
  renderList();
  window.scrollTo(0,0);
}
function closeMonthDetail(){
  state.currentMonthFilter = null;
  renderList();
}
function populateStatusFilter(){
  const sel = document.getElementById("statusFilter");
  if(!sel) return;
  const statuses = Array.from(new Set(state.policies.map(p=>(p.status||"").trim()).filter(Boolean)));
  sel.innerHTML = `<option value="" data-i18n="fltAll">${t("fltAll")}</option>` +
    statuses.map(s=>`<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join("");
}
function renderMonthDetail(){
  if(!state.agent) return;
  populateStatusFilter();
  const names = MONTH_NAMES[state.lang] || MONTH_NAMES.mr;
  const m = state.currentMonthFilter;
  document.getElementById("monthDetailTitle").textContent =
    m==="all" ? t("allPolicies") : `📁 ${names[m-1]}`;
  const q = (document.getElementById("searchBox").value||"").toLowerCase();
  const statusF = document.getElementById("statusFilter").value;
  const items = state.policies.filter(p=>{
    const matchQ = !q || (p.name||"").toLowerCase().includes(q) || (p.policyNo||"").includes(q);
    const matchS = !statusF || (p.status||"").trim() === statusF;
    const matchM = m==="all" || monthsForPolicy(p).includes(m);
    return matchQ && matchS && matchM;
  }).sort((a,b)=>(a.name||"").localeCompare(b.name||""));
  document.getElementById("listCount").textContent =
    (state.lang==="mr" ? `एकूण ${items.length} पॉलिसी` : `${items.length} polic${items.length===1?'y':'ies'}`);
  const wrap = document.getElementById("policyListWrap");
  if(items.length===0){
    wrap.innerHTML = `<div class="card empty"><div class="ic">📭</div><p>${t("emptyPolicies")}</p></div>`;
    return;
  }
  wrap.innerHTML = `<div class="card">` + items.map(p=>`
    <div class="plist-item">
      <div style="flex:1;min-width:0" onclick="openPolicyDetail('${p.id}')">
        <div class="plist-name">${escapeHtml(p.name||"-")} ${!p.mobile? '⚠️':''}</div>
        <div class="plist-meta">${p.policyNo} · ${p.mode||""} · ${escapeHtml(p.status||"")}</div>
      </div>
      <div style="text-align:right">
        <div class="plist-amt">${moneyFmt(p.sa)}</div>
        <div class="plist-meta">${fmtDMY(p.dueDate)}</div>
      </div>
    </div>`).join("") + `</div>`;
}
function openPolicyDetail(id){
  const p = state.policies.find(x=>x.id===id);
  if(!p) return;
  const modalBg = document.createElement("div");
  modalBg.className = "modal-bg";
  modalBg.onclick = (e)=>{ if(e.target===modalBg) modalBg.remove(); };
  modalBg.innerHTML = `
   <div class="modal">
    <div class="modal-handle"></div>
    <h2>${escapeHtml(p.name||"-")}</h2>
    <table class="simple">
      <tr><td class="muted">Policy No</td><td>${p.policyNo}</td></tr>
      <tr><td class="muted">Mobile</td><td><input class="field" id="edit_mobile_${p.id}" value="${p.mobile||""}" maxlength="10"></td></tr>
      <tr><td class="muted">DOC</td><td>${fmtDMY(p.doc)}</td></tr>
      <tr><td class="muted">Due Date</td><td>${fmtDMY(p.dueDate)}</td></tr>
      <tr><td class="muted">Plan/Term</td><td>${p.planTerm||""}</td></tr>
      <tr><td class="muted">Mode</td><td>${p.mode||""}</td></tr>
      <tr><td class="muted">Premium</td><td>${moneyFmt(p.premium)}</td></tr>
      <tr><td class="muted">Sum Assured</td><td>${moneyFmt(p.sa)}</td></tr>
      <tr><td class="muted">Status</td><td>
        <select class="field" id="edit_status_${p.id}">
          ${["In Force","Lapsed without Surrender Value","Reduced Paid-up","Fully Paid-up","Surrendered","Foreclosed","Matured","Death Claim","Single Premium"]
            .map(s=>`<option ${s===p.status?'selected':''}>${s}</option>`).join("")}
        </select>
      </td></tr>
    </table>
    <div style="display:flex;gap:10px;margin-top:12px">
      <button class="btn btn-outline" onclick="this.closest('.modal-bg').remove()">${t("btnClose")}</button>
      <button class="btn btn-primary" onclick="savePolicyEdit('${p.id}')">${t("btnSave")}</button>
    </div>
    <button class="btn btn-danger btn-sm" style="margin-top:10px" onclick="deletePolicy('${p.id}')">🗑️</button>
   </div>`;
  document.body.appendChild(modalBg);
}
function savePolicyEdit(id){
  const p = state.policies.find(x=>x.id===id);
  if(!p) return;
  const mobile = document.getElementById("edit_mobile_"+id).value.trim();
  const status = document.getElementById("edit_status_"+id).value;
  p.mobile = mobile; p.status = status;
  savePolicies();
  document.querySelectorAll(".modal-bg").forEach(m=>m.remove());
  renderList(); renderHome();
  showToast(t("saved"));
}
function deletePolicy(id){
  if(!confirm(t("confirmDelete"))) return;
  state.policies = state.policies.filter(x=>x.id!==id);
  savePolicies();
  document.querySelectorAll(".modal-bg").forEach(m=>m.remove());
  renderList(); renderHome();
}

/* ---------------- add policy ---------------- */
function submitAddPolicy(){
  const name = document.getElementById("a_name").value.trim();
  const mobile = document.getElementById("a_mobile").value.trim();
  const policyNo = document.getElementById("a_policyNo").value.trim();
  const doc = document.getElementById("a_doc").value;
  const mode = document.getElementById("a_mode").value;
  const planTerm = document.getElementById("a_planTerm").value.trim();
  const premium = Number(document.getElementById("a_premium").value)||0;
  const sa = Number(document.getElementById("a_sa").value)||0;
  const status = document.getElementById("a_status").value;

  if(!name || !policyNo || !doc || !mode || !premium){
    showToast(t("fillRequired")); return;
  }
  if(findPolicyByNo(policyNo)){
    showToast(t("duplicatePolicyNo")); return;
  }
  const docDate = fromISO(doc);
  const months = modeMonths(mode);
  const dueDate = months>0 ? toISO(addMonthsSafe(docDate, months)) : doc;

  state.policies.push({
    id: "p_"+Date.now(),
    policyNo, name, mobile, doc, dueDate, planTerm, mode, premium, sa, status
  });
  savePolicies();
  showToast(t("saved"));
  ["a_name","a_mobile","a_policyNo","a_doc","a_planTerm","a_premium","a_sa"].forEach(id=>document.getElementById(id).value="");
  goScreen("list");
}

/* ---------------- settings ---------------- */
function renderSettingsStatic(){
  if(!state.agent) return;
  document.getElementById("s_name").value = state.agent.name||"";
  document.getElementById("s_mobile").value = state.agent.mobile||"";
  document.getElementById("s_agentcode").value = state.agent.agentCode||"";
  document.getElementById("s_tagline").value = state.agent.tagline||"";
  if(state.agent.photo) document.getElementById("s_photoPreview").innerHTML = `<img src="${state.agent.photo}">`;
  if(state.agent.logo) document.getElementById("s_logoPreview").innerHTML = `<img src="${state.agent.logo}">`;
  if(state.agent.licLogo) document.getElementById("s_liclogoPreview").innerHTML = `<img src="${state.agent.licLogo}">`;
  populateThemeSwatches("s_themeSwatches", state.agent.themeColor);
  document.querySelectorAll('input[name="waApp"]').forEach(r=>{
    r.checked = (r.value === (state.agent.whatsappApp||"normal"));
  });
}
function saveSettingsBranding(){
  const name = document.getElementById("s_name").value.trim();
  const mobile = document.getElementById("s_mobile").value.trim();
  const agentcode = document.getElementById("s_agentcode").value.trim();
  const tagline = document.getElementById("s_tagline").value.trim();
  const photo = document.getElementById("s_photoPreview").dataset.value || state.agent.photo || "";
  const logo = document.getElementById("s_logoPreview").dataset.value || state.agent.logo || "";
  const licLogo = document.getElementById("s_liclogoPreview").dataset.value || state.agent.licLogo || "";
  const themeColor = document.getElementById("s_themeSwatches").dataset.value || state.agent.themeColor;

  state.agent = { ...state.agent, name, mobile, agentCode: agentcode, tagline, photo, logo, licLogo, themeColor };
  saveAgent();
  applyTheme(themeColor);
  document.getElementById("agentHeaderName").textContent = name;
  showToast(t("saved"));
}
function setWaApp(val){
  state.agent.whatsappApp = val;
  saveAgent();
  showToast(t("waSaved"));
}

/* ---------------- backup / restore ---------------- */
function downloadBackup(){
  const payload = { agent: state.agent, policies: state.policies, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(payload,null,1)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = todayISO().replace(/-/g,"");
  a.href = url; a.download = `lic-crm-backup-${stamp}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  showToast(t("backupDone"));
}
function handleRestore(ev){
  const file = ev.target.files[0];
  if(!file) return;
  if(!confirm(t("restoreConfirm"))){ ev.target.value=""; return; }
  const reader = new FileReader();
  reader.onload = e=>{
    try{
      const data = JSON.parse(e.target.result);
      state.agent = data.agent || null;
      state.policies = data.policies || [];
      saveAgent(); savePolicies();
      showToast(t("restoreDone"));
      boot();
    }catch(err){
      alert("Invalid backup file");
    }
  };
  reader.readAsText(file);
  ev.target.value = "";
}

/* ---------------- PDF: text line extraction ---------------- */
async function extractLinesFromPdf(file){
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({data: buf}).promise;
  const allLines = [];
  for(let pageNum=1; pageNum<=pdf.numPages; pageNum++){
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const byY = {};
    content.items.forEach(item=>{
      const y = Math.round(item.transform[5]);
      const x = item.transform[4];
      if(!byY[y]) byY[y] = [];
      byY[y].push({x, str:item.str});
    });
    const ys = Object.keys(byY).map(Number).sort((a,b)=>b-a); // top to bottom
    ys.forEach(y=>{
      const parts = byY[y].sort((a,b)=>a.x-b.x).map(p=>p.str);
      const line = parts.join(" ").replace(/\s+/g," ").trim();
      if(line) allLines.push(line);
    });
  }
  return allLines;
}
function extractAgentCode(lines){
  for(const l of lines){
    const m = l.match(/Agent\s*Code\s*:?\s*([A-Z0-9]+)/i);
    if(m) return m[1];
  }
  return "";
}
function agentCodesMatch(a, b){
  const na = normalizeAgentCode(a).replace(/^LIC/,"");
  const nb = normalizeAgentCode(b).replace(/^LIC/,"");
  return na && nb && (na===nb || na.includes(nb) || nb.includes(na));
}
function ddmmyyyyToISO(s){
  const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if(!m) return "";
  return `${m[3]}-${m[2]}-${m[1]}`;
}

/* ---------------- Commission Bill parsing ---------------- */
async function handleCommissionUpload(ev){
  const file = ev.target.files[0];
  if(!file) return;
  const statusBox = document.getElementById("pdfStatus");
  statusBox.innerHTML = `<p class="muted">⏳ ...</p>`;
  try{
    const lines = await extractLinesFromPdf(file);
    const pdfAgentCode = extractAgentCode(lines);
    if(pdfAgentCode && state.agent.agentCode && !agentCodesMatch(pdfAgentCode, state.agent.agentCode)){
      statusBox.innerHTML = `<p style="color:var(--danger)">${t("agentMismatch")}</p>`;
      ev.target.value=""; return;
    }
    const rowRe = /^(.+?)\s+(\d{9})\s+(\d{2,3}-\d{1,3})\s+(\d{2}\/\d{2}\/\d{4})\s+(\d{2}\/\d{2}\/\d{4})\s+([A-Z0-9]{2,6})\s+(\d{2}\/\d{2}\/\d{4})\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})$/;
    const matchedPolicies = [];
    const unmatched = [];
    lines.forEach(l=>{
      const m = l.match(rowRe);
      if(!m) return;
      const [, name, policyNo, plnTm, dueDt, riskDate, cbo, adjDate, premiumStr] = m;
      matchedPolicies.push({ name: name.trim(), policyNo, dueDt: ddmmyyyyToISO(dueDt), plnTm, premium: Math.round(parseFloat(premiumStr.replace(/,/g,""))) });
    });
    // guard: if the same policyNo appears twice in one PDF, only apply it once
    const seenInPdf = new Set();
    const dedupedMatches = matchedPolicies.filter(mp=>{
      if(seenInPdf.has(mp.policyNo)) return false;
      seenInPdf.add(mp.policyNo); return true;
    });
    let updated = 0;
    const newFromPdf = [];
    dedupedMatches.forEach(mp=>{
      const existing = state.policies.find(p=>p.policyNo === mp.policyNo);
      if(existing){
        // premium paid confirmed -> push due date to next cycle from PDF's DueDt, and sync the premium amount
        const months = modeMonths(existing.mode) || 12;
        const base = fromISO(mp.dueDt) || fromISO(existing.dueDate);
        existing.dueDate = toISO(addMonthsSafe(base, months));
        if(mp.premium) existing.premium = mp.premium;
        updated++;
      } else {
        newFromPdf.push(mp);
      }
    });
    savePolicies();
    renderHome(); renderList();

    let html = `<p class="match-summary">✅ ${t("commissionDone")} — ${updated} ${state.lang==='mr'?'पॉलिसींची Due Date अपडेट झाली':'policies updated'}.</p>`;
    if(newFromPdf.length){
      html += `<div class="mismatch-row"><b>${t("unmatchedTitle")} (${newFromPdf.length})</b></div>`;
      newFromPdf.forEach(np=>{
        html += `<div class="mismatch-row">${escapeHtml(np.name)} — ${np.policyNo}
          <button class="btn btn-sm btn-outline" style="margin-top:6px" onclick="addUnmatchedPolicy('${np.policyNo}','${escapeHtml(np.name).replace(/'/g,"")}','${np.dueDt}','${np.plnTm}')">${t("addToDb")}</button>
        </div>`;
      });
    }
    statusBox.innerHTML = html;
  }catch(err){
    console.error(err);
    statusBox.innerHTML = `<p style="color:var(--danger)">Error reading PDF: ${err.message}</p>`;
  }
  ev.target.value = "";
}
function addUnmatchedPolicy(policyNo, name, dueDt, plnTm){
  if(findPolicyByNo(policyNo)){ showToast(t("alreadyAdded")); return; }
  state.policies.push({
    id:"pdf_"+Date.now(), policyNo, name, mobile:"", doc:"", dueDate: dueDt,
    planTerm: plnTm, mode:"YLY", premium:0, sa:0, status:"In Force"
  });
  savePolicies();
  showToast(t("added"));
  renderHome(); renderList();
}
function addDueListPolicy(i){
  const np = (window.__dueListPending||[])[i];
  if(!np) return;
  if(findPolicyByNo(np.policyNo)){ showToast(t("alreadyAdded")); return; }
  const docDate = fromISO(np.doc);
  const day = docDate ? docDate.getDate() : 1;
  const lastDay = new Date(Number(np.fupYear), Number(np.fupMonth), 0).getDate();
  const dueDate = `${np.fupYear}-${np.fupMonth}-${pad2(Math.min(day,lastDay))}`;
  state.policies.push({
    id:"pdf_"+Date.now()+"_"+i, policyNo: np.policyNo, name: np.name, mobile:"",
    doc: np.doc||"", dueDate, planTerm: np.planTerm, mode: np.mode||"YLY",
    premium: np.premium||0, sa:0, status:"In Force"
  });
  savePolicies();
  showToast(t("added"));
  renderHome(); renderList();
}

/* ---------------- Premium Due List parsing (cross-check only) ---------------- */
async function handleDueListUpload(ev){
  const file = ev.target.files[0];
  if(!file) return;
  const statusBox = document.getElementById("pdfStatus");
  statusBox.innerHTML = `<p class="muted">⏳ ...</p>`;
  try{
    const lines = await extractLinesFromPdf(file);
    const pdfAgentCode = extractAgentCode(lines);
    if(pdfAgentCode && state.agent.agentCode && !agentCodesMatch(pdfAgentCode, state.agent.agentCode)){
      statusBox.innerHTML = `<p style="color:var(--danger)">${t("agentMismatch")}</p>`;
      ev.target.value=""; return;
    }
    // rows look like: SNo PolicyNo Name D.o.C Pln/Tm Mod FUP [Flg] InstPrem Due GST TotPrem EstCom
    const rowRe = /^\d+\s+(\d{9})\s+(.+?)\s+(\d{2}\/\d{2}\/\d{4})\s+(\d+\/\d+)\s+(Mly|Qly|Hly|Yly|Sgl)\s+(\d{2})\/(\d{4})\s+(?:[A-Z]{2}\s+)?([\d.]+)\s+(\d+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)$/i;
    const modeMap = { mly:"MLY", qly:"QLY", hly:"HLY", yly:"YLY", sgl:"SGL" };
    const rows = [];
    lines.forEach(l=>{
      const m = l.match(rowRe);
      if(m){
        rows.push({
          policyNo: m[1], name: m[2].trim(), doc: ddmmyyyyToISO(m[3]), planTerm: m[4],
          mode: modeMap[m[5].toLowerCase()], fupMonth: m[6], fupYear: m[7],
          premium: Math.round(parseFloat(m[8]))
        });
      }
    });
    let matchCount=0;
    const mismatches = [];
    const newFromPdf = [];
    rows.forEach(r=>{
      const existing = state.policies.find(p=>p.policyNo === r.policyNo);
      if(!existing){ newFromPdf.push(r); return; }
      const dd = fromISO(existing.dueDate);
      if(!dd) return;
      const dbMonth = pad2(dd.getMonth()+1), dbYear = String(dd.getFullYear());
      if(dbMonth===r.fupMonth && dbYear===r.fupYear){ matchCount++; }
      else{ mismatches.push({name:existing.name, policyNo:r.policyNo, db:`${dbMonth}/${dbYear}`, pdf:`${r.fupMonth}/${r.fupYear}`}); }
    });
    let html = `<p class="match-summary">✅ ${t("dueListDone")} — ${matchCount} ${state.lang==='mr'?'जुळल्या':'matched'}.</p>`;
    if(mismatches.length){
      html += `<div class="mismatch-row"><b>${t("mismatchTitle")} (${mismatches.length})</b></div>`;
      mismatches.forEach(mm=>{
        html += `<div class="mismatch-row">${escapeHtml(mm.name)} — ${mm.policyNo}: DB ${mm.db} ≠ PDF ${mm.pdf}</div>`;
      });
    }
    if(newFromPdf.length){
      html += `<div class="mismatch-row"><b>${t("unmatchedTitle")} (${newFromPdf.length})</b></div>`;
      newFromPdf.forEach((np,i)=>{
        const dueISO = toISO(addMonthsSafe(fromISO(`${np.fupYear}-${np.fupMonth}-01`), 0));
        window["__dl_"+i] = np;
        html += `<div class="mismatch-row">${escapeHtml(np.name)} — ${np.policyNo} (${np.planTerm}, ${np.mode})
          <button class="btn btn-sm btn-outline" style="margin-top:6px" onclick="addDueListPolicy(${i})">${t("addToDb")}</button>
        </div>`;
      });
      window.__dueListPending = newFromPdf;
    }
    statusBox.innerHTML = html;
  }catch(err){
    console.error(err);
    statusBox.innerHTML = `<p style="color:var(--danger)">Error reading PDF: ${err.message}</p>`;
  }
  ev.target.value = "";
}

/* ---------------- Poster generation ---------------- */
let currentPosterPolicy = null;
function openPoster(id){
  const p = state.policies.find(x=>x.id===id);
  if(!p) return;
  currentPosterPolicy = p;
  drawPoster(p);
  document.getElementById("posterModalBg").classList.remove("hidden");
  document.getElementById("posterSendBtn").onclick = ()=>downloadAndSend(p);
}
function closePosterModal(){
  document.getElementById("posterModalBg").classList.add("hidden");
}
function drawPoster(p){
  const canvas = document.getElementById("posterCanvas");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const theme = state.agent.themeColor || THEME_COLORS[0];

  // background gradient
  const grad = ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0, theme);
  grad.addColorStop(1, shadeColor(theme, -25));
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,W,H);

  // white content card
  const pad = 50;
  roundRect(ctx, pad, 220, W-pad*2, 760, 26);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  // LIC badge top-left of card
  if(state.agent.licLogo){
    const img = new Image();
    img.onload = ()=>{ ctx.drawImage(img, pad+30, 250, 110, 60); finishPosterText(ctx,p,theme,pad); };
    img.src = state.agent.licLogo;
  } else {
    drawLicPlaceholder(ctx, pad+30, 250);
    finishPosterText(ctx,p,theme,pad);
  }
}
function drawLicPlaceholder(ctx,x,y){
  ctx.save();
  ctx.fillStyle = "#0033A0";
  roundRect(ctx, x, y, 130, 56, 8); ctx.fill();
  ctx.fillStyle = "#FDB913";
  ctx.font = "700 26px Inter, sans-serif";
  ctx.textBaseline = "middle";
  ctx.fillText("LIC", x+18, y+30);
  ctx.restore();
}
function finishPosterText(ctx, p, theme, pad){
  const W = ctx.canvas.width;
  ctx.fillStyle = "#1B2430";
  ctx.textBaseline = "alphabetic";

  ctx.font = "800 30px 'Noto Sans Devanagari', Inter, sans-serif";
  ctx.fillText(state.lang==="mr" ? "प्रीमियम रिमाइंडर" : "Premium Reminder", pad+30, 250-15);

  let y = 350;
  const lineGap = 62;
  const rows = [
    [state.lang==="mr"?"पॉलिसीधारक":"Policyholder", p.name||"-"],
    ["Policy No", p.policyNo],
    [state.lang==="mr"?"ड्यू तारीख":"Due Date", fmtDMY(p.dueDate)],
    [state.lang==="mr"?"प्रीमियम":"Premium", moneyFmt(p.premium)],
    ["Sum Assured", moneyFmt(p.sa)],
    ["Plan / Mode", `${p.planTerm||""}  (${p.mode||""})`],
  ];
  rows.forEach(([label,val])=>{
    ctx.font = "600 22px 'Noto Sans Devanagari', Inter, sans-serif";
    ctx.fillStyle = "#6b7686";
    ctx.fillText(label, pad+30, y);
    ctx.font = "700 30px 'Noto Sans Devanagari', Inter, sans-serif";
    ctx.fillStyle = "#1B2430";
    ctx.fillText(String(val), pad+30, y+34);
    y += lineGap+20;
  });

  // agent branding footer
  const footY = 1030;
  ctx.fillStyle = theme;
  ctx.fillRect(0, footY, W, 320);

  const drawFooterText = ()=>{
    ctx.fillStyle = "#fff";
    ctx.font = "800 30px 'Noto Sans Devanagari', Inter, sans-serif";
    ctx.fillText(state.agent.name||"", 220, footY+80);
    ctx.font = "500 22px Inter, sans-serif";
    ctx.fillStyle = "#e3e8f5";
    ctx.fillText("📞 " + (state.agent.mobile||""), 220, footY+118);
    if(state.agent.tagline){
      ctx.font = "italic 500 20px 'Noto Sans Devanagari', Inter, sans-serif";
      ctx.fillText(state.agent.tagline, 220, footY+152);
    }
    ctx.font = "600 18px Inter, sans-serif";
    ctx.fillStyle = "#c9d3ea";
    ctx.fillText("LIC Agency Code: " + (state.agent.agentCode||""), 220, footY+188);
  };

  if(state.agent.photo){
    const img = new Image();
    img.onload = ()=>{
      ctx.save();
      ctx.beginPath();
      ctx.arc(140, footY+90, 70, 0, Math.PI*2);
      ctx.closePath(); ctx.clip();
      ctx.drawImage(img, 70, footY+20, 140,140);
      ctx.restore();
      drawFooterText();
    };
    img.src = state.agent.photo;
  } else {
    ctx.save();
    ctx.beginPath();
    ctx.arc(140, footY+90, 70, 0, Math.PI*2);
    ctx.fillStyle = "rgba(255,255,255,.25)";
    ctx.fill();
    ctx.restore();
    drawFooterText();
  }
}
function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}
function shadeColor(hex, percent){
  const num = parseInt(hex.replace("#",""),16);
  let r = (num>>16) + percent, g = (num>>8 & 0x00FF) + percent, b = (num & 0x0000FF) + percent;
  r = Math.min(255,Math.max(0,r)); g = Math.min(255,Math.max(0,g)); b = Math.min(255,Math.max(0,b));
  return "#" + (0x1000000 + r*0x10000 + g*0x100 + b).toString(16).slice(1);
}

/* ---------------- download + whatsapp send ---------------- */
function downloadAndSend(p){
  if(!p.mobile){ showToast(t("noPolicyMobile")); return; }
  const canvas = document.getElementById("posterCanvas");
  const link = document.createElement("a");
  link.download = `reminder-${p.policyNo}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link); link.click(); link.remove();

  const msg = encodeURIComponent(
    (state.lang==="mr"
      ? `नमस्कार ${p.name},\nआपल्या LIC पॉलिसी क्र. ${p.policyNo} चा प्रीमियम ${moneyFmt(p.premium)} दिनांक ${fmtDMY(p.dueDate)} रोजी ड्यू आहे. कृपया वेळेत भरा.\n- ${state.agent.name}, LIC एजंट`
      : `Hello ${p.name},\nYour LIC policy no. ${p.policyNo} premium of ${moneyFmt(p.premium)} is due on ${fmtDMY(p.dueDate)}. Please pay on time.\n- ${state.agent.name}, LIC Agent`)
  );
  const phone = "91" + p.mobile;
  const isAndroid = /android/i.test(navigator.userAgent);
  const pkg = state.agent.whatsappApp === "business" ? "com.whatsapp.w4b" : "com.whatsapp";
  let url;
  if(isAndroid){
    url = `intent://send?phone=${phone}&text=${msg}#Intent;scheme=smsto;package=${pkg};end`;
  } else {
    url = `https://wa.me/${phone}?text=${msg}`;
  }
  setTimeout(()=>{ window.location.href = url; }, 400);
  closePosterModal();
}

/* ---------------- init ---------------- */
document.addEventListener("DOMContentLoaded", boot);
