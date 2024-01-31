// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentsList from './components/StudentsList';
import StudentDashboard from './components/StudentDashboard';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/courses" exact element={<CourseListing />} />
        <Route path="/courses/:courseId" element={ <CourseDetails/>} />
        <Route path="/students" element={ <StudentsList />} />
        <Route path="/dashboard/:studentId" element={ <StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
