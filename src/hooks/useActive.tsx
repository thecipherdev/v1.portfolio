import { create } from 'zustand';

interface ActiveState {
  active: string;
  setActive: (activeLink: string) => void;
}

export const useActive = create<ActiveState>((set) => ({
  active: "",
  setActive: (activeLink: string) => {
    set({ active: activeLink })
  }
}))

