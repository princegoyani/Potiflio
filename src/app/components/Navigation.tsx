import React from "react";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../theme";
import { motion } from "motion/react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center px-6 py-3 rounded-full shadow-lg backdrop-blur-md border border-opacity-20 transition-all duration-300 hover:shadow-xl"
      style={{
        backgroundColor: `${COLORS.background}E6`, // 90% opacity
        borderColor: COLORS.primary,
        maxWidth: "90vw",
      }}
    >
      <div className="flex items-center gap-2 md:gap-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative px-3 md:px-5 py-2 text-sm font-medium transition-colors rounded-full hover:bg-black/5"
              style={{
                color: isActive ? COLORS.primary : COLORS.text,
              }}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ backgroundColor: `${COLORS.accent}15` }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;