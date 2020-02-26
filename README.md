# SRFC Single Game Tickets (SGT) Build

Inspiration via the [Trailblazer's SGT page](https://www.nba.com/blazers/tickets/singletickets/1920) card design, SRFC is getting a custom page built since they don't have one currently!

## Teamwork makes the dream work!
![Rock On Fellow Devs](https://media.giphy.com/media/l4JyUGNZAPca6CZ2w/giphy.gif)

## Table of Contents
- [Setup Dev Environment](#introduction)
- [Folder Structure](#folder-structure)

## Introduction

After cloning the repo:
Run `npm i` to initiate all assets/elements needed
Run `npm run serve` to spin up your localhost environment.
Run `npm run scss` to watch and compile scss to css

> Note: The scss directory is being built out in the dist file. Have a .gitignore comment to not include this, but you may still see the scss directory in there while building locally and that's 100% okay! Make the appripriate changes to not include it during build if you want to clean up the dist directory for production entirely.

## Folder Structure

Below is an overview of each folder/file's purpose and recommended management style of new implementations:

/Sports-Ticket-Sorter/
|-- /backup/                 # Backup Build and Compiled folders (has latest copy of dist and src directories per last commit)
|
|-- /build/                  # Tools and Utilities
|   |-- gulpfile.js
|   |-- util.js
|
|-- /dist/                     # Compiled files (production ready)
|   |-- /css/
|       |-- style.css
|   |-- /img/SRFC_Teams/
|   |-- /scss/
|       |-- style.scss
|   |-- index.html
|   |-- script.js
|   |-- SRFC_schedule.js
|
|-- /src/                     # Source files
|   |-- /css/
|       |-- style.css
|   |-- /img/SRFC_Teams/
|   |-- /scss/
|       |-- _localEnvironment.scss
|       |-- style.scss
|   |-- index.partial.html
|   |-- index.template.html
|   |-- script.js
|   |-- SRFC_schedule.js
|
|   .gitignore
|   package-lock.json
|   package.json
|   README.md