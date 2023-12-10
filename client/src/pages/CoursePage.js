import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../pages/style/CoursePage.css'; // Make sure the CSS file is in the same directory
import NavBar from '../components/NavBar';

const CoursePage = () => {
  const courses = [
    { name: 'Introduction to Computer Science', time: '10:00 - 11:30', days: 'Mon, Wed', professor: 'Charles Smith', room: '101' },
    { name: 'Data Structures', time: '12:00 - 14:45', days: 'Tue', professor: 'Chunyu Zhang', room: 'NAC 602' },
    { name: 'Calculus 2', time: '15:00 - 16:15', days: 'Tue, Thu', professor: 'Adam Cleary', room: 'NAC 351' },
    { name: 'Introduction to Sociology', time: '09:00 - 11:00', days: 'Fri', professor: 'Stephen Lee', room: '105' },// Add more courses here
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
              <td>
                {/* Wrap the course name with Link */}
                <Link to={`/course/chat/${index}`}>
                  {course.name}
                </Link>
              </td>
              {/* <td>{course.name}</td> */}
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

export default CoursePage;