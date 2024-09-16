"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/vinjournalen-logo.png";
import twitter from "@/public/twitter.png";
import fb from "@/public/fb.png";
import insta from "@/public/insta.png";
import Searchbar from "./Searchbar";
import vinlogo from "@/public/vinlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const CustomMenuItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVinguideOpen, setIsVinguideOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleVinguide = () => {
    setIsVinguideOpen(!isVinguideOpen);
  };

  return (
    <nav className="bg-[#F5F5F5]">
      <div className="container mx-auto px-8 py-2 lg:py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Logo and Hamburger Icon */}
        <div className="w-full lg:w-auto flex justify-between items-center">
          <a href="#" className="flex items-center">
            {/* Mobile Logo */}
            <Image
              src={vinlogo}
              alt="VinLogo"
              className="object-cover lg:hidden"
              width={60}
              height={30}
            />

            {/* Desktop Logo */}
            <Image
              src={logo}
              alt="Logo"
              className="object-cover hidden lg:block"
              width={180}
              height={90}
            />
          </a>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="text-2xl w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className={`fixed inset-0 bg-[#F5F5F5] z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden flex flex-col`}
        >
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="p-2 focus:outline-none">
              <FontAwesomeIcon icon={faTimes} className="text-2xl w-6 h-6" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <div className="flex flex-col items-center mt-8 space-y-8">
              <div className="mb-4">
                <Image
                  src={logo}
                  alt="Logo"
                  className="object-cover"
                  width={320}
                  height={200}
                />
              </div>

              <div className="mb-4 w-4/5 flex justify-center items-center">
                <Searchbar />
              </div>
              <div className="mb-16"></div>
              <div className="w-full flex flex-col items-center space-y-4">
                <Link href="/VinMat" onClick={closeMenu} className="text-lg">
                  Vin & Mat
                </Link>
                <Link href="/Vinfakta" onClick={closeMenu} className="text-lg">
                  Vinfakta
                </Link>
                <Link href="/Vintips" onClick={closeMenu} className="text-lg">
                  Vintips
                </Link>
                <Link href="/Vinskola" onClick={closeMenu} className="text-lg">
                  Vinskola
                </Link>
                <Link href="/Tester" onClick={closeMenu} className="text-lg">
                  Tester
                </Link>
                <Link
                  href="/Ekologiskt"
                  onClick={closeMenu}
                  className="text-lg"
                >
                  Ekologiskt
                </Link>
                <Link
                  href="/Vinpanatet"
                  onClick={closeMenu}
                  className="text-lg"
                >
                  Vin på nätet
                </Link>
                <div className="w-full flex flex-col items-center">
                  <button
                    onClick={toggleVinguide}
                    className="flex items-center justify-center w-full text-lg"
                  >
                    Vinguide
                    <FontAwesomeIcon
                      icon={isVinguideOpen ? faChevronUp : faChevronDown}
                      className="ml-2"
                    />
                  </button>
                  {isVinguideOpen && (
                    <div className="mt-2 space-y-2 w-full flex flex-col items-center">
                      <Link href="/Vinguide/RottVin" onClick={closeMenu} className="block text-lg">
                        Rött Vin
                      </Link>
                      <Link href="/Vinguide/VittVin" onClick={closeMenu} className="block text-lg">
                        Vitt Vin
                      </Link>
                      <Link href="/Vinguide/RoseVin" onClick={closeMenu} className="block text-lg">
                        Rosé Vin
                      </Link>
                      <Link href="/Vinguide/DessertVin" onClick={closeMenu} className="block text-lg">
                        Dessert Vin
                      </Link>
                      <Link href="/Vinguide/Mousserande" onClick={closeMenu} className="block text-lg">
                        Mousserande Vin
                      </Link>
                      <Link href="/Vinguide/ovrigtvin" onClick={closeMenu} className="block text-lg">
                        Övrigt Vin
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-center w-full">
              <hr className="w-[75%] border-t-1 border-[#CCC]" />
            </div>
            <div className="flex justify-center items-center mt-6 gap-6">
              <Image
                src={twitter}
                alt="Twitter"
                className="object-cover"
                width={20}
                height={20}
              />
              <Image
                src={fb}
                alt="Facebook"
                className="object-cover"
                width={20}
                height={20}
              />
              <Image
                src={insta}
                alt="Instagram"
                className="object-cover"
                width={20}
                height={20}
              />
            </div>
            <div className="flex justify-center w-full mt-6">
              <hr className="w-[75%] border-t-1 border-[#CCC]" />
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden font-outfit lg:text-sm xl:text-lg lg:flex lg:justify-center lg:items-center lg:space-x-4 xl:space-x-5">
          <Link href="/VinMat" className="hover:text-gray-600">
            Vin & Mat
          </Link>
          <Link href="/Vinfakta" className="hover:text-gray-600">
            Vinfakta
          </Link>
          <Link href="/Vintips" className="hover:text-gray-600">
            Vintips
          </Link>
          <Link href="/Vinskola" className="hover:text-gray-600">
            Vinskola
          </Link>
          <Link href="/Tester" className="hover:text-gray-600">
            Tester
          </Link>
          <Link href="/Ekologiskt" className="hover:text-gray-600">
            Ekologiskt
          </Link>
          <Link href="/Vinpanatet" className="hover:text-gray-600">
            Vin på nätet
          </Link>
          <div 
            className="relative inline-block text-left"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button className="inline-flex w-full justify-center items-center hover:text-gray-600">
              Vinguide
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </button>
            {isHovering && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <CustomMenuItem href="/Vinguide/RottVin">Rött Vin</CustomMenuItem>
                  <CustomMenuItem href="/Vinguide/VittVin">Vitt Vin</CustomMenuItem>
                  <CustomMenuItem href="/Vinguide/RoseVin">Rosé Vin</CustomMenuItem>
                  <CustomMenuItem href="/Vinguide/DessertVin">Dessert Vin</CustomMenuItem>
                  <CustomMenuItem href="/Vinguide/Mousserande">Mousserande Vin</CustomMenuItem>
                  <CustomMenuItem href="/Vinguide/ovrigtvin">Övrigt Vin</CustomMenuItem>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Searchbar for Desktop */}
        <div className="hidden lg:block">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}