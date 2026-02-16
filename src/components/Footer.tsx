import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          KH<span className="text-primary">.</span>dev © {new Date().getFullYear()}
        </p>
        <p className="text-xs text-muted-foreground">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
};

export default Footer;
