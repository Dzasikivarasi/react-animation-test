import Banner from "./pages/banner/banner";

function App() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="header__content">
            <nav className="header__left">
              <ul>
                <li>
                  <a href="#">Каталог</a>
                </li>
                <li>
                  <a href="#">Клиентам</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Рецепты</a>
                </li>
                <li>
                  <a href="#">Блог</a>
                </li>
              </ul>
            </nav>
            <div className="header__right">
              <a href="#">+7 923 123 12 33</a>
              <a href="#">Контакты</a>
              <button>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Banner />
      </main>
    </>
  );
}

export default App;
