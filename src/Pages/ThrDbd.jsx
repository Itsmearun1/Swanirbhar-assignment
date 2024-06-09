import React, { useState } from 'react';
import axios from 'axios';

const ThrDbd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lessons, setLessons] = useState([{ title: '' }]);

  const handleAddLesson = () => {
    setLessons([...lessons, { title: '' }]);
  };

  const handleLessonChange = (index, value) => {
    const newLessons = lessons.map((lesson, i) => (i === index ? { title: value } : lesson));
    setLessons(newLessons);
  };

  const handleSubmit = () => {
    const newCourse = { title, description, lessons };
    axios.post('https://my-json-server-6nvb.onrender.com/courses', newCourse).then(() => {
      setTitle('');
      setDescription('');
      setLessons([{ title: '' }]);
      alert('Course added successfully');
    });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Add a New Course</h2>
        <input
          className="input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <h3>Lessons</h3>
        {lessons.map((lesson, index) => (
          <input
            className="input"
            key={index}
            type="text"
            value={lesson.title}
            onChange={(e) => handleLessonChange(index, e.target.value)}
          />
        ))}
        <button className="button add-button" onClick={handleAddLesson}>Add Lesson</button>
        <button className="button submit-button" onClick={handleSubmit}>Submit Course</button>
      </div>
      <style>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: lightgrey;
        }
        .form-box {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }
        .input, .text {
          width: 100%;
          padding: 8px;
          margin: 8px 0;
          border: 1px solid grey;
          border-radius: 4px;
        }
        .textarea {
          resize: vertical;
        }
        .button {
     
          color: white;
          border: none;
          padding: 10px;
          margin: 8px 0;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        .add-button {
          background-color: green;
        }
        .submit-button {
          background-color: red;
        }
      `}</style>
    </div>
  );
};

export default ThrDbd;
