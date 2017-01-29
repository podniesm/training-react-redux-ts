import Course from './Course';
import IProps from '../common/IProps';
import { connect } from 'react-redux';
import * as React from "react";
import IAppState from "../../store/IAppState";
import CourseList from "./CourseList";
import {withRouter} from "react-router";
import {IRouter} from "react-router";

interface ICoursesPageStateProps {
    courses: Course[];
}

type ICoursesPageProps = ICoursesPageStateProps & IProps & {router: IRouter};

@connect(mapStateToProps)
class CoursesPage extends React.Component<ICoursesPageProps, any> {
    constructor(props: ICoursesPageProps, context?: any) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    public render(): JSX.Element {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={courses}/>
            </div>
        );
    }

    private redirectToAddCoursePage(): void {
        this.props.router.push('/course');
    }
}

function mapStateToProps(state: IAppState, ownProps: any): ICoursesPageStateProps {
    return {
        courses: state.courses
    };
}

export default withRouter(CoursesPage);
