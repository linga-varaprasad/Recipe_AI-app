import { Home, Search, Camera, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
      <div className="max-w-md mx-auto px-6 flex justify-between items-center">
        <Link
          to="/home"
          className={`flex flex-col items-center ${
            isActive("/home") ? "text-primary-foreground" : "text-gray-400"
          }`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/search"
          className={`flex flex-col items-center ${
            isActive("/search") ? "text-primary-foreground" : "text-gray-400"
          }`}
        >
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </Link>
        <Link
          to="/camera"
          className={`flex flex-col items-center ${
            isActive("/camera") ? "text-primary-foreground" : "text-gray-400"
          }`}
        >
          <Camera size={24} />
          <span className="text-xs mt-1">Camera</span>
        </Link>
        <Link
          to="/favorites"
          className={`flex flex-col items-center ${
            isActive("/favorites") ? "text-primary-foreground" : "text-gray-400"
          }`}
        >
          <Heart size={24} />
          <span className="text-xs mt-1">Favorites</span>
        </Link>
        <Link
          to="/profile"
          className={`flex flex-col items-center ${
            isActive("/profile") ? "text-primary-foreground" : "text-gray-400"
          }`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
};