import Testimonial from "./Testimonial";
import { useState, useEffect } from "react";

export default function Slider({ elements }) {
  const [sliderIndex, setSliderIndex] = useState(null);
  function handleRightArrow() {}
  function handleLeftArrow() {}

  useEffect(() => {
    if (elements) {
      // Get the index of the middlemost item in the array passed in as props.
      // Set sliderIndex to this value.
      const middle = elements[Math.floor(elements.length / 2)];
      setSliderIndex = middle;
    }
  }, [elements]);

  return (
    <div
      id="testimonial-container"
      className="relative mt-5 h-96 overflow-x-hidden flex items-center"
    >
      <div
        className="flex max-w-full transform"
        style={{ transform: "translate(-33%)" }}
      >
        {elements &&
          elements.map((element, i) => {
            return (
              <Testimonial
                key={i + element.user}
                text={element.text}
                user={element.user}
                stars={element.stars}
                className="relative z-50 transform scale-90 shadow-xl w-1/3 flex-shrink-0"
              />
            );
          })}
      </div>
    </div>
  );
}
