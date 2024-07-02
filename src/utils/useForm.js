import React, { useCallback } from 'react';
import { validatorEmail, validatorName } from '../utils/constants';

//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (name === 'email') {
      if (!value) {
        e.target.setCustomValidity('Email обязателен');
      } else if (!validatorEmail(value)) {
        e.target.setCustomValidity('Некорректный формат электронной почты');
      } else {
        e.target.setCustomValidity('');
      }
    }
    if (name === 'password') {
      if (!value) {
        e.target.setCustomValidity('Пароль обязателен');
      } else if (value.length < 6) {
        e.target.setCustomValidity('Пароль должен быть длиннее пяти симвлов');
      } else {
        e.target.setCustomValidity('');
      }
    }
    if (name === 'name') {
      if (!value) {
        e.target.setCustomValidity('Введите имя');
      } else if (!validatorName(value)) {
        e.target.setCustomValidity('Некорректное имя');
      } else if (value.length < 2) {
        e.target.setCustomValidity('Имя должно быть длиннее одного символа');
      } else {
        e.target.setCustomValidity('');
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}
