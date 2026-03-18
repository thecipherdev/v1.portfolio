import { create } from 'zustand';

type Action = {
  setHovered: (hovered: boolean) => void;
};

type HoveredStore = {
  hovered: boolean;
  actions: Action;
};

export const useHoveredStore = create<HoveredStore>((set) => ({
  hovered: false,
  actions: {
    setHovered: (hovered) => set({ hovered }),
  },
}));

export const useHovered = () => useHoveredStore((state) => state.hovered);

export const useHoveredActions = () =>
  useHoveredStore((state) => state.actions);
