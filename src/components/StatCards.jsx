import { HiOutlineClock, HiOutlineCheckCircle } from "react-icons/hi2";

const StatCards = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* In Progress */}
      <div className="bg-white dark:bg-[#1a1d2e] rounded-2xl border border-gray-200 dark:border-gray-700/60 p-6 transition-colors duration-300">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <HiOutlineClock className="text-base text-gray-400 dark:text-gray-500" />
            In Progress
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/40">
            +5 today
          </span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-5xl font-extrabold text-gray-900 dark:text-white tabular-nums">
            {inProgressCount}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
            Active tickets
          </span>
        </div>
      </div>

      {/* Resolved Today */}
      <div className="bg-white dark:bg-[#1a1d2e] rounded-2xl border border-gray-200 dark:border-gray-700/60 p-6 transition-colors duration-300">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <HiOutlineCheckCircle className="text-base text-gray-400 dark:text-gray-500" />
            Resolved Today
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/40">
            +12% vs avg
          </span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-5xl font-extrabold text-gray-900 dark:text-white tabular-nums">
            {resolvedCount}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
            Closed tickets
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCards;