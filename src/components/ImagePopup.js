import React from "react";

const ImagePopup = () => {
  return (
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
  );
};

export default ImagePopup;
