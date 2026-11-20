/* Behali Wildlife Sanctuary: ONE shared script. It builds the single header and footer for every page,
   so edit the header, footer, contact details and data lists here only. */
var SITE={
 office:"Range Forest Office, Borgang Range, Biswanath, Assam",
 phone:"+91 90000 00001, +91 90000 00002", // PLACEHOLDER: replace with the real numbers
 email:"john.doe@example.com", // PLACEHOLDER: replace with the real email
 counterUrl:"" // VISITOR COUNTER: see the note at the bottom of this file
};
var NAV=[["index","Home"],["about","Our Story"],["wildlife","Wildlife"],["notifications","Notifications"],["publications","Publications"],["news","Latest News"],["gallery","Gallery"],["faq","FAQ / Fees"],["contact","Contact"]];
var LINKS=[["CMO Assam","https://cm.assam.gov.in/"],["National Tiger Conservation Authority","https://ntca.gov.in/"],["Assam Barta","https://asombarta.com/"],["MoEFCC","https://moef.gov.in/en/"],["Assam Forest","https://forest.assam.gov.in/"],["WCCB","http://wccb.gov.in/"],["Wildlife Institute of India","https://wii.gov.in/"]];
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}
var pg=document.body.getAttribute("data-page");
$("site-header").innerHTML='<a class="skip" href="#main">Skip to content</a><div class="notice" role="status">Jeep safari booking is not available for the time being. Please check back for updates.</div><header class="top"><div class="bar"><!-- TEMPORARY LOGO (Nameri). Replace assets/logo-temporary.png with the Behali logo. --><img src="assets/logo-temporary.png" alt="Behali Wildlife Sanctuary logo (temporary)"><a class="brand" href="index.html">Behali Wildlife Sanctuary<small>Biswanath, Assam. Forest Department, Government of Assam</small></a><button id="mb" aria-expanded="false" aria-controls="nv">Menu</button><nav id="nv" aria-label="Main"><ul>'+NAV.map(function(n){return '<li><a href="'+n[0]+'.html"'+(n[0]==pg?' class="on"':'')+'>'+n[1]+'</a></li>'}).join("")+'<li><a class="bk" href="book.html">Book Now</a></li></ul></nav></div></header><div class="side"><a href="#" aria-label="YouTube">YouTube</a><a href="#" aria-label="Instagram">Instagram</a><a href="#" aria-label="X">X</a></div><a class="btn fbook" href="book.html">Book Now</a>';
$("site-footer").innerHTML='<footer><div class="wrap"><div class="fg"><div><h3>Quick links</h3><a href="index.html">Home</a><a href="about.html">About</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact us</a><a href="admin.html">Admin login</a></div><div><h3>Service list</h3><a href="faq.html">FAQ</a><a href="terms.html">Terms &amp; conditions</a><a href="copyright.html">Copyright</a><a href="privacy.html">Privacy policy</a></div><div><h3>Important links</h3>'+LINKS.map(function(l){return '<a href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+'</a>'}).join("")+'</div><div><h3>Contact us</h3><p style="font-size:15px">'+esc(SITE.office)+'<br>Phone: '+esc(SITE.phone)+'<br>Email: <a style="display:inline" href="mailto:'+esc(SITE.email)+'">'+esc(SITE.email)+'</a></p></div></div><div class="cp">© Forest Department, Government of Assam. All rights reserved.</div></div></footer>';
var mb=$("mb"),nv=$("nv");mb.onclick=function(){mb.setAttribute("aria-expanded",nv.classList.toggle("open"))};
if($("so"))$("so").textContent=SITE.office;if($("sp"))$("sp").textContent=SITE.phone;if($("se")){$("se").textContent=SITE.email;$("se").href="mailto:"+SITE.email}

/* PUBLICATIONS. [title, authors, year, topic, type, DOI (blank if none)]
   ADD AN ENTRY: add a row to PUBS using an existing type key from CATS.
   ADD A CATEGORY: add a pair to CATS, [key, "Button label"] (for example ["Thesis","Theses"]), then use that key as the type in PUBS.
   Optional link: use a full web address in the last field instead of a DOI (anything starting with http). */
var CATS=[["Book","Books"],["Paper","Research papers"],["Report","Reports"]];
var PUBS=[
["A Handbook of Behali Reserved Forest","P.K. Borah, R. Upadhaya, S. Mahanta, S. Dutta","2009","Forest overview","Book",""],
["Chlorophytum assamicum, a new species from Northeast India","D. Borah, P. Kafley, A.P. Das, S. Tangjang, L. Averyanov","2019","Plants","Paper","10.11646/phytotaxa.394.1.12"],
["Aristolochia assamica, a new species from the East Himalayas","D. Borah, M. Taram, A.P. Das, S. Tangjang, T.V. Do","2019","Plants","Paper","10.5735/085.056.0410"],
["Peliosanthes macrophylla var. assamensis, a new variety from Behali Reserve Forest","D. Borah, M. Taram, S. Tangjang, A. Upadhyaya, N. Tanaka","2020","Plants","Paper","10.3767/blumea.2020.65.02.05"],
["Rediscovery of Tupistra stoliczkana in northeastern India","D. Borah, N. Tanaka, L. Averyanov, M. Taram, D.K. Roy","2020","Plants","Paper","10.11646/phytotaxa.443.2.8"],
["Assessment of non-timber forest products in Behali Reserve Forest","D. Borah, S. Tangjang, A.P. Das, A. Upadhaya, P. Mipun","2020","Forest products","Paper","10.32859/era.19.43.1-15"],
["Woody species diversity and composition along a disturbance gradient in Behali Reserve Forest","D. Borah, B. Das, S. Tangjang, A.P. Das, A.A. Khapugin","2021","Plants","Paper","10.12775/EQ.2021.009"]
/* ,["Report title","Author or office","2026","Topic","Report","https://link-to-the-report"] */];
function pubs(f){var r=PUBS.filter(function(p){return f=="all"||p[4]==f});
$("pb").innerHTML=r.length?r.map(function(p){var u=p[5]?(p[5].indexOf("http")==0?p[5]:"https://doi.org/"+p[5]):"";return "<tr><td>"+esc(p[0])+"<br><span class='pill'>"+esc(p[4])+"</span></td><td>"+esc(p[1])+"</td><td>"+esc(p[2])+"</td><td>"+esc(p[3])+"</td><td>"+(u?"<a class='view' href='"+esc(u)+"' target='_blank' rel='noopener'>View</a>":"<span class='tbc'>no link yet</span>")+"</td></tr>"}).join(""):"<tr><td colspan='5'>No entries in this category yet.</td></tr>"}
if($("pb")){$("pf").innerHTML='<button class="on" data-f="all">All</button>'+CATS.map(function(c){return '<button data-f="'+esc(c[0])+'">'+esc(c[1])+'</button>'}).join("");pubs("all");
$("pf").onclick=function(e){var f=e.target.getAttribute("data-f");if(!f)return;[].forEach.call(this.children,function(b){b.className=b==e.target?"on":""});pubs(f)}}

/* NEWS: add notices as ["Title","link"] */
var NEWS=[];
if($("nl"))$("nl").innerHTML=NEWS.length?NEWS.map(function(n){return "<a class='card' href='"+esc(n[1])+"'><b>"+esc(n[0])+"</b></a>"}).join(""):"<div class='card'>No notices at present.</div>";

/* VISITOR COUNTER. A web page cannot count all visitors by itself; it needs a small counting service.
   Set SITE.counterUrl to a service that returns JSON like {"count":1234}. This script adds ?hit=1 on a
   browser's first visit (and ?view=1 afterwards) and shows the total. Until a URL is set it shows a dash. */
if($("vc")){var el=$("vc"),seen="";try{seen=localStorage.getItem("bwls_seen")||""}catch(e){}
if(!SITE.counterUrl)el.textContent="—";else fetch(SITE.counterUrl+(seen?"?view=1":"?hit=1")).then(function(r){return r.json()}).then(function(d){el.textContent=Number(d.count).toLocaleString("en-IN");try{localStorage.setItem("bwls_seen","1")}catch(e){}}).catch(function(){el.textContent="—"})}

/* GALLERY. ADD AN ALBUM: copy one block below, give it a new id, title and description.
   category = the filter button it appears under (a new category name creates a new button automatically).
   year = the year filter. cover = path to the cover photo (leave "" for a plain green tile).
   photos = [{src:"images/gallery/birds/photo1.jpeg", caption:"Short description of the photo"}, ...]
   Put the image files in the images/gallery folder. */
var ALBUMS=[
{id:"birds",title:"Birds",category:"Birds",year:"2026-27",date:"",description:"Hornbills, eagles, kingfishers and other birds of Behali.",cover:"",photos:[]},
{id:"animals",title:"Animals",category:"Animals",year:"2026-27",date:"",description:"Elephants, deer, langurs and other mammals.",cover:"",photos:[]},
{id:"plants",title:"Plants",category:"Plants",year:"2026-27",date:"",description:"Orchids, figs and other flora of the forest.",cover:"",photos:[]},
{id:"range-office",title:"Range Office Activities",category:"Range Office Activities",year:"2026-27",date:"",description:"Patrolling, plantation drives and community work by the Borgang Range.",cover:"",photos:[]},
{id:"tourists",title:"Tourists",category:"Tourists",year:"2026-27",date:"",description:"Visitors exploring the sanctuary.",cover:"",photos:[]},
{id:"landscapes",title:"Landscapes",category:"Landscapes",year:"2026-27",date:"",description:"Forest, rivers and hills of Behali.",cover:"",photos:[]}];
if($("albumGrid")){var cat="all",cur=[],ci=0,last=null;
function filt(){return ALBUMS.filter(function(a){return(cat=="all"||a.category==cat)&&($("yearFilter").value=="all"||a.year==$("yearFilter").value)})}
function filters(){var cs=[];ALBUMS.forEach(function(a){if(cs.indexOf(a.category)<0)cs.push(a.category)});
$("categoryFilters").innerHTML='<button data-c="all" class="'+(cat=="all"?"on":"")+'">All albums</button>'+cs.map(function(c){return '<button data-c="'+esc(c)+'" class="'+(cat==c?"on":"")+'">'+esc(c)+'</button>'}).join("");
var ys=[];ALBUMS.forEach(function(a){if(ys.indexOf(a.year)<0)ys.push(a.year)});var v=$("yearFilter").value||"all";
$("yearFilter").innerHTML='<option value="all">All years</option>'+ys.map(function(y){return '<option>'+esc(y)+'</option>'}).join("");$("yearFilter").value=v}
function albums(){var l=filt();$("albumView").hidden=true;$("albumGrid").hidden=false;$("galleryEmpty").hidden=l.length>0;$("albumCount").textContent=l.length+" albums";
$("albumGrid").innerHTML=l.map(function(a,i){return '<button class="album-card" data-i="'+ALBUMS.indexOf(a)+'" aria-label="Open '+esc(a.title)+' album"><div class="album-cover">'+(a.cover?'<img src="'+esc(a.cover)+'" alt="'+esc(a.title)+'" loading="lazy">':'')+'</div><div class="album-details"><span class="eyebrow">'+esc(a.category)+'</span><h3>'+esc(a.title)+'</h3><p>'+esc(a.description)+'</p><div class="meta"><span>'+esc(a.year)+'</span><span>'+a.photos.length+' photos</span></div></div></button>'}).join("")}
function open_(a){$("albumGrid").hidden=true;$("galleryEmpty").hidden=true;$("albumView").hidden=false;$("albumTitle").textContent=a.title;$("albumCategory").textContent=a.category+" · "+a.year;$("albumDescription").textContent=a.description;
$("photoGrid").innerHTML=a.photos.length?a.photos.map(function(p,i){return '<button class="gallery-photo" data-i="'+i+'" aria-label="View '+esc(p.caption)+'"><img src="'+esc(p.src)+'" alt="'+esc(p.caption)+'" loading="lazy"></button>'}).join(""):'<div class="card">Photos for this album will be added soon.</div>';cur=a.photos;window.scrollTo(0,0)}
function show(){var p=cur[ci];$("lbImg").src=p.src;$("lbImg").alt=p.caption;$("lbCap").textContent=p.caption+" · "+(ci+1)+" of "+cur.length;$("lbPrev").disabled=ci==0;$("lbNext").disabled=ci==cur.length-1}
function close_(){$("lightbox").classList.remove("open");document.body.style.overflow="";$("lbImg").src="";if(last)last.focus()}
$("albumGrid").onclick=function(e){var b=e.target.closest(".album-card");if(b)open_(ALBUMS[b.getAttribute("data-i")])};
$("photoGrid").onclick=function(e){var b=e.target.closest(".gallery-photo");if(!b)return;last=b;ci=+b.getAttribute("data-i");show();$("lightbox").classList.add("open");document.body.style.overflow="hidden";$("lbClose").focus()};
$("categoryFilters").onclick=function(e){var b=e.target.closest("button");if(!b)return;cat=b.getAttribute("data-c");filters();albums()};
$("yearFilter").onchange=albums;$("backAlbums").onclick=albums;$("lbClose").onclick=close_;
$("lbPrev").onclick=function(){if(ci>0){ci--;show()}};$("lbNext").onclick=function(){if(ci<cur.length-1){ci++;show()}};
$("lightbox").onclick=function(e){if(e.target.id=="lightbox")close_()};
document.addEventListener("keydown",function(e){if(!$("lightbox").classList.contains("open"))return;if(e.key=="Escape")close_();if(e.key=="ArrowRight")$("lbNext").click();if(e.key=="ArrowLeft")$("lbPrev").click()});
filters();albums()}
