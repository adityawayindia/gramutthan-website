(function(){
var S='https://gramutthan.org/public/upload/gallery/slider/';
var IM=[S+'1784530233_1945668bfde6ab9f677e.jpg',S+'1784530355_b621a6ab2742173cb43c.jpg',S+'1784525836_56431f5e387750383faf.jpg',S+'1784366829_6930756f5206d962de9e.jpg','http://gramutthan.org/public/upload/images/image/Welcome.jpg','http://gramutthan.org/public/upload/images/Out%20Reach.JPG'];
var G='https://gramutthan.org/public/';
var P={
 green:'https://gramutthan.org/upload/images/1_ Stakeholders Objective Sharing workshop.jpeg',
 taru:G+'upload/images/WhatsApp Image 2024-08-30 at 11_44_19 AM (1).jpeg',
 farmers:'https://gramutthan.org/upload/images/WhatsApp Image 2026-07-18 at 12_59_52 PM.jpeg',
 fish:G+'images/gallery/medium/20190629.jpg',
 silai:'https://gramutthan.org/upload/images/Silai School.jpeg',
 wash:G+'images/gallery/medium/20170501.JPG',
 skills:G+'images/gallery/medium/201701104.jpg',
 relief:G+'images/gallery/medium/20200428.jpg',
 train:G+'images/gallery/medium/201702066.JPG',
 reach:G+'upload/images/Out Reach.JPG',
 env:G+'upload/images/WhatsApp Image 2024-06-12 at 10_56_43 AM.jpeg',
 fani:G+'upload/images/120478956_1777451802428170_8509309164526973979_n(2).jpg',
 ongc:G+'upload/events/min_events/1491803795.jpg',
 digital:G+'upload/events/min_events/1491560619.jpg'
};
Object.keys(P).forEach(function(k){P[k]=encodeURI(P[k])});
var $=function(id){return document.getElementById(id)};
var img=function(src,alt){return '<img src="'+src+'" alt="'+(alt||'')+'" loading="lazy" onerror="this.onerror=null;this.src=\''+IM[0]+'\'">'};
var fmt=function(n){return '₹'+n.toLocaleString('en-IN')};

var nav=[['About Us','#about'],['What We Do','#work'],['Projects','#projects'],['Where We Work','#reach'],['Media','#news'],['Reports','#reports'],['Contact','#contact']];
var links=nav.map(function(n){return '<a class="off" aria-disabled="true" tabindex="-1" title="Coming soon">'+n[0]+'</a>'}).join('');
$('menu').innerHTML=links;$('mobile').innerHTML=links;
$('burger').onclick=function(){var o=$('mobile').classList.toggle('open');this.setAttribute('aria-expanded',o)};


(function(){var first=$('hero-img');var SC=['https://commons.wikimedia.org/wiki/Special:FilePath/Paddy_Fields_around_the_road_from_Munising_to_Seranga_in_Gajapati_District.jpg?width=2000','https://commons.wikimedia.org/wiki/Special:FilePath/Paddy_Fields_Thanjavur.jpg?width=2000','https://commons.wikimedia.org/wiki/Special:FilePath/Paddy_Fields_at_Maddi_Village_01.jpg?width=2000','https://commons.wikimedia.org/wiki/Special:FilePath/A_Mango_Tree_and_Paddy_Field_on_the_way_to_Masla_Village_-_panoramio.jpg?width=2000','https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_at_a_paddy_Field.jpg?width=2000'];first.src=SC[0];first.onerror=function(){first.src=P.farmers};var hero=first.parentNode,srcs=SC,sl=[first],cur=0,t;
srcs.slice(1).forEach(function(u){var i=document.createElement('img');i.className='hs';i.alt='';i.loading='lazy';i.src=u;i.onerror=function(){i.remove()};hero.insertBefore(i,first.nextSibling&&sl[sl.length-1].nextSibling);sl.push(i)});
function go(k){sl[cur].classList.remove('on');cur=(k+sl.length)%sl.length;sl[cur].classList.add('on');var f=$('hfill'),n=function(x){return (x<10?'0':'')+x};$('hcount').textContent=n(cur+1)+' / '+n(sl.length);f.classList.remove('run');void f.offsetWidth;f.classList.add('run')}
function play(){clearInterval(t);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)t=setInterval(function(){go(cur+1)},5500)}
$('hprev').onclick=function(){go(cur-1);play()};$('hnext').onclick=function(){go(cur+1);play()};
go(0);play();
var fs=$('hfs');fs.onclick=function(){var c=hero.classList.toggle('clear');hero.parentNode.classList.toggle('clear',c);fs.setAttribute('aria-pressed',c);fs.setAttribute('aria-label',c?'Show hero text':'View images full screen')}})();$('about-1').src=IM[1];$('about-2').src=IM[2];$('donate-bg').src=IM[3];$('quote-img').src=IM[1];
$('map-img').src='https://gramutthan.org/public/upload/images/Operational%20Area(1).jpg';

$('stats').innerHTML=[[30,'+','','Years of grassroots work'],[21,'','','Districts in Odisha & Chhattisgarh'],[12,'',' Lakh','Households reached'],[10,'','','Ongoing projects']].map(function(s){return '<div class="stat"><b data-n="'+s[0]+'" data-pre="'+s[1]+'" data-suf="'+s[1]+s[2]+'">0'+s[1]+s[2]+'</b><span>'+s[3]+'</span></div>'}).join('');
$('pillars').innerHTML=[['Community-led','Villages set the priorities, not us.'],['Decentralised','Local teams tackle poverty in all its forms.'],['Built to scale','With government, CSR, INGOs and development banks.']].map(function(p){return '<div class="check"><strong>'+p[0]+'</strong>'+p[1]+'</div>'}).join('');

var tags={live:'Livelihoods',climate:'Climate & Environment',water:'Water & Sanitation',women:'Women & Skills',health:'Health & Nutrition'};
var PJ=["https://commons.wikimedia.org/wiki/Special:FilePath/Mangrove_forest_reforestation.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/A_Mango_Tree_and_Paddy_Field_on_the_way_to_Masla_Village_-_panoramio.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/Prawn_Farming_in_Ulavaipu_Kerala_01.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/India_-_Varanasi_black_woman_sewing_machine_-_2276.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/Hand_pump_in_Rajasthan%2C_India.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/A_group_of_Indian_women_farmers_Karnataka_Spice_Value_Chain_Development_2015.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/Hay_Stacks_In_Achuli_Village.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/Smiles_and_determination_of_rural_Indian_women_3.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/Anganwadi_Worker_AWW_Distributing_Dresses_to_childrens.jpg?width=900","https://commons.wikimedia.org/wiki/Special:FilePath/Self_Help_Group.jpg?width=900"];
var projects=[
['climate','Green Livelihoods','Restoring mangroves along the Odisha coast and helping nearby families earn from a healthier shoreline.','DCB Bank'],
['climate','ReNew TARU','Trees on farm bunds that shade crops, hold soil and add a second income for farmers.','ReNew'],
['live','SAFAL','Sustainable aquaculture for food and livelihood — better ponds, better fish, better nutrition.','GIZ'],
['women','Silai School','Since 2011, rural women have trained in tailoring and gone on to run their own sewing businesses.','USHA International'],
['water','Jaljeevika','Safe water, sanitation and hygiene for every household, managed by the community.','WASH partners'],
['live','Farmer Producer Organisations','Helping smallholders buy, sell and bargain together — and keep more of what they grow.','Institutional partners'],
['live','Village Livelihood Programme','Watershed work, bee-keeping and pond renovation in Cuttack, Kendrapara and Angul.','Concern India Foundation'],
['women','WFD & AGEP','Life skills and job training for women and adolescent girls in Bhubaneswar and Puri slums.','Programme partners'],
['health','Anganwadi Improvement','Safer, better-equipped Anganwadi centres in Khurdha for young children and mothers.','SMS India'],
['health','Targeted Intervention','Since 2014, reaching vulnerable communities to prevent and control HIV/AIDS.','OSACS']
].map(function(p,i){return {tag:p[0],title:p[1],sub:p[2],partner:p[3],img:PJ[i]}});

var FI=[P.farmers,P.taru,P.wash,P.silai,P.relief];
var focus=[['live','Livelihoods','Farmer groups, fisheries, bee-keeping and watershed work for steady income close to home.'],['climate','Climate & Environment','Mangroves, farm trees and resilient farming for villages facing a changing climate.'],['water','Water & Sanitation','Clean water, toilets and hygiene, planned and maintained by the community.'],['women','Women & Skills','Skills, confidence and income for women and adolescent girls.'],['health','Health & Nutrition','Stronger Anganwadi centres and outreach to communities most at risk.']];
$('focus').innerHTML=focus.map(function(f,i){return '<div class="focus-item'+(i===0?' on':'')+'" data-f="'+f[0]+'" data-i="'+i+'"><span class="n">0'+(i+1)+'</span><div><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div><i>→</i></div>'}).join('');
(function(){var box=$('focusImg').parentNode,L=[$('focusImg')],cur=0;$('focusImg').src=FI[0];L[0].classList.add('fl','on');
FI.slice(1).forEach(function(u){var i=document.createElement('img');i.className='fl';i.alt='';i.src=u;i.onerror=function(){i.dataset.bad=1};box.appendChild(i);L.push(i)});
$('focus').onmouseover=function(e){var c=e.target.closest('.focus-item');if(!c)return;var k=+c.dataset.i;[].forEach.call($('focus').children,function(x){x.classList.toggle('on',x===c)});if(k===cur||L[k].dataset.bad)return;L[cur].classList.remove('on');L[k].classList.add('on');cur=k}})();

var filter='all',showAll=false;
function render(){
 var fs=[['all','All Projects']].concat(Object.keys(tags).map(function(k){return [k,tags[k]]}));
 if(!$('filters').children.length)$('filters').innerHTML=fs.map(function(f){return '<button class="tab" data-f="'+f[0]+'">'+f[1]+'</button>'}).join('');[].forEach.call($('filters').children,function(b){b.classList.toggle('on',b.dataset.f===filter)});
 var list=filter==='all'?projects:projects.filter(function(p){return p.tag===filter});
 var limited=filter==='all'&&!showAll;
 $('projectList').innerHTML=(limited?list.slice(0,7):list).map(function(p,i){return '<a class="card cin'+(filter==='all'&&i===0?' feature':'')+'" style="--i:'+i+'" href="#"><div class="ph">'+img(p.img,p.title)+'</div><div class="card-b"><span class="tag">'+tags[p.tag]+'</span><h3>'+p.title+'</h3><p>'+p.sub+'</p><div class="card-f"><span>Partner: <strong>'+p.partner+'</strong></span><b>Read more →</b></div></div></a>'}).join('');
 $('moreWrap').hidden=!(limited&&list.length>7);
 $('moreBtn').textContent='View all '+projects.length+' projects';
}
var busy;function swap(f){if(f===filter&&!showAll)return;clearTimeout(busy);var L=$('projectList');L.classList.add('out');filter=f;showAll=false;[].forEach.call($('filters').children,function(b){b.classList.toggle('on',b.dataset.f===f)});busy=setTimeout(function(){render();L.classList.remove('out')},220)}
$('filters').onclick=function(e){var b=e.target.closest('[data-f]');if(b)swap(b.dataset.f)};
$('focus').onclick=function(e){var c=e.target.closest('[data-f]');if(c){swap(c.dataset.f);$('projects').scrollIntoView&&window.scrollTo({top:$('projects').offsetTop-70,behavior:'smooth'})}};
$('moreBtn').onclick=function(){showAll=true;render()};
render();

$('partners').innerHTML=['Government of India','Government of Odisha','GIZ','DCB Bank','ReNew','USHA International','Concern India Foundation','SIDBI','NTPC','ONGC','Mahanadi Coalfields','Rourkela Steel Plant','OSACS','Habitat for Humanity India','SMS India'].map(function(p){return '<div class="partner">'+p+'</div>'}).join('');
var FS=['1604036505.png','1594021840.png','1484555780.jpeg','1597297468.png','1597297714.jpeg','1597309607.jpeg','1597308763.jpeg','1604036802.png'];
var AV='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#E7EDF9"/><circle cx="60" cy="46" r="20" fill="#9DB0D6"/><path d="M20 120c0-26 18-42 40-42s40 16 40 42z" fill="#9DB0D6"/></svg>');
$('founders').innerHTML=FS.slice(0,7).map(function(){return '<div class="founder"><div class="ph"><img src="'+AV+'" alt="Founder portrait placeholder"></div><span><b>Founder name</b><small>Co-founder</small></span></div>'}).join('');
$('events').innerHTML=[['Environment','World Environment Day: plantation drive and new launch'],['Shelter','Rebuilding homes after Cyclone Fani: lessons learnt'],['Sanitation','Swachhta Hi Seva campaign with ONGC'],['Livelihoods','Digital financial literacy for village families']].map(function(e,i){return '<a class="event" href="#"><div class="ph">'+img([P.env,P.fani,P.ongc,P.digital][i],e[1])+'</div><small>'+e[0]+'</small><b>'+e[1]+'</b></a>'}).join('');
$('downloads').innerHTML=[['Annual Report 2023–24','Programmes & progress'],['Annual Report 2022–23','Programmes & progress'],['Audit Report 2022–23','Audited accounts'],['FCRA Accounts 2022–23','Foreign contribution']].map(function(d){return '<a class="dl" href="#"><span><b>'+d[0]+'</b><small>'+d[1]+'</small></span><i>PDF ↓</i></a>'}).join('');



