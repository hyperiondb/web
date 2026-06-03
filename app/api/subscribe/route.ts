const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const token = process.env.MAILERLITE_API_TOKEN;
  if (!token) {
    return Response.json(
      { error: "Subscription is not configured." },
      { status: 500 }
    );
  }

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

  const groupId = process.env.MAILERLITE_GROUP_ID;
  const payload: Record<string, unknown> = { email: email.trim() };
  if (groupId) payload.groups = [groupId];

  let res: Response;
  try {
    res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("MailerLite request failed:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }

  if (res.ok) {
    return Response.json({ ok: true });
  }

  const detail = await res.text().catch(() => "");
  console.error(`MailerLite responded ${res.status}: ${detail}`);

  if (res.status === 422) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  return Response.json(
    { error: "Something went wrong. Please try again." },
    { status: 502 }
  );
}
