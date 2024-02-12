import { create } from "zustand";

const useHandleUsers = create((set) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  isActive: true,
  setIsActive: (isActive) => set({ isActive }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useHandleUsers;
