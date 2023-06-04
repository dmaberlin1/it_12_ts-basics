interface IUser1 {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    rating: number;
  }
  
  
  // IUser - модель данных юзера.
  // IRatingUserItem- модель данных юзера в рейтинге пользователей.
  // Типы одноименных полей в обоих интерфейсах 
  // совпадают. Укажите типы полей. 
  
  interface IRatingUserItem1 {
    position:number
    login:string
    rating: number
  }
  
  