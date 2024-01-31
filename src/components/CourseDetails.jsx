import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dummyData from '../dummyData';
import './alm.css'; // Import your CSS file

const CourseDetails = () => {
  const { courseId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = () => {
      try {
        const course = dummyData.find((course) => course.courseId.toString() === courseId.toString());

        if (course) {
          setSelectedCourse(course);
        } else {
          console.error('Course not found.');
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (!selectedCourse) {
    return <div className="loading-indicator">Loading...</div>;
  }

  return (
    <div className="course-details-container">
      <h1 style={{textAlign:"center"}}>Course Details</h1>
      <table className="course-table">
        <tbody>
          <tr>
            <td className="label">Course Name:</td>
            <td>{selectedCourse.name}</td>
          </tr>
          <tr>
            <td className="label">Instructor:</td>
            <td>{selectedCourse.instructor}</td>
          </tr>
          <tr>
            <td className="label">Description:</td>
            <td>{selectedCourse.description}</td>
          </tr>
          <tr>
            <td className="label">Enrollment Status:</td>
            <td>{selectedCourse.enrollmentStatus}</td>
          </tr>
          <tr>
            <td className="label">Duration:</td>
            <td>{selectedCourse.duration}</td>
          </tr>
          <tr>
            <td className="label">Schedule:</td>
            <td>{selectedCourse.schedule}</td>
          </tr>
          <tr>
            <td className="label">Location:</td>
            <td>{selectedCourse.location}</td>
          </tr>
          <tr>
            <td className="label">Prerequisites:</td>
            <td>{selectedCourse.prerequisites.join(', ')}</td>
          </tr>
        </tbody>
      </table>

      <h3 className="syllabus-heading">Syllabus</h3>
      <ul className="syllabus-list">
        {selectedCourse.syllabus.map((item) => (
          <li key={item.week} className="syllabus-item">
            <strong>Week {item.week}:</strong> {item.topic} - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
