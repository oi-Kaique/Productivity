import Link from "next/link";
import { Roboto } from "@next/font/google";
import { useState, useRef, useEffect } from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${roboto.className} group relative p-2`} ref={menuRef}>
      <div
        className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/house.svg" alt="menu" className="h-6 w-6 text-amber-800" />
      </div>

      <div
        className={`absolute left-0 top-0 h-full w-64 bg-amber-100 p-4 rounded-lg shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="mb-8">
          <h2 className="text-xl font-bold text-amber-900">Menu</h2>
        </div>

        <nav className="space-y-2">
          <div className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg">
            <img
              src="/homer.svg"
              alt="home"
              className="h-6 w-6 text-amber-800"
            />
            <Link
              href="/HomePage"
              className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg"
            >
              <span>Home</span>
            </Link>
          </div>

          <div className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg">
            <img
              src="/profile.svg"
              alt="profile"
              className="h-6 w-6 text-amber-800"
            />
            <Link
              href="/Profile"
              className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg"
            >
              <span>Profile</span>
            </Link>
          </div>

          <div className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg">
            <img
              src="/timer.svg"
              alt="Timer"
              className="h-6 w-6 text-amber-800"
            />
            <Link
              href="/Timer"
              className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg"
            >
              <span>Timer</span>
            </Link>
          </div>

          <div className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg">
            <img
              src="/water.svg"
              alt="logout"
              className="h-6 w-6 text-amber-800"
            />
            <Link
              href="/water"
              className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg"
            >
              <span>water</span>
            </Link>
          </div>

          <div className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg">
            <img
              src="/Analyst.svg"
              alt="Analyst"
              className="h-6 w-6 text-amber-800"
            />
            <Link
              href="/Analyst"
              className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg"
            >
              <span>Analyst</span>
            </Link>
          </div>

          <div className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg">
            <img
              src="/settings.svg"
              alt="logout"
              className="h-6 w-6 text-amber-800"
            />
            <Link
              href="/Settings"
              className="flex items-center p-2 text-amber-800 hover:bg-amber-200 rounded-lg"
            >
              <span>Settings</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
