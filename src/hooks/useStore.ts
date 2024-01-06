import { create } from "zustand";

interface Guest {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  zipCode: string;
  address: string;
  id: string;
  idType: string;
}

interface PaymentDetail {
  cardHolderName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const emptyGuest: Guest = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  birthDate: "",
  email: "",
  phoneNumber: "",
  country: "",
  city: "",
  zipCode: "",
  address: "",
  id: "",
  idType: "",
};

const emptyPaymentDetail: PaymentDetail = {
  cardHolderName: "",
  cardNumber: "",
  expDate: "",
  cvv: "",
};

interface Store {
  guests: Guest[];
  paymentDetail: PaymentDetail;
  specialReq: string;
  cardType: string;
  exchangeRate: number;
  currency: string;
  setGuests: (guests: Guest[]) => void;
  setPaymentDetail: (paymentDetail: PaymentDetail) => void;
  setSpecialReq: (specialReq: string) => void;
  setCardType: (cardType: string) => void;
  setExchangeRate: (exchangeRate: number) => void;
  setCurrency: (currency: string) => void;
}

const useStore = create<Store>((set) => ({
  guests: [emptyGuest],
  paymentDetail: emptyPaymentDetail,
  specialReq: "",
  cardType: "",
  exchangeRate: 1,
  currency: "THB",
  setGuests: (guests: Guest[]) => set({ guests }),
  setPaymentDetail: (paymentDetail: PaymentDetail) => set({ paymentDetail }),
  setSpecialReq: (specialReq: string) => set({ specialReq }),
  setCardType: (cardType: string) => set({ cardType }),
  setExchangeRate: (exchangeRate: number) => set({ exchangeRate }),
  setCurrency: (currency: string) => set({ currency }),
}));

export default useStore;
