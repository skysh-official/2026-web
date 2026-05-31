import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Section({ id, children, className = "", narrow }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className={narrow ? "page-container-narrow" : "page-container"}>
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={`section-title ${className}`.trim()}>{children}</h2>;
}
