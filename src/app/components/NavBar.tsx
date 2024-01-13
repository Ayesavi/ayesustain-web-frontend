"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { Philosopher } from "next/font/google";
import Logo from "../icons/logo";

const philosopher = Philosopher({ weight: "700", subsets: ["latin"] });

export default function NavBar() {
  return (
    <Navbar className="bg-blur px-4 py-2" maxWidth="full" shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
        <Link className="flex flex-col items-center mx-2" href="/">
          <p
            className={`${philosopher.className} font-bold text-4xl text-primary`}
          >
            AYESUSTAIN
          </p>
          <p
            className={`${philosopher.className} font-extralight text-sm text-primary tracking-wider`}
          >
            SUSTAINIFYING YOUR VISION
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page" className="text-lg">
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-lg"
                endContent={<ChevronDown className="h-4 w-4" />}
                radius="sm"
                variant="light"
              >
                Products
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="key will go here 1"
              description="Description will go here"
              className="active:border-1 border-primary"
            >
              Dropdown Item 1
            </DropdownItem>
            <DropdownItem
              key="key will go here 2"
              description="Description will go here"
              className="active:border-1 border-primary"
            >
              Dropdown Item 2
            </DropdownItem>
            <DropdownItem
              key="key will go here 3"
              description="Description will go here"
              className="active:border-1 border-primary"
            >
              Dropdown Item 3
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-lg "
                endContent={<ChevronDown className="h-4 w-4" />}
                radius="sm"
                variant="light"
              >
                Company
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="key will go here 1"
              description="Description will go here"
              className="active:border-1 border-primary"
            >
              Dropdown Item 1
            </DropdownItem>
            <DropdownItem
              key="key will go here 2"
              description="Description will go here"
              className="active:border-1 border-primary"
            >
              Dropdown Item 2
            </DropdownItem>
            <DropdownItem
              key="key will go here 3"
              description="Description will go here"
              className="active:border-1 border-primary"
            >
              Dropdown Item 3
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg">
            Resources
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            href="#"
            variant="flat"
            onPress={() => {
              console.log("H");
            }}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
