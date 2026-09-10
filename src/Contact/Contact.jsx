import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaStar,
  FaCopy,
  FaCheckCircle,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import toast, { Toaster } from "react-hot-toast";
import confetti from "canvas-confetti";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message minimum 10 characters"),
});

const Contact = () => {
  const [selectedService, setSelectedService] = useState("Full-Stack Web App");
  const [isSuccessState, setIsSuccessState] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const watchedName = watch("name");
  const watchedMessage = watch("message");
  const messageLength = watchedMessage ? watchedMessage.length : 0;

  const handleCopyText = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`, {
      icon: "📋",
    });
  };

  const onSubmit = async (data) => {
    const payload = { ...data, serviceType: selectedService };
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        confetti({
          particleCount: 200,
          spread: 90,
          origin: { y: 0.6 },
        });

        toast.success("Message sent successfully!");
        setIsSuccessState(true);
        reset();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-emerald-50/40 px-4 py-16 text-slate-900 transition-colors duration-500 sm:px-6 md:py-20 lg:px-8 dark:bg-[#05130f] dark:text-white"
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0a261d",
            color: "#fff",
            border: "1px solid rgba(16,185,129,.2)",
          },
        }}
      />

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />
        <div className="absolute left-[-150px] top-[40%] h-[350px] w-[350px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.07] dark:opacity-[0.1]"
          style={{
            backgroundImage: "radial-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* HEADER */}
        <div className="mx-auto mb-10 max-w-xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-3.5 py-1.5 text-[9px] font-bold tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur-xl dark:border-emerald-500/30 dark:bg-slate-900/80 dark:text-emerald-300">
            <FaEnvelopeOpenText className="text-emerald-500 dark:text-emerald-400" />
            GET IN TOUCH &bull; LET'S COLLABORATE
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
            Have an innovative project, creative idea, or a professional opportunity? Drop a message below and let's craft exceptional solutions together.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-4 lg:col-span-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                Communication channels
              </span>
              <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">
                Ready when you are.
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Whether you need a full-stack web application, a dynamic UI overhaul, or expert technical consultation, I'm ready to bring value to your team.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: FaEnvelope, title: "Direct Email", value: "amitgupta99393@gmail.com", copyable: true },
                { icon: FaPhoneAlt, title: "Quick Call", value: "+91 9654496209", copyable: true },
                { icon: FaMapMarkerAlt, title: "Location", value: "Kishanganj, Bihar, India", copyable: false },
              ].map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => card.copyable && handleCopyText(card.value, card.title)}
                  className={`group relative flex items-center justify-between rounded-2xl border border-emerald-200/60 bg-white/70 p-3 shadow-sm backdrop-blur-md transition-all duration-300 dark:border-emerald-500/20 dark:bg-emerald-500/[0.02] ${
                    card.copyable ? "cursor-pointer hover:border-emerald-400 hover:shadow-md dark:hover:border-emerald-500/40" : ""
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100/80 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <card.icon className="text-xs" />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {card.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {card.value}
                      </p>
                    </div>
                  </div>
                  {card.copyable && (
                    <span className="text-[10px] text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-emerald-400">
                      <FaCopy />
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* LIVE PREVIEW */}
            <div className="rounded-2xl border border-emerald-300/60 bg-gradient-to-br from-emerald-500/5 via-teal-500/10 to-transparent p-3.5 backdrop-blur-md dark:border-emerald-500/30">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                  <FaStar className="text-emerald-500 animate-pulse" /> Live Message Preview
                </span>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-600 dark:text-emerald-400">
                  {selectedService}
                </span>
              </div>
              <div className="mt-2 rounded-xl border border-emerald-200/50 bg-white/60 p-2.5 text-xs dark:border-emerald-500/10 dark:bg-slate-900/60">
                <p className="font-bold text-slate-800 dark:text-slate-200">
                  From: {watchedName || <span className="italic text-slate-400">Your name...</span>}
                </p>
                <p className="mt-1 line-clamp-2 text-[11px] text-slate-600 dark:text-slate-400">
                  "{watchedMessage || "Your project briefing or notes will appear here in real time..."}"
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="relative lg:col-span-7">
            <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-emerald-400/30 via-teal-500/20 to-cyan-500/30 opacity-75 blur-md" />

            <div className="relative overflow-hidden rounded-[22px] border border-emerald-200/80 bg-white/95 p-5 shadow-xl backdrop-blur-2xl sm:p-6 dark:border-emerald-500/20 dark:bg-[#071c15]/95">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500" />

              {isSuccessState ? (
                <div className="py-10 text-center animate-fadeIn">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Message Received!
                  </h3>
                  <p className="mx-auto mt-1 max-w-xs text-xs text-slate-600 dark:text-slate-400">
                    Thank you for reaching out. I have received your project scope and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccessState(false)}
                    className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-600 transition-colors hover:bg-emerald-500 hover:text-white dark:text-emerald-400"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                        Send a Message
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Fill out the form and let's get down to business.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {/* SERVICE SELECTION */}
                    <div>
                      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Select Project Scope
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {["Full-Stack Web App", "UI/UX Design", "Tech Consultation", "Custom API"].map((service) => (
                          <button
                            type="button"
                            key={service}
                            onClick={() => setSelectedService(service)}
                            className={`rounded-xl border px-2.5 py-1 text-[10px] font-semibold transition-all ${
                              selectedService === service
                                ? "border-emerald-500 bg-emerald-500 text-white shadow-sm"
                                : "border-emerald-200/80 bg-slate-50 text-slate-600 hover:border-emerald-400 dark:border-emerald-500/20 dark:bg-emerald-500/[0.03] dark:text-slate-300"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* NAME */}
                    <div>
                      <label htmlFor="name" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Your Name
                      </label>
                      <div className="group relative">
                        <FaUser className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-[11px] text-slate-400" />
                        <input
                          id="name"
                          {...register("name")}
                          type="text"
                          placeholder="e.g. Alex Johnson"
                          className={`h-10 w-full rounded-xl border bg-slate-50/80 pl-10 pr-3.5 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white dark:bg-emerald-500/[0.03] dark:text-white ${
                            errors.name ? "border-red-400" : "border-emerald-200/80 dark:border-emerald-500/20"
                          }`}
                        />
                      </div>
                      {errors.name && <p className="mt-1 pl-1 text-[10px] text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label htmlFor="email" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Email Address
                      </label>
                      <div className="group relative">
                        <FaEnvelope className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-[11px] text-slate-400" />
                        <input
                          id="email"
                          {...register("email")}
                          type="email"
                          placeholder="e.g. alex@company.com"
                          className={`h-10 w-full rounded-xl border bg-slate-50/80 pl-10 pr-3.5 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white dark:bg-emerald-500/[0.03] dark:text-white ${
                            errors.email ? "border-red-400" : "border-emerald-200/80 dark:border-emerald-500/20"
                          }`}
                        />
                      </div>
                      {errors.email && <p className="mt-1 pl-1 text-[10px] text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          Project Overview / Message
                        </label>
                        <span className={`text-[9px] ${messageLength < 10 ? 'text-amber-500' : 'text-emerald-500'}`}>
                          {messageLength}/10 min chars
                        </span>
                      </div>
                      <div className="group relative">
                        <FaComment className="absolute left-3.5 top-3.5 text-[11px] text-slate-400" />
                        <textarea
                          id="message"
                          {...register("message")}
                          rows="3"
                          placeholder="Tell me about your tech stack, goals, or scope..."
                          className={`w-full resize-none rounded-xl border bg-slate-50/80 p-3 pl-10 pr-3.5 text-xs leading-relaxed text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white dark:bg-emerald-500/[0.03] dark:text-white ${
                            errors.message ? "border-red-400" : "border-emerald-200/80 dark:border-emerald-500/20"
                          }`}
                        />
                      </div>
                      {errors.message && <p className="mt-1 pl-1 text-[10px] text-red-500">{errors.message.message}</p>}
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative mt-1 flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 text-xs font-extrabold uppercase tracking-widest text-white shadow-[0_10px_25px_rgba(16,185,129,0.2)] transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span className="relative flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            Send Inquiry
                            <FaPaperPlane className="text-[9px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;