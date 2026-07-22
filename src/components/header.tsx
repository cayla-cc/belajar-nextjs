import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./theme-switcher";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
          width={30} 
          height={30} 
          alt="Logo NextJS"
          unoptimized 
        />
      </Link>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/post">Post</Link>
        <Link href="/about">About</Link>
      </nav>
      <ThemeSwitcher />
    </header>
  );
}