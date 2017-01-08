import * as React from "react";
import Course from "./Course";
import CourseListRow from "./CourseListRow";

const CourseList: React.StatelessComponent<{courses: Course[]}> = ({courses}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
            {courses.map(course => <CourseListRow key={course.id} course={course}/>)}
            </tbody>
        </table>
    );
};

export default CourseList;