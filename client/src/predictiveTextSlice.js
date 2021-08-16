import { createSlice } from '@reduxjs/toolkit'

export const predictiveTextSlice = createSlice({
  name: 'predictiveText',
  initialState: {
    suggestedWords: ['dog']
  },
  reducers: {
    updateSuggestedWords: (state, action) => {
      state.suggestedWords = action.payload
    }
  }
})

export const { updateSuggestedWords } = predictiveTextSlice.actions
export default predictiveTextSlice.reducer