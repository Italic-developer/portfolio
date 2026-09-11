"use client";

import { motion } from "motion/react";
import { RotateCcw } from "lucide-react";
import { achievements, clearAchievements } from "@/lib/achievements";
import { useAchievements } from "@/lib/useAchievements";

export default function Achievement() {
  const unlocked = useAchievements();

  return (
    <section
      id="achievements"
      className="mx-auto flex w-full max-w-360 scroll-mt-24 flex-col gap-3.5 px-6 py-24 md:px-10 md:py-28"
    >
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="font-display text-xs text-accent">
            03 / System Rewards
          </p>
          <h2 className="mt-4 font-display text-6xl font-black">
            ACHIEVEMENTS
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-mono text-xs uppercase text-text-muted">
            Passive rewards for exploration
          </p>
          <button
            type="button"
            aria-label="Clear unlocked achievements"
            title="Clear unlocked achievements"
            onClick={clearAchievements}
            className="border border-transparent p-1.5 text-text-muted transition-colors hover:border-border-subtle hover:text-accent"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 border border-border-subtle sm:grid-cols-3 lg:grid-cols-4">
        {achievements.map(([name, description], index) => {
          const isUnlocked = unlocked.includes(name);

          return (
            <motion.div
              key={name}
              animate={{ opacity: isUnlocked ? 1 : 0.45 }}
              whileHover={{ y: -4, opacity: 1, borderColor: "var(--accent)" }}
              transition={{ duration: 0.35 }}
              className="flex min-h-44 flex-col justify-between border-border-subtle p-5 even:border-l md:border-l md:first:border-l-0"
            >
              <span className="font-mono text-xs text-accent">
                0{index + 1}
              </span>
              <div>
                <p className="font-display text-xl font-black">
                  {isUnlocked ? name : "???"}
                </p>
                <p className="mt-2 font-sans text-xs leading-5 text-text-muted">
                  {isUnlocked ? description : "Keep browsing to unlock."}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
