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
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Course Name' />
            <input type="text" value={link} onChange={(e) => setLink(e.target.value)}
                placeholder='Course Link' />
            <button type="submit">Add Course</button>
        </form>
    );
};

export default connect(null, { addCourse })(AddCourse);
