// 1. Функция formattedUserData принимает ряд
// аргументов и выводит форматированную
// информацию о пользователе. Опишите
// аргументы этой функции таким образом,
// чтобы в случае отсутствия информации
// о возрасте или родном городе, в
// информации о юзере было указано
// "Нет данных"


interface FormattedUsersData{
    'firstName'?:string;
    'lastName'?: string;
    'age'?: number|string;
    'hometown'?: string;
}

function formattedUsersData(
    user:FormattedUsersData){
    const { firstName = "Нет данных",
        lastName = "Нет данных",
        age = "Нет данных",
        hometown = "Нет данных" } = user;
    return `
      Имя: ${firstName};
      Фамилия: ${lastName};
      Возраст: ${age};
      Родной город: ${hometown};
    `;
  }

  formattedUsersData({})
  // 2. Ниже перепишите функцию formattedUserData2 таким
  // образом чтобы данные выводились в консоль

function formattedUsersData2(
    user:FormattedUsersData):null{
    const { firstName = "Нет данных",
        lastName = "Нет данных",
        age = "Нет данных",
        hometown = "Нет данных" } = user;
    console.log(`
      Имя: ${firstName};
      Фамилия: ${lastName};
      Возраст: ${age};
      Родной город: ${hometown};
    `)
    return null
}

formattedUsersData2({})