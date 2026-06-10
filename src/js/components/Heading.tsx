import React from "react";
import { PropsWithChildren } from "react";

type Props = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({ level, children }: PropsWithChildren<Props>) => {
  if ((level === "h1")) return <h1 className="text-5xl font-bold">{children}</h1>;
  if ((level === "h2")) return <h1 className="text-4xl font-bold">{children}</h1>;
  if ((level === "h3")) return <h1 className="text-3xl font-bold">{children}</h1>;
  if ((level === "h4")) return <h1 className="text-2xl font-bold">{children}</h1>;
  if ((level === "h5")) return <h1 className="text-1xl font-bold">{children}</h1>;
};
