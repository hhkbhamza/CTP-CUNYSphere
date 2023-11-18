import React from 'react';
import './style/CoursePage.css'; // Make sure the CSS file is in the same directory
import NavBar from '../components/NavBar'

const CoursesPage = () => {
  const courses = [
    { name: 'Introduction to Computer Science', time: '10:00 - 11:30', days: 'Mon, Wed', professor: 'Dr. Smith', room: '101' },
    // Add more courses here
  ];

  return (
    <div className="courses-page">
        <NavBar/>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Time</th>
            <th>Days</th>
            <th>Professor</th>
            <th>Room Number</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.time}</td>
              <td>{course.days}</td>
              <td>{course.professor}</td>
              <td>{course.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;