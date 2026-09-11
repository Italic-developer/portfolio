"use client";

import { toast } from "sonner";
import {
  achievementEvent,
  achievementStorageKey,
  achievements,
  clearAchievementsEvent,
  foundMeEvent,
  projectCount,
  projectOpenedEvent,
  sectionAchievements,
  sectionEvent,
  stackTraceEvent,
  type AchievementName,
} from "@/lib/achievements";
import { useEffect, useState } from "react";

export function useAchievements() {
  const [unlocked, setUnlocked] = useState<AchievementName[]>([]);

  useEffect(() => {
    const visitedSections = new Set<string>();
    const openedProjects = new Set<string>();
    const visibleSections = new Set<string>();
    const storedAchievements = window.localStorage.getItem(
      achievementStorageKey,
    );

    if (storedAchievements) {
      try {
        setUnlocked(JSON.parse(storedAchievements) as AchievementName[]);
      } catch {
        window.localStorage.removeItem(achievementStorageKey);
      }
    }

    const unlock = (name: AchievementName) => {
      setUnlocked((current) => {
        if (current.includes(name)) return current;
        const description = achievements.find(([title]) => title === name)?.[1];
        const next = [...current, name];
        window.localStorage.setItem(
          achievementStorageKey,
          JSON.stringify(next),
        );
        toast.success(name, { description, id: `achievement-${name}` });
        return next;
      });
    };

    const handleAchievement = (event: Event) => {
      const achievement = (event as CustomEvent<AchievementName>).detail;
      if (achievement === "FIRST CONTACT") {
        visitedSections.add("contact");
      }
      unlock(achievement);
      if (
        ["home", "projects", "achievements", "about", "contact"].every((name) =>
          visitedSections.has(name),
        )
      ) {
        unlock("FULL CIRCLE");
      }
    };

    const handleSection = (event: Event) => {
      const section = (event as CustomEvent<string>).detail;
      visitedSections.add(section);
      const achievement =
        sectionAchievements[section as keyof typeof sectionAchievements];
      if (achievement) unlock(achievement);
      if (
        ["home", "projects", "achievements", "about", "contact"].every((name) =>
          visitedSections.has(name),
        )
      ) {
        unlock("FULL CIRCLE");
      }
    };

    const handleFoundMe = () => unlock("FOUND ME");

    const handleProjectOpened = (event: Event) => {
      openedProjects.add((event as CustomEvent<string>).detail);
      if (openedProjects.size === projectCount) unlock("COMPLETIONIST");
    };

    const handleStackTrace = () => unlock("STACK TRACE");
    const handleClear = () => {
      window.localStorage.removeItem(achievementStorageKey);
      setUnlocked([]);
      visibleSections.clear();
    };

    const sections = ["home", "projects", "achievements", "about"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            visibleSections.delete(entry.target.id);
            return;
          }

          if (visibleSections.has(entry.target.id)) return;
          visibleSections.add(entry.target.id);
          const achievement =
            sectionAchievements[
              entry.target.id as keyof typeof sectionAchievements
            ];
          visitedSections.add(entry.target.id);
          if (achievement) unlock(achievement);
          if (
            ["home", "projects", "achievements", "about", "contact"].every(
              (name) => visitedSections.has(name),
            )
          ) {
            unlock("FULL CIRCLE");
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener(achievementEvent, handleAchievement);
    window.addEventListener(sectionEvent, handleSection);
    window.addEventListener(foundMeEvent, handleFoundMe);
    window.addEventListener(projectOpenedEvent, handleProjectOpened);
    window.addEventListener(stackTraceEvent, handleStackTrace);
    window.addEventListener(clearAchievementsEvent, handleClear);

    return () => {
      window.removeEventListener(achievementEvent, handleAchievement);
      window.removeEventListener(sectionEvent, handleSection);
      window.removeEventListener(foundMeEvent, handleFoundMe);
      window.removeEventListener(projectOpenedEvent, handleProjectOpened);
      window.removeEventListener(stackTraceEvent, handleStackTrace);
      window.removeEventListener(clearAchievementsEvent, handleClear);
      observer.disconnect();
    };
  }, []);

  return unlocked;
}
