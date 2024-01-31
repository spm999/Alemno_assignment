import React, { useState } from 'react';
import dummyData from '../dummyData';
import { useNavigate } from 'react-router-dom';
import './alm.css'; // Import your CSS file

const CourseListing = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    // Filter courses based on the search term
    const filteredCourses = dummyData.filter(
      (course) =>
        course.name.toLowerCase().includes(newSearchTerm) ||
        course.instructor.toLowerCase().includes(newSearchTerm)
    );

    // Set courses to the original data if the search term is empty
    setCourses(newSearchTerm ? filteredCourses : dummyData);
  };

  const handleCourseClick = (courseId) => {
    // Redirect or show detailed view for the selected course
    // You can implement this based on your navigation strategy
    console.log(`Clicked on course with ID ${courseId}`);
    // Navigate to the course details screen with the selected course ID
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="course-listing-container">
<header className='courseListing'>
<h1>Course Listing</h1>

</header>

      <input
        type="text"
        placeholder="Search by course or instructor"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.courseId} onClick={() => handleCourseClick(course.courseId)} className="course-item">
            <div>
              <h3 className="course-name">{course.name}</h3>
              <p className="instructor">Instructor: {course.instructor}</p>
              {/* Add more information as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;
