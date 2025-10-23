import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/controllers/AuthContext";
import MarketTicker from "./MarketTicker";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { isAuthenticated, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Market Ticker - Above everything */}
      <div className="bg-navy text-white py-2 shadow-lg">
        <MarketTicker />
      </div>
      
      {/* Navigation Header */}
      <header className="bg-navy text-white shadow-lg backdrop-blur-sm bg-navy/95">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-accent transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <Link to="/" className="text-2xl font-bold group">
              Invest<span className="font-normal text-accent">Beans</span>
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-6">
              <li><Link to="/domestic" className="hover:text-accent transition-colors font-medium">Domestic</Link></li>
              <li><Link to="/global" className="hover:text-accent transition-colors font-medium">Global</Link></li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="font-medium hover:text-accent">Dashboards</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">InvestBeans Equity / US Stocks</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li><Link to="/markets" className="hover:text-accent transition-colors font-medium">Markets</Link></li>
              <li><Link to="/education" className="hover:text-accent transition-colors font-medium">Education</Link></li>
              <li><Link to="/team" className="hover:text-accent transition-colors font-medium">Team</Link></li>
              <li><Link to="/blogs" className="hover:text-accent transition-colors font-medium">Blogs</Link></li>
            </ul>
          </div>

          {/* Buttons based on authentication */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Button
                onClick={signOut}
                className="bg-white text-navy hover:bg-accent hover:text-white font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                Log out
              </Button>
            ) : (
              <>
                <Link to="/signin">
                  <Button className="bg-white text-navy hover:bg-accent hover:text-white font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-accent text-white hover:bg-white hover:text-navy font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy border-t border-white/10">
            <div className="container mx-auto px-6 py-4">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/domestic" 
                    className="block text-white hover:text-accent transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Domestic
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/global" 
                    className="block text-white hover:text-accent transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Global
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/dashboard" 
                    className="block text-white hover:text-accent transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboards
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/markets" 
                    className="block text-white hover:text-accent transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Markets
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/education" 
                    className="block text-white hover:text-accent transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className="block text-white hover:text-accent transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blogs" 
                    className="block text-white hover:text-accent transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
