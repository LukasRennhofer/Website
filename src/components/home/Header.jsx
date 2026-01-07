export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl bg-black/40 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="text-lg sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              lukas rennhofer.
            </div>
          </div>
          <img
            src="/logo.png"
            alt="Lukas Rennhofer logo"
            className="w-10 h-10 sm:w-11 sm:h-11 border border-white/20 rounded-full object-contain bg-white/5 hover:bg-white/10 transition-colors duration-300"
          />
        </div>
      </div>
    </header>
  );
}
