import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { personalInfo } from "@/lib/data";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
  };

  return (
    <section id="contact" className="section-padding px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to connect? Reach out."
        />
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {[
                {
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  label: "GitHub",
                  value: "github.com/jominbinny",
                  href: personalInfo.github,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/jominbinny",
                  href: personalInfo.linkedin,
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <span className="text-sm font-bold">{link.label[0]}</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-4 rounded-2xl p-6"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl bg-secondary px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl bg-secondary px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:ring-1 focus:ring-primary"
            />
            <textarea
              placeholder="Your message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="resize-none rounded-xl bg-secondary px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-xl bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
