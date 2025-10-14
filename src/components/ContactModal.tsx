import { useEffect } from "react";
import { Button } from "./ui/Button";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
        className="relative w-full max-w-xl rounded-lg bg-zinc-900 p-6 ring-1 ring-zinc-700"
      >
        <header className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-zinc-100">Let’s chat</h3>
          <button
            onClick={onClose}
            aria-label="Close contact form"
            className="text-zinc-400 hover:text-zinc-200"
          >
            ✕
          </button>
        </header>

        <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            const name = data.get("name") || "";
            const email = data.get("email") || "";
            const message = data.get("message") || "";

            const subject = encodeURIComponent(`Project inquiry from ${name}`);
            const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
            window.location.href = `mailto:contact@basvandriel.nl?subject=${subject}&body=${body}`;
            onClose();
          }}
        >
          <div>
            <label className="block text-sm text-zinc-300">Name</label>
            <input
              name="name"
              className="mt-1 w-full rounded bg-zinc-800 p-2 text-zinc-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300">Email</label>
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded bg-zinc-800 p-2 text-zinc-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300">Message</label>
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded bg-zinc-800 p-2 text-zinc-100"
              required
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button type="button" onClick={onClose} variant="ghost" size="sm">
              Cancel
            </Button>

            <Button type="submit">Send email</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
