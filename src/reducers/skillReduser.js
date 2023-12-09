import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [],

};

const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    addSkill(state, action) {
      state.skills.push(action.payload);
    },

  },
});

export const { addSkill } = skillSlice.actions;
export default skillSlice.reducer;
