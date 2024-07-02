

export const validatorEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i.test(email);
}

export const validatorName = (name) => {
  return /^[A-Za-zА-Яа-яЁё\\-\\s]+$/gm.test(name);
}

