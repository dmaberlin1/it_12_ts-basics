// 1. Создайте несколько переменных:
// Имя, Фамилия, Пол, Возраст, Родной город,
// Почтовый индекс,Семейное положение
// женат/замужем (да/нет), Есть ли домашние
// животные? (да/нет)
// 2. Явно определите тип переменных
// 3. Присвойте каждой переменной значение
// соответствующее лично вам
// 4. Выведите данные в консоль

type biopassport={
    name:string
    surname:string
    gender:string
    family_status:string
    married:boolean
    pet:boolean
}

const dma:biopassport={
    name:'dma',
    surname:'berlin',
    gender:'male',
    family_status:'dating',
    married:false,
    pet:false
}

console.log(dma)