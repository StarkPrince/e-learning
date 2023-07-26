import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../actions/courseActions';

const Search = ({ fetchCourses, courses }) =>
{
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() =>
    {
        fetchCourses();
    }, [fetchCourses]);

    const handleChange = (event) =>
    {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='search-page'>
            <input
                type='text'
                placeholder='Search...'
                onChange={handleChange}
                className='search-input'
            />
            {filteredCourses.map(course => (
                <div className='course-card' key={course.id}>
                    <h2 className='course-title'>{course.title}</h2>
                    <p className='course-link'>{course.link}</p>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => 
{
    console.log(state);
    return ({
        courses: state.courses
    })
};

const mapDispatchToProps = {
    fetchCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

