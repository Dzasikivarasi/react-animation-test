import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Bottom_logo() {
  const logoRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        delay: 3,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.5,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 3,
      }
    );
  }, []);

  return (
    <div className="bottom__logo" ref={logoRef}>
      <svg className="bottom__logo-text" viewBox="0 0 200 200">
        <path
          id="circle"
          d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
        />
        <text textLength="565" lengthAdjust="spacing">
          <textPath href="#circle" startOffset="0%" textAnchor="start">
            Мясные деликатесы &bull; Мясная продукция &bull;&nbsp;
          </textPath>
        </text>
      </svg>
      <img src="./img/down-logo.png" alt="Логотип" ref={imageRef} />
    </div>
  );
}
