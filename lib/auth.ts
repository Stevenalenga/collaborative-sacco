export const AUTH_KEY = "cac-sacco-demo-auth";

export type DemoSession = {
  memberNo: string;
  name: string;
};

export function readSession(): DemoSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(AUTH_KEY);
    return raw ? (JSON.parse(raw) as DemoSession) : null;
  } catch {
    return null;
  }
}

export function writeSession(session: DemoSession) {
  window.localStorage.setItem(AUTH_KEY, JSON.stringify(session));
}

export function clearSession() {
  window.localStorage.removeItem(AUTH_KEY);
}
