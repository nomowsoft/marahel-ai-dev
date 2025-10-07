import { MapPin, FileText, Globe as GlobeIcon } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-[#0f1729]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/navbar/MarahelAI.svg" alt="..." width={100} height={20} />
            </div>
            <p className="text-muted-foreground text-sm">
              Leading Saudi AI solutions provider, delivering secure and compliant artificial intelligence for enterprises.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>CRN: 1010963775</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>VAT: 311966011400003</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Knowledge Hub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Morshed - ChatAssist</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Rafiki- Event Companion</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Government</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Non-Profit</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Private</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Technical</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Marahel Digital Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            <div className="flex items-center gap-2">
              <GlobeIcon className="w-4 h-4" />
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
