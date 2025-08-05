import Title from "./title";
import Bottom_menu from "./bottom-menu";
import Logo from "./logo";
import Menu_image from "./menu-image";
import Bottom_right from "./bottom_right";

export default function Banner_three({ activeMenuItem }) {
  return (
    <div className="banner__content">
      <Logo />
      <Title />
      <Menu_image activeMenuItem={activeMenuItem} />
      <div className="banner__bottom">
        <Bottom_menu activeMenuItem={activeMenuItem} />
        <Bottom_right />
      </div>
    </div>
  );
}
