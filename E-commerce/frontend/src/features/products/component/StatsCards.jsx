import {
    Package,
    Star,
    BadgeCheck,
    ShoppingBag,
    Plus,
} from "lucide-react";

const stats = [
    {
        title: "Total Products",
        value: "120",
        growth: "+12%",
        text: "from last month",
        icon: Package,
        bg: "bg-green-500/20",
        color: "text-green-400",
    },
    {
        title: "Featured Products",
        value: "25",
        growth: "+8%",
        text: "from last month",
        icon: Star,
        bg: "bg-purple-500/20",
        color: "text-purple-400",
    },
    {
        title: "Active Products",
        value: "100",
        growth: "+18%",
        text: "from last month",
        icon: BadgeCheck,
        bg: "bg-sky-500/20",
        color: "text-sky-400",
    },
    {
        title: "Out of Stock",
        value: "20",
        growth: "-5%",
        text: "from last month",
        icon: ShoppingBag,
        bg: "bg-yellow-500/20",
        color: "text-yellow-400",
        negative: true,
    },
];

function StatsCards({ setTab }) {
    return (
        <div className="flex flex-wrap gap-6 justify-between">
            {/* Cards */}
            <div className="flex  gap-6 flex-1">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="flex items-center gap-4 bg-[#111827] border border-gray-800 rounded-xl px-6 py-5 min-w-[250px] flex-1"
                        >
                            {/* Icon */}

                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg}`}
                            >
                                <Icon className={`${item.color}`} size={26} />
                            </div>

                            {/* Content */}

                            <div>
                                <p className="text-gray-400 text-sm">
                                    {item.title}
                                </p>

                                <h2 className="text-white text-4xl font-bold mt-1">
                                    {item.value}
                                </h2>

                                <p className="text-sm mt-2">
                                    <span
                                        className={
                                            item.negative
                                                ? "text-red-500 font-semibold"
                                                : "text-green-500 font-semibold"
                                        }
                                    >
                                        {item.growth}
                                    </span>

                                    <span className="text-gray-500 ml-1">
                                        {item.text}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Button */}

            <button onClick={() => setTab((prev) => !prev)} className="h-[64px] px-8 rounded-xl bg-green-600 hover:bg-green-700 transition flex items-center gap-3 text-white font-semibold shadow-lg">
                <Plus size={20} />
                Create Product
            </button>
        </div>
    );
}


export default StatsCards