import toast, { Toaster } from "react-hot-toast";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const SkillDetailsCard = ({ skillDetails }) => {
    const {
        image,
        skillName,
        category,
        providerName,
        providerEmail,
        rating,
        slotsAvailable,
        price,
        description
    } = skillDetails;

    // rating icon
    const full = Math.max(0, Math.min(5, Math.floor(rating)));
    const hasHalf = rating - full >= 0.5 && full < 5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    const handleBookSession = (e) => {
        e.preventDefault();
        toast.success("Booking submitted!");
        e.target.reset();
    };

    return (
        // <div className="grid lg:grid-cols-2 gap-6 my-6">
        <div>
            <div className="grid md:grid-cols-2 items-center gap-5 lg:w-8/12 mx-auto mb-8">
                <img src={image} alt="skill image" className="w-full h-[250px] shadow-2xl rounded-xl"/>
                <div className="p-4 card shadow-2xl rounded-xl">
                    <h2 className="text-2xl font-bold">{skillName}</h2>
                    <hr className="mt-3"/>
                    <p className="mt-2"><span className="font-bold">Category:</span> {category}</p>
                    <p className="mt-1"><span className="font-bold">Provider:</span> {providerName} ({providerEmail})</p>
                    <div className="flex items-center gap-5 mt-1">
                        <p className="font-bold">Rating:</p>
                        <div className="flex items-center gap-1 text-warning">
                            {
                                Array.from({length: full}).map((_, i) => <FaStar key={`f${i}`} className="text-xl"/>)
                            }
                            {
                                hasHalf && <FaStarHalfAlt className="text-xl"/>
                            }
                            {
                                Array.from({length: empty}).map((_, i) => <FaRegStar key={`e${i}`} className="text-xl"/>)
                            }
                            <span className="ml-2 font-medium text-[16px]">{rating}</span>
                        </div>
                    </div>
                    <p className="mt-1"><span className="font-bold">Slots:</span> {slotsAvailable}</p>
                    <p className="mt-1"><span className="font-semibold mt-1">Price:</span> ${price}</p>
                    <p className="mt-1"><span className="font-bold">Description:</span> {description}</p>
                </div>
            </div>

            <div className="card bg-base-100 w-full lg:w-5/12 shrink-0 shadow-2xl mx-auto ">
                <h1 className="text-3xl font-bold text-center mt-5">Book Session!</h1>
                <div className="card-body">
                    <form onSubmit={handleBookSession}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input w-full" placeholder="Your Name" required />
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Your Email" required />
                            <button type="submit" className="btn btn-neutral mt-4">Book Now</button>
                        </fieldset>
                    </form>
                </div>
            </div>

            <Toaster/>
        </div>
    );
};

export default SkillDetailsCard;