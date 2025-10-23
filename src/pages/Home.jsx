import { Suspense } from "react";
import { useLoaderData } from "react-router";
import HeroSlider from "../components/HeroSlider.jsx";
import Loading from "../components/Loading.jsx";
import PopularSkills from "../components/PopularSkills.jsx";
import TopRatedProvider from "../components/TopRatedProvider.jsx";
import HowItWorks from "../components/HowItWorks.jsx";

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
            <TopRatedProvider data={data} />

            {/* how it works */}
            <HowItWorks />

            {/* personal extra section */}
        </div>
    );
};

export default Home;