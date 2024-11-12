import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterColumnProps = {
  title: string;
  links: string[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="footer_column max-w-xs">
    <h4 className="font-semibold text-lg mb-4">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal text-gray-400">
      {links.map((link: string) => (
        <li key={link}>
          <Link href="/" className="hover:text-gray-200 transition-colors">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-gray-900 py-10 mt-8">
      <div className="mx-auto px-4">
        <div className="md:flex-row justify-between items-start gap-8">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-start max-w-xs mb-8 md:mb-4">
            <Image
              src="/logo-blue.svg"
              width={115}
              height={38}
              alt="Gatherly"
            />
            <p className="text-start text-sm font-normal mt-5 max-w-xs text-gray-400">
              Gatherly is a growing community for creatives to share, grow, and
              get hired.
            </p>
          </div>

          {/* Footer Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
            {footerLinks.map((footerLink) => (
              <FooterColumn
                title={footerLink.title}
                links={footerLink.links}
                key={footerLink.title}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-gray-500 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Gatherly. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/privacy-policy" className="hover:text-gray-100">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-100">
              Terms of Service
            </Link>
            {/* Add social media icons here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
