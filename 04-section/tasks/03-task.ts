// Доработайте интерфейс таким образом
// Чтобы бренд и модель авто могли быть указаны лишь
// один раз. А и ownerName было опциональным

interface ICar {
   readonly brand: string;
   readonly model: string;
    hp: number;
    registrationNumber: string;
    ownerName?: string;
  }
  