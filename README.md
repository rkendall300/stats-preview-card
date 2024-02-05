# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

## Desktop Design
![](./desktop-design.PNG)

## Mobile Design
![](./mobile-design.PNG)

### Links

- Live Site URL: [Stats Preview](https://rkendall300.github.io/stats-preview-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

Similar to the other few projects I completed recently, the biggest learning part of this was setting the box-sizing to border-box for card elements. I wasn't sure why some of the time I didn't have the need to specify this property, but it was because I wasn't setting the width or height properties to 100%. Moving forward, I will use *, ::before, ::after { box-sizing: border-box; } at the start of projects, and change it later if necessary.

### Continued development

The mobile styling on this project was a little weird, with the image height scaling down on smaller screen sizes. I wasn't sure how to fix it, and the few times I had progress on it, it would mess up the size of the card overall. If I find a way to make it so the min-height of the image does not overflow outside of the card, and actually uses the min-height that I specify, I will come back and modify this.

## Author

- Frontend Mentor - [@rkendall300](https://www.frontendmentor.io/profile/rkendall300)

## Acknowledgments

Shoutout to my friend Eric for showing me the box-sizing: border-box rule!