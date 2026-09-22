import Buttons from "./Buttons";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/30 px-8 py-5 backdrop-blur-xl">
      <h1 className="text-xl font-bold tracking-wide">GYMHQ</h1>

      <div className="hidden gap-8 text-sm md:flex">
        <a href="#features" className="hover:text-zinc-300 transition">
          Programs
        </a>

        <a href="#testimonials" className="hover:text-zinc-300 transition">
          Coaches
        </a>

        <a href="#pricing" className="hover:text-zinc-300 transition">
          Pricing
        </a>

        <a href="#footer" className="hover:text-zinc-300 transition">
          Contact
        </a>
      </div>

      <Buttons>Join Now</Buttons>
    </nav>
  );
}