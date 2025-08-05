import { useEffect, useRef, useState } from "react";

export default function Menu_image({ activeMenuItem, step }) {
  const [currentImage, setCurrentImage] = useState(activeMenuItem);
  const [prevImage, setPrevImage] = useState(null);
  const [direction, setDirection] = useState(null);
  const [isVertical, setIsVertical] = useState(false);

  const hasPlayedInitial = useRef(false);
  const prevStep = useRef(step);

  useEffect(() => {
    if (!hasPlayedInitial.current) {
      hasPlayedInitial.current = true;
      prevStep.current = step;
      return;
    }

    const isForward = step > prevStep.current;
    const isBackward = step < prevStep.current;

    const vertical =
      (isForward && step === 3) || (isBackward && prevStep.current === 3);

    if (isForward || isBackward) {
      setPrevImage(currentImage);
      setCurrentImage(activeMenuItem);
      setDirection(isForward ? "forward" : "backward");
      setIsVertical(vertical);

      setTimeout(() => setPrevImage(null), 600);
    }

    prevStep.current = step;
  }, [step, activeMenuItem]);

  const getOutClass = () => {
    if (!direction) return "";

    if (isVertical) {
      return direction === "forward"
        ? "banner__menu-image-out-up"
        : "banner__menu-image-out-down";
    }

    return direction === "forward"
      ? "banner__menu-image-out-left"
      : "banner__menu-image-out-right";
  };

  const getInClass = () => {
    if (!hasPlayedInitial.current) return "banner__menu-image-initial";

    if (isVertical) {
      return direction === "forward"
        ? "banner__menu-image-in-up"
        : "banner__menu-image-in-down";
    }

    return direction === "forward"
      ? "banner__menu-image-in-right"
      : "banner__menu-image-in-left";
  };

  return (
    <>
      {prevImage && (
        <div className={`banner__menu-image ${getOutClass()}`}>
          <img src={prevImage.img} alt="Previous image" />
        </div>
      )}
      {currentImage && (
        <div className={`banner__menu-image ${getInClass()}`}>
          <img src={currentImage.img} alt="Current image" />
        </div>
      )}
    </>
  );
}
