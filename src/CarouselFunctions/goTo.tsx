// import React from 'react'

// function goTo (index: number): void {
//   if (carouselRef.current != null) {
//     carouselRef.current.goTo(index)
//   }
// }

import { type RefObject } from "react";
import type Carousel from "@itseasy21/react-elastic-carousel";

interface ExtendedCarousel extends Carousel {
  goTo: (index: number) => void;
}

export default function goToIndex(
  carouselRef: RefObject<ExtendedCarousel>,
  index: number,
): void {
  if (carouselRef.current !== null) {
    carouselRef.current.goTo(index);

    // reseting scrool
    let container;
    switch (index) {
      case 0:
        container = document.getElementById("aboutMe")?.parentElement;
        break;
      case 1:
        container = document.getElementById("projects")?.parentElement;
        break;
      case 2:
        container = document.getElementById("techStack")?.parentElement;
        break;
      case 3:
        container = document.getElementById("knowledgeBase")?.parentElement;
        break;
    }
    if (container) {
      container.scrollTop = 0;
    }
  }
}
