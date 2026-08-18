import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight
} from "lucide-react";
import {
  motion,
  AnimatePresence
} from "framer-motion";

import logo from "../assets/logo.png";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio & Contact"]
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  useEffect(() => {

    document.body.style.overflow =
      open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };

  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (

    <header className="site-nav">

      <div className="nav-inner container">

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >

          <motion.img
            src={logo}
            alt="EventSphere logo"
            whileHover={{
              rotate: 4,
              scale: 1.04
            }}
            transition={{
              duration: .3
            }}
          />

          <span>
            EventSphere
          </span>

        </Link>


        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >

          {links.map(
            ([to, label]) => (

              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {label}
              </NavLink>

            )
          )}

          <Link
            className="nav-cta"
            to="/portfolio#contact"
          >
            Plan an Event
            <ArrowUpRight size={15} />
          </Link>

        </nav>


        <button
          className="menu-button"
          aria-label={
            open
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={open}
          onClick={() =>
            setOpen(value => !value)
          }
        >

          <AnimatePresence
            mode="wait"
            initial={false}
          >

            {open ? (

              <motion.span
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90
                }}
                animate={{
                  opacity: 1,
                  rotate: 0
                }}
                exit={{
                  opacity: 0,
                  rotate: 90
                }}
              >
                <X size={25} />
              </motion.span>

            ) : (

              <motion.span
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90
                }}
                animate={{
                  opacity: 1,
                  rotate: 0
                }}
                exit={{
                  opacity: 0,
                  rotate: -90
                }}
              >
                <Menu size={25} />
              </motion.span>

            )}

          </AnimatePresence>

        </button>

      </div>


      <AnimatePresence>

        {open && (

          <motion.div
            className="mobile-menu"
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: "auto",
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{
              duration: .35,
              ease: [0.22, 1, 0.36, 1]
            }}
          >

            {links.map(
              ([to, label], index) => (

                <motion.div
                  key={to}
                  initial={{
                    opacity: 0,
                    x: -15
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: index * .05
                  }}
                >

                  <NavLink
                    to={to}
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>

                </motion.div>

              )
            )}

            <Link
              to="/portfolio#contact"
              onClick={closeMenu}
              className="mobile-cta"
            >
              Plan an Event
              <ArrowUpRight size={16} />
            </Link>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}