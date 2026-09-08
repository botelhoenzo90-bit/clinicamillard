import * as React from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/site-content";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.02 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.71a12.75 12.75 0 0 0 6.27 1.64h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.68Zm0 23.32h-.01c-1.9 0-3.77-.51-5.4-1.48l-.39-.23-4.03 1.05 1.08-3.93-.25-.4a10.57 10.57 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.61-10.63 10.61Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.73-.98-2.36-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function WhatsAppButton({
  children = "Agendar pelo WhatsApp",
  className,
  size = "default",
}: {
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp font-semibold uppercase tracking-[0.12em] text-whatsapp-foreground shadow-whatsapp transition-all duration-300 hover:-translate-y-0.5 hover:bg-whatsapp-dark sm:gap-2.5 sm:tracking-[0.18em]",
        size === "xl"
          ? "px-6 py-4 text-xs sm:px-10 sm:py-5 sm:text-sm"
          : size === "lg"
            ? "px-5 py-3.5 text-[0.72rem] sm:px-9 sm:py-4 sm:text-[0.78rem]"
            : "px-5 py-3 text-[0.68rem] sm:px-7 sm:py-3.5 sm:text-[0.72rem]",
        className,
      )}
    >
      <WhatsAppIcon className={cn(
        "shrink-0",
        size === "xl" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-4 w-4 sm:h-5 sm:w-5"
      )} />
      <span>{children}</span>
    </a>
  );
}
