class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._headers = {
      authorization: token,
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} - ${res.statusText}`);
    }
  }

  getUserInfo() {
    const requestUrl = this._baseUrl + "/users/me";
    return fetch(requestUrl, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  getInitialCards() {
    const requestUrl = this._baseUrl + "/cards";
    return fetch(requestUrl, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  updateUserInfo(body) {
    const requestUrl = this._baseUrl + "/users/me";
    return fetch(requestUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  addNewCard(body) {
    const requestUrl = this._baseUrl + "/cards";
    return fetch(requestUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}`;
    return fetch(requestUrl, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addLikeCard(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}/likes`;
    return fetch(requestUrl, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLikeCard(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}/likes`;
    return fetch(requestUrl, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateAvatar(body) {
    const requestUrl = this._baseUrl + "/users/me/avatar";
    return fetch(requestUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-42",
  token: "ef2a8db2-3c2c-4f24-b837-032ea2a5c911",
});

export default api;
