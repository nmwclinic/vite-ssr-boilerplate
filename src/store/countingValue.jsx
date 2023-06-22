import { create } from 'zustand'

const initial = {
  count: 0
}

export const countingValue = create((set) => ({
  initial,
  increment: () =>
    set((state) => ({
      initial: { ...state.initial, count: state.initial.count + 1 }
    })),
  decrement: () =>
    set((state) => ({
      initial: { ...state.initial, count: state.initial.count - 1 }
    })),
  incrementByAmount: (action) => {
    set((state) => ({
      initial: { ...state.initial, count: state.initial.count + action }
    }))
  }
}))