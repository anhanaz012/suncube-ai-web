"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/imgs/logo/logo01.png";
import MainMenu from "./main-menu";
import SideToggle from "@/components/common/side-toggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header-area">
        <div className="header-main">
          <div className="container large">
            <div className="header-area__inner">
              {/* Logo */}
              <div
                className="header__logo"
                style={{
                  border: "none !important",
                }}
              >
                <Link href="/index">
                  <Image
                    src={logo}
                    className="normal-logo"
                    style={{
                      minHeight: "140px",
                      minWidth: "140px",
                      maxHeight: "140px",
                      maxWidth: "140px",
                      border: "none !important",
                    }}
                    alt="Site Logo"
                  />
                </Link>
              </div>

              {/* Navigation */}
              <div className="header__nav">
                <MainMenu />
              </div>

              {/* Button */}
              <div className="header__button">
                <a href="/portal-login" className="rr-btn hover-bg-theme">
                  <span className="btn-wrap">
                    <span className="text-one">Portal Login</span>
                    <span className="text-two">Portal Login</span>
                  </span>
                </a>
              </div>
              {/* Mobile Menu Toggle */}
              <div className="header__navicon d-xl-none">
                <button
                  className="side-toggle"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* side toggle bar */}
      <SideToggle
        isOpen={isMobileMenuOpen}
        onSideToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      {/* side toggle bar */}
    </>
  );
};

export default Header;
