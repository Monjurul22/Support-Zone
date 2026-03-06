import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskPanel from "./components/TaskPanel";
import Footer from "./components/Footer";
import ticketsData from "./data/ticketsData";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToProgress = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.warn(`"${ticket.title}" is already in progress!`, {
        icon: "⚠️",
      });
      return;
    }
    setInProgress((prev) => [...prev, ticket]);
    toast.info(`"${ticket.title}" moved to In Progress`, { icon: "🔄" });
  };

  const handleComplete = (ticket) => {
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [
      ...prev,
      { ...ticket, resolvedAt: new Date().toLocaleDateString() },
    ]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success(`"${ticket.title}" resolved successfully!`, { icon: "✅" });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50 flex flex-col">
      <Navbar />
      <Banner
        totalTickets={tickets.length}
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      {/* ── Main Section ── */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left — Ticket Cards */}
          <section className="lg:w-[63%]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-800 flex items-center gap-3">
                <span className="relative">
                  <span className="w-2 h-10 bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full block" />
                  <span className="absolute -top-0.5 -left-0.5 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-30" />
                </span>
                Customer Tickets
              </h2>
              <span className="text-sm font-semibold bg-linear-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-1.5 rounded-full border border-indigo-200/50 shadow-sm">
                {tickets.length} open
              </span>
            </div>

            {tickets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {tickets.map((ticket, index) => (
                  <div
                    key={ticket.id}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <TicketCard
                      ticket={ticket}
                      onAddToProgress={handleAddToProgress}
                      isInProgress={inProgress.some(
                        (t) => t.id === ticket.id
                      )}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-linear-to-br from-white via-emerald-50/30 to-white rounded-3xl border border-slate-200/60 shadow-sm">
                <div className="w-20 h-20 mx-auto mb-5 bg-linear-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-inner">
                  <span className="text-5xl">🎉</span>
                </div>
                <p className="text-2xl font-display font-bold text-slate-700">
                  All tickets resolved!
                </p>
                <p className="text-slate-500 mt-3 max-w-xs mx-auto">
                  Great job — there are no pending tickets. Take a break, you
                  deserve it!
                </p>
                <div className="mt-6 flex justify-center gap-2">
                  {["🌟", "💪", "🏆"].map((emoji, i) => (
                    <span
                      key={i}
                      className="text-2xl animate-bounce"
                      style={{ animationDelay: `${i * 200}ms` }}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Right — Task Panel */}
          <aside className="lg:w-[37%]">
            <TaskPanel
              inProgress={inProgress}
              resolved={resolved}
              onComplete={handleComplete}
            />
          </aside>
        </div>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
        toastClassName="!rounded-xl !shadow-2xl"
      />

      {/* Global animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out both;
        }
      `}</style>
    </div>
  );
}

export default App;