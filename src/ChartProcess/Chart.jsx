import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Minus,
} from "lucide-react";

export default function Chart() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "👋 Hi! Welcome to my portfolio.",
      time: "Now",
    },
    {
      id: 2,
      type: "bot",
      text: "How can I help you?",
      time: "Now",
    },
  ]);

  const messagesRef = useRef(null);

  /* =========================
     AUTO SCROLL CHAT
  ========================= */

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop =
        messagesRef.current.scrollHeight;
    }
  }, [messages]);

  /* =========================
     SEND MESSAGE
  ========================= */

  const sendMessage = () => {
    const value = text.trim();

    if (!value) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: value,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setText("");

    /* Simple demo reply */

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot",
          text: getReply(value),
          time: "Now",
        },
      ]);
    }, 700);
  };

  /* =========================
     SIMPLE AUTO REPLY
  ========================= */

  const getReply = (message) => {
    const msg = message.toLowerCase();

    if (
      msg.includes("hello") ||
      msg.includes("hi") ||
      msg.includes("hey")
    ) {
      return "Hey 👋 Nice to meet you!";
    }

    if (
      msg.includes("project") ||
      msg.includes("projects")
    ) {
      return "🚀 You can check my Projects section to see my work.";
    }

    if (
      msg.includes("skill") ||
      msg.includes("skills")
    ) {
      return "💻 I work with React, Node.js, Express, MongoDB and modern web technologies.";
    }

    if (
      msg.includes("contact") ||
      msg.includes("email")
    ) {
      return "📩 You can contact me from the Contact section.";
    }

    if (
      msg.includes("resume") ||
      msg.includes("cv")
    ) {
      return "📄 You can download my resume using the Resume button.";
    }

    return "Thanks for your message! 😊 I'll get back to you soon.";
  };

  /* =========================
     ENTER KEY
  ========================= */

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING CHAT BUTTON
      ===================================================== */}

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            className="
              fixed
              bottom-5
              right-5
              sm:bottom-7
              sm:right-7
              z-[999]
            "
          >
            {/* Hover Label */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                -top-10
                whitespace-nowrap
                rounded-full
                border
                border-white/10
                bg-[#0b1422]
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-white/70
                opacity-0
                transition
                duration-300
                group-hover:opacity-100
              "
            >
              Chat with me 💬
            </div>

            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                group
                relative
                flex
                h-14
                w-14
                sm:h-16
                sm:w-16
                items-center
                justify-center
                rounded-full
                border
                border-cyan-300/20
                bg-gradient-to-br
                from-cyan-500
                via-blue-500
                to-violet-600
                text-white
                shadow-[0_10px_40px_rgba(34,211,238,0.3)]
              "
            >
              {/* Pulse */}

              <motion.span
                animate={{
                  scale: [1, 1.45, 1],
                  opacity: [0.35, 0, 0.35],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-cyan-300/40
                "
              />

              <MessageCircle
                size={25}
                className="relative z-10"
              />

              {/* Notification */}

              <span
                className="
                  absolute
                  right-0.5
                  top-0.5
                  h-3.5
                  w-3.5
                  rounded-full
                  border-2
                  border-[#07101d]
                  bg-red-500
                "
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          CHAT CARD
      ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              z-[1000]
              bottom-4
              right-4
              left-4

              sm:left-auto
              sm:right-6
              sm:bottom-6

              w-auto
              sm:w-[350px]

              h-[480px]

              overflow-hidden

              rounded-[24px]

              border
              border-white/[0.09]

              bg-[#07101c]

              shadow-[0_25px_90px_rgba(0,0,0,0.65)]

              backdrop-blur-2xl
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                flex
                h-[62px]
                items-center
                justify-between
                border-b
                border-white/[0.07]
                bg-gradient-to-r
                from-cyan-500/[0.10]
                via-blue-500/[0.08]
                to-violet-500/[0.10]
                px-4
              "
            >
              {/* Profile */}

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-cyan-400
                      to-violet-600
                      text-white
                    "
                  >
                    <Bot size={18} />
                  </div>

                  <span
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-2.5
                      w-2.5
                      rounded-full
                      border-2
                      border-[#07101c]
                      bg-emerald-400
                    "
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Amit.dev
                  </p>

                  <p className="text-[9px] text-emerald-400">
                    ● Online
                  </p>
                </div>
              </div>

              {/* Actions */}

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-white/40
                    transition
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                  aria-label="Minimize chat"
                >
                  <Minus size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-white/40
                    transition
                    hover:bg-red-500/10
                    hover:text-red-400
                  "
                  aria-label="Close chat"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* =================================================
                CHAT MESSAGES
            ================================================= */}

            <div
              ref={messagesRef}
              className="
                h-[350px]
                overflow-y-auto
                overscroll-contain
                px-4
                py-4

                scrollbar-thin
                scrollbar-thumb-white/10
              "
            >
              {/* Welcome */}

              <div className="mb-4 text-center">
                <span
                  className="
                    rounded-full
                    bg-white/[0.035]
                    px-3
                    py-1
                    text-[9px]
                    text-white/25
                  "
                >
                  Today
                </span>
              </div>

              {messages.map((message) => {
                const isUser =
                  message.type === "user";

                return (
                  <motion.div
                    key={message.id}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`mb-3 flex ${
                      isUser
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[78%]
                        rounded-[18px]
                        px-3.5
                        py-2.5

                        ${
                          isUser
                            ? `
                              rounded-br-md
                              bg-gradient-to-r
                              from-cyan-500
                              to-blue-600
                              text-white
                            `
                            : `
                              rounded-bl-md
                              bg-white/[0.055]
                              text-white/80
                            `
                        }
                      `}
                    >
                      <p
                        className="
                          break-words
                          text-[12px]
                          leading-relaxed
                        "
                      >
                        {message.text}
                      </p>

                      <p
                        className={`
                          mt-1
                          text-right
                          text-[8px]

                          ${
                            isUser
                              ? "text-white/45"
                              : "text-white/25"
                          }
                        `}
                      >
                        {message.time}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                INPUT
            ================================================= */}

            <div
              className="
                border-t
                border-white/[0.06]
                bg-[#060e19]
                p-3
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.035]
                  p-1.5

                  focus-within:border-cyan-400/20
                  focus-within:bg-white/[0.05]
                "
              >
                <input
                  value={text}
                  onChange={(e) =>
                    setText(e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    text-xs
                    text-white
                    outline-none
                    placeholder:text-white/25
                  "
                />

                <motion.button
                  type="button"
                  onClick={sendMessage}
                  whileHover={{
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600
                    text-white
                    shadow-[0_5px_20px_rgba(34,211,238,0.2)]
                  "
                >
                  <Send size={15} />
                </motion.button>
              </div>

              <p
                className="
                  mt-1.5
                  text-center
                  text-[8px]
                  text-white/15
                "
              >
                Press Enter to send
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}