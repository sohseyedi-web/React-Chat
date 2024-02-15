import { create } from "zustand";
import { UserTypes } from "../utils/types";

interface HandleUserType {
  selectedUser: UserTypes | null;
  isActive: boolean;
  setSelectedUser: (selectedUser: UserTypes | null) => void;
  setIsActive: (isActive: boolean) => void;
}

const useHandleUsers = create<HandleUserType>((set) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  isActive: true,
  setIsActive: (isActive) => set({ isActive }),
}));

export default useHandleUsers;
