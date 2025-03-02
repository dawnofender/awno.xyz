import styles from "../style.css"
import React from 'react';

const scrollButtons = document.querySelectorAll<HTMLButtonElement>("[scroll-target]");
var shyElements: Element[] = Array.from(document.getElementsByClassName("shy"));

var carouselPositions;
var halfContainer;
var currentItem;

scrollButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("scroll-target");
    if (!targetId) return;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// project display things

interface Project {
  name: string;
  backgroundColor?: string;
  background: string;
  videoBackground?: string;
  images?: string[];
  videos?: string[];
  gDriveVideos?: string[];
  time: string;
  medium: string;
  content: string;
  credits?: string;
}

const projects: Project[] = [
  {
    name: "rings of selene", 
    backgroundColor: "#000",
    background: "",
    images: ["assets/placeholder/bafkreif7izwkpeptaqv2kyioxsc7v5fggr54taflgnxeavcumveoyaog7i.jpg"],
    time: "September 2023", 
    medium: "3D model (Blender, Unity)", 
    content: "<p>Rings of Selene is a world I created to be experienced in VR. Set in the distant future, it's a luxurious apartment on a residential space station.<p>Arriving through the front door, you'll find yourself in a beautifully lit foyer - bright panels on the walls imitate a window's natural light. <p>Continuing through the tunnels, you'll also find:<p>- A basement, complete with a full cinema and 3D-printed-snacks bar.<p>- A cozy corner, filled with pillows and cloth-simulated blankets. Believe it or not, I've seen people fall asleep here!<p>- A secret third floor, accessible by crawling through the vents. (an exit is just barely visible in the attached image)" 
  },
  {
    name: "character model - yuki", 
    backgroundColor: "#212",
    background: "",
    images: ["https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/5868259/6ca42101-e045-4880-bdf5-9bdf57adda30_base_resized.jpg", "https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/5868259/adf6d322-5a6e-486d-a700-48e97637ea50_base_resized.jpg"],
    time: "June 2024", 
    medium: "3D model (Blender, Gimp, Unity)", 
    content: "<p>First and foremost, this model, when used as an avatar, is meant to feel comfortable. An oversized jacket and shirt make her appear small in comparison, and the boots help to balance this out, providing stability.<p>Other players can grab the butterfly - but if they let go, it'll fly right back to her.<p>A careful balance of optimization and quality, this model is game-ready and still looks good up close. The topology creates a smooth silhouette with minimal geometry.<p>Yuki is built from the ground up for customization - with neat rectangular UVs, .blend and .psd files all included.",
  },
  {
    name: "swan bear", 
    backgroundColor: "#fff9",
    background: "",
    images: ["https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/9e0c7a16-0f34-4e42-b55b-a2ebb1e078c2_base_resized.jpg", "https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/4d5e549b-dd78-42cb-a206-477c68709d89_base_resized.jpg", "https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/1013f380-9bf4-4db3-bd74-4e8c144727dc_base_resized.jpg", "https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/6a946d74-54fe-42e6-aae7-33cfc6b94980_base_resized.jpg", "https://booth.pximg.net/b3490e62-30a2-4dd7-8656-184a1141ed19/i/4675577/0459bca3-f981-4fde-a14c-628038f11f83_base_resized.jpg"],
    time: "April 2023", 
    medium: "3D model (Blender, Unity)", 
    content: "<p>Adorable, friendly, squishable - It’s a teddy bear, but for maximum cuteness, it basically has the face of a kitten. This was… only somewhat intentional!<p>If you boop it it sounds like a squishy toy.<p>Swan bear is easy to customize without even opening Unity. It has many colors and accessories to choose from, all through a radial UI with custom icons and layout.<p>On top of all that, it's extremely optimized. With only ~7k tris and a single atlased texture, players across all platforms can access this avatar with ease.<p>This one is officially featured and promoted by VRChat - the largest social VR platform, in terms of active VR users.",
    credits: "vrchat, for some ui elements" 
  },
  {
    name: "animation",
    backgroundColor: "#eee", 
    background: "",
    // images: [""],
    // videos: ["https://drive.google.com/file/d/1WIxCw4bjHrZEc_Z2PeirJ1cyS6a1mP5j/preview"],
    gDriveVideos: ["https://drive.google.com/file/d/1WIxCw4bjHrZEc_Z2PeirJ1cyS6a1mP5j/preview"],
    time: "October 2024", 
    medium: "Blender", 
    content: "<p>The focus of this project was to combine different mediums of animation and experiment with a new animation style, exaggerating suspense and impact.<p>To save time, I reused assets from previous projects, allowing me to focus entirely on exploring motion - and it ended up being a lot of fun!<p>Both models were set up with IK.",
  },
  {
    name: "awno.xyz", 
    backgroundColor: "#000d",
    background: "",
    images: ["assets/placeholder/2025-03-02-022338_hyprshot.png"],
    time: "Feburary 2025", 
    medium: "HTML, CSS, Typescript", 
    content: "<p>This website!<p>The website I built for this portfolio was my first proper web project since 10th grade Computer Science. And, despite the pain it's caused me, I'm pretty happy with it!<p>Many of the visual effects on this website use purely CSS. This includes the dynamic header, as well as the 3D elements and parallax. <p>Each project is loaded onto the page with typescript - it's all modular, so it's super easy to edit.",
    credits: "some 3 digit number of stackoverflow authors" 
  },
  // {
  //   name: "vtubing software", 
  //   background: "",
  //   images: ["assets/swanbear.jpg"],
  //   time: "April 2023", 
  //   medium: "Blender, Unity", 
  //   content: "",
  //   credits: "vrchat" 
  // },
  // {
  //   name: "melon mocap", 
  //   backgroundColor: "#3f3f3f",
  //   background: "",
  //   images: [""],
  //   time: "Janurary 2024", 
  //   medium: "Tools / Software: Unity, Blender, C#, Python", 
  //   content: "",
  //   credits: "Ryan Roye's mocap format & blender plugin" 
  // },
  {
    name: "dust & snow", 
    background: "assets/dustandsnow.png",
    videoBackground: "assets/placeholder/dust&snow.mp4",
    // images: ["assets/dustandsnow.png", "assets/dustandsnow.png", "assets/dustandsnow.png", "assets/dustandsnow.png"],
    time: "April 2023", 
    medium: "3D Environment - Blender, Unity, C#",
    content: "This world started with a simple goal - to recreate the effect of snow blowing in the wind. After I had that figured out, I had come up with too many ideas to move on from the project.  <p>Eventually, this developed into a full recreation of a setting from one of my stories. A city buried in deep under the snow on a post-apocalyptic earth, distanced from the sun. Scattered around you'll find small remnants of civilization - a crane poking out from the buried city, an abandoned plane, and more. Layers of clouds blanket the sky, which are illuminated in realtime by meteors as they pass through. <p>Despite the cold and isolating atmosphere, some visitors seem to find comfort in this kind of environment. At spawn, you'll find a picnic blanket and the warm light of a single lantern."
  }
  // {
  //   name: "works in progress", 
  //   background: "",
  //   images: ["assets/swanbear.jpg"],
  //   time: "April 2023", 
  //   medium: "Blender, Unity", 
  //   content: "",
  //   credits: "vrchat" 
  // }
];


