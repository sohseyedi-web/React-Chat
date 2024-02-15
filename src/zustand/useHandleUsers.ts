import { create } from "zustand";

interface HandleUserType {
  selectedUser: null;
  isActive: boolean;
  setSelectedUser: (selectedUser: null) => void;
  setIsActive: (isActive: boolean) => void;
}

const useHandleUsers = create<HandleUserType>((set) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  isActive: true,
  setIsActive: (isActive) => set({ isActive }),
}));

export default useHandleUsers;
