import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { leadership } from "@/lib/data";

export function LeadershipSection() {
  return (
    <section id="leadership" className="section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Leadership"
          title="Building communities, not just code"
          description="Leading technical communities and organizing events that impact thousands."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {leadership.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:glow"
            >
              <div className="mb-3 text-xs font-medium text-muted-foreground">
                {item.period}
              </div>
              <h3 className="mb-3 font-heading text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
