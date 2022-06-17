import React from "react";

const PopupWithForm = (props) => {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <form className="popup__form" name="editFormProfile" noValidate>
          {props.children}
        </form>
        <button
          onClick={props.onClose}
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
