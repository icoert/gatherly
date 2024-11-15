import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar mb-8">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Gatherly" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <Link href="/create-project">Share Work</Link>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
