import * as React from "react";
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import Course from "./Course";
import {MouseEventHandler} from "react";
import {FormEventHandler} from "react";

interface ICourseFormProps {
    course: Course;
    allAuthors: {value: string, text: string}[];
    onSave: MouseEventHandler;
    onChange: FormEventHandler;
    saving?: boolean;
    errors: any
}

const CourseForm: React.StatelessComponent<ICourseFormProps> =
    ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}/>

            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

export default CourseForm;