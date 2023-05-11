# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

FAQ accordion card built using HTML, CSS and JavaScript

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process

### Built with

- HTML
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

Learnt about the detail element.

```html
<details>
  <summary class="border">
    <span class="summary-question"> How many team members can I invite? </span>
    <div class="arrow-down">
      <img src="images/icon-arrow-down.svg" alt="" aria-hidden="true" />
    </div>
  </summary>
  <p class="summary-answer">
    You can invite up to 2 additional users on the Free plan. There is no limit
    on team members for the Premium plan.
  </p>
</details>
```

```js
const details = document.querySelectorAll("details");
details.forEach((detail) => {
  detail.addEventListener("toggle", (event) => {
    .
    .
    .
    if (detail.open) {
      .
      .
      .


    } else {
    .
    .
    .
    }
  });
});

};
```

### Useful resources

-[detail element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) - This helped me know more about detail tag and how to write JavaScript code for this element.

## Author

- Frontend Mentor - [@jrc17](https://www.frontendmentor.io/profile/jrc17)

## Acknowledgments

- [Niels Voogt](https://codepen.io/NielsVoogt/pen/YbaNPd) - I have referenced Niels Voogt code on codepen to get an idea of to style the detail tag
