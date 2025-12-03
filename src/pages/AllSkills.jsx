import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../components/CourseCard.jsx";

const AllSkills = () => {
    const data = useLoaderData();

    return (
        <div className="mb-12">
            <h2 className="text-4xl text-center font-bold mb-8">All Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    data.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default AllSkills;