$('subForm').onsubmit=function(e){e.preventDefault();if(/\S+@\S+\.\S+/.test($('email').value)){$('subForm').hidden=true;$('thanks').hidden=false}};

// floating section rail
var secs=[['top','Home'],['about','About'],['work','What we do'],['projects','Projects'],['quote','Quote of the day'],['reach','Where we work'],['partners-sec','Partners'],['founders-sec','Founders'],['news','News & reports'],['donate','Donate']];
$('rail').innerHTML=secs.map(function(s,i){return '<a href="#'+s[0]+'" data-id="'+s[0]+'"><span class="lbl">'+s[1]+'</span><i class="dot"></i></a>'}).join('');
$('railToggle').onclick=function(){var o=$('rail').classList.toggle('open');this.setAttribute('aria-expanded',o);this.textContent=o?'✕':'☰'};
$('rail').onclick=function(e){if(e.target.closest('a')){$('rail').classList.remove('open');$('railToggle').textContent='☰'}};
function railSpy(){var cur=secs[0][0],y=innerHeight*.4;secs.forEach(function(s){var el=$(s[0]);if(el&&el.getBoundingClientRect().top<=y)cur=s[0]});[].forEach.call($('rail').children,function(a){a.classList.toggle('on',a.dataset.id===cur)})}
addEventListener('scroll',railSpy,{passive:true});railSpy();

