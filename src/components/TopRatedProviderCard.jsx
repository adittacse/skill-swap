import React from 'react';

const TopRatedProviderCard = ({ top3 }) => {
    const { image, providerName, skillName, rating} = top3;

    return (
        <div className="p-4 border rounded-xl bg-base-100">
            <div className="flex items-center gap-3">
                <img src={image} className="w-16 h-16 object-cover rounded" />
                <div>
                    <p className="font-semibold">{providerName}</p>
                    <p className="text-sm opacity-70">{skillName}</p>
                    <p className="text-sm">Rating: {rating} ★</p>
                </div>
            </div>
        </div>
    );
};

export default TopRatedProviderCard;