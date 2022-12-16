class Courses{
    public id_course: number;
    public nameCourse: string;
    public timeCourse: string;

    constructor(id: number, name: string, time: string){
        this.id_course = id;
        this.nameCourse = name;
        this.timeCourse = time;
    }
}
export default Courses;