export const BASE_URL = "http://localhost:8000";

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getUserData = () => {
    return fetch(`${BASE_URL}/usersData`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return getResponseData(res);
      })
      .then((data) => data);
  };

  export const getSkills = () => {
    return fetch(`${BASE_URL}/skills`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return getResponseData(res);
      })
      .then((data) => data);
  };

  export const getCollections = () => {
    return fetch(`${BASE_URL}/collections`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return getResponseData(res);
      })
      .then((data) => data);
  };
  
  export const getCourses = () => {
    return fetch(`${BASE_URL}/courses`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return getResponseData(res);
      })
      .then((data) => data);
  };

  export const addSkill = (data) => {
    return fetch(`${BASE_URL}/skills`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        rate: data.rate,
        notes: data.notes,
      }),
    })
    .then((res) => {
      return getResponseData(res);
    })
  };

  export const editSkill = (values) => {
    return fetch(`${BASE_URL}/skills`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        rate: values.rate,
        notes: values.notes,
      }),
    })
    .then((res) => {
      return getResponseData(res);
    })
    .then((data) => data);
  };

  export const deleteSkill = (id) => {
    return fetch(`${BASE_URL}/skills/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((res) => {
      return getResponseData(res);
    })
  };