"use strict";
const validateName = (name) => {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(name) ? " " : "Invalid Name";
};
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email) ? " " : "Invalid Email";
};
const validatePwd = (pwd) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  return re.test(pwd) ? " " : "Weak Password";
};
const getWebViewString = () => window.AppInventor.getWebViewString().split(",");
const setWebViewString = (str) => window.AppInventor.setWebViewString(str);
