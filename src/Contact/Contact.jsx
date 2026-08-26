import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
  FaEnvelopeOpenText,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import toast, { Toaster } from "react-hot-toast";
import confetti from "canvas-confetti";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message minimum 10 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        confetti({
          particleCount: 180,
          spread: 100,
          origin: {
            y: 0.7,
          },
        });

        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server not connected");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8"
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0b1220",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.08)",
          },
        }}
      />

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Glow */}
        <div className="absolute left-1/2 top-[-280px] h-[500px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px]" />

        {/* Left Glow */}
        <div className="absolute left-[-220px] top-[35%] h-[320px] w-[320px] rounded-full bg-blue-600/[0.05] blur-[110px]" />

        {/* Right Glow */}
        <div className="absolute bottom-[-180px] right-[-180px] h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-500/[0.05] px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-slate-400 backdrop-blur-xl">
            <FaEnvelopeOpenText className="text-cyan-400" />
            GET IN TOUCH
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-xs leading-6 text-slate-500">
            Have an idea, project or opportunity? Send me a message and
            let's turn your idea into something great.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-500/60" />

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.8)]" />

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
        </div>

        {/* ================= GRID ================= */}

        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================= LEFT CONTENT ================= */}

          <div className="order-2 lg:order-1">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              Start a conversation
            </span>

            <h3 className="mt-3 max-w-md text-3xl font-black leading-tight text-white sm:text-4xl">
              Build something
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                meaningful.
              </span>
            </h3>

            <p className="mt-4 max-w-md text-xs leading-6 text-slate-500">
              I'm always interested in discussing new projects, creative
              ideas and opportunities to build useful digital experiences.
            </p>

            {/* Feature Cards */}

            <div className="mt-6 space-y-2.5">
              {[
                "Modern & responsive interfaces",
                "Scalable full-stack solutions",
                "Clean and maintainable code",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-colors duration-300 hover:border-cyan-400/15 hover:bg-cyan-400/[0.025]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-400/[0.08]">
                    <FaCheckCircle className="text-[10px] text-emerald-400" />
                  </div>

                  <span className="text-[10px] font-medium text-slate-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Mini CTA */}

            <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
              <span>Let's create something great</span>
              <FaArrowRight className="text-cyan-400" />
            </div>
          </div>

          {/* ================= FORM ================= */}

          <div className="relative order-1 lg:order-2">

            {/* Outer Glow */}

            <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-purple-500/40 opacity-70 blur-sm" />

            {/* Form Card */}

            <div className="relative overflow-hidden rounded-[21px] border border-white/[0.08] bg-[#080d18]/95 shadow-[0_20px_60px_rgba(0,0,0,.4)] backdrop-blur-2xl">

              {/* Top Line */}

              <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

              <div className="p-5 sm:p-6">

                {/* Form Header */}

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-500/[0.07]">
                      <FaEnvelopeOpenText className="text-base text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white">
                        Send a Message
                      </h3>

                      <p className="mt-0.5 text-[8px] text-slate-600">
                        I'll get back to you soon
                      </p>
                    </div>
                  </div>

                  <span className="hidden rounded-full border border-emerald-400/10 bg-emerald-400/[0.05] px-2 py-1 text-[7px] font-bold uppercase tracking-wider text-emerald-400 sm:block">
                    Available
                  </span>
                </div>

                {/* ================= FORM ================= */}

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-3.5"
                >

                  {/* NAME */}

                  <div>
                    <div className="group relative">
                      <FaUser className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-[11px] text-slate-600 transition-colors group-focus-within:text-cyan-400" />

                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Your name"
                        className={`h-11 w-full rounded-xl border bg-white/[0.025] pl-10 pr-4 text-xs text-white outline-none transition-all placeholder:text-slate-700 ${
                          errors.name
                            ? "border-red-500/40 focus:border-red-500"
                            : "border-white/[0.07] focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]"
                        }`}
                      />
                    </div>

                    {errors.name && (
                      <p className="mt-1.5 pl-1 text-[9px] text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}

                  <div>
                    <div className="group relative">
                      <FaEnvelope className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-[11px] text-slate-600 transition-colors group-focus-within:text-cyan-400" />

                      <input
                        {...register("email")}
                        type="email"
                        placeholder="Your email"
                        className={`h-11 w-full rounded-xl border bg-white/[0.025] pl-10 pr-4 text-xs text-white outline-none transition-all placeholder:text-slate-700 ${
                          errors.email
                            ? "border-red-500/40 focus:border-red-500"
                            : "border-white/[0.07] focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]"
                        }`}
                      />
                    </div>

                    {errors.email && (
                      <p className="mt-1.5 pl-1 text-[9px] text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <div className="group relative">
                      <FaComment className="absolute left-3.5 top-4 text-[11px] text-slate-600 transition-colors group-focus-within:text-cyan-400" />

                      <textarea
                        {...register("message")}
                        rows="4"
                        placeholder="Tell me about your project..."
                        className={`w-full resize-none rounded-xl border bg-white/[0.025] py-3.5 pl-10 pr-4 text-xs leading-5 text-white outline-none transition-all placeholder:text-slate-700 ${
                          errors.message
                            ? "border-red-500/40 focus:border-red-500"
                            : "border-white/[0.07] focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]"
                        }`}
                      />
                    </div>

                    {errors.message && (
                      <p className="mt-1.5 pl-1 text-[9px] text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative mt-1 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_8px_25px_rgba(59,130,246,.18)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="relative flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <span className="h-3 w-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />

                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message

                          <FaPaperPlane className="text-[9px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </span>
                  </button>
                </form>

                {/* Privacy Text */}

                <p className="mt-3 text-center text-[7px] text-slate-700">
                  Your information is only used to respond to your message.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}

        <div className="mx-auto mt-12 h-px max-w-4xl bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </div>
    </section>
  );
};

export default Contact;