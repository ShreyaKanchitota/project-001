type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    href?: string;
  };
  
  export default function Buttons({
    children,
    variant = "primary",
    href,
  }: ButtonProps) {
    const styles = {
      primary:
        "inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105",
      secondary:
        "inline-flex rounded-full border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10",
    };
  
    if (href) {
      return (
        <a href={href} className={styles[variant]}>
          {children}
        </a>
      );
    }
  
    return <button className={styles[variant]}>{children}</button>;
  }