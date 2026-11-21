const $=id=>document.getElementById(id);
const COUNTRY={
 VN:{name:"VIỆT NAM",symbol:"🌸",tag:"LOTUS • HERITAGE • HORIZON",greeting:"Dành chỗ<br><em>cho điều quan trọng.</em>",subtitle:"Nhịp sống Việt Nam trong một thế giới tương lai.",holidays:{"01-01":"Tết Dương lịch","04-30":"Ngày Giải phóng miền Nam","05-01":"Quốc tế Lao động","09-02":"Quốc khánh"}},
 US:{name:"UNITED STATES",symbol:"🗽",tag:"CITY LIGHTS • FREEDOM • FUTURE",greeting:"Make room<br><em>for what matters.</em>",subtitle:"A calendar for bold ideas and everyday life.",holidays:{"01-01":"New Year's Day","07-04":"Independence Day","11-11":"Veterans Day","12-25":"Christmas Day"}},
 GB:{name:"UNITED KINGDOM",symbol:"🎡",tag:"ROYAL • CULTURE • MODERN",greeting:"Make room<br><em>for what matters.</em>",subtitle:"A thoughtful calendar, shaped around your world.",holidays:{"01-01":"New Year's Day","12-25":"Christmas Day","12-26":"Boxing Day"}},
 JP:{name:"日本 • JAPAN",symbol:"🌸",tag:"SAKURA • ZEN • TOMORROW",greeting:"大切なことに<br><em>時間を使おう。</em>",subtitle:"A calm space for your time, inspired by Japan.",holidays:{"01-01":"New Year's Day","02-11":"National Foundation Day","04-29":"Showa Day","11-03":"Culture Day"}},
 FR:{name:"FRANCE",symbol:"🗼",tag:"ART • ELEGANCE • LIGHT",greeting:"Faites place<br><em>à l’essentiel.</em>",subtitle:"Le temps, avec une touche de culture et de lumière.",holidays:{"01-01":"New Year's Day","05-01":"Labour Day","07-14":"Bastille Day","11-11":"Armistice Day","12-25":"Christmas Day"}},
 DE:{name:"DEUTSCHLAND",symbol:"🏰",tag:"DESIGN • PRECISION • FUTURE",greeting:"Schaffe Raum<br><em>für das Wesentliche.</em>",subtitle:"A clear calendar for a well-designed life.",holidays:{"01-01":"New Year's Day","05-01":"Labour Day","10-03":"German Unity Day","12-25":"Christmas Day"}},
 KR:{name:"대한민국 • KOREA",symbol:"🏙️",tag:"SEOUL • INNOVATION • CULTURE",greeting:"소중한 일에<br><em>시간을 내세요.</em>",subtitle:"A modern rhythm inspired by Korean culture.",holidays:{"01-01":"New Year's Day","03-01":"Independence Movement Day","08-15":"Liberation Day","10-03":"National Foundation Day"}},
 CN:{name:"中国 • CHINA",symbol:"🏮",tag:"TRADITION • HORIZON • ENERGY",greeting:"为重要的事<br><em>留出时间。</em>",subtitle:"A calendar connecting heritage and tomorrow.",holidays:{"01-01":"New Year's Day","05-01":"Labour Day","10-01":"National Day"}},
 AU:{name:"AUSTRALIA",symbol:"🦘",tag:"OCEAN • OPEN SKY • ENERGY",greeting:"Make room<br><em>for what matters.</em>",subtitle:"Your time, under wide-open skies.",holidays:{"01-01":"New Year's Day","01-26":"Australia Day","04-25":"ANZAC Day","12-25":"Christmas Day"}},
 CA:{name:"CANADA",symbol:"🍁",tag:"NATURE • MAPLE • BALANCE",greeting:"Make room<br><em>for what matters.</em>",subtitle:"A calmer way to organize life, wherever you are.",holidays:{"01-01":"New Year's Day","07-01":"Canada Day","12-25":"Christmas Day"}},
 IN:{name:"भारत • INDIA",symbol:"🪷",tag:"COLOR • WISDOM • POSSIBILITY",greeting:"Make room<br><em>for what matters.</em>",subtitle:"A vibrant calendar inspired by many traditions.",holidays:{"01-26":"Republic Day","08-15":"Independence Day","10-02":"Gandhi Jayanti","12-25":"Christmas Day"}},
 BR:{name:"BRASIL",symbol:"🌴",tag:"TROPICAL • JOY • MOVEMENT",greeting:"Make room<br><em>for what matters.</em>",subtitle:"Bring more color and rhythm to your everyday.",holidays:{"01-01":"New Year's Day","04-21":"Tiradentes Day","09-07":"Independence Day","12-25":"Christmas Day"}}
};
const LANG={
 vi:{eyebrow:"NHỊP THỜI GIAN CỦA BẠN",world:"THẾ GIỚI CỦA BẠN",countryHeading:"Giao diện theo quốc gia",countryDescription:"LUNARA kết hợp thẩm mỹ tương lai với cảm hứng văn hóa địa phương.",country:"Quốc gia",calendar:"LỊCH CỦA BẠN",today:"Hôm nay",agenda:"LỊCH TRÌNH",add:"Thêm sự kiện",empty:"Ngày này chưa có kế hoạch.",month:"Tháng",week:"Tuần",day:"Ngày",hint:"Sự kiện được lưu trên thiết bị này.",export:"Xuất dữ liệu",footer:"Thời gian của bạn. Thế giới của bạn.",days:["CN","T2","T3","T4","T5","T6","T7"],saved:"Đã lưu sự kiện",deleted:"Đã xóa sự kiện",personal:"Cá nhân",work:"Công việc",health:"Sức khỏe",travel:"Du lịch",other:"Khác",none:"Không lặp lại",daily:"Hằng ngày",weekly:"Hằng tuần",monthly:"Hằng tháng",yearly:"Hằng năm"},
 en:{eyebrow:"YOUR TIME, IN HARMONY",world:"YOUR WORLD",countryHeading:"A country-shaped experience",countryDescription:"LUNARA blends futuristic design with local cultural inspiration.",country:"Country",calendar:"YOUR CALENDAR",today:"Today",agenda:"YOUR AGENDA",add:"Add event",empty:"Nothing planned for this day.",month:"Month",week:"Week",day:"Day",hint:"Events are saved on this device.",export:"Export",footer:"Your time. Your world.",days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],saved:"Event saved",deleted:"Event deleted",personal:"Personal",work:"Work",health:"Health",travel:"Travel",other:"Other",none:"Does not repeat",daily:"Daily",weekly:"Weekly",monthly:"Monthly",yearly:"Yearly"}
};
const THEMES={VN:["#123c4a","#4ad9d0","#f1b66e"],US:["#192b58","#80a7ff","#f1c56b"],GB:["#202b50","#9ca9ff","#db8a9d"],JP:["#3b2344","#e9a7c4","#a6d9e9"],FR:["#30224f","#b59aff","#f0b86b"],DE:["#26252d","#e4b65c","#d6d6d6"],KR:["#202b4c","#91aaff","#ed8eb6"],CN:["#4a2029","#f0b86b","#ef7f6d"],AU:["#143c3a","#5bd4c2","#f4bd68"],CA:["#4a2632","#f08c9b","#d8e7ef"],IN:["#49301f","#ffb45d","#71cdb3"],BR:["#123e35","#54d6a4","#f2d36d"]};
const now=new Date();let anchor=new Date(now.getFullYear(),now.getMonth(),1),selected=iso(now),mode="month";
let lang=localStorage.getItem("lunara-v04-lang")||((navigator.language||"vi").startsWith("vi")?"vi":"en");
let country=localStorage.getItem("lunara-v04-country")||detectCountry();
let events=loadEvents(),notified=new Set();
function detectCountry(){
 const locale=(navigator.language||"").split("-")[1]?.toUpperCase();
 if(locale&&COUNTRY[locale])return locale;
 const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||"";
 const map={"Asia/Ho_Chi_Minh":"VN","Asia/Tokyo":"JP","Asia/Seoul":"KR","Asia/Shanghai":"CN","Europe/Paris":"FR","Europe/Berlin":"DE","Europe/London":"GB","America/New_York":"US","America/Los_Angeles":"US","America/Toronto":"CA","Australia/Sydney":"AU","Asia/Kolkata":"IN","America/Sao_Paulo":"BR"};
 return map[tz]||"US";
}
function loadEvents(){try{return JSON.parse(localStorage.getItem("lunara-v04-events")||localStorage.getItem("lunara-v03-events")||"[]")}catch(e){return []}}
function iso(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function parse(s){let [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)}
function tr(k){return (LANG[lang]||LANG.en)[k]??LANG.en[k]??k}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function holiday(d){return (COUNTRY[country]?.holidays||{})[iso(d).slice(5)]||""}
function occurs(e,d){const base=parse(e.date),cur=parse(iso(d));if(cur<base)return false;switch(e.repeat){case"daily":return true;case"weekly":return cur.getDay()===base.getDay();case"monthly":return cur.getDate()===base.getDate();case"yearly":return cur.getMonth()===base.getMonth()&&cur.getDate()===base.getDate();default:return iso(cur)===e.date}}
function dayEvents(d){return events.filter(e=>occurs(e,d)).sort((a,b)=>(a.time||"").localeCompare(b.time||""))}
function fmt(d,o){return new Intl.DateTimeFormat(lang,o).format(d)}
function eventBlock(e){return '<div class="day-event">'+(e.time?esc(e.time)+" · ":"")+esc(e.name)+'</div>'}
function cell(d,other){return '<button class="day '+(other?'other ':'')+(iso(d)===iso(now)?'today ':'')+(iso(d)===selected?'selected':'')+'" data-date="'+iso(d)+'"><span class="num">'+d.getDate()+'</span><span class="marks">'+(dayEvents(d).length?'<i></i>':'')+(holiday(d)?'<i class="holiday"></i>':'')+'</span></button>'}
function applyCountry(){
 const c=COUNTRY[country]||COUNTRY.US,colors=THEMES[country]||THEMES.US;
 $("app").dataset.country=country;$("artSymbol").textContent=c.symbol;$("artCountry").textContent=c.name;$("artTagline").textContent=c.tag;
 document.documentElement.style.setProperty("--country-a",colors[0]);document.documentElement.style.setProperty("--country-b",colors[1]);document.documentElement.style.setProperty("--country-c",colors[2]);
 $("greeting").innerHTML=c.greeting;$("subtitle").textContent=c.subtitle;
 $("country").value=country;
}
function renderCalendar(){
 const t=LANG[lang]||LANG.en,g=$("calendarGrid");let title="";
 if(mode==="month"){title=fmt(anchor,{month:"long",year:"numeric"});let first=new Date(anchor.getFullYear(),anchor.getMonth(),1),start=new Date(first);start.setDate(1-first.getDay());let h='<div class="weekdays">'+t.days.map(x=>'<div>'+x+'</div>').join("")+'</div><div class="month-grid">';for(let i=0;i<42;i++){let d=new Date(start);d.setDate(start.getDate()+i);h+=cell(d,d.getMonth()!==anchor.getMonth())}g.innerHTML=h+'</div>'}
 else if(mode==="week"){let s=parse(selected);s.setDate(s.getDate()-s.getDay());let e=new Date(s);e.setDate(s.getDate()+6);title=fmt(s,{month:"short",day:"numeric"})+" – "+fmt(e,{month:"short",day:"numeric",year:"numeric"});let h='<div class="weekdays">'+t.days.map(x=>'<div>'+x+'</div>').join("")+'</div><div class="week-grid">';for(let i=0;i<7;i++){let d=new Date(s);d.setDate(s.getDate()+i);h+='<div class="day-col '+(iso(d)===selected?'selected':'')+'" data-date="'+iso(d)+'"><strong>'+t.days[d.getDay()]+' '+d.getDate()+'</strong><small>'+esc(holiday(d))+'</small>'+dayEvents(d).map(eventBlock).join("")+'</div>'}g.innerHTML=h+'</div>'}
 else{let d=parse(selected);title=fmt(d,{weekday:"long",month:"long",day:"numeric",year:"numeric"});g.innerHTML='<div class="single-day"><h3>'+esc(title)+'</h3>'+(holiday(d)?'<div class="day-event holiday-event">'+esc(holiday(d))+'</div>':'')+dayEvents(d).map(eventBlock).join("")+'</div>'}
 $("periodTitle").textContent=title;$("selectedTitle").textContent=fmt(parse(selected),{weekday:"long",day:"numeric",month:"long"});
 g.querySelectorAll("[data-date]").forEach(el=>el.addEventListener("click",()=>{selected=el.dataset.date;anchor=new Date(parse(selected).getFullYear(),parse(selected).getMonth(),1);render()}));
}
function renderAgenda(){let a=dayEvents(parse(selected));$("eventList").innerHTML=a.length?a.map(e=>'<div class="event-item"><span class="event-bar"></span><div class="event-info"><strong>'+esc(e.name)+'</strong><small>'+(e.time||"—")+' · '+tr(e.category||"personal")+(e.repeat&&e.repeat!=="none"?' · ↻ '+tr(e.repeat):"")+(e.reminder?" · ⏰":"")+'</small></div><button class="delete-btn" data-id="'+e.id+'">×</button></div>').join(""):'<div class="empty">'+tr("empty")+'</div>';document.querySelectorAll(".delete-btn").forEach(b=>b.onclick=()=>{events=events.filter(e=>e.id!==b.dataset.id);persist();render();toast(tr("deleted"))})}
function render(){let map={eyebrow:"eyebrow",countryEyebrow:"world",countryHeading:"countryHeading",countryDescription:"countryDescription",countryLabel:"country",calendarLabel:"calendar",today:"today",agendaLabel:"agenda",footerText:"footer",monthView:"month",weekView:"week",dayView:"day",addLabel:"add",agendaHint:"hint",exportLabel:"export"};for(const [id,k] of Object.entries(map))if($(id))$(id).textContent=tr(k);$("timezoneValue").textContent=Intl.DateTimeFormat().resolvedOptions().timeZone||"Local";document.documentElement.lang=lang;document.querySelectorAll(".view-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===mode));applyCountry();renderCalendar();renderAgenda()}
function persist(){localStorage.setItem("lunara-v04-events",JSON.stringify(events))}
function toast(s){let e=$("toast");e.textContent=s;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),2200)}
function shift(n){if(mode==="month")anchor.setMonth(anchor.getMonth()+n);else{let d=parse(selected);d.setDate(d.getDate()+n*(mode==="week"?7:1));selected=iso(d);anchor=new Date(d.getFullYear(),d.getMonth(),1)}render()}
$("prev").onclick=()=>shift(-1);$("next").onclick=()=>shift(1);$("today").onclick=()=>{selected=iso(new Date());anchor=new Date(new Date().getFullYear(),new Date().getMonth(),1);render()};
document.querySelectorAll(".view-btn").forEach(b=>b.onclick=()=>{mode=b.dataset.view;render()});
$("country").onchange=e=>{country=e.target.value;localStorage.setItem("lunara-v04-country",country);render()};
$("language").value=lang;$("language").onchange=e=>{lang=e.target.value;localStorage.setItem("lunara-v04-lang",lang);render()};
$("themeBtn").onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("lunara-v04-theme",document.body.classList.contains("light")?"light":"dark")};
if(localStorage.getItem("lunara-v04-theme")==="light")document.body.classList.add("light");
function closeModal(){$("modal").classList.add("hidden")}
$("addEvent").onclick=()=>{$("eventForm").reset();$("eventDate").value=selected;$("modal").classList.remove("hidden")};$("closeModal").onclick=closeModal;$("cancelEvent").onclick=closeModal;
$("eventForm").onsubmit=async e=>{e.preventDefault();let date=$("eventDate").value,time=$("eventTime").value,reminder=$("eventReminder").checked,name=$("eventName").value.trim();if(!name||!date)return;if(reminder&&"Notification"in window&&Notification.permission==="default"){try{await Notification.requestPermission()}catch(x){}}events.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),name,date,time,reminder,category:$("eventCategory").value,repeat:$("eventRepeat").value});selected=date;anchor=new Date(parse(date).getFullYear(),parse(date).getMonth(),1);persist();closeModal();render();toast(tr("saved"))};
$("exportBtn").onclick=()=>{let blob=new Blob([JSON.stringify(events,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="lunara-events.json";a.click();URL.revokeObjectURL(url)};
setInterval(()=>{let n=Date.now();for(let e of events){if(!e.reminder||!e.time||notified.has(e.id))continue;let at=new Date(e.date+"T"+e.time+":00").getTime();if(at<=n&&at>n-60000){notified.add(e.id);toast("LUNARA · "+e.name);if("Notification"in window&&Notification.permission==="granted")new Notification("LUNARA",{body:e.name})}}},15000);
render();
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
