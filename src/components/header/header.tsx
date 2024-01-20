"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import { UserAvatar } from "@/modules/auth/components/user-avatar";
import { useSession } from "@/modules/auth/hooks";
import { HeaderMenu } from "./menu";
import { Nav } from "./nav";

export const Header = () => {
  const { status } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b bg-card shadow-sm dark:bg-background dark:text-foreground">
      <div className="container flex h-12 items-center justify-between py-2">
        <Link
          href="/"
          className="flex w-[200px] items-center space-x-2 duration-150 hover:opacity-80"
        >
          <Image
            src={siteConfig.global.logo}
            alt={siteConfig.global.name}
            width={200}
            height={200}
            className="h-7 object-contain"
          />
        </Link>
        <Nav items={siteConfig.header.nav.links} />
        <div className="flex w-[200px] justify-end">
          {status === "unauthenticated" && (
            <Button asChild size="sm">
              <Link href="/login">Se connecter</Link>
            </Button>
          )}
          <HeaderMenu>
            <Button variant="ghost" size="icon">
              {status === "authenticated" ? (
                <UserAvatar />
              ) : status === "unauthenticated" ? (
                <MenuIcon />
              ) : null}
            </Button>
          </HeaderMenu>
        </div>
      </div>
    </header>
  );
};
