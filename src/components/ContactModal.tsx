import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

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
        aria-labelledby="contact-modal-title"
        className="relative w-full max-w-xl rounded-lg bg-zinc-900 p-6 ring-1 ring-zinc-700"
      >
        <header className="flex items-center justify-between">
          <h3
            id="contact-modal-title"
            className="text-lg font-semibold text-zinc-100"
          >
            Let's chat
          </h3>
          <button
            onClick={onClose}
            aria-label="Close contact form"
            className="text-zinc-400 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
          >
            ✕
          </button>
        </header>

        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            const name = (data.get("name") as string) || "";
            const email = (data.get("email") as string) || "";
            const message = (data.get("message") as string) || "";

            // Validate all fields
            const newErrors = {
              name: validateField("name", name),
              email: validateField("email", email),
              message: validateField("message", message),
            };

            setErrors(newErrors);
            setTouched({ name: true, email: true, message: true });

            // Check if there are any errors
            if (Object.values(newErrors).some((error) => error !== "")) {
              return;
            }

            setIsSubmitting(true);

            const subject = encodeURIComponent(`Project inquiry from ${name}`);
            const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
            window.location.href = `mailto:contact@basvandriel.nl?subject=${subject}&body=${body}`;

            setTimeout(() => {
              setIsSubmitting(false);
              onClose();
            }, 1000);
          }}
          noValidate
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm text-zinc-300 mb-1"
            >
              Name <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              className={`mt-1 w-full rounded bg-zinc-800 p-3 text-zinc-100 border ${
                touched.name && errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-transparent focus:ring-emerald-500"
              } focus:outline-none focus:ring-2 transition-colors`}
              required
              onBlur={handleBlur}
              onChange={handleChange}
              aria-invalid={touched.name && !!errors.name}
              aria-describedby={
                touched.name && errors.name ? "name-error" : undefined
              }
            />
            {touched.name && errors.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-400"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm text-zinc-300 mb-1"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className={`mt-1 w-full rounded bg-zinc-800 p-3 text-zinc-100 border ${
                touched.email && errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-transparent focus:ring-emerald-500"
              } focus:outline-none focus:ring-2 transition-colors`}
              required
              onBlur={handleBlur}
              onChange={handleChange}
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={
                touched.email && errors.email ? "email-error" : undefined
              }
            />
            {touched.email && errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-400"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm text-zinc-300 mb-1"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              className={`mt-1 w-full rounded bg-zinc-800 p-3 text-zinc-100 border ${
                touched.message && errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-transparent focus:ring-emerald-500"
              } focus:outline-none focus:ring-2 transition-colors resize-none`}
              required
              onBlur={handleBlur}
              onChange={handleChange}
              aria-invalid={touched.message && !!errors.message}
              aria-describedby={
                touched.message && errors.message ? "message-error" : undefined
              }
            />
            {touched.message && errors.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-red-400"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              onClick={onClose}
              variant="ghost"
              size="sm"
              disabled={isSubmitting}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting} className="relative">
              {isSubmitting ? (
                <>
                  <span className="opacity-0">Send email</span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </span>
                </>
              ) : (
                "Send email"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
