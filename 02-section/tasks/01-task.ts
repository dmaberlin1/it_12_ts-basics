// 1. Создайте 3 массива: массив из имен 4 ваших
// лучших друзей, массив из их возрастов, массив
// в котором будет указано есть ли у них автомобиль
// 2. Укажите в явной тип массивов
// 3. Заполните данные

const friends:string[] = ['friend1','friend2','friend3','friend4'];
const ages:number []= [30,31,32,33];
const hasCar:boolean[] = [false,true,true,true];

// 4. Добавьте в каждый из массивов информацию
// о вашем четвертом друге - ошибка в тз, добавить инфу о пятом друге
friends.push('friend5')
ages.push(35)
hasCar.push(false)

// 5. Раскомментируйте строки ниже исправьте их
// таким образом чтобы не возникало ошибок

friends.push("Ваня");
ages.push(22)
hasCar.push(true);

// 6. Создайте кортеж массивов, перенесите данные
// о ваши друзьях в него

const friendsData:[string[],number[],boolean[]] = [friends,ages,hasCar];