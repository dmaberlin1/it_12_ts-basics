// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
    "cash" = 'cash',
    "card" = 'card',
    "credit" = 'credit'
}

enum Currency {
    "EUR" = "EUR",
    "USD" = "USD",
    "RUB" = "RUB"
}

interface IUser1 {
    firstName: string;
    lastName: string;
    dateBirthday: Date;
}

interface IDeliveryAddress {
    deliveryCountry: string;
    deliveryCity: string;
    deliveryAddress: string;
    deliveryBuilding: number | string;
    deliveryApartment?: number;
    deliveryTime?: string;
}

interface ICustomer1 extends IUser1, IDeliveryAddress {

    paymentType: paymentType;
    ordersCount: number;
    discountPercent: number;
    currency:Currency
}
  