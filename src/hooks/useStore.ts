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
  setGuests: (guests: Guest[]) => void;
  setPaymentDetail: (paymentDetail: PaymentDetail) => void;
  setSpecialReq: (specialReq: string) => void;
  setCardType: (cardType: string) => void;
}

const useStore = create<Store>((set) => ({
  guests: [emptyGuest],
  paymentDetail: emptyPaymentDetail,
  specialReq: "",
  cardType: "",
  setGuests: (guests: Guest[]) => set({ guests }),
  setPaymentDetail: (paymentDetail: PaymentDetail) => set({ paymentDetail }),
  setSpecialReq: (specialReq: string) => set({ specialReq }),
  setCardType: (cardType: string) => set({ cardType }),
}));

export default useStore;
