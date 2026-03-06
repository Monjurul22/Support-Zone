import {
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const Banner = ({ totalTickets, inProgressCount, resolvedCount }) => {
  const stats = [
    {
      icon: HiOutlineClipboardDocumentList,
      value: totalTickets,
      label: "Total Tickets",
      iconColor: "text-white/90",
    },
    {
      icon: HiOutlineClock,
      value: inProgressCount,
      label: "In Progress",
      iconColor: "text-amber-300",
    },
    {
      icon: HiOutlineCheckCircle,
      value: resolvedCount,
      label: "Resolved",
      iconColor: "text-emerald-300",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] transition-colors duration-300" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pt-20 md:pb-36">
        {/* Title area */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Live Dashboard
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-5 leading-tight">
            Customer Support
            <span className="block bg-linear-to-r from-amber-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Command Center
            </span>
          </h1>

          <p className="text-base sm:text-lg text-indigo-100/90 max-w-xl mx-auto leading-relaxed">
            Track, manage, and resolve customer tickets efficiently. Your
            one-stop dashboard for exceptional support.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/12 hover:bg-white/20 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 text-center transition-all duration-300 hover:scale-105"
            >
              <s.icon className={`text-3xl sm:text-4xl mx-auto mb-2 ${s.iconColor}`} />
              <p className="text-3xl sm:text-4xl font-display font-bold text-white">
                {s.value}
              </p>
              <p className="text-indigo-200 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-0">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          {/* Light mode fill */}
          <path
            d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100Z"
            className="fill-slate-50 dark:fill-slate-900"
          />
        </svg>
      </div>
    </section>
  );
};

export default Banner;