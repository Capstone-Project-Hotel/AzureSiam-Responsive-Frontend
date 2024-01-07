import { create } from "zustand";

// interface Guest {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   gender: string;
//   birthDate: string;
//   email: string;
//   phoneNumber: string;
//   country: string;
//   city: string;
//   zipCode: string;
//   address: string;
//   id: string;
//   idType: string;
// }

// interface PaymentDetail {
//   cardHolderName: string;
//   cardNumber: string;
//   expDate: string;
//   cvv: string;
// }

// interface BookingDetail {
//   startDate: string;
//   endDate:string;
//   adultNumber: number;
//   childrenNumber: number;
//   codePromotion: string;
//   standardRoomNumber: number;
//   deluxeRoomNumber: number;
//   familyRoomNumber: number;
//   executiveRoomNumber: number;
//   juniorRoomNumber: number;
// }

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

const emptyBookingDetail: BookingDetail = {
  startDate: "",
  endDate: "",
  adultNumber: 0,
  childrenNumber: 0,
  codePromotion: "",
  standardRoomNumber: 0,
  deluxeRoomNumber: 0,
  familyRoomNumber: 0,
  executiveRoomNumber: 0,
  juniorRoomNumber: 0,
}

interface Store {
  bookingDetail: BookingDetail;
  guests: Guest[];
  paymentDetail: PaymentDetail;
  specialReq: string;
  cardType: string;
  setBookingDetail: (bookingDetail: BookingDetail) => void;
  setGuests: (guests: Guest[]) => void;
  setPaymentDetail: (paymentDetail: PaymentDetail) => void;
  setSpecialReq: (specialReq: string) => void;
  setCardType: (cardType: string) => void;
}

const useStore = create<Store>((set) => ({
  bookingDetail: emptyBookingDetail,
  guests: [emptyGuest],
  paymentDetail: emptyPaymentDetail,
  specialReq: "",
  cardType: "",
  setBookingDetail: (bookingDetail: BookingDetail) => set({ bookingDetail}),
  setGuests: (guests: Guest[]) => set({ guests }),
  setPaymentDetail: (paymentDetail: PaymentDetail) => set({ paymentDetail }),
  setSpecialReq: (specialReq: string) => set({ specialReq }),
  setCardType: (cardType: string) => set({ cardType }),
}));

export default useStore;
