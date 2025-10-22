import CourseCard from "./CourseCard.jsx";

const PopularSkills = ({ data }) => {

    return (
        <div>
            <h2>Popular Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    data.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default PopularSkills;