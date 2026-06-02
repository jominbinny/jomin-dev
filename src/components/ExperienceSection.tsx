import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Experience" title="Where I've worked" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative md:flex md:items-start md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

                <div className="md:w-1/2">
                  <div className="glass rounded-2xl p-6 transition-all hover:glow">
                    <div className="mb-1 flex items-center gap-3">
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-primary">{exp.role}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
