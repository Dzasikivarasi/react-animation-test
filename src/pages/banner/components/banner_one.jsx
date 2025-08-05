import { useState, useRef, useEffect } from "react";
import Title from "./title";
import Bottom_menu from "./bottom-menu";
import Menu_image from "./menu-image";
import Bottom_right from "./bottom_right";
import Logo from "./logo";

export default function Banner_one({ activeMenuItem }) {
  const hasRenderedOnce = useRef(false);
  const [defaultRender, setDefaultRender] = useState(true);

  useEffect(() => {
    if (!hasRenderedOnce.current) {
      setDefaultRender(true);
      hasRenderedOnce.current = true;
    } else {
      setDefaultRender(false);
    }
  }, []);
  return (
    <div className="banner__content">
      <Logo />
      <Title />
      <Menu_image
        activeMenuItem={activeMenuItem}
        defaultRender={defaultRender}
      />
      <div className="banner__bottom">
        <Bottom_menu activeMenuItem={activeMenuItem} />
        <Bottom_right />
      </div>
    </div>
  );
}
