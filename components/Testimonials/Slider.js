import Testimonial from "./Testimonial";
import { useState, useEffect } from "react";
import { useWindowDimensions } from "../../utils/Hooks";

export default function Slider({ elements }) {
  // Slider component
  //
  // Takes an array of objects as props, and uses CSS translate to slide between elements.

  const [sliderIndex, setSliderIndex] = useState(null);
  // The index of the currently focused element.

  const [middleElement, setMiddleElement] = useState(null);
  // The index of the middle element in the passed array.

  const [sliderTranslate, setSliderTranslate] = useState(0);
  // The amount of CSS translate (plus or minus) that should be used to move the elements left or right.

  const [translateFactor, setTranslateFactor] = useState();
  // The translate factor used, changes when window width goes below a certain threshold.

  const { width: windowWidth } = useWindowDimensions();

  function handleRightArrow() {
    // Calculate new value of 'sliderTranslate' to move the elements left.
    // If you're at the last element, move to the first instead.
    if (sliderIndex === elements.length - 1) {
      setSliderIndex(0);
      const translateIndex = middleElement;
      setSliderTranslate(translateIndex * translateFactor);
    } else {
      setSliderIndex(sliderIndex + 1);
      setSliderTranslate(sliderTranslate - translateFactor);
    }
  }

  function handleLeftArrow() {
    // Calculate new value of 'sliderTranslate' to move the elements right.
    // If you're at the first element, move to the last instead.
    if (sliderIndex === 0) {
      setSliderIndex(elements.length - 1);
      const translateIndex = elements.length - 1 - middleElement;
      setSliderTranslate(translateIndex * -translateFactor);
    } else {
      setSliderIndex(sliderIndex - 1);
      setSliderTranslate(sliderTranslate + translateFactor);
    }
  }

  function handleBlobClick(clickedIndex) {
    // Calculate new value of 'sliderTranslate' when the blob-buttons are clicked.
    const translateIndex = clickedIndex - sliderIndex;
    setSliderTranslate(sliderTranslate + translateIndex * -translateFactor);
    setSliderIndex(clickedIndex);
  }

  useEffect(() => {
    // Calculate the index of the middlemost item in the array passed in as props.
    // Initialize sliderIndex to this value.

    if (elements) {
      const middle = Math.floor(elements.length / 2) - 1;
      setSliderIndex(middle);
      setMiddleElement(middle);
    }
  }, [elements]);

  useEffect(() => {
    // If window size changes, change the translate factor accordingly and set a new sliderTranslate according to new factor.
    if (windowWidth < 640) {
      setTranslateFactor(100);
      setSliderTranslate(-100 * (sliderIndex - 1));
    } else {
      setTranslateFactor(33.33);
      setSliderTranslate(-33.33 * (sliderIndex - 1));
    }
  }, [windowWidth <= 640, sliderIndex]);

  return (
    <div className="relative mx-10">
      <span
        onClick={handleLeftArrow}
        class="select-none transition-all material-icons text-6xl absolute -left-2 transform -translate-y-1/2 top-1/2 text-white opacity-80 hover:opacity-90 cursor-pointer"
      >
        keyboard_arrow_left
      </span>
      <span
        onClick={handleRightArrow}
        class="select-none transition-all material-icons text-6xl absolute -right-2 transform -translate-y-1/2 top-1/2 text-white opacity-80 hover:opacity-90 cursor-pointer"
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
          className="relative transition-all ease-in-out duration-500 flex w-full transform"
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
                      ? "sm:scale-125 z-50 shadow-xl"
                      : "sm:scale-90 opacity-80"
                  } transition-all relative w-full sm:w-1/3 -translate-x-full sm:translate-x-0 ease-in-out duration-500 transform flex-shrink-0`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
