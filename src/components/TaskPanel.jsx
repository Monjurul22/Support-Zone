import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineClipboardDocumentCheck,
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const TaskPanel = ({ inProgress, resolved, onComplete }) => {
  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* ── In Progress ── */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-black/30 transition-shadow duration-300">
        <div className="px-5 py-4 bg-linear-to-r from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/10 dark:to-yellow-900/10 border-b border-amber-100/60 dark:border-amber-800/30">
          <h3 className="font-display font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5 text-[15px]">
            <div className="w-8 h-8 rounded-xl bg-linear-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-sm shadow-amber-200/50 dark:shadow-amber-900/30">
              <HiOutlineClock className="text-lg text-white" />
            </div>
            Task Status
            <span className="ml-auto text-xs font-bold bg-linear-to-r from-amber-200 to-orange-200 dark:from-amber-900/60 dark:to-orange-900/60 text-amber-900 dark:text-amber-300 px-3 py-1 rounded-full shadow-inner">
              {inProgress.length} active
            </span>
          </h3>
        </div>

        <div className="p-3 max-h-105 overflow-y-auto space-y-2 custom-scrollbar">
          {inProgress.length > 0 ? (
            inProgress.map((ticket, index) => (
              <div
                key={ticket.id}
                className="group flex items-center gap-3 p-3.5 bg-linear-to-r from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800 hover:from-amber-50/50 hover:to-orange-50/30 dark:hover:from-amber-900/20 dark:hover:to-orange-900/10 rounded-xl transition-all duration-300 border border-transparent hover:border-amber-200/50 dark:hover:border-amber-700/40"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
                    {ticket.title}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-medium">
                    {ticket.customer}
                  </p>
                </div>

                <button
                  onClick={() => onComplete(ticket)}
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold rounded-xl active:scale-95 transition-all duration-200 cursor-pointer shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <HiOutlineCheckCircle className="text-sm" />
                  Done
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center shadow-inner">
                <HiOutlineRocketLaunch className="text-3xl text-slate-300 dark:text-slate-600" />
              </div>
              <p className="text-sm font-bold text-slate-400 dark:text-slate-500">
                No tasks in progress
              </p>
              <p className="text-xs text-slate-300 dark:text-slate-600 mt-1.5 max-w-45 mx-auto">
                Click a ticket card to start working on it
              </p>
            </div>
          )}
        </div>

        {/* Progress bar */}
        {inProgress.length > 0 && (
          <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Workload</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">
                {inProgress.length} task{inProgress.length !== 1 && "s"}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200/80 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.min(inProgress.length * 20, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ── Resolved ── */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-black/30 transition-shadow duration-300">
        <div className="px-5 py-4 bg-linear-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/10 dark:to-cyan-900/10 border-b border-emerald-100/60 dark:border-emerald-800/30">
          <h3 className="font-display font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5 text-[15px]">
            <div className="w-8 h-8 rounded-xl bg-linear-to-r from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm shadow-emerald-200/50 dark:shadow-emerald-900/30">
              <HiOutlineClipboardDocumentCheck className="text-lg text-white" />
            </div>
            Resolved
            <span className="ml-auto text-xs font-bold bg-linear-to-r from-emerald-200 to-teal-200 dark:from-emerald-900/60 dark:to-teal-900/60 text-emerald-900 dark:text-emerald-300 px-3 py-1 rounded-full shadow-inner">
              {resolved.length} done
            </span>
          </h3>
        </div>

        <div className="p-3 max-h-80 overflow-y-auto space-y-2 custom-scrollbar">
          {resolved.length > 0 ? (
            resolved.map((ticket) => (
              <div
                key={ticket.id}
                className="group flex items-center gap-3 p-3.5 bg-linear-to-r from-emerald-50/40 to-teal-50/20 dark:from-emerald-900/15 dark:to-teal-900/10 rounded-xl border border-emerald-100/40 dark:border-emerald-800/30 hover:border-emerald-200/60 dark:hover:border-emerald-700/50 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0 group-hover:bg-emerald-200/80 dark:group-hover:bg-emerald-800/40 transition-colors">
                  <HiOutlineCheckCircle className="text-lg text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 truncate line-through decoration-emerald-400/60 decoration-2">
                    {ticket.title}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                    <span className="font-medium">{ticket.customer}</span>
                    <span className="mx-1.5 text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
                      {ticket.resolvedAt}
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-r from-emerald-100 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/20 rounded-2xl flex items-center justify-center shadow-inner">
                <HiOutlineSparkles className="text-3xl text-emerald-300 dark:text-emerald-700" />
              </div>
              <p className="text-sm font-bold text-slate-400 dark:text-slate-500">
                No resolved tickets yet
              </p>
              <p className="text-xs text-slate-300 dark:text-slate-600 mt-1.5 max-w-45 mx-auto">
                Complete tasks to see them here
              </p>
            </div>
          )}
        </div>

        {resolved.length > 0 && (
          <div className="px-5 py-3 border-t border-emerald-100/50 dark:border-emerald-800/30 bg-emerald-50/30 dark:bg-emerald-900/10">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                🎯 {resolved.length} ticket{resolved.length !== 1 && "s"} resolved
              </span>
              <span className="ml-auto text-emerald-500 dark:text-emerald-400 font-semibold">
                Great work! 🌟
              </span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 999px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default TaskPanel;