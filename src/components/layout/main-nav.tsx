
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Bot, UserCog, LogIn, User, Brain, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';

const navItems = [
  { href: '/', label: 'Home', icon: Home, public: false, adminOnly: false },
  { href: '/products', label: 'Products', icon: Search, public: false, adminOnly: false },
  { href: '/ai-crop-advisor', label: 'AI Advisor', icon: Brain, public: false, adminOnly: false },
  { href: '/disease-detection', label: 'Disease', icon: Leaf, public: false, adminOnly: false },
  { href: '/admin', label: 'Admin', icon: UserCog, public: false, adminOnly: true },
];

export function MainNav() {
  const pathname = usePathname();
  const { user, loading, isAdmin } = useAuth();

  // Debug only in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 MainNav Debug:', { user: !!user, isAdmin, loading, pathname });
  }

  const renderNavItems = () => {
    if (loading) {
      return (
        <div className="flex-1 flex justify-center items-center">
          <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      );
    }

    if (!user) {
      // Show public navigation items for unauthenticated users
      return (
        <>
          <Link 
            href="/" 
            className={cn(
              "relative flex flex-col items-center justify-center flex-1 gap-1 py-3 text-xs font-medium transition-colors duration-200 ease-in-out h-full",
              pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <Home className="h-6 w-6 mb-0.5" />
            <span>Home</span>
            {pathname === "/" && (
              <span className="absolute bottom-1 h-[3px] w-8 rounded-full bg-primary"></span>
            )}
          </Link>
          <Link 
            href="/products" 
            className={cn(
              "relative flex flex-col items-center justify-center flex-1 gap-1 py-3 text-xs font-medium transition-colors duration-200 ease-in-out h-full",
              pathname.startsWith("/products") ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <Search className="h-6 w-6 mb-0.5" />
            <span>Products</span>
            {pathname.startsWith("/products") && (
              <span className="absolute bottom-1 h-[3px] w-8 rounded-full bg-primary"></span>
            )}
          </Link>
          <Link 
            href="/ai-crop-advisor" 
            className={cn(
              "relative flex flex-col items-center justify-center flex-1 gap-1 py-3 text-xs font-medium transition-colors duration-200 ease-in-out h-full",
              pathname === "/ai-crop-advisor" ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <Brain className="h-6 w-6 mb-0.5" />
            <span>AI Advisor</span>
            {pathname === "/ai-crop-advisor" && (
              <span className="absolute bottom-1 h-[3px] w-8 rounded-full bg-primary"></span>
            )}
          </Link>
          <Link 
            href="/disease-detection" 
            className={cn(
              "relative flex flex-col items-center justify-center flex-1 gap-1 py-3 text-xs font-medium transition-colors duration-200 ease-in-out h-full",
              pathname === "/disease-detection" ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <Leaf className="h-6 w-6 mb-0.5" />
            <span>Disease</span>
            {pathname === "/disease-detection" && (
              <span className="absolute bottom-1 h-[3px] w-8 rounded-full bg-primary"></span>
            )}
          </Link>
          <Link 
            href="/login" 
            className={cn(
              "relative flex flex-col items-center justify-center flex-1 gap-1 py-3 text-xs font-medium transition-colors duration-200 ease-in-out h-full",
              pathname === "/login" ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <LogIn className="h-6 w-6 mb-0.5" />
            <span>Login</span>
            {pathname === "/login" && (
              <span className="absolute bottom-1 h-[3px] w-8 rounded-full bg-primary"></span>
            )}
          </Link>
        </>
      );
    }

    // Show full navigation for authenticated users
    const filteredItems = navItems.filter(item => {
        if (item.adminOnly && !isAdmin) return false;
        
        // Hide favorites & profile from admin to simplify their nav
        if (isAdmin && (item.href === '/favorites' || item.href === '/profile')) return false;

        return true;
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Filtered nav items:', filteredItems.map(item => ({ href: item.href, adminOnly: item.adminOnly })));
    }

    return (
      <>
        {filteredItems.map((item) => {
          const isActive = pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/');
          return (
            <Link 
                key={item.href}
                href={item.href}
                className={cn(
                    "relative flex flex-col items-center justify-center flex-1 gap-1 py-3 text-xs font-medium transition-colors duration-200 ease-in-out h-full",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
            >
              <item.icon className="h-6 w-6 mb-0.5" />
              <span>{item.label}</span>
              {isActive && (
                  <span className="absolute bottom-1 h-[3px] w-8 rounded-full bg-primary"></span>
              )}
            </Link>
          )
        })}
        {user && !isAdmin && (
            <Link 
                href="/profile" 
                className={cn(
                    "relative flex flex-col items-center justify-center flex-1 gap-1 py-3 text-xs font-medium transition-colors duration-200 ease-in-out h-full", 
                    pathname === "/profile" ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
            >
                <User className="h-6 w-6 mb-0.5" />
                <span>Profile</span>
                {pathname === "/profile" && (
                    <span className="absolute bottom-1 h-[3px] w-8 rounded-full bg-primary"></span>
                )}
            </Link>
        )}
      </>
    );
  }

  return (
      <nav className="flex items-center w-full h-full max-w-lg mx-auto px-2">
          {renderNavItems()}
      </nav>
  );
}
