export const BASE_URL = "http://localhost:8000";
export const TOKEN = "189f4d6080c2816da4de7ea51ac8dbbccae66958";

const headers = {
  authorization: `Token ${TOKEN}`,
  Accept: "application/json",
  "Content-Type": "application/json",
};

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getUserData = () => {
  return fetch(`${BASE_URL}/api/v1/userData/`, {
    method: "GET",
    headers,
  }).then(getResponseData);
};

export const getSkills = () => {
  return fetch(`${BASE_URL}/api/v1/skills/`, {
    method: "GET",
    headers,
  }).then(getResponseData);
};


export const getCollections = () => {
  return fetch(`${BASE_URL}/api/v1/collections/`, {
    method: "GET",
    headers,
  }).then(getResponseData);
};

export const getCourses = () => {
  return fetch(`${BASE_URL}/api/v1/recommended-courses-tracker/`, {
    method: "GET",
    headers,
  }).then(getResponseData);
};


export const getCoursesForCollection = (id) => {
  return fetch(`${BASE_URL}/api/v1/recommended-courses-collection/${id}/`, {
    method: "GET",
    headers,
  }).then(getResponseData);
};

export const getCourseForSkillEditor = (id) => {
  return fetch(`${BASE_URL}/api/v1/recommended-courses-skill/${id}/`, {
    method: "GET",
    headers,
  }).then(getResponseData);
};

export const addSkill = (data) => {
  return fetch(`${BASE_URL}/api/v1/skills/`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: data,
    }),
  }).then(getResponseData);
};

export const editSkill = (values) => {
  return fetch(`${BASE_URL}/api/v1/skills/${values.id}/`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      name: values.name,
      rate: values.rate,
      notes: values.notes,
    }),
  }).then(getResponseData);
};


export const deleteSkill = (id) => {
  return fetch(`${BASE_URL}/api/v1/skills/${id}/`, {
    method: "DELETE",
    headers,
  }).then(getResponseData);
};
