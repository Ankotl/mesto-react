import React from "react";

const Card = ({ name, link, likes }) => {
  return (
    <li className="element">
      <div className="element__figure">
        <img className="element__image" src={link} alt={name} />
        <div className="element__info">
          <h2 className="element__caption">{name}</h2>
          <div className="element__like-block">
            <button
              className="element__btn-like"
              type="button"
              title="Нравится"
              aria-label="Нравиться"
            ></button>
            <p className="element__like-count">{likes.length}</p>
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
  );
};

export default Card;
