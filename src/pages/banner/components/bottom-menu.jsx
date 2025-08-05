import { BUNNER_MENU_ITEMS } from "../../../constants";

export default function Bottom_menu({ activeMenuItem }) {
  return (
    <ul className="banner__bottom-menu">
      {BUNNER_MENU_ITEMS.map((item) => (
        <button
          key={item.name}
          className={activeMenuItem.name === item.name ? "active" : ""}
        >
          {item.name}
        </button>
      ))}
    </ul>
  );
}
