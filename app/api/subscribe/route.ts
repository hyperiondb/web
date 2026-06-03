const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAILERLITE_ACCOUNT = process.env.MAILERLITE_ACCOUNT_ID ?? "2403256";
const MAILERLITE_FORM = process.env.MAILERLITE_FORM_ID ?? "189254570450355612";

export async function POST(request: Request) {
  let email: unknown;
  try {
    const data = await request.json();
    email = data?.email;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const body = new URLSearchParams();
  body.set("fields[email]", email.trim());
  body.set("ml-submit", "1");
  body.set("anticsrf", "true");

  let res: Response;
  try {
    res = await fetch(
      `https://assets.mailerlite.com/jsonp/${MAILERLITE_ACCOUNT}/forms/${MAILERLITE_FORM}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body,
      }
    );
  } catch (err) {
    console.error("MailerLite request failed:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }

  const result = await res.json().catch(() => null);
  if (res.ok && result?.success) {
    return Response.json({ ok: true });
  }

  console.error(`MailerLite form responded ${res.status}:`, result);
  return Response.json(
    { error: "Something went wrong. Please try again." },
    { status: 502 }
  );
}
