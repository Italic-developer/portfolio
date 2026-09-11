"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { dispatchAchievement } from "@/lib/achievements";

export default function Contact() {
  const [isReceived, setIsReceived] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
    setIsReceived(true);
    dispatchAchievement("FIRST CONTACT");
    toast.success("Message received", {
      description: "Your note is ready for a reply.",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-dvh scroll-mt-24 bg-background p-8 md:p-16"
    >
      <div className="w-full max-w-xl">
        <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-4">
          05 / Connect
        </p>

        <h2 className="font-display  uppercase font-[1000] text-6xl md:text-7xl mb-12">
          Establish
          <br />
          Connection
        </h2>

        {isReceived ? (
          <div className="border border-accent/40 bg-surface p-6">
            <p className="font-display text-3xl font-black uppercase text-accent">
              Message Received
            </p>
            <p className="mt-3 font-sans leading-7 text-text-secondary">
              Thanks for reaching out. Your message is in the queue for a reply.
            </p>
            <button
              type="button"
              onClick={() => setIsReceived(false)}
              className="mt-6 border border-border-subtle px-4 py-3 font-mono text-xs uppercase text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <span className="group flex flex-col-reverse gap-2">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 border-muted bg-surface p-4 text-white outline-none transition-colors duration-300 focus:outline-2 focus:outline-accent"
                required
              />
              <label
                htmlFor="name"
                className="contact-label text-xs uppercase tracking-widest transition-colors duration-300"
              >
                Name
              </label>
            </span>

            <span className="group flex flex-col-reverse gap-2">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-2 border-muted bg-surface p-4 text-white outline-none transition-colors duration-300 focus:outline-2 focus:outline-accent"
                required
              />
              <label
                htmlFor="email"
                className="contact-label text-xs uppercase tracking-widest transition-colors duration-300"
              >
                Email
              </label>
            </span>

            <span className="group flex flex-col-reverse gap-2">
              <textarea
                id="message"
                name="message"
                className="min-h-40 w-full resize-none border-2 border-muted bg-surface p-4 text-white outline-none transition-colors duration-300 focus:outline-2 focus:outline-accent"
                required
              />
              <label
                htmlFor="message"
                className="contact-label text-xs uppercase tracking-widest transition-colors duration-300"
              >
                Message
              </label>
            </span>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-white font-bold uppercase tracking-widest text-sm px-6 py-5 flex items-center justify-between hover:opacity-90 transition-opacity duration-300"
            >
              Send Message
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
