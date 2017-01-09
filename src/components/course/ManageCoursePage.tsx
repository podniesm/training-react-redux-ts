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

interface IManageCoursePageActionsProps {
    actions: ICourseActions;
}

interface IManageCoursePageStateProps {
    course: Course;
    authors: ISelectInputOption[]
}

interface IManageCoursePageState {
    course: Course;
    errors: any;
}

type IManageCoursePageProps = IManageCoursePageStateProps & IManageCoursePageActionsProps & IProps;

@connect(mapStateToProps, mapDispatchToProps)
class ManageCoursePage extends React.Component<IManageCoursePageProps, IManageCoursePageState> {
    constructor(props: IManageCoursePageProps, context?: any) {
        super(props, context)
        this.state = {
            course: _.assign({}, props.course),
            errors: {}
        };
        this.updateCourse = this.updateCourse.bind(this);
    }

    public render(): JSX.Element {
        return(
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course}
                            allAuthors = {this.props.authors}
                            onChange={this.updateCourse}
                            errors={this.state.errors}/>
            </div>
        );
    }

    private updateCourse(event: FormEvent): void {
        const target = event.target as any;
        const field = target.name;
        let course = this.state.course;
        course[field] = target.value;
        return this.setState({course: course} as IManageCoursePageState);
    }
}

function mapStateToProps(state: IAppState, ownProps: any): IManageCoursePageStateProps {
    let course: Course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
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

export default ManageCoursePage;