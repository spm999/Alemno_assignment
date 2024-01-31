import React from 'react';
import { Link } from 'react-router-dom';
import './alm.css'; // Import your CSS file
import dummyData from '../dummyData';

const StudentsList = () => {
  const allStudents = dummyData.reduce((students, course) => students.concat(course.students), []);

  // Convert array to set to remove duplicates based on stringified objects
  const uniqueStudentsSet = new Set(allStudents.map(JSON.stringify));
  
  // Convert set back to array
  const uniqueStudentsArray = Array.from(uniqueStudentsSet, JSON.parse);
  uniqueStudentsArray.sort((a, b) => a.studentId - b.studentId);



  return (
    <div className="students-list-container">
      <h1 className="students-list-heading">Students List</h1>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {uniqueStudentsArray.map((student) => (
            <tr key={student.studentId} className="student-row">
              <td>{student.studentId}</td>
              <td>
                <Link to={`/dashboard/${student.studentId}`} className="student-link">
                  {student.name}
                </Link>
              </td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
