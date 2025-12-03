import { useState } from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../components/CourseCard.jsx";

const AllSkills = () => {
    const [sortOrder, setSortOrder] = useState(null);
    const data = useLoaderData();

    const getSortedData = (data, sortOrder) => {
        if (sortOrder === "asc") {
            return data.sort((a, b) =>
                (a.skillName || "").localeCompare(b.skillName || "")
            );
        }

        if (sortOrder === "desc") {
            return data.sort((a, b) =>
                (b.skillName || "").localeCompare(a.skillName || "")
            );
        }

        return data;
    };

    const sortedData = getSortedData(data, sortOrder);

    return (
        <div className="mb-12">
            <h2 className="text-4xl text-center font-bold mb-8">All Skills</h2>

            {/* sorting */}
            <div className="flex justify-end items-center gap-3 mb-6">
                <span className="font-medium">Sort by skill name:</span>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="select">
                    <option value="none">Default</option>
                    <option value="asc">A → Z (Ascending)</option>
                    <option value="desc">Z → A (Descending)</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    sortedData.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default AllSkills;