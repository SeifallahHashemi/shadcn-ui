"use client";
import React from 'react';
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu, Moon, ShoppingCart, Sun} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import AvatarButton from "@/components/avatar-button";
import Container from "@/components/container";
import {useTheme} from "next-themes";

const routes = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/products",
        label: "Products",
    },
    {
        href: "/",
        label: "Football",
    },
];
const Header = () => {
    const {theme, setTheme} = useTheme()
    return (
        <header className={"sm:flex sm:justify-between py-3 px-4 border-b"}><Container
            className={"flex justify-between items-center"}>
            <div className={"flex justify-between items-center"}>
                <Sheet>
                    <SheetTrigger>
                        <Menu className="h-6 md:hidden w-6"/>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                            {routes.map((route, i) => (
                                <Link
                                    key={i}
                                    href={route.href}
                                    className="block px-2 py-1 text-lg"
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                    {routes.map((route, i) => (
                        <Button asChild variant="ghost">
                            <Link
                                key={i}
                                href={route.href}
                                className="text-sm font-medium transition-colors"
                            >
                                {route.label}
                            </Link>
                        </Button>
                    ))}
                </nav>
            </div>
            <section className={"flex justify-center items-center"}><Button variant={"ghost"} size={"icon"}
                                                                            className={"mr-2"}
                                                                            aria-label={"Shopping Cart"}>
                <ShoppingCart className={"h-6 w-6"}/>
                <span className={"sr-only"}>Shopping Cart</span>
            </Button>
                <Button variant={"ghost"} size={"icon"} aria-label={"Toggle Theme"} className={"mr-6"}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Sun className={"h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"}/>
                    <Moon className={"absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}/>
                    <span className={"sr-only"}>Toggle Theme</span>
                </Button>
                <AvatarButton/></section>
        </Container></header>
    );
};

export default Header;