import { useSyncExternalStore } from "react";

export type ProgressKey =
  | "moon"
  | "secretEnvelope"
  | "memoryMatch"
  | "starGame"
  | "flower"
  | "styling"
  | "salt"
  | "proposal"
  | "finalLetter";

const STORAGE_KEY = "nabia-universe-progress";

function load(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

let state: Record<string, boolean> = typeof window !== "undefined" ? load() : {};
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function completeTask(key: ProgressKey) {
  if (state[key]) return;
  state = { ...state, [key]: true };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
  emit();
}

export function useProgress() {
  return useSyncExternalStore(
    (onChange) => {
      listeners.add(onChange);
      return () => listeners.delete(onChange);
    },
    () => state,
    () => state
  );
}
