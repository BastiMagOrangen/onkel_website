"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** Consent state: `unknown` means the visitor has not decided yet. */
export type ConsentStatus = "unknown" | "accepted" | "rejected";

interface CookieConsent {
  status: ConsentStatus;
  /** False until the stored cookie was read, so the banner does not flash. */
  ready: boolean;
  accept: () => void;
  decline: () => void;
  revoke: () => void;
}

const COOKIE_NAME = "cookie-accepted";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

const ConsentContext = createContext<CookieConsent | null>(null);

function readAcceptedCookie(): boolean {
  return decodeURIComponent(document.cookie)
    .split(";")
    .some((entry) => entry.trim() === `${COOKIE_NAME}=true`);
}

/**
 * Holds the cookie consent for the Google Maps embed. Acceptance is stored in
 * a 30 day cookie; a rejection only lasts for the current page view.
 */
export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>("unknown");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Cookies exist only in the browser, so they are read after hydration.
    if (readAcceptedCookie()) setStatus("accepted");
    setReady(true);
  }, []);

  const accept = useCallback(() => {
    const expires = new Date(Date.now() + THIRTY_DAYS_MS).toUTCString();
    document.cookie = `${COOKIE_NAME}=true;expires=${expires};path=/;SameSite=Lax`;
    setStatus("accepted");
  }, []);

  const decline = useCallback(() => setStatus("rejected"), []);

  const revoke = useCallback(() => {
    document.cookie = `${COOKIE_NAME}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
    setStatus("unknown");
  }, []);

  const value = useMemo(
    () => ({ status, ready, accept, decline, revoke }),
    [status, ready, accept, decline, revoke],
  );

  return <ConsentContext value={value}>{children}</ConsentContext>;
}

/** Access the cookie consent state; must be used below the provider. */
export function useCookieConsent(): CookieConsent {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useCookieConsent needs a CookieConsentProvider");
  return ctx;
}
