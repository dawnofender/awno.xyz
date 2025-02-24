import styles from "../style.css"

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = '<h1>Welcome to my portfolio!</h1>';
}

interface Project {
  name: string;
  image: string;
  time: string;
  medium: string;
  content: string;
  credits?: string;
}

const projects: Project[] = [
  {
    name: "dust & snow", 
    image: "assets/dustandsnow.png",
    time: "April 2023", 
    medium: "Blender, Unity",
    content: "This world started with a simple goal - to recreate the effect of snow blowing in the wind. But after I had that figured out, I had come up with too many ideas to move on from the project.  <br>Eventually, this developed into a full recreation of a setting from one of my stories. A city buried in deep under the snow on a post-apocalyptic earth, distanced from the sun. Scattered around you'll find small remnants of civilization - a crane poking out from the buried city, an abandoned plane, and more. Layers of clouds blanket the sky, which are illuminated in realtime by meteors as they pass through. <br>Despite the cold and isolating atmosphere, some visitors seem to find comfort in this kind of environment. At spawn, you'll find a picnic blanket and the warm light of a single lantern."
  },
  {
    name: "swan bear", 
    image: "assets/swanbear.jpg",
    time: "April 2023", 
    medium: "Blender, Unity", 
    content: "placeholder text",
    credits: "vrchat" 
  }
];


// document.addEventListener("DOMContentLoaded", () => {}

function loadProjects() {
  const pContainer = document.getElementById("projects") as HTMLElement;

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    const nameElement = document.createElement("h2");
    nameElement.classList.add("project-name");
    nameElement.textContent = project.name;

    const timeElement = document.createElement("p");
    timeElement.classList.add("project-time");
    timeElement.textContent = project.time;

    const mediumElement = document.createElement("p");
    mediumElement.classList.add("project-medium");
    mediumElement.textContent = project.medium;

    const imageElement = document.createElement("img");
    imageElement.classList.add("project-image");
    imageElement.src = project.image;
    imageElement.alt = project.name;

    const contentElement = document.createElement("div");
    contentElement.classList.add("project-content");
    contentElement.innerHTML = project.content;

    const creditsElement = document.createElement("p");
    creditsElement.classList.add("project-credits");
    if (project.credits) {
      creditsElement.textContent = `Credits: ${project.credits}`;
    } else {
      creditsElement.style.display = "none";
    }

    projectElement.append(
      nameElement,
      timeElement,
      mediumElement,
      imageElement,
      contentElement,
      creditsElement
    );

    pContainer.appendChild(projectElement);
  });
}

function loadProjectsHTML() {
  const pTemplate = document.getElementById('project-template') as HTMLTemplateElement;
  const pContainer = document.getElementById('project-list') as HTMLElement;

  projects.forEach((project) => {
    const clone = pTemplate.content.cloneNode(true) as HTMLElement;
    
    const nameElement = clone.querySelector('.project-name') as HTMLElement;
    const timeElement = clone.querySelector('.project-time') as HTMLElement;
    const mediumElement = clone.querySelector('.project-medium') as HTMLElement;
    const imageElement = clone.querySelector('.project-image') as HTMLImageElement;
    const contentElement = clone.querySelector('.project-content') as HTMLElement;
    const creditsElement = clone.querySelector('.project-credits') as HTMLElement;
  
    nameElement.textContent = project.name;
    timeElement.textContent = project.time;
    imageElement.src = project.image;
    imageElement.alt = project.name;
    contentElement.innerHTML = project.content;
    mediumElement.textContent = project.medium;
    
    if (project.credits) {
      creditsElement.textContent = `Credits: ${project.credits}`;
    } else {
      creditsElement.style.display = "none";
    }

    pContainer.appendChild(clone);
  });
}

document.addEventListener("DOMContentLoaded", loadProjects);