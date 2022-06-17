import React from "react";

const PopupWithForm = ({ name, title, isOpen, onClose, children }) => {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <form className="popup__form" name="editFormProfile" noValidate>
          <h2 className="popup__title">{title}</h2>
          {children}
        </form>
        <button
          onClick={onClose}
          className="popup__btn-close"
          type="button"
          title="Закрыть"
          aria-label="Закрыть"
        ></button>
      </div>
    </section>
  );
};

export default PopupWithForm;
