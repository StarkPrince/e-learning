import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteCourse, fetchCourses, updateCourse } from '../actions/courseActions';

const CoursesList = ({ fetchCourses, updateCourse, deleteCourse, courses }) =>
{
    useEffect(() =>
    {
        fetchCourses();
    }, [fetchCourses]);

    const handleUpdate = (course) =>
    {
        const newTitle = prompt('Enter new title', course.title);
        const newLink = prompt('Enter new link', course.link);
        if (newTitle) {
            updateCourse({ ...course, title: newTitle });
        }
        if (newLink) {
            updateCourse({ ...course, link: newLink });
        }
    };

    const handleDelete = (id) =>
    {
        deleteCourse(id);
    };


    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <h2>{course.title}</h2>
                    <p>{course.link}</p>
                    <button onClick={() => handleUpdate(course)}>Update</button>
                    <button onClick={() => handleDelete(course.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};
const mapStateToProps = state =>
{
    console.log(state); // Add this line to log the state
    return {
        courses: state.courses
    }
};


const mapDispatchToProps = {
    fetchCourses,
    updateCourse,
    deleteCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
