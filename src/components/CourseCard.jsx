import { Link } from "react-router";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseCard = ({ course }) => {
    const { id, image, skillName, rating, price} = course;

    // rating icon
    const full = Math.max(0, Math.min(5, Math.floor(rating)));
    const hasHalf = rating - full >= 0.5 && full < 5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    return (
        <div className="card bg-base-100 shadow-lg">
            <figure className="h-40 overflow-hidden">
                <img src={image} className="w-full h-full object-cover"/>
            </figure>
            <div className="card-body">
                <h3 className="card-title text-lg">{skillName}</h3>
                <div className="flex items-center justify-between mt-2">
                    <span className="flex items-center gap-1 text-warning">
                        {
                            Array.from({ length: full }).map((_, i) => <FaStar key={`f${i}`} className="text-xl" />)
                        }
                        {
                            hasHalf && <FaStarHalfAlt className="text-xl" />
                        }
                        {
                            Array.from({ length: empty }).map((_, i) => <FaRegStar key={`e${i}`} className="text-xl" />)
                        }
                        <span className="ml-2 font-medium text-[16px]">{rating}</span>
                    </span>
                    <span className="font-semibold text-[16px]">Price: ${price}</span>
                </div>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/skill/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;