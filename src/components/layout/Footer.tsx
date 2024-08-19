"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Twitter, Linkedin, Facebook, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Signed up with email:", email);
    setEmail("");
  };

  const footerSections = [
    {
      title: "Products",
      links: [
        { href: "/dooh", text: "Digital Out-of-Home" },
        { href: "/programmatic", text: "Programmatic Advertising" },
        { href: "/analytics", text: "Analytics Platform" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/blog", text: "Blog" },
        { href: "/case-studies", text: "Case Studies" },
        { href: "/webinars", text: "Webinars" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", text: "About Us" },
        { href: "/careers", text: "Careers" },
        { href: "/contact", text: "Contact" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://twitter.com/adwall", icon: Twitter, label: "Twitter" },
    {
      href: "https://linkedin.com/company/adwall",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://facebook.com/adwall", icon: Facebook, label: "Facebook" },
  ];

  return (
    <footer className="relative bg-black text-dun py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-auburn to-black opacity-50"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-dun mb-4 inline-block"
            >
              WALLADS
            </Link>
            <p className="mb-4 text-rawUmber">
              Revolutionizing digital advertising with cutting-edge technology
              and data-driven insights.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black bg-opacity-50 text-dun px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brownSugar flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-auburn text-dun px-4 py-2 rounded-r-md hover:bg-redwood transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4 text-brownSugar">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-dun hover:text-brownSugar transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-auburn border-opacity-50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-rawUmber">
            &copy; {new Date().getFullYear()} WALLADS. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dun hover:text-brownSugar transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
