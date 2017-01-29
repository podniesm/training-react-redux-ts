import Course from "../components/course/Course";
import Author from "../components/course/Author";

interface IAppState {
    courses: Course[];
    authors: Author[];
    ajaxCallInProgressCount: number;
}

export default IAppState;