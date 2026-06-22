import React, { useContext, useEffect } from "react";
import { useGetUserLink } from "../hook/Home.hook";
import { MainContext } from "../../context/MainContext";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../services/home.services";

function Home() {
    const { alllinks, loginUser, setUserLink } = useContext(MainContext);
    const { register, handleSubmit, reset } = useForm()


    const name = loginUser?.name

    const { fetchLink } = useGetUserLink();



    useEffect(() => {
        if (name) {
            fetchLink(name);
        }
    }, [name]);

    const onSubmit = async (data) => {
        console.log(data);

        const resp = await axiosInstance.post("/link", data);
        setUserLink(resp.data.data)
        await fetchLink(name)

        reset();
    };

    return (
        <div className="min-h-screen bg-zinc-950 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">

                {/* Profile Header */}
                <div className="flex flex-col items-center mb-10">
                    <img
                        src={`https://ui-avatars.com/api/?name=${name}`}
                        alt="profile"
                        className="w-24 h-24 rounded-full border-4 border-lime-400"
                    />

                    <h1 className="text-4xl font-bold text-white mt-4">
                        @{name}
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Welcome to my links
                    </p>

                    {/* Share Button */}
                    <button
                        onClick={() => {
                            const shareUrl = `${window.location.origin}/profile/${loginUser._id}`;

                            navigator.clipboard.writeText(shareUrl);

                            alert("Profile Link Copied!");
                        }}
                        className="mt-5 bg-lime-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-lime-400 transition-all duration-300"
                    >
                        🔗 Share Your Profile
                    </button>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Side - Form */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-fit sticky top-5">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Create New Link
                        </h2>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                placeholder="Link Title"
                                {...register("title")}
                                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl border border-zinc-700 outline-none focus:border-lime-400"
                            />

                            <input
                                type="url"
                                placeholder="https://example.com"
                                {...register("url")}
                                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl border border-zinc-700 outline-none focus:border-lime-400"
                            />

                            <button
                                type="submit"
                                className="w-full bg-lime-500 text-black font-semibold py-3 rounded-xl hover:bg-lime-400 transition"
                            >
                                Add Link
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Links */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                Your Links
                            </h2>

                            <span className="bg-lime-500/20 text-lime-400 px-3 py-1 rounded-full text-sm">
                                {alllinks?.length || 0} Links
                            </span>
                        </div>

                        <div className="space-y-4">
                            {alllinks?.map((elem) => (

                                < div
                                    key={elem._id}
                                    className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex items-center justify-between"
                                >
                                    <div className="flex-1 overflow-hidden">
                                        <h3 className="text-white font-semibold">
                                            {elem.title}
                                        </h3>

                                        <p className="text-zinc-400 text-sm truncate">
                                            {elem.url}
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <span className="bg-zinc-700 text-lime-400 px-3 py-1 rounded-full text-xs">
                                            👆 {elem.clicks || 0} Clicks
                                        </span>
                                    </div>

                                    <button
                                        onClick={() =>
                                            window.open(elem.url, "_blank")
                                        }
                                        className="ml-4 bg-lime-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-lime-400"
                                    >
                                        Visit
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Home;