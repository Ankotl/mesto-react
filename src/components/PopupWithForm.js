import React from "react";

const PopupWithForm = ({
  name,
  title,
  isOpen,
  onClose,
  children,
  onSubmit,
}) => {
  React.useEffect(() => {
    const close = (e) => {
      if (e.key == "Escape") {
        onClose();
      }

      if (
        e.target.classList.contains("popup_opened") ||
        e.target.classList.contains("popup__btn-close")
      ) {
        onClose();
      }
    };
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("mousedown", close);
    };
  }, []);
  return (
    <section className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form
          className="popup__form"
          name="editFormProfile"
          noValidate
          onSubmit={onSubmit}
        >
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
