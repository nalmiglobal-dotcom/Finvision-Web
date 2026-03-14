'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRightCircle, ChevronDown, BookOpen, LineChart, GraduationCap } from 'lucide-react';
import PWAInstallButton from '@/components/pwa-install-button';
import { ThemeToggle } from '@/components/theme-toggle';

type NavItem = {
  label: string;
  href?: string;
  isExternal?: boolean;
  hasDropdown?: boolean;
};

const courseLinks = [
  {
    title: 'BASIC TRADING',
    url: 'https://basic-trading.tiiny.site',
    icon: BookOpen,
  },
  {
    title: 'ADVANCE TRADING',
    url: 'https://pdflink.to/26cc6205/',
    icon: LineChart,
  },
  {
    title: 'INTERVIEW ETIQUETTE',
    url: 'https://pdflink.to/5108b0e5/',
    icon: GraduationCap,
  },
];

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'COURSE', href: '#courses' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '#connect' },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCourseClick = (url: string) => {
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setIsCoursesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const renderNavLink = (item: NavItem, index: number) => {
    const isActive = item.href && pathname === item.href;
    const isHovered = hoveredIndex === index;

    if (item.hasDropdown) {
      return (
        <li
          key={item.label}
          className="relative"
          onMouseEnter={() => {
            setHoveredIndex(index);
            setIsCoursesDropdownOpen(true);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setIsCoursesDropdownOpen(false);
          }}
        >
          <button
            className={`relative font-semibold text-sm tracking-wider transition-all duration-300 py-2 px-4 rounded-lg
              ${isCoursesDropdownOpen ? 'text-primary' : 'text-foreground/80'} 
              hover:text-primary group flex items-center gap-2`}
          >
            <span
              className={`absolute inset-0 bg-primary/10 rounded-lg transition-all duration-300
                ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            <span className="relative z-10 flex items-center gap-2">
              {item.label}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
            </span>

            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full
                ${isCoursesDropdownOpen ? 'w-[80%] opacity-100' : isHovered ? 'w-[80%] opacity-100' : 'w-0 opacity-0'}`}
            />
          </button>

          {isCoursesDropdownOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
              <div className="glass-card rounded-xl overflow-hidden min-w-[280px] glow-box">
                <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-3 text-center border-b border-white/10">
                  <p className="text-foreground font-bold text-sm uppercase tracking-wider">Our Courses</p>
                </div>

                {courseLinks.map((course, idx) => {
                  const Icon = course.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleCourseClick(course.url)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-all duration-300 group border-b border-white/5 last:border-b-0"
                    >
                      <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl group-hover:scale-110 transition-all duration-300 glow-box">
                        <Icon className="w-5 h-5 text-background" strokeWidth={2} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                          {course.title}
                        </p>
                      </div>
                      <ArrowRightCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </li>
      );
    }

    return (
      <li
        key={item.label}
        className="relative"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <Link
          href={item.href!}
          onClick={(e) => handleNavClick(e, item.href!)}
          className={`relative font-semibold text-sm tracking-wider transition-all duration-300 block py-2 px-4 rounded-lg
            ${isActive ? 'text-primary' : 'text-foreground/80'} 
            hover:text-primary group`}
        >
          <span
            className={`absolute inset-0 bg-primary/10 rounded-lg transition-all duration-300
              ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />

          <span className="relative z-10 flex items-center gap-2">
            {item.label}
          </span>

          <span
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full
              ${isActive ? 'w-[80%] opacity-100' : isHovered ? 'w-[80%] opacity-100' : 'w-0 opacity-0'}`}
          />
        </Link>
      </li>
    );
  };

  const renderMobileNavLink = (item: NavItem) => {
    const isActive = item.href && pathname === item.href;

    if (item.hasDropdown) {
      return (
        <li key={item.label}>
          <button
            onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
            className={`w-full text-left flex items-center justify-between py-3 text-foreground hover:text-primary transition-colors font-semibold
              ${isMobileCoursesOpen ? 'text-primary bg-primary/10 rounded-lg px-3' : ''}`}
          >
            <span>{item.label}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileCoursesOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMobileCoursesOpen && (
            <ul className="ml-4 mt-2 space-y-2">
              {courseLinks.map((course, idx) => {
                const Icon = course.icon;
                return (
                  <li key={idx}>
                    <button
                      onClick={() => handleCourseClick(course.url)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-primary/5 rounded-lg transition-all duration-300 group"
                    >
                      <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
                        <Icon className="w-4 h-4 text-background" strokeWidth={2} />
                      </div>
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                        {course.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={item.label}>
        <Link
          href={item.href!}
          onClick={(e) => handleNavClick(e, item.href!)}
          className={`block py-3 text-foreground hover:text-primary transition-colors font-semibold
            ${isActive ? 'text-primary bg-primary/10 rounded-lg px-3' : ''}`}
        >
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${isSticky ? 'glass-card shadow-[0_4px_30px_rgba(0,212,255,0.1)]' : 'bg-background/80 backdrop-blur-md'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[80px] lg:h-[90px] 2xl:h-[100px]">
          <div className="flex items-center gap-8 lg:gap-12 2xl:gap-16 flex-1">
            <div className="flex-shrink-0 relative group">
              <Link href="/" className="block relative">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Blue-Modern-Innovating-Online-Learning-Logo-1762796155464.png?width=8000&height=8000&resize=contain"
                  alt="FINVISION Logo"
                  width={100}
                  height={30}
                  priority
                  className="transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>
            </div>

            <div className="hidden lg:block h-8 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

            <nav className="hidden lg:flex flex-1">
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => renderNavLink(item, index))}
              </ul>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4 justify-end">
            <ThemeToggle />
            <a
              href="https://www.crm.myfinvision.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-semibold text-sm py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Login / Sign Up</span>
              <ArrowRightCircle className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

          </div>

          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              aria-expanded={isMobileMenuOpen}
            >

              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-card border-t border-white/10">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => renderMobileNavLink(item))}
            </ul>
            <div className="pt-4 pb-2 space-y-2">
              <a
                href="https://www.crm.myfinvision.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-semibold text-sm py-3 px-4 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Login / Sign Up</span>
                <ArrowRightCircle className="w-4 h-4" />
              </a>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
