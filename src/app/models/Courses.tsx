class Courses{
    public idCourse: number;
    public nameCourse: string;
    public timeCourse: string;

    constructor(id: number, name: string, time: string){
        this.idCourse = id;
        this.nameCourse = name;
        this.timeCourse = time;
    }
}
export default Courses;