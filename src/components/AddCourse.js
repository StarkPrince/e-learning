import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions/courseActions';

const AddCourse = ({ addCourse }) =>
{
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addCourse({ title, link });
        setTitle('');
        setLink('');
    };

    return (
        <div className="add-course-container">
            <form onSubmit={handleSubmit} className="add-course-form">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="add-course-input" placeholder='Course Name' />
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} className="add-course-input" placeholder='Course Link' />
                <button type="submit" className="add-course-submit">Add Course</button>
            </form>
        </div>
    );
};

export default connect(null, { addCourse })(AddCourse);
