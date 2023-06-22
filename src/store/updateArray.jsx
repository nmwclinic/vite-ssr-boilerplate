import { create } from 'zustand'
import { getItem, setItem } from '../helper/localStorage';

const initial = {
  array: []
}

export const arrayStore = create((set) => ({
  initial,
  updateArray: (action) => {
    setItem('array', JSON.stringify(action))

    set((state) => ({
      initial: { ...state.initial, array: action }
    }))
  },
  removeArray: (action) =>
    set((state) => ({
      initial: { ...state.initial, array: state.initial.array }
    })),
}))