// document.addEventListener("DOMContentLoaded", () => {}
function loadProjects() {
  const pContainer = document.getElementById("projects");
  // pContainer.innerHTML = "";

  projects.forEach((project, index) => {
    const projectElement = document.createElement("section");
    projectElement.classList.add("project");
    if(project.backgroundColor)
    {projectElement.style.backgroundColor = project.backgroundColor;}
    
    const contentElement = document.createElement("div");
    contentElement.classList.add("project-content");

    const backgroundElement = document.createElement("img");
    backgroundElement.classList.add("project-background");
    backgroundElement.src = project.background;
    backgroundElement.alt = project.name;

    const videoBackgroundElement = document.createElement("video");

    if (project.videoBackground) {
      videoBackgroundElement.classList.add("project-background");
      videoBackgroundElement.src = project.videoBackground;
      videoBackgroundElement.autoplay = true;
      videoBackgroundElement.loop = true;
      videoBackgroundElement.muted = true;
      
    } else {
      videoBackgroundElement.style.display = "none";
    }

    const headerElement = document.createElement("div");
    headerElement.classList.add("project-header");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("project-title");
    titleElement.textContent = project.name;

    const navContainer = document.createElement("div");
    navContainer.classList.add("project-navigation");

    const scrollPreviousElement = document.createElement("button");
    scrollPreviousElement.textContent = "◁";
    scrollPreviousElement.classList.add('shy');

    // disable if this is the first project
    if (index === 0) {
      scrollPreviousElement.disabled = true;
    }
    scrollPreviousElement.addEventListener("click", () => {
      // find the previous project element
      if (index > 0) {
        const prevProject = pContainer.children[2 * (index - 1)];
        if (prevProject) {
          prevProject.scrollIntoView({ behavior: "smooth" });
        }
      }
    });

    // create next button
    const scrollNextElement = document.createElement("button");
    scrollNextElement.textContent = "▷";
    scrollNextElement.classList.add('shy');

    // disable if this is the last project
    if (index === projects.length - 1) {
      scrollNextElement.disabled = true;
    }
    scrollNextElement.addEventListener("click", () => {
      if (index < projects.length - 1) {
        const nextProject = pContainer.children[2 * (index + 1)];
        if (nextProject) {
          nextProject.scrollIntoView({ behavior: "smooth" });
        }
      }
    });

    navContainer.append(scrollPreviousElement, titleElement, scrollNextElement);

    const filterElement = document.createElement("div");
    filterElement.classList.add("project-header-filter");
    if(project.backgroundColor) {
      filterElement.style.backgroundColor = project.backgroundColor;
    } else if (project.background) {
      filterElement.style.backgroundImage = "url(" + project.background + ")";
    }  
    
    
    const timeElement = document.createElement("p");
    timeElement.classList.add("project-time");
    timeElement.textContent = project.time;

    const mediumElement = document.createElement("p");
    mediumElement.classList.add("project-medium");
    mediumElement.textContent = project.medium;

    const galleryElement = document.createElement("div");
    // add each image from the array of paths
    galleryElement.classList.add("project-gallery");
    if (project.images) {
      project.images.forEach(imageSource => {
        const imageElement = document.createElement("img");
        imageElement.classList.add("project-image");
        imageElement.src = imageSource;
        imageElement.alt = project.name;
        imageElement.style.backgroundImage = "url("+imageSource+")";
        galleryElement.append(imageElement);
      });  
    } else if (project.videos) {
      project.videos.forEach(videoSource => {
        const videoElement = document.createElement("video");
        videoElement.classList.add("project-video");
        videoElement.src = videoSource;
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        galleryElement.append(videoElement);
    });
    } else if (project.gDriveVideos) {
      project.gDriveVideos.forEach(videoSource => {
        const videoElement = document.createElement("iframe");
        videoElement.classList.add("project-video");
        videoElement.src = videoSource;
        galleryElement.append(videoElement); 
      });
    } else {
      galleryElement.style.opacity = 0;
    }
    
    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("project-description");
    descriptionElement.innerHTML = "<span>"+project.content+"</span>";

    const footerElement = document.createElement("div");
    footerElement.classList.add("project-footer");

    const creditsElement = document.createElement("p");
    creditsElement.classList.add("project-credits");
    if (project.credits) {
      creditsElement.textContent = `Credits: ${project.credits}`;
    } else {
      creditsElement.style.display = "none";
    }
    
    backgroundElement.append(videoBackgroundElement);

    headerElement.append(filterElement, navContainer);

    footerElement.append(mediumElement,  creditsElement, timeElement);
    // contentElement.append(timeElement, mediumElement, galleryElement, descriptionElement, creditsElement);

    projectElement.append(backgroundElement, videoBackgroundElement, galleryElement, descriptionElement, footerElement);

    pContainer.append(headerElement);
    pContainer.appendChild(projectElement);
  });
  shyElements = Array.from(document.getElementsByClassName("shy"));
}

