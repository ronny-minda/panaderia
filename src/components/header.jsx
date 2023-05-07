import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MenuMobile from "@/svg/menuMobile";
import Link from "next/link";
import Equiz from "@/svg/equiz";
import Image from "next/image";

const Header = () => {
  const [estadoMobile, setEstadoMobile] = useState(false);

  const botonHamburger = (e) => {
    e.stopPropagation();
    setEstadoMobile(!estadoMobile);
  };

  return (
    <>
      <header className="shadow-md w-screen h-28 flex justify-between lg:justify-center items-center p-5">
        <div className="lg:flex lg:items-center lg:justify-center w-auto lg:w-3/4">
          {/* <li className="hidden lg:block list-none h-auto w-auto">
            <Link className="letas p-2" href="/">
              HOME
            </Link>
          </li>
          <li className="hidden lg:block list-none h-auto w-auto">
            <Link className="letas p-2" href="/PAGES">
              PAGES
            </Link>
          </li> */}
          <li className="hidden lg:block list-none h-auto w-auto">
            <Link
              className="letas p-2 mr-10"
              href="/galeria"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                fontFamily: "'Cormorant', serif",
              }}
            >
              GALERIA
            </Link>
          </li>
          <Link href="/">
            <Image
              width={1000}
              height={1000}
              className="h-20 w-56 object-contain"
              src="/img/logo.png"
              alt="logo"
            />
          </Link>
          <li className="hidden lg:block list-none h-auto w-auto">
            <Link
              className="letas p-2 ml-10"
              href="/nosotros"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                fontFamily: "'Cormorant', serif",
              }}
            >
              NOSOTROS
            </Link>
          </li>
          {/* <li className="hidden lg:block list-none h-auto w-auto">
            <Link className="letas p-2" href="/SHOP">
              SHOP
            </Link>
          </li>
          <li className="hidden lg:block list-none h-auto w-auto">
            <Link className="letas p-2" href="/ELEMENTS">
              ELEMENTS
            </Link>
          </li> */}
        </div>
        <div
          className="w-16 h-16 rounded-full flex justify-center items-center cursor-pointer lg:hidden"
          style={{
            backgroundColor: "#f6f2e5",
          }}
          onClick={(e) => botonHamburger(e)}
        >
          <MenuMobile />
        </div>
      </header>

      <AnimatePresence>
        {estadoMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden h-screen w-screen bg-slate-600 fixed z-40 top-0 left-0"
            style={{ backgroundColor: "#54545454" }}
            onClick={(e) => botonHamburger(e)}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {estadoMobile && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="lg:hidden w-2/5 bg-white h-full fixed z-50 top-0 right-0 flex justify-center items-center"
          >
            <div
              onClick={(e) => botonHamburger(e)}
              className="w-16 h-16 rounded-full cursor-pointer lg:hidden absolute top-5 right-5 flex justify-center items-center"
              style={{
                backgroundColor: "#f6f2e5",
              }}
            >
              <Equiz
                className=""
                style={{
                  height: "20px",
                  with: "20px",
                }}
              />
            </div>
            <motion.section
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "tween", delay: 0.1 }}
              className="w-3/4"
            >
              <li className="list-none w-full my-5">
                <Link
                  className="text-2xl letas w-full p-1 block"
                  href="/galeria"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    fontFamily: "'Cormorant', serif",
                  }}
                >
                  GALERIA
                </Link>
              </li>
              <li className="list-none w-full my-5">
                <Link
                  className="text-2xl letas w-full p-1 block"
                  href="/nosotros"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    fontFamily: "'Cormorant', serif",
                  }}
                >
                  NOSOTROS
                </Link>
              </li>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
