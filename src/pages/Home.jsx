import { Suspense } from "react";
import { useLoaderData } from "react-router";
import PopularSkills from "../components/PopularSkills.jsx";
import Loading from "../components/Loading.jsx";
import HeroSlider from "../components/HeroSlider.jsx";

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            {/* hero slider */}
            <HeroSlider />

            {/* popular skills */}
            <Suspense fallback={<Loading />}>
                <PopularSkills data={data} />
            </Suspense>

            {/* top-rated provider */}
            {/* how it works */}
            {/* personal extra section */}
        </div>
    );
};

export default Home;