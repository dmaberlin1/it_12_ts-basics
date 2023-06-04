interface ITruck {
    brand: string;
    model: string;
    hasTrailer: boolean;
  }

 type ICar1=Omit<ITruck,'hasTrailer'>
  // Выше описан интерфейс грузовика ITruck.
  // Создайте тип обычного авто ICar убрав из
  // интерфейса поле hasTrailer
