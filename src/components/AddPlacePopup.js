import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, isLoading }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
    >
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error input-title-error"></span>
        <input
          className="popup__input"
          type="url"
          placeholder="Ссылка на картинку"
          name="inputLink"
          required
          id="input-link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__error input-link-error"></span>
        <button
          className="popup__btn-save"
          type="submit"
          title="Создать"
          aria-label="Создать"
        >
          {isLoading ? "Сохранение..." : "Создать"}
        </button>
      </fieldset>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
