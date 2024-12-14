import { create } from 'zustand';

const useLocationStore = create((set) => ({
  isLocationVerified: false,
  locationName: '',
  setLocationInfo: (isVerified, name) => 
    set({ isLocationVerified: isVerified, locationName: name }),
}));

export default useLocationStore;