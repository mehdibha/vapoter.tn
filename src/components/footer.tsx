import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config";
import { ThemeToggle } from "./theme-toggle";

const links = siteConfig.global.externalLinks;

export const Footer = () => {
  return (
    <div className="container mt-36 pb-8">
      <Separator className="mb-4" />
      <div className="flex items-center justify-between">
        <p className="text-sm">Copyright © 2023 vapi.tn</p>
        <div className="flex h-5 items-center space-x-1">
          {links.map((Link, index) => (
            <React.Fragment key={index}>
              <a href={Link.url} target="_blank">
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Link.icon size={18} />
                </Button>
              </a>
              <Separator orientation="vertical" />
            </React.Fragment>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
