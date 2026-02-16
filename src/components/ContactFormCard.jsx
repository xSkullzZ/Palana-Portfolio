import { useState } from "react";

const CONTACT_EMAIL = "claudio.palana@gmail.com";

export default function ContactFormCard({ className = "" }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullSubject =
      subject.trim() || `Contact proposal from ${name.trim() || "Website visitor"}`;

    const fullBody = [
      `Name: ${name.trim() || "N/A"}`,
      "",
      "Message:",
      message.trim() || "N/A",
    ].join("\n");

    const mailtoLink = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(fullBody)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className={`w-full max-w-2xl mx-auto rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md p-6 md:p-8 ${className}`}>
      <h3 className="text-white text-2xl md:text-3xl font-semibold">Let&apos;s build something meaningful</h3>
      <p className="text-white/65 mt-2">Send a short brief and I will get back to you.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label htmlFor="contact-name" className="sr-only">Name</label>
        <input
          id="contact-name"
          className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
        />
        <label htmlFor="contact-subject" className="sr-only">Object</label>
        <input
          id="contact-subject"
          className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
          placeholder="Object"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea
          id="contact-message"
          className="w-full min-h-36 rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-amber-300/60 resize-y"
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <button
          type="submit"
          className="rounded-xl text-black px-5 py-3 font-semibold transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(45deg, #FF9500 0%, #FFBB33 100%)",
          }}
        >
          Send proposal
        </button>
      </form>

      {submitted ? (
        <p className="text-sm text-white/70 mt-3" role="status" aria-live="polite">
          Your email app should be open now. If not, send manually to <span className="text-white">{CONTACT_EMAIL}</span>.
        </p>
      ) : null}
    </div>
  );
}
