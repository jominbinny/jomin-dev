import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="From hackathon prototypes to production systems — each project solves a real problem."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all hover:glow"
            >
              {/* Number badge */}
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-heading text-sm font-bold text-primary">
                0{i + 1}
              </span>

              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mb-4 rounded-lg bg-accent/5 px-3 py-2 text-xs font-medium text-accent">
                ↗ {project.impact}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover gradient line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
