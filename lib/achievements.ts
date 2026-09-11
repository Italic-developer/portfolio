export const achievements = [
  ["BUILDER", "Discover the developer's work."],
  ["PROJECT HUNTER", "Keep exploring the project feed."],
  ["EXPLORER", "Read the profile and stack."],
  ["FIRST CONTACT", "Start a conversation."],
  ["FOUND ME", "You found the hidden mark."],
  ["COMPLETIONIST", "You opened every project."],
  ["STACK TRACE", "You explored the technology stack."],
  ["FULL CIRCLE", "You visited every main section."],
] as const;

export const sectionAchievements = {
  projects: "BUILDER",
  achievements: "PROJECT HUNTER",
  about: "EXPLORER",
} as const;

export const achievementEvent = "portfolio:achievement";
export const sectionEvent = "portfolio:section";
export const foundMeEvent = "portfolio:found-me";
export const projectOpenedEvent = "portfolio:project-opened";
export const stackTraceEvent = "portfolio:stack-trace";
export const clearAchievementsEvent = "portfolio:clear-achievements";
export const achievementStorageKey = "portfolio-unlocked-achievements";
export const projectCount = 6;

export type AchievementName = (typeof achievements)[number][0];

export function dispatchAchievement(name: AchievementName) {
  window.dispatchEvent(new CustomEvent(achievementEvent, { detail: name }));
}

export function dispatchProjectOpened(projectId: string) {
  window.dispatchEvent(
    new CustomEvent(projectOpenedEvent, { detail: projectId }),
  );
}

export function dispatchStackTrace() {
  window.dispatchEvent(new CustomEvent(stackTraceEvent));
}

export function clearAchievements() {
  window.dispatchEvent(new CustomEvent(clearAchievementsEvent));
}
