import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex py-4 text-sm ${className}`}>
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-[#4B7F52] transition-colors flex items-center"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href} className="flex items-center">
              {isLast ? (
                <span className="font-medium text-[#2A3D27]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-[#4B7F52] transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}