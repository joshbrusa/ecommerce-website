import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function () {
  const { systemTheme, theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleTheme() {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return <MoonIcon onClick={() => setTheme("light")} />;
    } else {
      return <SunIcon onClick={() => setTheme("dark")} />;
    }
  }

  const links = [
    { url: "/", title: "Home" },
    { url: "/", title: "Category 1" },
    { url: "/", title: "Category 2" },
    { url: "/", title: "Category 3" },
    { url: "/", title: "Category 4" },
  ];

  const linksBig = links.map((item, index) => (
    <Link key={index} href={item.url}>
      <button className="mx-1 rounded-button">{item.title}</button>
    </Link>
  ));

  const linksSmall = links.map((item, index) => (
    <Link key={index} href={item.url}>
      <button className="my-1 rounded-button">{item.title}</button>
    </Link>
  ));

  return (
    <>
      <div className="p-2 flex justify-between items-center surface">
        <div className="mx-2 font-semibold text-xl">Ecommerce Website</div>
        <div className="flex">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden h-12 w-12 rounded-button"
          >
            <Bars3Icon />
          </button>
          <div className="hidden lg:flex">{linksBig}</div>
          <button className="hidden lg:flex h-12 w-12 rounded-button">
            {handleTheme()}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden flex flex-col items-end p-2 surface ${
          menuOpen ? "" : "hidden"
        }`}
      >
        {linksSmall}
        <button className="h-12 w-12 rounded-button">{handleTheme()}</button>
      </div>
    </>
  );
}
