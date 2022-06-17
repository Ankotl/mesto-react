import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userName, setUserName] = useState("Name");
  const [userDescription, setUserDescription] = useState("About");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialData()
      .then((res) => {
        const [userData, cardData] = res;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-edit"
          type="button"
          title="Обновить аватар"
          onClick={onEditAvatar}
        ></button>
        <img className="profile__avatar" src={userAvatar} alt={userName} />

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={onEditProfile}
            className="profile__btn-edit"
            type="button"
            title="Редактировать профиль"
            aria-label="Редактировать профиль"
          ></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__btn-add"
          type="button"
          title="Добавить фото"
          aria-label="Добавить фото"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} {...card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
