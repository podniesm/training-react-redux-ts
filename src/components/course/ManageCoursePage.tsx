import * as React from "react";
import Course from "./Course";
import IAppState from "../../store/IAppState";
import IProps from "../common/IProps";
import {IDispatch} from "~react-redux~redux";
import {ICourseActions, courseActions} from "../../actions/courseActions";
import {bindActionCreators} from "redux";

interface IManageCoursePageActionsProps {
    actions: ICourseActions;
}

interface IManageCoursePageStateProps {
    course: Course;
}

type IManageCoursePageProps = IManageCoursePageStateProps & IManageCoursePageActionsProps & IProps;

class ManageCoursePage extends React.Component<IManageCoursePageProps, any> {
    render(): JSX.Element {
        return(
            <h1>Manage Course</h1>
        );
    }
}

function mapStateToProps(state: IAppState, ownProps: any): IManageCoursePageStateProps {
    return {
        course: null
    };
}

function mapDispatchToProps(dispatch: IDispatch, ownProps: any): IManageCoursePageActionsProps {
    return {
        actions: bindActionCreators(courseActions as any, dispatch)
    };
}

export default ManageCoursePage;