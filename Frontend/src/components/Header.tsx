import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/controllers/AuthContext";
import MarketTicker from "./MarketTicker";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, User } from "lucide-react";

const Header = () => {
  const { isAuthenticated, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);
  const [mobileDashboardsOpen, setMobileDashboardsOpen] = useState(false);
  
  // Desktop dropdown states
  const [dashboardsOpen, setDashboardsOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-navy text-white py-2 shadow-lg">
        <MarketTicker />
      </div>

      <header className="bg-navy/95 text-white shadow-lg backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-accent transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/" className="text-2xl font-bold group">
              Invest<span className="font-normal text-accent">Beans</span>
            </Link>

            <ul className="hidden md:flex items-center space-x-6">
              <li>
                <DropdownMenu open={dashboardsOpen} onOpenChange={setDashboardsOpen}>
                  <DropdownMenuTrigger asChild>
                    <button 
                      className="font-medium hover:text-accent transition-colors px-2 py-1 rounded-md flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-accent/40"
                      onMouseEnter={() => setDashboardsOpen(true)}
                      onMouseLeave={() => setDashboardsOpen(false)}
                    >
                      Dashboards 
                      <ChevronDown 
                        className={`w-4 h-4 opacity-80 transition-transform duration-300 ease-in-out ${
                          dashboardsOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    sideOffset={6}
                    className="min-w-[220px] p-2 bg-white text-navy rounded-xl shadow-xl ring-1 ring-black/10 border border-white/10"
                    onMouseEnter={() => setDashboardsOpen(true)}
                    onMouseLeave={() => setDashboardsOpen(false)}
                  >
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/10 transition">
                        InvestBeans Equity / US Stocks
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li>
                <DropdownMenu open={marketsOpen} onOpenChange={setMarketsOpen}>
                  <DropdownMenuTrigger asChild>
                    <button 
                      className="font-medium hover:text-accent transition-colors px-2 py-1 rounded-md flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-accent/40"
                      onMouseEnter={() => setMarketsOpen(true)}
                      onMouseLeave={() => setMarketsOpen(false)}
                    >
                      Markets 
                      <ChevronDown 
                        className={`w-4 h-4 opacity-80 transition-transform duration-300 ease-in-out ${
                          marketsOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    sideOffset={6}
                    className="min-w-[220px] p-2 bg-white text-navy rounded-xl shadow-xl ring-1 ring-black/10 border border-white/10"
                    onMouseEnter={() => setMarketsOpen(true)}
                    onMouseLeave={() => setMarketsOpen(false)}
                  >
                    <DropdownMenuItem asChild>
                      <Link to="/global" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/10 transition">
                        Global
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/domestic" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/10 transition">
                        Domestics
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/markets" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/10 transition">
                        Commodities
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li>
                <Link to="/education" className="hover:text-accent transition-colors font-medium">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-accent transition-colors font-medium">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-accent transition-colors font-medium">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Button
                onClick={signOut}
                className="bg-white text-navy hover:bg-accent hover:text-white font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                Log out
              </Button>
            ) : (
              <div className="hidden md:block">
                <DropdownMenu open={userMenuOpen} onOpenChange={setUserMenuOpen}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/40"
                      aria-label="User menu"
                    >
                      <User className="w-5 h-5 text-white" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    sideOffset={8}
                    className="min-w-[160px] p-2 bg-white text-navy rounded-xl shadow-xl ring-1 ring-black/10 border border-white/10"
                  >
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/signin" 
                        className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/10 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Login
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/signup" 
                        className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/10 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Sign up
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            {/* Mobile & Desktop User Icon */}
            {!isAuthenticated && (
              <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/40"
                      aria-label="User menu"
                    >
                      <User className="w-5 h-5 text-white" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    sideOffset={8}
                    className="min-w-[160px] p-2 bg-white text-navy rounded-xl shadow-xl ring-1 ring-black/10 border border-white/10"
                  >
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/signin" 
                        className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/10 transition"
                      >
                        Login
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/signup" 
                        className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/10 transition"
                      >
                        Sign up
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy border-t border-white/10">
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <li className="rounded-md overflow-hidden">
                  <button
                    onClick={() => setMobileDashboardsOpen((s) => !s)}
                    className="w-full flex items-center justify-between text-left text-white hover:text-accent transition-colors font-medium py-3 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40"
                    aria-expanded={mobileDashboardsOpen}
                  >
                    <span>Dashboards</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                        mobileDashboardsOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <div
                    className={`mt-1 overflow-hidden transition-[max-height,opacity] duration-200 ease-in-out ${
                      mobileDashboardsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="bg-navy/90 rounded-md border border-white/5 px-2 py-2 space-y-1">
                      <li>
                        <Link
                          to="/dashboard"
                          className="block text-white/90 hover:text-accent transition-colors font-medium py-2 px-3 rounded-md"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileDashboardsOpen(false);
                          }}
                        >
                          InvestBeans Equity / US Stocks
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="rounded-md overflow-hidden">
                  <button
                    onClick={() => setMobileMarketsOpen((s) => !s)}
                    className="w-full flex items-center justify-between text-left text-white hover:text-accent transition-colors font-medium py-3 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40"
                    aria-expanded={mobileMarketsOpen}
                  >
                    <span>Markets</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                        mobileMarketsOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <div
                    className={`mt-1 overflow-hidden transition-[max-height,opacity] duration-200 ease-in-out ${
                      mobileMarketsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="bg-navy/90 rounded-md border border-white/5 px-2 py-2 space-y-1">
                      <li>
                        <Link
                          to="/global"
                          className="block text-white/90 hover:text-accent transition-colors font-medium py-2 px-3 rounded-md"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileMarketsOpen(false);
                          }}
                        >
                          Global
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/domestic"
                          className="block text-white/90 hover:text-accent transition-colors font-medium py-2 px-3 rounded-md"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileMarketsOpen(false);
                          }}
                        >
                          Domestics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/markets"
                          className="block text-white/90 hover:text-accent transition-colors font-medium py-2 px-3 rounded-md"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileMarketsOpen(false);
                          }}
                        >
                          Commodities
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    to="/education"
                    className="block text-white hover:text-accent transition-colors font-medium py-3 px-3 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Education
                  </Link>
                </li>

                <li>
                  <Link
                    to="/team"
                    className="block text-white hover:text-accent transition-colors font-medium py-3 px-3 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blogs"
                    className="block text-white hover:text-accent transition-colors font-medium py-3 px-3 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </li>

                <li className="pt-3">
                  {isAuthenticated && (
                    <Button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-white text-navy hover:bg-accent hover:text-white font-semibold transition-all shadow-sm"
                    >
                      Log out
                    </Button>
                  )}
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