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
  }
}
