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
        <div className="course-list-container">
            {courses.map(course => (
                <div className="course-card" key={course.id}>
                    <h2 className="course-title">{course.title}</h2>
                    <button href={course.link} >Go to course</button>
                    <div className="course-video">
                        <img src="https://random.imagecdn.app/500/150" height="270" width="320" />
                    </div>
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
