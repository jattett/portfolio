import { create } from 'zustand'

interface ModalState {
  isOpen: boolean
  elementHover: string | null
  openModal: () => void
  closeModal: () => void
  setElementHover: (element: string | null) => void
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  elementHover: null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setElementHover: (element) => set({ elementHover: element }),
}))

