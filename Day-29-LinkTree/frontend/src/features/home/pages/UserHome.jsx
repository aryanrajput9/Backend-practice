import React, { useEffect, useContext } from "react";
import { useGetUserLink } from "../hook/Home.hook";
import { useParams } from "react-router";
import { MainContext } from "../../context/MainContext";

function UserHome() {
    const { fetchLinkById, updateCount } = useGetUserLink();
    const { userlink, loginUser, setUpdateCount } = useContext(MainContext);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchLinkById(id);
        }
    }, [id]);

    const userName = loginUser.name || "My Links";


    return (
        <div className="min-h-screen bg-zinc-950 px-4 py-10">
            <div className="max-w-xl mx-auto">

                {/* Profile */}
                <div className="flex flex-col items-center mb-10">
                    <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                            userName
                        )}&background=84cc16&color=000`}
                        alt="profile"
                        className="w-28 h-28 rounded-full border-4 border-lime-400 shadow-lg shadow-lime-500/20"
                    />

                    <h1 className="text-4xl font-bold text-white mt-5">
                        {userName}
                    </h1>

                    <p className="text-zinc-400 mt-2 text-center">
                        Explore all my important links 🚀
                    </p>
                </div>

                {/* Links */}
                <div className="space-y-4">
                    {Array.isArray(userlink) &&
                        userlink.map((elem) => (
                            <div
                                key={elem._id}
                                className="w-full bg-zinc-900 border border-zinc-800 hover:border-lime-500 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-500/10"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-lime-400">
                                            {elem.title}
                                        </h3>

                                        <p className="text-sm text-zinc-400 mt-1 break-all">
                                            {elem.url}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            window.open(elem.url, "_blank");
                                            setUpdateCount((pre) => pre + 1);

                                            updateCount(elem._id)
                                        }}
                                        className="px-5 py-2 bg-lime-500 hover:bg-lime-400 text-black font-semibold rounded-xl transition"
                                    >
                                        Visit
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Empty State */}
                {Array.isArray(userlink) && userlink.length === 0 && (
                    <div className="mt-10 text-center">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                            <p className="text-zinc-500 text-lg">
                                No links available.
                            </p>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="mt-12 text-center">
                    <p className="text-zinc-600 text-sm">
                        Powered by LinkTree Clone
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserHome;