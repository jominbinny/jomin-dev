import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Skills" title="Technologies I work with" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass group rounded-2xl p-6 transition-all hover:glow"
            >
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
