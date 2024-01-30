interface BookingInfo {
  roomId: string | string [],
  checkInDate: Date,
  checkOutDate: Date,
  peopleNum: number
}

export const useBookingStore = defineStore('booking', () => {
	const defaultBooking = {
		roomId: '',
		checkInDate: new Date(),
		checkOutDate: new Date(),
		peopleNum: 0
	};
	const booking = ref<BookingInfo>({ ...defaultBooking });

	const setBookingInfo = (info: BookingInfo) => {
		booking.value = { ...booking.value, ...info };
	};

	const clearBookingInfo = () => {
		booking.value = { ...defaultBooking };
	};

	return {
		booking,
		setBookingInfo,
		clearBookingInfo
	};
});
