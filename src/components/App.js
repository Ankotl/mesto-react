import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  };

  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm name="confirm">
        <h2 className="popup__title">Вы уверены?</h2>

        <button
          className="popup__btn-save popup__btn-save_confirm"
          type="submit"
          title="Да"
          aria-label="Да"
        >
          Да
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="update-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <ImagePopup />
    </div>
  );
}

export default App;
