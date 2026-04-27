import decorativePattern from "@/assets/decorative-pattern.png";

interface DecorativePatternProps {
  className?: string;
}

/**
 * Padrão decorativo de símbolos manuscritos (curvas, círculos, ângulos)
 * usado como assinatura visual sutil no canto superior-esquerdo de seções.
 */
const DecorativePattern = ({
  className = "absolute top-12 md:top-16 left-0 w-[280px] md:w-[420px] opacity-30 pointer-events-none select-none z-0",
}: DecorativePatternProps) => {
  return (
    <img
      src={decorativePattern}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
};

export default DecorativePattern;
