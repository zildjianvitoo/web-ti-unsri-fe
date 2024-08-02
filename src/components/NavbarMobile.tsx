import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Sun, SunMoon } from "lucide-react";
import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";
import { useTheme } from "@/hooks/useTheme";

type Props = {
  navItems: {
    name: string;
    path: string;
    children?: {
      name: string;
      path: string;
    }[];
  }[];
};

export default function NavbarMobile({ navItems }: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <Sheet>
      <div className="flex flex-row items-center gap-1">
        <button className="rounded-full bg-[#DD26FA] bg-opacity-10 p-1">
          {theme === "light" ? (
            <SunMoon
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <Sun
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
        </button>
        <SheetTrigger asChild>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="flex duration-300 hover:bg-black/20 hover:text-white lg:hidden"
          >
            <Menu />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side={"left"} className="font-inter">
        <div className="mt-10 text-sm uppercase">
          <Accordion type="single" className="flex flex-col gap-6" collapsible>
            {navItems.map((item, index) => (
              <div key={item.path}>
                {item.children ? (
                  <AccordionItem
                    value={item.name}
                    className="m-0 border-none p-0"
                  >
                    <AccordionTrigger className="text-text-500 m-0 flex w-full justify-between p-0 text-start font-normal uppercase">
                      {item.name}
                    </AccordionTrigger>
                    <AccordionContent className="ml-2 mt-5 flex flex-col gap-3">
                      {item.children.map((subitem, subitemIndex) => (
                        <div key={subitemIndex}>
                          <SheetClose asChild className="w-full text-left">
                            <NavLink
                              to={subitem.path}
                              className={"w-full text-sm"}
                            >
                              {subitem.name}
                            </NavLink>
                          </SheetClose>
                          <Separator
                            className={cn(`mt-2`, {
                              hidden:
                                subitemIndex === item.children!.length - 1,
                            })}
                          />
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <SheetClose asChild>
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="w-full hover:text-primary"
                    >
                      {item.name}
                    </NavLink>
                  </SheetClose>
                )}
                <Separator
                  className={cn(`mt-2`, {
                    hidden: index === navItems.length - 1,
                  })}
                />
              </div>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
