import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dummyData from '../dummyData';
import imgSrc from '../assets/img.jpg'; // Adjust the path accordingly

const StudentDashboard = () => {
  const { studentId } = useParams();

  // Load completed courses from localStorage on component mount
  const initialCompletedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
  const [completedCourses, setCompletedCourses] = useState(initialCompletedCourses);

  useEffect(() => {
    // Save completed courses to localStorage whenever it changes
    localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
  }, [completedCourses]);

  const handleMarkAsCompleted = (courseId) => {
    setCompletedCourses((prevCompletedCourses) => {
      if (prevCompletedCourses.includes(courseId)) {
        return prevCompletedCourses.filter((id) => id !== courseId);
      } else {
        return [...prevCompletedCourses, courseId];
      }
    });
  };

  const enrolledCourses = dummyData.filter((course) =>
    course.students.some((student) => student.studentId === parseInt(studentId))
  );

  return (
    <div className="student-dashboard-container">
      <h1 className="students-list-heading">Student Dashboard</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Thumbnail</th>
            <th>Due Date</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course) => (
            <tr key={course.courseId} className="dashboard-row">
              <td>{course.name}</td>
              <td>{course.instructor}</td>
              <td>
                <img src={imgSrc} alt={`${course.name} Thumbnail`} style={{ maxWidth: '100px' }} />
              </td>
              <td>{course.dueDate}</td>
              <td>{completedCourses.includes(course.courseId) ? 'Completed' : 'In Progress'}</td>
              <td>
                <button onClick={() => handleMarkAsCompleted(course.courseId)}>
                  Mark as {completedCourses.includes(course.courseId) ? 'Incomplete' : 'Completed'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
