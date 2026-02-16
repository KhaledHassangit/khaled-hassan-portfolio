import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, Linkedin, Github, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-mono text-primary mb-3">{t.contact.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.contact.heading1} <span className="text-primary">{t.contact.heading2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder={t.contact.namePlaceholder}
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
            />
            <input
              type="email"
              placeholder={t.contact.emailPlaceholder}
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
            />
            <textarea
              placeholder={t.contact.messagePlaceholder}
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              {submitted ? (
                <><CheckCircle size={16} /> {t.contact.sent}</>
              ) : (
                <><Send size={16} /> {t.contact.send}</>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">{t.contact.intro}</p>

            <div className="space-y-4">
              <a href="mailto:khaled@example.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail size={16} className="text-primary" />
                </div>
                khaled@example.com
              </a>
              <a href="tel:+201234567890" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone size={16} className="text-primary" />
                </div>
                +20 123 456 7890
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Linkedin size={16} className="text-primary" />
                </div>
                LinkedIn Profile
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Github size={16} className="text-primary" />
                </div>
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
