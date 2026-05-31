type SkyshWordmarkProps = {
  className?: string;
  showSubtitle?: boolean;
  variant?: "hero" | "nav" | "footer";
};

const SUBTITLE = "HACKATHON".split("");

export default function SkyshWordmark({
  className = "",
  showSubtitle = true,
  variant = "hero",
}: SkyshWordmarkProps) {
  return (
    <span
      role="img"
      aria-label={showSubtitle ? "SKYSH Hackathon" : "SKYSH"}
      className={`skysh-wordmark skysh-wordmark--${variant} ${className}`.trim()}
    >
      <span className="skysh-wordmark__main" aria-hidden="true">
        SKYSH
      </span>
      {showSubtitle && (
        <span className="skysh-wordmark__subtitle" aria-hidden="true">
          {SUBTITLE.map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </span>
      )}
    </span>
  );
}
