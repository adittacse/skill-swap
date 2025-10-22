import { Link } from "react-router";

const CourseCard = ({course}) => {
    const { id, image, skillName, rating, price} = course;

    return (
        <div className="card bg-base-100 shadow-sm border">
            <figure className="h-40 overflow-hidden"><img src={image} className="w-full h-full object-cover"/></figure>
            <div className="card-body">
                <h3 className="card-title text-base">{skillName}</h3>
                <p>Rating: {rating} ★</p>
                <p className="font-semibold">${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/skills/${id}`} className="btn btn-sm btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;