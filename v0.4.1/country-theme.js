/* LUNARA v0.4.1 — Country Visual Theme Engine
   Local SVG artwork: no third-party image host or tracking request. */
(() => {
  "use strict";
  const scenes = {
    VN: {name:"VIỆT NAM",symbol:"🌸",tag:"LOTUS • HERITAGE • HORIZON",a:"#123b50",b:"#55d7c7",c:"#f2bb72",shape:'<path d="M190 170 Q150 105 125 155 Q157 194 190 170 Q223 194 255 155 Q230 105 190 170Z" fill="#f3b8c9"/><path d="M190 170 Q183 116 190 92 Q211 130 190 170Z" fill="#fff0d8"/><path d="M65 180 V128 L95 105 L125 128 V180" fill="#d9b17b"/>'},
    US: {name:"UNITED STATES",symbol:"🗽",tag:"CITY LIGHTS • FREEDOM • FUTURE",a:"#1a2b55",b:"#8db5ff",c:"#f0c56e",shape:'<path d="M190 75 L178 105 L164 112 L171 126 L166 175 H214 L209 126 L216 112 L202 105Z" fill="#9ed3c6"/><path d="M190 65 V36 M173 88 L151 75 M207 88 L229 75" stroke="#9ed3c6" stroke-width="7" stroke-linecap="round"/><path d="M35 180 V135 H65 V180 M75 180 V115 H105 V180 M270 180 V125 H300 V180" fill="#9bb4db"/>'},
    GB: {name:"UNITED KINGDOM",symbol:"🎡",tag:"ROYAL • CULTURE • MODERN",a:"#202b50",b:"#a6b5ff",c:"#df9eae",shape:'<path d="M176 72 H204 V95 H219 V178 H161 V95 H176Z" fill="#c6c8e8"/><circle cx="190" cy="111" r="13" fill="#253354"/><path d="M190 111 L190 101 M190 111 L199 116" stroke="#f2c16b" stroke-width="3"/>'},
    JP: {name:"日本 • JAPAN",symbol:"🌸",tag:"SAKURA • ZEN • TOMORROW",a:"#442b50",b:"#f2a9c9",c:"#b5dce8",shape:'<path d="M90 183 L168 75 L204 125 L230 92 L300 183Z" fill="#d9c9dd"/><path d="M150 100 L168 75 L184 98 L173 94 L165 105Z" fill="#fff4f4"/><g fill="#f3a9c7"><circle cx="92" cy="80" r="6"/><circle cx="112" cy="62" r="5"/><circle cx="285" cy="73" r="6"/></g>'},
    FR: {name:"FRANCE",symbol:"🗼",tag:"ART • ELEGANCE • LIGHT",a:"#30244f",b:"#c0a3ff",c:"#f2c17b",shape:'<path d="M190 52 L151 180 H229Z" fill="none" stroke="#e9c6a2" stroke-width="8"/><path d="M165 137 H215 M174 108 H206 M183 78 H197 M145 180 H235" stroke="#e9c6a2" stroke-width="6"/>'},
    DE: {name:"DEUTSCHLAND",symbol:"🏰",tag:"DESIGN • PRECISION • FUTURE",a:"#292b37",b:"#e8bd67",c:"#d8dce7",shape:'<path d="M115 180 V116 L142 96 L164 116 V88 L190 65 L216 88 V116 L238 96 L265 116 V180Z" fill="#d6c9a7"/><path d="M180 180 V135 Q190 113 200 135 V180" fill="#424456"/>'},
    KR: {name:"대한민국 • KOREA",symbol:"🏙️",tag:"SEOUL • INNOVATION • CULTURE",a:"#202c50",b:"#9eb7ff",c:"#f09abb",shape:'<path d="M95 180 V110 H130 V180 M140 180 V76 H175 V180 M185 180 V95 H220 V180 M230 180 V60 H265 V180" fill="#a8c6df"/><path d="M151 76 L157 56 L164 76 M241 60 L247 39 L254 60" stroke="#f5b5cf" stroke-width="4"/>'},
    CN: {name:"中国 • CHINA",symbol:"🏮",tag:"TRADITION • HORIZON • ENERGY",a:"#512832",b:"#f3c16b",c:"#ee8b72",shape:'<path d="M190 65 L130 91 H250Z M142 96 H238 L224 111 H156Z M153 116 H227 L216 132 H164Z M164 137 H216 L208 151 H172Z M174 155 H206 V180 H174Z" fill="#efb86e"/><path d="M190 40 V65" stroke="#f7d7a0" stroke-width="4"/>'},
    AU: {name:"AUSTRALIA",symbol:"🦘",tag:"OCEAN • OPEN SKY • ENERGY",a:"#164348",b:"#62d8c7",c:"#f1c477",shape:'<path d="M110 170 Q105 120 165 91 Q154 131 178 170Z M175 170 Q168 112 226 77 Q211 133 240 170Z" fill="#d8e8e8"/><path d="M95 180 H280" stroke="#e7c98b" stroke-width="5"/>'},
    CA: {name:"CANADA",symbol:"🍁",tag:"NATURE • MAPLE • BALANCE",a:"#4b2938",b:"#f39bad",c:"#d8e9f1",shape:'<path d="M190 58 L205 92 L226 81 L218 108 L245 118 L215 132 L224 151 L197 145 L190 178 L181 145 L154 151 L164 132 L135 118 L162 108 L154 81 L175 92Z" fill="#f28c9c"/>'},
    IN: {name:"भारत • INDIA",symbol:"🪷",tag:"COLOR • WISDOM • POSSIBILITY",a:"#53351f",b:"#ffc06d",c:"#75d0b2",shape:'<path d="M125 180 V112 Q125 88 150 88 Q175 88 175 112 V180 M205 180 V112 Q205 88 230 88 Q255 88 255 112 V180" fill="#f2dfc3"/><path d="M145 180 V130 Q190 75 235 130 V180Z" fill="#fff0d7"/><path d="M185 180 V145 Q190 135 195 145 V180" fill="#b88d68"/>'},
    BR: {name:"BRASIL",symbol:"🌴",tag:"TROPICAL • JOY • MOVEMENT",a:"#17483d",b:"#60d7a6",c:"#f1d56f",shape:'<path d="M190 62 V160 M150 94 L190 116 L230 94 M172 160 L190 177 L208 160" stroke="#d9e8d7" stroke-width="13" stroke-linecap="round"/><path d="M105 180 Q130 135 155 180 M225 180 Q250 135 275 180" fill="#54aa79"/>'}
  };
  const $ = id => document.getElementById(id);
  function svgFor(s) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220"><defs><linearGradient id="g" x2="0" y2="1"><stop stop-color="${s.a}"/><stop offset="1" stop-color="${s.a}" stop-opacity=".78"/></linearGradient><radialGradient id="r"><stop stop-color="${s.b}" stop-opacity=".8"/><stop offset="1" stop-color="${s.b}" stop-opacity="0"/></radialGradient></defs><rect width="380" height="220" fill="url(#g)"/><circle cx="285" cy="50" r="100" fill="url(#r)"/><circle cx="285" cy="50" r="27" fill="${s.c}" opacity=".78"/><path d="M0 178 Q80 140 150 178 T300 170 T380 180 V220 H0Z" fill="${s.a}"/><g>${s.shape}</g><path d="M0 198 Q80 181 150 198 T300 193 T380 200" fill="none" stroke="${s.b}" stroke-opacity=".65" stroke-width="2"/><g fill="${s.b}" opacity=".65"><circle cx="45" cy="45" r="2"/><circle cx="80" cy="88" r="2"/><circle cx="330" cy="120" r="2"/><circle cx="310" cy="155" r="2"/></g></svg>`;
  }
  function dataImage(s) { return `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgFor(s))}")`; }
  function apply() {
    const code = ($("country") && $("country").value) || localStorage.getItem("lunara-v04-country") || "VN";
    const s = scenes[code] || scenes.US;
    const root = document.documentElement;
    root.style.setProperty("--country-a", s.a);
    root.style.setProperty("--country-b", s.b);
    root.style.setProperty("--country-c", s.c);
    root.style.setProperty("--country-scene", dataImage(s));
    const app = $("app");
    if (app) app.dataset.country = code;
    const art = $("countryArt");
    if (art) {
      art.dataset.country = code;
      const name = $("artCountry"), tag = $("artTagline"), symbol = $("artSymbol");
      if (name) name.textContent = s.name;
      if (tag) tag.textContent = s.tag;
      if (symbol) symbol.textContent = s.symbol;
    }
  }
  function init() {
    apply();
    const picker = $("country");
    if (picker) picker.addEventListener("change", () => setTimeout(apply, 0));
    const app = $("app");
    if (app && "MutationObserver" in window) {
      new MutationObserver(apply).observe(app, {attributes:true, attributeFilter:["data-country"]});
    }
    window.addEventListener("pageshow", apply);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) apply(); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
