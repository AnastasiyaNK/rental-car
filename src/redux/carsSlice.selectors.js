export const selectCarIsLoading = (state) => state.cars.isLoading;
export const selectCarError = (state) => state.cars.error;
export const selectCarItems = (state) => state.cars.items;
export const selectFavoriteCars = (state) => state.cars.favoriteCarIds;

export const selectOpenModal = (state) => state.modal.isOpen;

export const selectCardId = (state) => state.modal.selectedCardId;
export const selectCarDetails = (state) => state.modal.carDetails;
