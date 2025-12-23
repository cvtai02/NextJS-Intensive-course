'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const superfishInitialized = useRef(false);

  useEffect(() => {
    // Initialize Superfish menu after component mounts
    const initSuperfish = () => {
      if (superfishInitialized.current) return;
      
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.superfish) {
        const $ = (window as any).$;
        const menu = $('ul.sf-menu');
        
        if (menu.length && !menu.data('sf-options')) {
          menu.superfish({
            popUpSelector: 'ul',
            delay: 600,
            animation: { height: 'show' },
            animationOut: { height: 'hide' },
            speed: 'normal',
            speedOut: 'fast',
            cssArrows: false
          });
          superfishInitialized.current = true;
        }
      }
    };

    // Try multiple times to ensure scripts are loaded
    const timer1 = setTimeout(initSuperfish, 100);
    const timer2 = setTimeout(initSuperfish, 500);
    const timer3 = setTimeout(initSuperfish, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <header className="short-header">
      <div className="gradient-block"></div>

      <div className="row header-content">
        <div className="logo">
          <Link href="/">Author</Link>
        </div>

        <nav id="main-nav-wrap" className={mobileMenuOpen ? 'open' : ''}>
          <ul className="main-navigation sf-menu">
            <li className={pathname === '/' ? 'current' : ''}>
              <Link href="/" title="">
                Home
              </Link>
            </li>
            <li className={`has-children ${pathname.startsWith('/category') ? 'current' : ''}`}>
              <Link href="/category" title="">
                Categories
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/category">Wordpress</Link>
                </li>
                <li>
                  <Link href="/category">HTML</Link>
                </li>
                <li>
                  <Link href="/category">Photography</Link>
                </li>
                <li>
                  <Link href="/category">UI</Link>
                </li>
                <li>
                  <Link href="/category">Mockups</Link>
                </li>
                <li>
                  <Link href="/category">Branding</Link>
                </li>
              </ul>
            </li>
            <li className={`has-children ${pathname.startsWith('/blog') || pathname.startsWith('/posts') ? 'current' : ''}`}>
              <Link href="/blog" title="">
                Blog
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/blog/video">Video Post</Link>
                </li>
                <li>
                  <Link href="/blog/audio">Audio Post</Link>
                </li>
                <li>
                  <Link href="/blog/gallery">Gallery Post</Link>
                </li>
                <li>
                  <Link href="/blog/standard">Standard Post</Link>
                </li>
              </ul>
            </li>
            <li className={pathname === '/styles' ? 'current' : ''}>
              <Link href="/styles" title="">
                Styles
              </Link>
            </li>
            <li className={pathname === '/about' ? 'current' : ''}>
              <Link href="/about" title="">
                About
              </Link>
            </li>
            <li className={pathname === '/contact' ? 'current' : ''}>
              <Link href="/contact" title="">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`search-wrap ${searchOpen ? 'open' : ''}`}>
          <form role="search" method="get" className="search-form" action="#">
            <label>
              <span className="hide-content">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Type Your Keywords"
                name="s"
                title="Search for:"
                autoComplete="off"
              />
            </label>
            <input type="submit" className="search-submit" value="Search" />
          </form>

          <a
            href="#"
            id="close-search"
            className="close-btn"
            onClick={(e) => {
              e.preventDefault();
              setSearchOpen(false);
            }}
          >
            Close
          </a>
        </div>

        <div className="triggers">
          <a
            className="search-trigger"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSearchOpen(!searchOpen);
            }}
          >
            <i className="fa fa-search"></i>
          </a>
          <a
            className="menu-toggle"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <span>Menu</span>
          </a>
        </div>
      </div>
    </header>
  );
}
