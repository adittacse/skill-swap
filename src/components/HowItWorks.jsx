import { IoMdSearch } from "react-icons/io";
import { FaRegCalendar, FaRegStar } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <section className="relative my-12">
            <h2 className="text-4xl text-center font-bold my-8">How It Works</h2>

            <div className="card p-6 md:p-10 rounded-3xl shadow-2xl">
                <p className="mb-6 md:mb-8 mt-1">Three simple steps to learn or share a skill.</p>

                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {/* Step 1 */}
                    <div className="relative rounded-2xl card bg-base-300 p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex items-start gap-4">
                            <span className="badge badge-lg badge-neutral">1</span>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <IoMdSearch />
                                    <h3 className="font-semibold">Browse skills near you</h3>
                                </div>
                                <p className="mt-2 text-sm opacity-80">Use categories and search to quickly find what
                                    you need.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative rounded-2xl card bg-base-300 p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex items-start gap-4">
                            <span className="badge badge-lg badge-neutral">2</span>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <FaRegStar />
                                    <h3 className="font-semibold">Check ratings & details</h3>
                                </div>
                                <p className="mt-2 text-sm opacity-80">Read descriptions, compare prices, and select top
                                    providers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative rounded-2xl card bg-base-300 p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex items-start gap-4">
                            <span className="badge badge-lg badge-neutral">3</span>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <FaRegCalendar />
                                    <h3 className="font-semibold">Book & start learning</h3>
                                </div>
                                <p className="mt-2 text-sm opacity-80">Send a request, confirm a slot, and begin your
                                    session.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;