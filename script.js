const titles={overview:"Overview",markets:"Markets",wallet:"Wallet",trade:"Trade",referrals:"Referrals",security:"Security",admin:"Admin Demo"};
document.querySelectorAll(".nav[data-page]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
function showPage(name){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));document.getElementById(name).classList.add("active");document.querySelectorAll(".nav[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===name));document.getElementById("pageTitle").textContent=titles[name];document.querySelector(".sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"})}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2600)}
function filterMarkets(q){q=q.toLowerCase();document.querySelectorAll("#marketTable tbody tr").forEach(r=>r.style.display=r.textContent.toLowerCase().includes(q)?"":"none")}
const prices={BTC:"$68,420.00",ETH:"$3,245.00",ENK:"$0.84",USDT:"$1.00"};
function selectAsset(a){document.getElementById("tradeAsset").value=a;document.getElementById("tradePrice").firstChild.textContent=prices[a]+" ";document.querySelectorAll(".asset").forEach(x=>x.classList.toggle("active",x.textContent===a))}
function copyCode(){navigator.clipboard?.writeText("ENK-DEMO24");toast("Referral code copied.")}
function toggle(el){el.classList.toggle("on");toast(el.classList.contains("on")?"Security setting enabled":"Security setting disabled")}
