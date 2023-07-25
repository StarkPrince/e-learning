import React from 'react';

const AddCourse = () =>
{
    return (
        <div>
            <h1>Add New Course</h1>
            <form>
                <input type="text" placeholder="Title" />
                <textarea placeholder="Description"></textarea>
                <input type="text" placeholder="Category" />
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourse;
