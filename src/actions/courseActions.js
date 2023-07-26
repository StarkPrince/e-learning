import axios from 'axios';

export const fetchCourses = () =>
{
    return async dispatch =>
    {
        const response = await axios.get('http://localhost:3001/courses');
        dispatch({ type: 'FETCH_COURSES', payload: response.data });
    };
};

export const addCourse = (course) =>
{
    return async dispatch =>
    {
        const response = await axios.post('http://localhost:3001/courses', course);
        dispatch({ type: 'ADD_COURSE', payload: response.data });
    };
};

export const updateCourse = (course) =>
{
    return async dispatch =>
    {
        const response = await axios.put(`http://localhost:3001/courses/${course.id}`, course);
        dispatch({ type: 'UPDATE_COURSE', payload: response.data });
    };
};

export const deleteCourse = (id) =>
{
    return async dispatch =>
    {
        await axios.delete(`http://localhost:3001/courses/${id}`);
        dispatch({ type: 'DELETE_COURSE', payload: id });
    };
};
