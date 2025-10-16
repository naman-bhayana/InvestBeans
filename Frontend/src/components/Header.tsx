import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/controllers/AuthContext";

const Header = () => {
  const { isAuthenticated, signOut } = useAuth();

  return (
    <header className="bg-navy text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-navy/95">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold group">
            Invest<span className="font-normal text-accent">Beans</span>
          </Link>
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
                  Sign in
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
    </header>
  );
};

export default Header;
