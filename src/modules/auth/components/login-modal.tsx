import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import { GoogleLoginButton } from "./google-login-button";

interface LoginModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const LoginModal = (props: LoginModalProps) => {
  const { open, onOpenChange, disabled, children } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger disabled={disabled} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-sm pt-10">
        <DialogHeader>
          <DialogTitle className="text-center">Se connecter</DialogTitle>
          <DialogDescription className="text-center">
            Vous devez vous connecter pour pouvoir publier.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <GoogleLoginButton />
        </div>
      </DialogContent>
    </Dialog>
  );
};
