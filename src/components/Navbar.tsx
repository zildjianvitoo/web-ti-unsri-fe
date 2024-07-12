import { Link, NavLink, useLocation } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { ChevronDown } from "lucide-react";

const navItems = [
  {
    name: "Beranda",
    path: "/",
  },
  {
    name: "Profile",
    path: "/profile",
    children: [
      {
        name: "Informasi Jurusan",
        path: "/informasi-jurusan",
      },
      {
        name: "asasa",
        path: "/asasas",
      },
    ],
  },
  {
    name: "Akademik",
    path: "/akademik",
  },
  {
    name: "Panduan & SOP",
    path: "/panduan-dan-sop",
    children: [
      {
        name: "asasa",
        path: "/asasas",
      },
      {
        name: "asasa",
        path: "/asasas",
      },
    ],
  },
  {
    name: "Pengumuman",
    path: "/pengumuman",
  },
  {
    name: "Berita",
    path: "/berita",
  },
];

export default function Navbar() {
  const [isFixedPosition, setIsPositionFixed] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setIsPositionFixed(true);
      } else {
        setIsPositionFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-20 w-full bg-background p-4 text-black transition lg:px-12 xl:px-20",
        {
          "glassmorphism fixed top-0 mt-0 w-full": isFixedPosition,
        },
      )}
    >
      <div className="mx-auto flex items-center justify-between md:text-lg">
        <Link
          to={"/"}
          className="flex w-fit items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/images/logo-teknikinformatika.png"
            alt="Logo Teknik Informatika"
            className="h-[50px] w-[200px] object-contain"
          />
        </Link>
        <NavbarMobile navItems={navItems} />

        <div
          className={cn(
            "hidden gap-6 py-5 text-sm font-medium uppercase transition lg:flex",
          )}
        >
          {navItems.map((item) =>
            item.children ? (
              <Menubar key={item.path} className="bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger
                    className={cn(
                      "border-none bg-transparent p-0 font-semibold uppercase data-[state=open]:bg-transparent max-sm:text-base xl:text-lg",
                      {
                        "text-primary":
                          pathname === item.path && !isFixedPosition,
                        "hover:text-primary data-[state=open]:text-primary":
                          !isFixedPosition,
                      },
                    )}
                  >
                    {item.name} <ChevronDown size={20} />
                  </MenubarTrigger>
                  <MenubarContent>
                    <div className="h-1 bg-primary p-0" />
                    {item.children.map((subitem) => (
                      <MenubarItem key={subitem.path}>
                        <NavLink
                          to={subitem.path}
                          className={cn("w-full", {
                            "text-primary":
                              pathname === item.path && !isFixedPosition,
                            "hover:text-primary": !isFixedPosition,
                          })}
                        >
                          {subitem.name}
                        </NavLink>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn("font-semibold max-sm:text-base xl:text-lg", {
                  "text-primary": pathname === item.path && !isFixedPosition,
                  "font-bold": pathname === item.path && isFixedPosition,
                  "hover:text-primary": !isFixedPosition,
                })}
              >
                {item.name}
              </NavLink>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
