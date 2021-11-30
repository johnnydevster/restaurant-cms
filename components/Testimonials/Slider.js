import Testimonial from "./Testimonial";
import { useState, useEffect } from "react";

export default function Slider({ elements }) {
  const [sliderIndex, setSliderIndex] = useState(null);
  const [middleElement, setMiddleElement] = useState(null);
  const [sliderTranslate, setSliderTranslate] = useState(0);

  function handleRightArrow() {
    if (sliderIndex === elements.length - 1) {
      setSliderIndex(0);
      const translateIndex = middleElement;
      setSliderTranslate(translateIndex * 33.33);
    } else {
      setSliderIndex(sliderIndex + 1);
      setSliderTranslate(sliderTranslate - 33.33);
    }
  }

  function handleLeftArrow() {
    if (sliderIndex === 0) {
      setSliderIndex(elements.length - 1);
      const translateIndex = elements.length - 1 - middleElement;
      setSliderTranslate(translateIndex * -33.33);
    } else {
      setSliderIndex(sliderIndex - 1);
      setSliderTranslate(sliderTranslate + 33.33);
    }
  }

  function handleBlobClick(clickedIndex) {
    const translateIndex = clickedIndex - sliderIndex;
    console.log(translateIndex * -33.33);
    setSliderTranslate(translateIndex * -33.33);
    setSliderIndex(clickedIndex);
  }

  useEffect(() => {
    if (elements) {
      // Get the index of the middlemost item in the array passed in as props.
      // Set sliderIndex to this value.
      const middle = Math.floor(elements.length / 2) - 1;
      setSliderIndex(middle);
      setMiddleElement(middle);
    }
  }, [elements]);

  return (
    <div className="relative">
      <span
        onClick={handleLeftArrow}
        class="select-none transition-all material-icons text-6xl absolute -left-10 transform -translate-y-1/2 top-1/2 text-white opacity-80 hover:opacity-90 cursor-pointer"
      >
        keyboard_arrow_left
      </span>
      <span
        onClick={handleRightArrow}
        class="select-none transition-all material-icons text-6xl absolute -right-10 transform -translate-y-1/2 top-1/2 text-white opacity-80 hover:opacity-90 cursor-pointer"
      >
        keyboard_arrow_right
      </span>
      {elements && (
        <div className="absolute transform left-1/2 -translate-x-1/2 -bottom-4">
          {elements.map((element, i) => {
            return (
              <span
                key={i + element.user}
                onClick={() => handleBlobClick(i)}
                class={`${
                  sliderIndex === i
                    ? "text-lg opacity-90"
                    : "text-base opacity-50"
                } select-none material-icons ml-2 transition-all  hover:opacity-80 cursor-pointer`}
              >
                circle
              </span>
            );
          })}
        </div>
      )}
      <div
        id="testimonial-container"
        className="relative mt-5 h-96 overflow-x-hidden flex items-center"
      >
        <div
          className="transition-all ease-in-out duration-500 flex max-w-full transform"
          style={{ transform: `translate(${sliderTranslate}%)` }}
        >
          {elements &&
            elements.map((element, i) => {
              return (
                <Testimonial
                  key={i + element.user}
                  text={element.text}
                  user={element.user}
                  stars={element.stars}
                  className={`${
                    sliderIndex === i
                      ? "scale-125 z-50 shadow-xl"
                      : "scale-90 opacity-80"
                  } transition-all ease-in-out duration-500 relative transform w-1/3 flex-shrink-0`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
