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
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { Philosopher } from "next/font/google";
import Logo from "../icons/logo";
import { useState } from "react";

const philosopher = Philosopher({ weight: "700", subsets: ["latin"] });

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar className="md:px-4 py-2" maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Logo />
        <Link className="flex flex-col items-center mx-2" href="/">
          <p
            className={`${philosopher.className} font-bold text-xl md:text-4xl text-primary`}
          >
            AYESUSTAIN
          </p>
          <p
            className={`${philosopher.className} hidden md:block font-extralight text-xs md:text-sm text-primary tracking-wider`}
          >
            SUSTAINIFYING YOUR VISION
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-8" justify="center">
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
        <NavbarMenuToggle className="md:hidden"/>
        <NavbarMenu>
          <NavbarMenuItem className="flex flex-col p-3 text-center">
            <Link href='/' className="my-2 text-lg font-bold mx-auto">Home</Link>
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
            className="w-[240px]"
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
            className="w-[240px]"
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
            <Button as={Link} color="primary" href="/login" variant="flat" className="mt-2">
            Login
          </Button>
            <Button as={Link} color="primary" href="/signup" variant="solid" className="mt-2">
            Sign Up
          </Button>
          </NavbarMenuItem>
        </NavbarMenu>
        <NavbarItem className="hidden md:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button as={Link} color="primary" href="/signup" variant="solid">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
