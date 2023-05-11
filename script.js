"use strict";

const details = document.querySelectorAll("details");
details.forEach((detail) => {
  detail.addEventListener("toggle", (event) => {
    const summary = detail.querySelector("summary");
    const answer = detail.querySelector(".summary-answer");
    const arrow = detail.querySelector(".arrow-down");

    const fontWeightBold = "700";
    const fontWeightNormal = "400";

    const borderClass = "border";
    const arrowUpClass = "arrow-up";
    if (detail.open) {
      summary.style.fontWeight = fontWeightBold;
      answer.classList.add(borderClass);
      summary.classList.remove(borderClass);
      arrow.classList.add(arrowUpClass);
    } else {
      summary.style.fontWeight = fontWeightNormal;
      answer.classList.remove(borderClass);
      summary.classList.add(borderClass);
      arrow.classList.remove(arrowUpClass);
    }
  });
});
