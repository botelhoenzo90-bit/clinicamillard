import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Carrossel deslizante automático em looping infinito (CSS marquee).
 * Duplica os itens para o loop ficar contínuo e pausa ao passar o mouse.
 */
export function Marquee({
  children,
  speed = 48,
  className,
  itemClassName,
  fade = false,
  pauseOnHover = false,
}: {
  children: React.ReactNode[];
  /** segundos para percorrer o conjunto completo */
  speed?: number;
  className?: string;
  itemClassName?: string;
  fade?: boolean;
  pauseOnHover?: boolean;
}) {
  const items = React.Children.toArray(children);
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        pauseOnHover && "group",
        fade &&
          "[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]",
        className,
      )}
    >
      <div
        className="marquee-track flex w-max"
        style={{ animationDuration: `${speed}s` }}
      >

        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <div key={i} className={cn("shrink-0 px-2.5 py-1", itemClassName)}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
