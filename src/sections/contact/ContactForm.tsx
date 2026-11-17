"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";

import { CheckIcon, SendIcon } from "@/components/icons";
import { buttonClasses } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/motion";
import { useI18n } from "@/providers/i18n";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted/70 hover:border-foreground/25 focus:border-primary focus:outline-none";

export function ContactForm() {
  const { dictionary } = useI18n();
  const t = dictionary.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      // Loaded only when someone actually sends a message.
      const emailjs = (await import("@emailjs/browser")).default;
      const { serviceId, templateId, publicKey } = siteConfig.emailjs;
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name1: data.get("name"),
          form_name2: "",
          from_email: data.get("email"),
          message: data.get("message"),
        },
        { publicKey },
      );
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">{t.name}</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">{t.email}</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            dir="ltr"
            className={cn(field, "rtl:text-right")}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">{t.message}</span>
        <textarea name="message" required rows={5} className={cn(field, "resize-y")} />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className={buttonClasses("primary")}
        >
          <SendIcon className="text-base rtl:-scale-x-100" />
          {status === "sending" ? t.sending : t.send}
        </button>

        <div aria-live="polite" className="min-h-6 text-sm">
          <AnimatePresence mode="wait">
            {(status === "success" || status === "error") && (
              <motion.p
                key={status}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease }}
                className={cn(
                  "flex items-center gap-1.5",
                  status === "success"
                    ? "text-primary"
                    : "text-red-600 dark:text-red-400",
                )}
              >
                {status === "success" && <CheckIcon />}
                {status === "success" ? t.success : t.error}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}
