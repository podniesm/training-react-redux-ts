import Course from './Course';
import IProps from '../common/IProps';
import { connect } from 'react-redux';
import * as React from "react";
import IAppState from "../../store/IAppState";
import CourseList from "./CourseList";

interface ICoursesPageStateProps {
    courses: Course[];
}

type ICoursesPageProps = ICoursesPageStateProps & IProps;

@connect(mapStateToProps)
class CoursesPage extends React.Component<ICoursesPageProps, any> {
    constructor(props: ICoursesPageProps, context?: any) {
        super(props, context);
    }

    public render(): JSX.Element {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

function mapStateToProps(state: IAppState, ownProps: any): ICoursesPageStateProps {
    return {
        courses: state.courses
    };
}

export default CoursesPage;
