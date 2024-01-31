// src/components/StudentDashboard.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseComplete } from '../redux/slice';
import dummyData from '../dummyData';
import imgSrc from '../assets/img.jpg';

const StudentDashboard = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const completedCourses = useSelector((state) => state.mySlice.completedCourses);

  useEffect(() => {
    // Save completedCourses to localStorage whenever it changes
    localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
  }, [completedCourses]);

  const handleMarkAsCompleted = (courseId) => {
    dispatch(markCourseComplete({ studentId, courseId }));
  };

  const enrolledCourses = dummyData.filter((course) =>
    course.students.some((student) => student.studentId === parseInt(studentId))
  );

  return (
    <div className="student-dashboard-container">
      <h1 className="students-list-heading">Student Dashboard</h1>
      <table className="dashboard-table">
        <thead>
          {/* Table header */}
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
              <td>{completedCourses.includes(`${studentId}_${course.courseId}`) ? 'Completed' : 'In Progress'}</td>
              <td>
                <button onClick={() => handleMarkAsCompleted(course.courseId)}>
                  Mark as {completedCourses.includes(`${studentId}_${course.courseId}`) ? 'Incomplete' : 'Completed'}
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
