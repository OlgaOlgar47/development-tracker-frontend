export const BASE_URL = "http://localhost:8000";

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getUserData = () => {
  return fetch(`${BASE_URL}/api/v1/userData/`, {
    method: "GET",
    headers: {
      authorization: "Token 2ce61160f6f0b226cd9260699515dd85cf198229",
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
  return fetch(`${BASE_URL}/api/v1/skills/`, {
    method: "GET",
    headers: {
      authorization: "Token 2ce61160f6f0b226cd9260699515dd85cf198229",
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
  return fetch(`${BASE_URL}/api/v1/collections/`, {
    method: "GET",
    headers: {
      authorization: "Token 2ce61160f6f0b226cd9260699515dd85cf198229",
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
  return fetch(`${BASE_URL}/api/v1/courses/`, {
    method: "GET",
    headers: {
      authorization: "Token 2ce61160f6f0b226cd9260699515dd85cf198229",
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
  return fetch(`${BASE_URL}/api/v1/skills/`, {
    method: "POST",
    headers: {
      authorization: "Token 2ce61160f6f0b226cd9260699515dd85cf198229",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data,
    }),
  }).then((res) => {
    return getResponseData(res);
  });
};

export const editSkill = (values) => {
  return fetch(`${BASE_URL}/api/v1/skills/`, {
    method: "PATCH",
    headers: {
      authorization: "Token 2ce61160f6f0b226cd9260699515dd85cf198229",
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
  return fetch(`${BASE_URL}/api/v1/skills/${id}/`, {
    method: "DELETE",
    headers: {
      authorization: "Token 2ce61160f6f0b226cd9260699515dd85cf198229",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return getResponseData(res);
  });
};
