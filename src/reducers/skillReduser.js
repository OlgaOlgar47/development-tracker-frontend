import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [],
  // другие начальные значения
};

const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    addSkill(state, action) {
      state.skills.push(action.payload);
    },
    // другие actions и reducers
  },
});

export const { addSkill } = skillSlice.actions;
export default skillSlice.reducer;
