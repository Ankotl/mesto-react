import React from "react";

const Main = () => {
  return (
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
          <h1 className="profile__name"> </h1>
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
  );
};

export default Main;