// function loadProjectsHTML() {
//   const pTemplate = document.getElementById('project-template') as HTMLTemplateElement;
//   const pContainer = document.getElementById('project-list') as HTMLElement;

//   projects.forEach((project) => {
//     const clone = pTemplate.content.cloneNode(true) as HTMLElement;
    
//     const nameElement = clone.querySelector('.project-name') as HTMLElement;
//     const timeElement = clone.querySelector('.project-time') as HTMLElement;
//     const mediumElement = clone.querySelector('.project-medium') as HTMLElement;
//     const galeryElement = clone.querySelector('.project-image') as HTMLgaleryElement;
//     const contentElement = clone.querySelector('.project-content') as HTMLElement;
//     const creditsElement = clone.querySelector('.project-credits') as HTMLElement;
  
//     nameElement.textContent = project.name;
//     timeElement.textContent = project.time;
//     galeryElement.src = project.image;
//     galeryElement.alt = project.name;
//     contentElement.innerHTML = project.content;
//     mediumElement.textContent = project.medium;
    
//     if (project.credits) {
//       creditsElement.textContent = `Credits: ${project.credits}`;
//     } else {
//       creditsElement.style.display = "none";
//     }

//     pContainer.appendChild(clone);
//   });
// }



let timeoutId: number | null = null;

const showElements = () => {
  if (shyElements) {
    shyElements.forEach((el: Element) => {
      el.classList.add("fadein");
      el.classList.remove("fadeout");
    })
    resetTimeout();
  }
};

const hideElements = () => {
  if (shyElements) {
    shyElements.forEach((el: Element) => {
      el.classList.add("fadeout");
      el.classList.remove("fadein");
  })
  }
};

const resetTimeout = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = window.setTimeout(hideElements, 1000);
};

hideElements();

document.addEventListener("DOMContentLoaded", loadProjects);
document.addEventListener("mousemove", showElements);
// document.addEventListener("scroll", showElements);

// fading in and out when inputs happen
