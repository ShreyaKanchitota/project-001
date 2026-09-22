export default function Footer() {
    return (
      <footer
        id="footer"
        className="relative z-10 border-t border-zinc-800 bg-black px-6 py-10 text-zinc-400"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">GYMHQ</h3>
            <p className="mt-2 text-sm">
              Premium strength training · Bangalore
            </p>
          </div>
  
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              WhatsApp
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
  
        <div className="mx-auto mt-8 max-w-6xl border-t border-zinc-900 pt-6 text-center text-xs text-zinc-500">
          © 2026 GYMHQ. Designed by Rey Studios.
        </div>
      </footer>
    );
  }