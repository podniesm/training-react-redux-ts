import Course from './Course';
import IProps from '../common/IProps';
import * as React from 'react';

interface ICoursesPageState {
    course: Course;
}

class CoursesPage extends React.Component<IProps, ICoursesPageState> {
    constructor(props: IProps, context?: any) {
        super(props, context);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.state = {
            course: {
                title: ''
            }
        };
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input onChange={this.onTitleChange} value={this.state.course.title} />
                <input type='submit' value='Save' onClick={this.onClickSave} />
            </div>
        );
    }

    private onTitleChange(event: any): void {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }

    private onClickSave(): void {
        alert(`Saving ${this.state.course.title}`);
    }
}

export default CoursesPage;
