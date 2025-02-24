"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var appDiv = document.getElementById('app');
if (appDiv) {
    appDiv.innerHTML = '<h1>Welcome to my portfolio!</h1>';
}
var projects = [
    {
        name: "dust & snow",
        image: "assets/dustandsnow.png",
        time: "April 2023",
        medium: "Blender, Unity",
        content: "placeholder text"
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
document.addEventListener("DOMContentLoaded", function () {
    var pTemplate = document.getElementById('project-template');
    var pContainer = document.getElementById('project-list');
    projects.forEach(function (project) {
        var clone = pTemplate.content.cloneNode(true);
        var nameElement = clone.querySelector('.project-name');
        var timeElement = clone.querySelector('.project-time');
        var mediumElement = clone.querySelector('.project-medium');
        var imageElement = clone.querySelector('.project-image');
        var contentElement = clone.querySelector('.project-content');
        var creditsElement = clone.querySelector('.project-credits');
        nameElement.textContent = project.name;
        imageElement.src = project.image;
        imageElement.alt = project.name;
        timeElement.textContent = project.time;
        contentElement.textContent = project.content;
        mediumElement.textContent = project.medium;
        if (project.credits) {
            creditsElement.textContent = "Credits: ".concat(project.credits);
        }
        else {
            creditsElement.style.display = "none";
        }
        pContainer.appendChild(clone);
    });
});