// partners marquee: duplicate set for seamless loop
$('partners').innerHTML+=$('partners').innerHTML;

// header shrink + progress bar
var hd=document.querySelector('header'),pg=$('progress');
function onScroll(){var y=window.scrollY,m=document.documentElement.scrollHeight-innerHeight;hd.classList.toggle('scrolled',y>40);pg.style.transform='scaleX('+(m>0?y/m:0)+')'}
addEventListener('scroll',onScroll,{passive:true});onScroll();

// reveal on scroll
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
['#about .split>*','#work .head','.focus','#projects .row-between','.tabs','.projects','.quote .wrap>*','#reach .split>*','.partners-sec>*','#founders-h','.founders','#news .row-between','.news-row>*','.donate .wrap>*','.news-box'].forEach(function(s){
 [].forEach.call(document.querySelectorAll(s),function(el,i){el.classList.add('rv');el.style.setProperty('--d',(i%4)*.08+'s')});
});
function count(el){
 var n=+el.dataset.n,suf=el.dataset.suf,t0=null;
 if(reduce){el.textContent=n+suf;return}
 (function step(t){t0=t0||t;var p=Math.min((t-t0)/1400,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(n*e)+(p<1?'':suf);if(p<1)requestAnimationFrame(step)})(performance.now());
}
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
 [].forEach.call(document.querySelectorAll('.rv'),function(el){io.observe(el)});
 var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){[].forEach.call(e.target.querySelectorAll('[data-n]'),count);so.unobserve(e.target)}})},{threshold:.4});
 so.observe($('stats'));
}else{[].forEach.call(document.querySelectorAll('.rv'),function(el){el.classList.add('in')});[].forEach.call(document.querySelectorAll('[data-n]'),count)}
})();

