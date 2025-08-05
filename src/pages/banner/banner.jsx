import { useState, useRef, useEffect } from "react";
import { BUNNER_MENU_ITEMS } from "../../constants";
import Logo from "./components/logo";
import Title from "./components/title";
import Video from "./components/video";
import Bottom_menu from "./components/bottom-menu";
import Menu_image from "./components/menu-image";
import Bottom_right from "./components/bottom_right";

export default function Banner() {
  const [step, setStep] = useState(0);
  const activeMenuItem = BUNNER_MENU_ITEMS[getMenuItemIndex(step)];
  const containerRef = useRef(null);
  const MAX_SCROLL_STEP = 3;

  const getStepClass = (step) =>
    `banner--step-${Math.min(step, MAX_SCROLL_STEP)}`;

  function getMenuItemIndex(step) {
    if (step === 2) return 1;
    if (step > 2) return step - 1;
    return step;
  }

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (e.deltaY > 0 && step < MAX_SCROLL_STEP) {
        setStep((prev) => prev + 1);
      } else if (e.deltaY < 0 && step > 0) {
        setStep((prev) => prev - 1);
      }
    };

    const el = containerRef.current;
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, [step]);

  return (
    <section className={`banner ${getStepClass(step)}`} ref={containerRef}>
      <div className="wrapper">
        <div
          className={`${
            step < 2 ? "banner__content" : "banner__content--video"
          }`}
        >
          <Logo />
          <Title step={step} />
          <div className={`${step < 2 ? "" : "banner__content-interactive"}`}>
            <Menu_image step={step} activeMenuItem={activeMenuItem} />
            <Video isActive={step >= 2} />
          </div>

          <div className="banner__bottom">
            <Bottom_menu activeMenuItem={activeMenuItem} />
            <Bottom_right />
          </div>
        </div>
      </div>
    </section>
  );
}
