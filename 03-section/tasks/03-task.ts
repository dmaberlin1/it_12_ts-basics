// 1. Типизируйте функцию calc
 interface Calc{
    action:string
    a:number
    b:number
}

function calc(args:Calc) {
   let {action='summ',a,b}=args
  switch (action) {
    case "summ":
      return a + b;
    case "desc":
      return a - b;
    case "multiplication":
      return a * b;
    case "division":
      if (b === 0) return 0;
      return a / b;
    default:
      return a + b;
  }
}

// 2. Напишите функцию calc2. Данная функция
// должна быть аналогична функции calc,
// но с использованием enum для action

enum Action {
    'summ',
    'subtraction',
    'multiplication',
    'division',
}
interface Calc2{
    action:Action
    a:number
    b:number
}

function calc2(args:Calc2) {
    let {action='summ',a,b}=args
    switch (action) {
        case "summ":
            return a + b;
        case "subtraction":
            return a - b;
        case "multiplication":
            return a * b;
        case "division":
            if (b === 0) return 0;
            return a / b;
        default:
            return a + b;
    }
}