import Logo from './Logo';

const FOOTER_SECTIONS = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Case Studies', 'Blog'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Contact', 'Privacy Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <Logo className="h-16 md:h-20 w-auto text-accent opacity-95 drop-shadow-[0_0_12px_rgba(255,94,46,0.14)]" />
            </div>
            <p className="text-tertiary text-sm font-light leading-relaxed">
              Next-generation digital forensics and incident response. Built for truth.
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-[10px] font-mono text-accent uppercase tracking-widest mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4 text-sm text-secondary font-light">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Solid green footer status bar */}
      <div className="min-h-12 bg-accent flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center px-4 sm:px-6 lg:px-12 py-3 sm:py-0 justify-between">
        <div className="text-black font-mono text-[10px] font-bold tracking-[0.2em] uppercase hidden sm:block">
          System Integrity: Verified // AES-256 Active
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-8 text-black font-mono text-[10px] font-bold uppercase w-full sm:w-auto justify-between sm:justify-end">
          <span>Session: #9122</span>
          <span className="hidden sm:inline">Loc: 127.0.0.1</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
