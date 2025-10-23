import { Link } from "react-router";

const LearningTracks = () => {
    return (
        <section data-aos="fade-up" className="relative my-12">
            <div className="rounded-3xl border bg-base-100/60 backdrop-blur p-6 md:p-10 shadow-sm">
                <div className="mb-6 md:mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">Learning Tracks</h2>
                    <p className="opacity-70 mt-1">Choose a path and start building, step by step.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {/* Frontend */}
                    <div className="group relative rounded-2xl border bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        {/*<div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 opacity-80"/>*/}
                        <div className="flex items-start gap-3">
                            {/* icon */}
                            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="3" y="4" width="18" height="14" rx="2" strokeWidth="2"/>
                                    <path d="M8 21h8" strokeWidth="2"/>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">Frontend Basics</h3>
                                <ul className="mt-2 text-sm opacity-80 space-y-1">
                                    <li>• HTML/CSS fundamentals</li>
                                    <li>• Modern JavaScript (ES6+)</li>
                                    <li>• React & UI Components</li>
                                </ul>
                                <Link to="#" className="btn btn-sm mt-4">Start Frontend</Link>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="group relative rounded-2xl border bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        {/*<div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80"/>*/}
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="3" y="3" width="7" height="7" rx="1.5" strokeWidth="2"/>
                                    <rect x="14" y="3" width="7" height="7" rx="1.5" strokeWidth="2"/>
                                    <rect x="3" y="14" width="7" height="7" rx="1.5" strokeWidth="2"/>
                                    <rect x="14" y="14" width="7" height="7" rx="1.5" strokeWidth="2"/>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">Backend Foundations</h3>
                                <ul className="mt-2 text-sm opacity-80 space-y-1">
                                    <li>• Node.js & Express</li>
                                    <li>• REST API design</li>
                                    <li>• SQL basics</li>
                                </ul>
                                <Link to="#" className="btn btn-sm mt-4">Start Backend</Link>
                            </div>
                        </div>
                    </div>

                    {/* DSA */}
                    <div className="group relative rounded-2xl border bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        {/*<div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 opacity-80"/>*/}
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M4 6h16M4 12h10M4 18h7" strokeWidth="2"/>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">DSA for Interviews</h3>
                                <ul className="mt-2 text-sm opacity-80 space-y-1">
                                    <li>• Arrays & Hashmaps</li>
                                    <li>• Two-pointers & Sorting</li>
                                    <li>• Linked lists & Stacks</li>
                                </ul>
                                <Link to="#" className="btn btn-sm mt-4">Start DSA</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-center text-xs opacity-60">
                    Tip: Pick one track and stay consistent—30 minutes daily wins.
                </p>
            </div>
        </section>
    );
};

export default LearningTracks;