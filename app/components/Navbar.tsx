'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'CREATE', href: '/create' },
    { name: 'EVENTS', href: '/events' },
    { name: 'COMMUNITY', href: '/community' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <nav className="w-full flex border-2 border-black divide-x-2 divide-black bg-[#d7d3b3]" style={{ borderRadius: 0 }}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`flex-1 py-2 text-base font-medium text-black bg-[#d7d3b3] hover:bg-[#eae6c7] border-none uppercase tracking-widest font-chunk text-center transition-colors duration-150 ${
            pathname === item.href ? 'bg-[#eae6c7]' : ''
          }`}
          style={{ borderRadius: 0 }}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
} 