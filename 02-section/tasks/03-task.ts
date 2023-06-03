type Tasks=string|string[]
type Month=string|number
type Result=number|string|number[]|boolean
let tasks:Tasks;
let month:Month;
let results:Result;

// Определите в явном виде тип переменных таким образом,
// чтобы код ниже работал корректно

tasks = "Новое задание";
tasks = ["Задание 1", "Задание 2"];

month = 6;
month = "Сентябрь";
month = "08";
month = 10;

results = 335;
results = [544];
results = 345 > 543;
results = "54" + 0;
results = Math.random();
