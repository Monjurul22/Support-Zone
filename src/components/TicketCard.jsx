import { HiOutlineUser, HiOutlineCalendarDays } from "react-icons/hi2";

const priorityStyles = {
  High: {
    bg: "bg-rose-50 dark:bg-rose-900/20",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-l-rose-500",
    dot: "bg-rose-500",
  },
  Medium: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-l-amber-400",
    dot: "bg-amber-400",
  },
  Low: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-l-emerald-500",
    dot: "bg-emerald-500",
  },
};

const TicketCard = ({ ticket, onAddToProgress, isInProgress }) => {
  const p = priorityStyles[ticket.priority];

  return (
    <div
      onClick={() => onAddToProgress(ticket)}
      className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 border-l-4 ${p.border} p-5 cursor-pointer group
        hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300
        ${isInProgress ? "ring-2 ring-indigo-500/30 bg-indigo-50/30 dark:bg-indigo-900/10" : ""}`}
    >
      {/* Badges */}
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${p.bg} ${p.text}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
          {ticket.priority}
        </span>

        {isInProgress && (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-semibold">
            🔄 In Progress
          </span>
        )}

        <span className="ml-auto text-xs text-slate-400 dark:text-slate-500 font-mono">
          #{String(ticket.id).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-slate-800 dark:text-slate-100 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2">
        {ticket.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
        {ticket.description}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-700/50">
        <div className="flex items-center gap-1.5">
          <HiOutlineUser className="text-sm" />
          <span className="font-medium text-slate-500 dark:text-slate-400">{ticket.customer}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <HiOutlineCalendarDays className="text-sm" />
          <span>
            {new Date(ticket.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;