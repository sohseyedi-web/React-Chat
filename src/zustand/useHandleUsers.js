import { create } from "zustand";

const useHandleUsers = create((set) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));

export default useHandleUsers;
