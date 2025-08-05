import { useState, useEffect, useRef } from "react";

export default function Title({ step }) {
  const [animationClass, setAnimationClass] = useState("banner__title-initial");
  const hasPlayedInitial = useRef(false);
  const prevStep = useRef(step);

  useEffect(() => {
    if (!hasPlayedInitial.current) {
      hasPlayedInitial.current = true;
      setAnimationClass("banner__title-initial");
      return;
    }
    if (step === 2 && prevStep.current < step) {
      setAnimationClass("banner__title-out");
    }
    if (step === 1 && prevStep.current === 2) {
      setAnimationClass("banner__title-in");
    }
    prevStep.current = step;
  }, [step]);

  return (
    <div className={`banner__title ${animationClass}`}>
      <div className="banner__title-top">
        <h1>СУ-ВИД МЯСО</h1>
      </div>
      <div className="banner__title-bottom">
        <h1>ДЛЯ ВАШЕГО БИЗНЕСА</h1>
      </div>
    </div>
  );
}
