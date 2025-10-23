import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const TopRatedProviderCard = ({ top3 }) => {
    const { image, providerName, skillName, rating} = top3;

    // rating icon
    const full = Math.max(0, Math.min(5, Math.floor(rating)));
    const hasHalf = rating - full >= 0.5 && full < 5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    return (
        <div className="p-4 border rounded-xl bg-base-100">
            <div className="flex items-center gap-3">
                <img src={image} className="w-16 h-16 object-cover rounded" />
                <div>
                    <p className="font-semibold">{providerName}</p>
                    <p className="text-sm opacity-70">{skillName}</p>
                    <div className="flex items-center mt-1">
                        <p className="font-bold">Rating:</p>
                        <div className="flex items-center gap-1 text-warning">
                            {
                                Array.from({length: full}).map((_, i) => <FaStar key={`f${i}`} className="text-lg"/>)
                            }
                            {
                                hasHalf && <FaStarHalfAlt className="text-lg"/>
                            }
                            {
                                Array.from({length: empty}).map((_, i) => <FaRegStar key={`e${i}`} className="text-lg"/>)
                            }
                            <span className="ml-2 font-medium text-[16px]">{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRatedProviderCard;