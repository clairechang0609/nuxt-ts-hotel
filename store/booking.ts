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
		checkOutDate: new Date(new Date().setDate(new Date().getDate() + 1)),
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
}, {
	persist: {
		storage: persistedState.localStorage
	}
});
