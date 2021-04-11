export interface Payment{
    paymentID?:number;
    cardNameSurname:string;
    cardNumber:string;
    cardExpiryDate:string;
    Cvv:string;
    amountPaye:number;
}