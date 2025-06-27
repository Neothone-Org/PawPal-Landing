export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDD8C3] text-[#2F2F2F]">
      <header className="flex justify-between items-center px-8 py-6 bg-white">
        <div className="text-xl font-bold text-[#2F5D50]">🐾 PawPal</div>
        <nav className="space-x-6 text-sm text-[#2F5D50] font-medium">
          <a href="#">about</a>
          <a href="#">faq</a>
          <a href="#">contact</a>
        </nav>
      </header>

      <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Connect, <br /> Breed and <br /> Thrive Together
          </h1>
          <p className="text-base text-gray-700">
            PawPal helps pet owners meet, breed responsibly, and find trusted
            services — all while building a loving pet community.
          </p>
          <div className="space-x-4">
            <button className="bg-[#2F5D50] text-white px-6 py-2 rounded-full text-sm">
              SIGN UP
            </button>
            <button className="border border-gray-400 text-gray-800 px-6 py-2 rounded-full text-sm bg-white">
              LOG IN
            </button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="w-[300px] h-[300px] bg-gray-200 rounded-3xl flex items-center justify-center">
            <img
              src="/pet.png"
              alt="Pets"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