(function(){var r=document.querySelector('.rail'),t;if(!r)return;addEventListener('scroll',function(){r.classList.add('scrolling');clearTimeout(t);t=setTimeout(function(){r.classList.remove('scrolling')},900)},{passive:true})})();
(function(){var cols=['#F7B26A','#F08A24','#8FB0E8','#4E78C9'],dark=['#F7B26A','#F08A24','#8FB0E8','#4E78C9'],light=['#F08A24','#F7B26A','#4E78C9','#234DA8'];
function build(q,pal,op){var L=document.createElement('div');L.className='leaves';L.setAttribute('aria-hidden','true');
var r=function(a,b){return a+Math.random()*(b-a)};
for(var k=0,N=18;k<N;k++){var i=document.createElement('i');i.style.cssText='--x:'+(((k*7%N)+Math.random()*.8+.1)/N*100).toFixed(1)+'%;--s:'+r(10,22).toFixed(0)+'px;--c:'+pal[k%4]+';--o:'+(r(.16,.34)*op).toFixed(2)+';--t:'+r(16,26).toFixed(1)+'s;--d:-'+r(0,24).toFixed(1)+'s;--w:'+((k%2?1:-1)*r(30,70)).toFixed(0)+'px';L.appendChild(i)}
q.insertBefore(L,q.firstChild);var f=function(){L.style.setProperty('--fall',(q.offsetHeight+60)+'px')};f();addEventListener('resize',f)}
var q=document.querySelector('.quote'),w=document.querySelector('#work'),p=document.querySelector('#partners-sec');if(q)build(q,dark,1);if(w)build(w,light,1.5);if(p)build(p,light,1.5)})();