(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const x=document.querySelectorAll("[scroll-target]");var u=Array.from(document.getElementsByClassName("shy"));x.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("scroll-target");if(!e)return;const r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth"})})});const k=[{name:"rings of selene",backgroundColor:"#000",background:"",images:["assets/placeholder/bafkreif7izwkpeptaqv2kyioxsc7v5fggr54taflgnxeavcumveoyaog7i.jpg"],time:"September 2023",medium:"3D model (Blender, Unity)",content:"<p>I'm very proud of Rings Of Selene, a world I created to be experienced in VR. Set in the distant future, it's a luxurious apartment on a residential space station.<p>Entering through the front door, you'll find yourself immersed in a beautifully lit foyer - bright panels on the walls imitate a window's natural light. <p>Continuing through the tunnels, you'll encounter:<p> ...a  relaxing basement, complete with a full cinema and 3D-printed-snacks bar.<p> ...a cozy corner, filled with pillows and cloth-simulated blankets. Believe it or not, I've seen visitors asleep here!<p> ...and a secret third floor, accessible by crawling through the vents. (an exit is just barely visible in the attached image)"},{name:"character model - yuki",backgroundColor:"#212",background:"",images:["https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/5868259/6ca42101-e045-4880-bdf5-9bdf57adda30_base_resized.jpg","https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/5868259/adf6d322-5a6e-486d-a700-48e97637ea50_base_resized.jpg"],time:"June 2024",medium:"3D model (Blender, Gimp, Unity)",content:"<p>First and foremost, this model, when used as an avatar, is meant to feel comfortable. An oversized jacket and shirt make her appear small in comparison, and the boots help to balance this out, providing stability.<p>Other players can grab the butterfly - but if they let go, it'll fly right back to her.<p>A careful balance of optimization and quality, this model is game-ready and still looks good up close. The topology creates a smooth silhouette with minimal geometry.<p>Yuki is built from the ground up for customization - with neat rectangular UVs, .blend and .psd files all included."},{name:"swan bear",backgroundColor:"#fff9",background:"",images:["https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/9e0c7a16-0f34-4e42-b55b-a2ebb1e078c2_base_resized.jpg","https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/4d5e549b-dd78-42cb-a206-477c68709d89_base_resized.jpg","https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/1013f380-9bf4-4db3-bd74-4e8c144727dc_base_resized.jpg","https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/6a946d74-54fe-42e6-aae7-33cfc6b94980_base_resized.jpg","https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/0459bca3-f981-4fde-a14c-628038f11f83_base_resized.jpg"],time:"April 2023",medium:"3D model (Blender, Unity)",content:"<p>Adorable, friendly, squishable - It’s a teddy bear, but for maximum cuteness, it basically has the face of a kitten. This was… only somewhat intentional!<p>If you boop it it sounds like a squishy toy.<p>Swan bear is easy to customize without even opening Unity. It has many colors and accessories to choose from, all through a radial UI with custom icons and layout.<p>On top of all that, it's extremely optimized. With only ~7k tris and a single atlased texture, players across all platforms can access this avatar with ease.<p>This one is officially featured and promoted by VRChat - the largest social VR platform, in terms of active VR users.",credits:"vrchat, for some ui elements"},{name:"animation",backgroundColor:"#eee",background:"",gDriveVideos:["https://drive.google.com/file/d/1WIxCw4bjHrZEc_Z2PeirJ1cyS6a1mP5j/preview"],time:"October 2024",medium:"Blender",content:"<p>The focus of this project was to combine different mediums of animation and experiment with a new animation style, exaggerating suspense and impact.<p>To save time, I reused assets from previous projects, allowing me to focus entirely on exploring motion - and it ended up being a lot of fun!<p>Both models were set up with IK."},{name:"awno.xyz",backgroundColor:"#000d",background:"",images:["assets/placeholder/2025-03-02-022338_hyprshot.png"],time:"Feburary 2025",medium:"HTML, CSS, Typescript",content:"<p>This website!<p>The website I built for this portfolio was my first proper web project since 10th grade Computer Science. And, despite the pain it's caused me, I'm pretty happy with it!<p>Many of the visual effects on this website use purely CSS. This includes the dynamic header, as well as the 3D elements and parallax. <p>Each project is loaded onto the page with typescript - it's all modular, so it's super easy to edit.",credits:"some 3 digit number of stackoverflow authors"},{name:"dust & snow",background:"assets/dustandsnow.png",videoBackground:"assets/placeholder/dust&snow.mp4",time:"April 2023",medium:"3D Environment - Blender, Unity, C#",content:"This world started with a simple goal - to recreate the effect of snow blowing in the wind. After I had that figured out, I had come up with too many ideas to move on from the project.  <p>Eventually, this developed into a full recreation of a setting from one of my stories. A city buried in deep under the snow on a post-apocalyptic earth, distanced from the sun. Scattered around you'll find small remnants of civilization - a crane poking out from the buried city, an abandoned plane, and more. Layers of clouds blanket the sky, which are illuminated in realtime by meteors as they pass through. <p>Despite the cold and isolating atmosphere, some visitors seem to find comfort in this kind of environment. At spawn, you'll find a picnic blanket and the warm light of a single lantern."}];function I(){const t=document.getElementById("projects");k.forEach((e,r)=>{const d=document.createElement("section");d.classList.add("project"),e.backgroundColor&&(d.style.backgroundColor=e.backgroundColor),document.createElement("div").classList.add("project-content");const o=document.createElement("img");o.classList.add("project-background"),o.src=e.background,o.alt=e.name;const s=document.createElement("video");e.videoBackground?(s.classList.add("project-background"),s.src=e.videoBackground,s.autoplay=!0,s.loop=!0,s.muted=!0):s.style.display="none";const f=document.createElement("div");f.classList.add("project-header");const g=document.createElement("h2");g.classList.add("project-title"),g.textContent=e.name;const b=document.createElement("div");b.classList.add("project-navigation");const c=document.createElement("button");c.textContent="◁",c.classList.add("shy"),r===0&&(c.disabled=!0),c.addEventListener("click",()=>{if(r>0&&t){const i=t.children[2*(r-1)];i&&i.scrollIntoView({behavior:"smooth"})}});const m=document.createElement("button");m.textContent="▷",m.classList.add("shy"),r===k.length-1&&(m.disabled=!0),m.addEventListener("click",()=>{if(r<k.length-1&&t){const i=t.children[2*(r+1)];i&&i.scrollIntoView({behavior:"smooth"})}}),b.append(c,g,m);const p=document.createElement("div");p.classList.add("project-header-filter"),e.backgroundColor?p.style.backgroundColor=e.backgroundColor:e.background&&(p.style.backgroundImage="url("+e.background+")");const y=document.createElement("p");y.classList.add("project-time"),y.textContent=e.time;const v=document.createElement("p");v.classList.add("project-medium"),v.textContent=e.medium;const l=document.createElement("div");l.classList.add("project-gallery"),e.images?e.images.forEach(i=>{const n=document.createElement("img");n.classList.add("project-image"),n.src=i,n.alt=e.name,n.style.backgroundImage="url("+i+")",l.append(n)}):e.videos?e.videos.forEach(i=>{const n=document.createElement("video");n.classList.add("project-video"),n.src=i,n.autoplay=!0,n.loop=!0,n.muted=!0,l.append(n)}):e.gDriveVideos?e.gDriveVideos.forEach(i=>{const n=document.createElement("iframe");n.classList.add("project-video"),n.src=i,l.append(n)}):l.style.opacity="0";const E=document.createElement("div");E.classList.add("project-description"),E.innerHTML=e.content;const w=document.createElement("div");w.classList.add("project-footer");const h=document.createElement("p");h.classList.add("project-credits"),e.credits?h.textContent=`Credits: ${e.credits}`:h.style.display="none",o.append(s),f.append(p,b),w.append(v,h,y),d.append(o,s,E,l,w),t&&(t.append(f),t.appendChild(d))}),u=Array.from(document.getElementsByClassName("shy"))}let L=null;const j=()=>{u&&(u.forEach(t=>{t.classList.add("fadein"),t.classList.remove("fadeout")}),z())},C=()=>{u&&u.forEach(t=>{t.classList.add("fadeout"),t.classList.remove("fadein")})},z=()=>{L&&clearTimeout(L),L=window.setTimeout(C,1e3)};C();document.addEventListener("DOMContentLoaded",I);document.addEventListener("mousemove",j);
