// src/redux/slice.js
import { createSlice } from '@reduxjs/toolkit';

// Load completedCourses from localStorage on page load
const storedCompletedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];

const initialState = {
  completedCourses: storedCompletedCourses,
};

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    markCourseComplete: (state, action) => {
      const { studentId, courseId } = action.payload;
      const key = `${studentId}_${courseId}`;
      const isCompleted = state.completedCourses.includes(key);

      state.completedCourses = isCompleted
        ? state.completedCourses.filter((id) => id !== key)
        : [...state.completedCourses, key];

      // Save completedCourses to localStorage
      localStorage.setItem('completedCourses', JSON.stringify(state.completedCourses));
    },
  },
});

export const { markCourseComplete } = mySlice.actions;
export default mySlice.reducer;
