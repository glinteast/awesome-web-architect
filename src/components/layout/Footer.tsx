
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="space-y-4">
          <Link to="/" className="inline-block">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Corlate
            </span>
          </Link>
          <p className="text-white/80 text-sm max-w-xs">
            We deliver innovative digital marketing and web development solutions tailored to your business needs.
          </p>
          <div className="flex space-x-4 pt-2">
            <SocialLink href="https://twitter.com" icon={<Twitter className="h-4 w-4" />} />
            <SocialLink href="https://facebook.com" icon={<Facebook className="h-4 w-4" />} />
            <SocialLink href="https://instagram.com" icon={<Instagram className="h-4 w-4" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-4 w-4" />} />
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-base font-medium mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/case-studies">Case Studies</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-base font-medium mb-4 text-white">Services</h3>
          <ul className="space-y-3">
            <FooterLink href="/services/digital-marketing">Digital Marketing</FooterLink>
            <FooterLink href="/services/web-development">Web Development</FooterLink>
            <FooterLink href="/services/seo">SEO</FooterLink>
            <FooterLink href="/services/social-media">Social Media Marketing</FooterLink>
            <FooterLink href="/services/content-marketing">Content Marketing</FooterLink>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-base font-medium mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
              <span className="text-sm text-white/80">
                35 Popular Road, Primrose, Germiston
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
              <a href="tel:+15551234567" className="text-sm text-white/80 hover:text-white transition-colors">
                +27 (696) 030-501
              </a>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
              <a href="mailto:info@corlate.com" className="text-sm text-white/80 hover:text-white transition-colors">
                info@corlate.co.za
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white/70">
          © {currentYear} Corlate. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-primary hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        to={href}
        className="text-sm text-white/80 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
