import logo from "./images/logo.svg";

function App() {
  return (
    <div className="page">
      <div className="wrapper">
        <header className="header">
          <img src={logo} alt="Лого" className="header__logo" />
        </header>
        <main className="content">
          <section className="profile">
            <button
              className="profile__avatar-edit"
              type="button"
              title="Обновить аватар"
            >
              <img src=" " alt="Аватар" className="profile__avatar" />
            </button>

            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button
                className="profile__btn-edit"
                type="button"
                title="Редактировать профиль"
                aria-label="Редактировать профиль"
              ></button>
              <p className="profile__about"></p>
            </div>
            <button
              className="profile__btn-add"
              type="button"
              title="Добавить фото"
              aria-label="Добавить фото"
            ></button>
          </section>
          <section className="elements">
            <ul className="elements__list"></ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
      </div>
      <section className="popup popup_edit">
        <div className="popup__container">
          <form className="popup__form" name="editFormProfile" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <fieldset className="popup__fieldset">
              <input
                className="popup__input"
                type="text"
                placeholder="Имя"
                name="userName"
                required
                minLength="2"
                maxLength="40"
                id="input-name"
              />
              <span className="popup__error input-name-error"></span>
              <input
                className="popup__input"
                type="text"
                placeholder="О себе"
                name="userAbout"
                required
                minLength="2"
                maxLength="200"
                id="input-about"
              />
              <span className="popup__error input-about-error"></span>
              <button
                className="popup__btn-save"
                type="submit"
                title="Сохранить"
                aria-label="Сохранить"
              >
                Сохранить
              </button>
            </fieldset>
          </form>
          <button
            className="popup__btn-close"
            type="button"
            title="Закрыть"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <section className="popup popup_add">
        <div className="popup__container">
          <form className="popup__form" name="addFormElement" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <fieldset className="popup__fieldset">
              <input
                className="popup__input"
                type="text"
                placeholder="Название"
                name="inputTitle"
                required
                minLength="2"
                maxLength="30"
                id="input-title"
              />
              <span className="popup__error input-title-error"></span>
              <input
                className="popup__input"
                type="url"
                placeholder="Ссылка на картинку"
                name="inputLink"
                required
                id="input-link"
              />
              <span className="popup__error input-link-error"></span>
              <button
                className="popup__btn-save"
                type="submit"
                title="Создать"
                aria-label="Создать"
              >
                Соxранить
              </button>
            </fieldset>
          </form>
          <button
            className="popup__btn-close"
            type="button"
            title="Закрыть"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <section className="popup popup_picture">
        <div className="popup__content">
          <img src=" " alt="" className="popup__image" />
          <p className="popup__caption"></p>
          <button
            className="popup__btn-close"
            type="button"
            title="Закрыть"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <section className="popup popup_confirm">
        <div className="popup__container">
          <form className="popup__form" noValidate>
            <h2 className="popup__title">Вы уверены?</h2>

            <button
              className="popup__btn-save popup__btn-save_confirm"
              type="submit"
              title="Да"
              aria-label="Да"
            >
              Да
            </button>
          </form>
          <button
            className="popup__btn-close"
            type="button"
            title="Закрыть"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <section className="popup popup_update-avatar">
        <div className="popup__container">
          <form className="popup__form" name="updateAvatarForm" noValidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <fieldset className="popup__fieldset">
              <input
                className="popup__input"
                type="url"
                placeholder="Ссылка на картинку"
                name="inputLink"
                required
                id="input-link-avatar"
              />
              <span className="popup__error input-link-avatar-error"></span>

              <button
                className="popup__btn-save"
                type="submit"
                title="Сохранить"
                aria-label="Сохранить"
              >
                Сохранить
              </button>
            </fieldset>
          </form>
          <button
            className="popup__btn-close"
            type="button"
            title="Закрыть"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <section className="popup popup_picture">
        <div className="popup__content">
          <img src=" " alt="" className="popup__image" />
          <p className="popup__caption"></p>
          <button
            className="popup__btn-close"
            type="button"
            title="Закрыть"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <template id="element">
        <li className="element">
          <div className="element__figure">
            <img className="element__image" src=" " alt="" />
            <div className="element__info">
              <h2 className="element__caption"></h2>
              <div className="element__like-block">
                <button
                  className="element__btn-like"
                  type="button"
                  title="Нравится"
                  aria-label="Нравиться"
                ></button>
                <p className="element__like-count">0</p>
              </div>
            </div>
          </div>
          <button
            className="element__btn-delete"
            type="button"
            title="Удалить"
            aria-label="Удалить"
          ></button>
        </li>
      </template>
    </div>
  );
}

export default App;
