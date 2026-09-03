import { ArrowRight } from "lucide-react";
import * as z from "zod";
export default function Contact() {
  const details = z.object({
    name: z.string(),
    email: z.email(),
    message: z.string(),
  });
  return (
    <div className="min-h-dvh bg-background flex flex-col justify-center p-8 md:p-16">
      <div className="w-full max-w-xl">
        <p className="text-accent text-xs font-mono tracking-[0.3em] uppercase mb-4">
          05 / Connect
        </p>

        <h2 className="font-display  uppercase font-[1000] text-6xl md:text-7xl mb-12">
          Establish
          <br />
          Connection
        </h2>

        <form
          action={(data) => {
            console.log(data.values, data.entries);
          }}
          className="flex flex-col gap-8"
        >
          <span className="flex flex-col-reverse gap-2">
            <input
              type="text"
              id="name"
              name="name"
              className="bg-surface border-2 border-muted peer/name w-full p-4 text-white outline-none focus:border-accent transition-colors duration-300"
              required
            />
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-widest text-muted peer-focus/name:text-accent transition-all duration-300"
            >
              Name
            </label>
          </span>

          <span className="flex flex-col-reverse gap-2">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-surface border-2 border-muted peer/email w-full p-4 text-white outline-none focus:border-accent transition-colors duration-300"
              required
            />
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-widest text-muted peer-focus/email:text-accent transition-all duration-300"
            >
              Email
            </label>
          </span>

          <span className="flex flex-col-reverse gap-2">
            <textarea
              id="message"
              name="message"
              className="bg-surface border-2 border-muted peer/message w-full p-4 min-h-[160px] text-white outline-none focus:border-accent transition-colors duration-300 resize-none"
              required
            />
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-widest text-muted peer-focus/message:text-accent transition-all duration-300"
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

          <button
            type="submit"
            className="bg-accent text-white font-bold uppercase tracking-widest text-sm px-6 py-5 flex items-center justify-between hover:opacity-90 transition-opacity duration-300"
          >
            Send Message
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
