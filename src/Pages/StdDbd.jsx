import React, { useEffect, useState } from "react";
import axios from "axios";
import { color } from "framer-motion";

const StdDbd = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    axios
      .get("https://my-json-server-6nvb.onrender.com/courses")
      .then((response) => {
        setCourses(response.data);
      });
  }, []);

  const handleLessonToggle = (courseId, lessonIndex) => {
    const updatedCourses = courses.map((course) => {
      if (course.id === courseId) {
        course.lessons[lessonIndex].completed =
          !course.lessons[lessonIndex].completed;
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  return (
    <div className="container">
      <div className="course-list">
        <h1>Courses</h1>
        <div className="course-items">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-box"
              onClick={() => setSelectedCourse(course)}
            >
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="course-details">
        {selectedCourse ? (
          <>
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>
            <div className="lessons">
              {selectedCourse.lessons.map((lesson, index) => (
                <label key={index} className="lesson">
                  <input
                    type="checkbox"
                    checked={lesson.completed}
                    onChange={() =>
                      handleLessonToggle(selectedCourse.id, index)
                    }
                  />
                  {lesson.title}
                </label>
              ))}
            </div>
          </>
        ) : (
          <h2>Select a course to see details</h2>
        )}
      </div>
      <style>{`
        h1{
        color:red}
        .container {
          display: flex;
          padding: 16px;
        }
        .course-list {
          width: 40%;
          padding: 16px;
          border-right: 1px solid #ccc;
        }
        .course-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .course-box {
          padding: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          cursor: pointer;
        }
        .course-box:hover {
          background-color: #f0f0f0;
        }
        .course-details {
          width: 60%;
          padding: 16px;
        }
        .lessons {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .lesson {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </div>
  );
};

export default StdDbd;
