/* Shared script. STAFF: edit the lists below to update the site without a server. */
var PUBS=[ // [title, authors, year, topic, type, DOI (blank if none)]
["A Handbook of Behali Reserved Forest","P.K. Borah, R. Upadhaya, S. Mahanta, S. Dutta","2009","Forest overview","Book",""],
["Chlorophytum assamicum, a new species from Northeast India","D. Borah, P. Kafley, A.P. Das, S. Tangjang, L. Averyanov","2019","Plants","Paper","10.11646/phytotaxa.394.1.12"],
["Aristolochia assamica, a new species from the East Himalayas","D. Borah, M. Taram, A.P. Das, S. Tangjang, T.V. Do","2019","Plants","Paper","10.5735/085.056.0410"],
["Peliosanthes macrophylla var. assamensis, a new variety from Behali Reserve Forest","D. Borah, M. Taram, S. Tangjang, A. Upadhyaya, N. Tanaka","2020","Plants","Paper","10.3767/blumea.2020.65.02.05"],
["Rediscovery of Tupistra stoliczkana in northeastern India","D. Borah, N. Tanaka, L. Averyanov, M. Taram, D.K. Roy","2020","Plants","Paper","10.11646/phytotaxa.443.2.8"],
["Assessment of non-timber forest products in Behali Reserve Forest","D. Borah, S. Tangjang, A.P. Das, A. Upadhaya, P. Mipun","2020","Forest products","Paper","10.32859/era.19.43.1-15"],
["Woody species diversity and composition along a disturbance gradient in Behali Reserve Forest","D. Borah, B. Das, S. Tangjang, A.P. Das, A.A. Khapugin","2021","Plants","Paper","10.12775/EQ.2021.009"]];
var NEWS=[]; // add notices as ["Title","news.html or file link"]
var GAL=[]; // add photos as ["assets/photo1.jpg","Alt text describing the photo"]
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}
function $(i){return document.getElementById(i)}
var pg=document.body.getAttribute("data-page");
[].forEach.call(document.querySelectorAll("nav a"),function(a){if(a.getAttribute("data-p")==pg)a.classList.add("on")});
var mb=$("mb"),nv=$("nv");mb.onclick=function(){mb.setAttribute("aria-expanded",nv.classList.toggle("open"))};
function pubs(f){$("pb").innerHTML=PUBS.filter(function(p){return f=="all"||p[4]==f}).map(function(p){return "<tr><td>"+esc(p[0])+"<br><span class='pill'>"+p[4]+"</span></td><td>"+esc(p[1])+"</td><td>"+p[2]+"</td><td>"+esc(p[3])+"</td><td>"+(p[5]?"<a class='view' href='https://doi.org/"+p[5]+"' target='_blank' rel='noopener'>View</a>":"<span class='tbc'>no link yet</span>")+"</td></tr>"}).join("")}
if($("pb")){pubs("all");$("pf").onclick=function(e){var f=e.target.getAttribute("data-f");if(!f)return;[].forEach.call(this.children,function(b){b.className=b==e.target?"on":""});pubs(f)}}
if($("nl"))$("nl").innerHTML=NEWS.length?NEWS.map(function(n){return "<a class='card' href='"+esc(n[1])+"'><b>"+esc(n[0])+"</b></a>"}).join(""):"<div class='card'>No notices at present.</div>";
if($("gl"))$("gl").innerHTML=GAL.length?GAL.map(function(g){return "<img src='"+esc(g[0])+"' alt='"+esc(g[1])+"' loading='lazy'>"}).join(""):[1,2,3,4,5,6].map(function(){return "<div role='img' aria-label='Photo to be added'></div>"}).join("");
