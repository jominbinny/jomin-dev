import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { aboutText, personalInfo } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="About" title="A bit about me" />
        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="space-y-4">
              {aboutText.map((text, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {text}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["Education", "B.Tech CSE — CGPA 8.20"],
                  ["Focus", "Backend Systems & APIs"],
                  ["Location", personalInfo.location],
                  ["Communities", "TinkerHub & IEDC Lead"],
                ].map(([label, value]) => (
                  <li key={label} className="flex justify-between">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
