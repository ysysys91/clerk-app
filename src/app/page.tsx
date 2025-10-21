'use client'
export default function HomePage() {
  return (
    <main className="font-sans text-gray-800  from-black to-white min-h-screen">
      <header className="sticky top-0 z-50 bg-transparent py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-white">최윤성</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#about" className="hover:text-teal-400 text-white">
                  소개
                </a>

                <a href="#projects" className="hover:text-teal-400 text-white">
                  프로젝트
                </a>

                <a href="#contact" className="hover:text-teal-400 text-white">
                  연락처
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="about"
        className="py-20 flex flex-col items-center px-4 gap-8 text-center"
      >
        <h2 className="text-4xl font-bold text-black mb-4">최윤성</h2>
        <h2 className="text-4xl font-bold text-black mb-4">학번:92217324</h2>
        <p className="text-lg leading-relaxed text-white/90 max-w-2xl">
          포트폴리오
        </p>
      </section>

      <section id="projects" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">링크</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-700 text-white rounded-xl p-6 hover:scale-105 transform transition">
              <a
                href="https://github.com/ysysys91/"
                target="_blank"
                className="block bg-teal-700 text-white rounded-xl p-6 hover:scale-105 transform transition"
              ></a>
              <p>github주소</p>
            </div>
            <div className="bg-teal-700 text-white rounded-xl p-6 hover:scale-105 transform transition">
              <a
                href="https://clerk-app-u9ol.vercel.app/"
                target="_blank"
                className="block bg-teal-700 text-white rounded-xl p-6 hover:scale-105 transform transition"
              ></a>
              <h3 className="text-xl font-semibold mb-2">예제 서비스</h3>
            </div>
            <div className="bg-teal-700 text-white rounded-xl p-6 hover:scale-105 transform transition">
              <a
                href="https://vercel.com/ys0414s-projects"
                target="_blank"
                className="block bg-teal-700 text-white rounded-xl p-6 hover:scale-105 transform transition"
              ></a>
              <h3 className="text-xl font-semibold mb-2">velcel</h3>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-gray-50 text-gray-800 text-center"
      >
        <div className="container mx-auto px-4">
          <p className="mb-2">Email: ys0414choiys14@gmail.com</p>
          <p>
            GitHub
            <a
              href="https://github.com/ysysys91"
              target="_blank"
              className="text-teal-700 hover:underline"
            >
              ysysys91
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
