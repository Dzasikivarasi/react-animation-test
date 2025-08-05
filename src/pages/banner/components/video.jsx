import { useEffect, useState } from "react";

export default function Video({ isActive }) {
  const [hasBeenActive, setHasBeenActive] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isActive) {
      setHasBeenActive(true);
      setAnimationClass("banner__video--in");
    } else if (hasBeenActive) {
      setAnimationClass("banner__video--out");
    }
  }, [isActive, hasBeenActive]);

  return (
    <div className={`banner__video ${animationClass}`}>
      <video
        src="./img/banner-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="banner__video-title">
        <h2>СОЗДАЕМ ВКУСНОЕ И ПОЛЕЗНОЕ МЯСО ДЛЯ HORECA И РИТЕЙЛА</h2>
        <p>СОБСТВЕННОЕ ПРОИЗВОДСТВО</p>
        <div className="banner__video-delivery">
          <p>
            Доставка
            <br /> от 1 дня
          </p>
          <p>
            Заказ <br />
            от 50 кг.
          </p>
        </div>
      </div>
    </div>
  );
}
