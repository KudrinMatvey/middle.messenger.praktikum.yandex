export const loginValidator = (str: string): string => {
  const includesLetter = /.*[a-zA-Z].*/.test(str);
  if (!includesLetter) {
    return 'Логин должен содержать латинские буквы';
  }
  const onlyProperSymbols = /^[a-zA-Z0-9_-]+$/.test(str);
  if (!onlyProperSymbols) {
    return 'Логин может содержать латинские буквы, дефис, нижнее подчеркивание и цифры';
  }
  if (str.length < 3 || str.length > 20) {
    return 'Логин может содержать от 3 до 20 символов';
  }
  return '';
};

export const emailValidator = (str: string) => {
  const valid = new RegExp(`^[a-zA-Z0-9.!#$%&'*+\\/=?^_\`{|}~-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+$`).test(str);
  return valid ? '' : 'Неправильная почта';
};

export const passwordValidator = (str: string) => {
  const onlyProperSymbols = /(?=.*[A-Z])(?=.*\d)/.test(str);
  if (!onlyProperSymbols) {
    return 'Пароль должен содержать как минимум одну заглавную латинскую букву и одну цифру';
  }
  if (str.length < 8) {
    return 'Пароль должен содержать как минимум 8 символов';
  }
  return '';
};

export const phoneValidator = (str: string) => {
  const isValid = /^\+?\d{10,15}$/.test(str);
  return isValid ? '' : 'Телефон должен содержать от 10 до 15 цифр, может начинаться с плюса';
};

export const nameValidator = (str: string) => {
  const startsFromCapital = /^[A-ZА-Я].*$/.test(str);
  if (!startsFromCapital) {
    return `Поле должно начинаться с заглавной буквы`;
  }
  const validCyrillic = /^[А-Яа-я-]*$/.test(str);
  const validLatin = /^[A-Za-z-]*$/.test(str);
  if (validCyrillic || validLatin) {
    return '';
  }
  return `Поле может содержать только кириллицу или латиницу и дефис`;
};

export const passwordRepeatValidator = (otherField: {value?: string}) => {
  return (str: string) => {
    if (str !== otherField.value) {
      return 'Пароли не совпадают';
    }
    return '';
  }
}
