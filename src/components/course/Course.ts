class Course {
    public id: string;
    public title: string;
    public watchHref: string;
    public authorId: string;
    public length: string;
    public category: string;

    constructor(id: string,
                title: string,
                watchHref: string,
                authorId: string,
                length: string,
                category: string
    ) {
        this.id = id;
        this.title = title;
        this.watchHref = watchHref;
        this.authorId = authorId;
        this.length = length;
        this.category = category;
    }
}

export default Course;