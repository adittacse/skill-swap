import TopRatedProviderCard from "./TopRatedProviderCard.jsx";

const TopRatedProvider = ({ data }) => {
    const top3Data = data.sort((a, b) => b.rating - a.rating).slice(0, 3);

    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-8">Top Rated Provider</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    top3Data.map(top3 => <TopRatedProviderCard key={top3.id} top3={top3} />)
                }
            </div>
        </div>
    );
};

export default TopRatedProvider;