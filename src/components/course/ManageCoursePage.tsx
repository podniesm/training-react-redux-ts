import * as React from "react";
import * as _ from 'lodash';
import Course from "./Course";
import IAppState from "../../store/IAppState";
import IProps from "../common/IProps";
import {IDispatch} from "~react-redux~redux";
import {ICourseActions, courseActions} from "../../actions/courseActions";
import {bindActionCreators} from "redux";
import CourseForm from "./CourseForm";
import {connect} from "react-redux";
import {ISelectInputOption} from "../common/SelectInput";
import {FormEvent} from "react";
import {withRouter} from "react-router";
import {IRouter} from "react-router";

interface IManageCoursePageActionsProps {
    actions: ICourseActions;
}

interface IManageCoursePageStateProps {
    course: Course;
    authors: ISelectInputOption[];
}

interface IManageCoursePageState {
    course: Course;
    errors: any;
}

type IManageCoursePageProps = IManageCoursePageStateProps & IManageCoursePageActionsProps & IProps & {router: IRouter};

@connect(mapStateToProps, mapDispatchToProps)
class ManageCoursePage extends React.Component<IManageCoursePageProps, IManageCoursePageState> {
    constructor(props: IManageCoursePageProps, context?: any) {
        super(props, context);
        this.state = {
            course: _.assign({}, props.course),
            errors: {}
        };
        this.updateCourse = this.updateCourse.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    public render(): JSX.Element {
        return(
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course}
                            allAuthors = {this.props.authors}
                            onChange={this.updateCourse}
                            onSave={this.saveCourse}
                            errors={this.state.errors}/>
            </div>
        );
    }

    private componentWillReceiveProps(nextProps: IManageCoursePageProps) {
        if(this.props.course.id != nextProps.course.id) {
            this.setState({
                course: _.assign({}, nextProps.course),
                errors: this.state.errors
            });
        }
    }

    private updateCourse(event: FormEvent): void {
        const target = event.target as any;
        const field = target.name;
        let course = this.state.course;
        course[field] = target.value;
        return this.setState({course: course} as IManageCoursePageState);
    }

    private saveCourse(event: FormEvent): void {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.props.router.push('/courses');
    }
}

function getCourseById(courses: Course[], courseId: string): Course {
    const course = courses.filter(c => c.id == courseId);
    return course.length ? course[0] : null;
}

function mapStateToProps(state: IAppState, ownProps: any): IManageCoursePageStateProps {
    const courseId = ownProps.params.id;
    let course: Course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
    if(courseId && state.courses.length) {
        course = getCourseById(state.courses, courseId);
    }
    const authorsFormattedForDropdown: ISelectInputOption[] = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    });
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch: IDispatch, ownProps: any): IManageCoursePageActionsProps {
    return {
        actions: bindActionCreators(courseActions as any, dispatch)
    };
}
export default withRouter(ManageCoursePage);