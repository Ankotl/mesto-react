import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
    >
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="popup__error input-about-error"></span>
        <button
          className="popup__btn-save"
          type="submit"
          title="Сохранить"
          aria-label="Сохранить"
        >
          {isLoading ? "Сохранение..." : "Сохранить"}
        </button>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
