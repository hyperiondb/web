"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAILERLITE_ACCOUNT = "2403256";
const MAILERLITE_FORM = "189254570450355612";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("No spam. One email when Northoryx is ready.");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const val = email.trim();
    if (!EMAIL_RE.test(val)) {
      setNote("Please enter a valid email address.");
      setError(true);
      return;
    }

    setLoading(true);
    try {
      const body = new URLSearchParams();
      body.set("fields[email]", val);
      body.set("ml-submit", "1");
      body.set("anticsrf", "true");
      const res = await fetch(
        `https://assets.mailerlite.com/jsonp/${MAILERLITE_ACCOUNT}/forms/${MAILERLITE_FORM}/subscribe`,
        { method: "POST", body }
      );
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        const fieldError = data?.errors?.fields?.email?.[0];
        setNote(fieldError ?? "Something went wrong. Please try again.");
        setError(true);
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setNote("Something went wrong. Please try again.");
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="signup">
      {!submitted && (
        <p className="form-label">Get notified when we launch.</p>
      )}

      {!submitted && (
        <form onSubmit={handleSubmit} noValidate>
          <div className="email-field">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
              disabled={loading}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setNote("No spam. One email when Northoryx is ready.");
                setError(false);
              }}
            />
          </div>
          <button className="btn-notify" type="submit" disabled={loading}>
            {loading ? "Submitting…" : "Notify me"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </form>
      )}

      {!submitted && (
        <p className={error ? "form-note form-error" : "form-note"}>{note}</p>
      )}

      <div className={submitted ? "success show" : "success"}>
        <span className="check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <div>
          <h3>Almost there — check your inbox.</h3>
          <p>We sent a confirmation link to {email.trim()}. Click it to finish subscribing.</p>
        </div>
      </div>
    </div>
  );
}
