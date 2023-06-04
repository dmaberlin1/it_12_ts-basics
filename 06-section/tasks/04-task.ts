// function getPropertyValue(obj, key) {
//     return obj[key];
//   }
function getPropertyValue<T>(obj: T, key: keyof T): T[keyof T] | undefined {
  if (key in obj) {
    return obj[key];
  }
  return undefined;
}

// T в данном случае представляет тип объекта, из которого мы хотим получить значение свойства.
//     keyof T означает, что тип параметра key должен быть ключом свойства объекта T.
// Тип возвращаемого значения T[keyof T] | undefined гарантирует,
// что будет возвращено значение, соответствующее типу свойства объекта,
// или undefined, если свойство не существует в объекте.


  // Функция getPropertyValue принимает 2 аргумента:
  // Объект и ключ свойства этого объекта, который
  // необходимо вернуть. Типизируйте данную функцию
  // таким образом чтобы код ниже вызвал ошибку только
  // в том случае когда у объекта нет указанного
  // свойства (второй вызов).
  
  const car = {
    brand: "Ford",
    model: "Mustang",
    yearOfIssue: 1967,
    engine: "V8",
    hp: 115
  };
  
  getPropertyValue(car, "brand");
  getPropertyValue(car, "nickname");
  