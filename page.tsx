import Image from "next/image";
import profile from "./profile.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-slate-950">
        <h1 className="text-2xl font-bold text-cyan-400">
          MyProfile
        </h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <Image
          src={profile}
          alt="Profile"
          width={180}
          height={180}
          className="rounded-full border-4 border-cyan-400 mb-6"
        />

        <h1 className="text-5xl font-bold mb-4">
          Leni Sintiasari
        </h1>

        <p className="text-xl text-gray-300 mb-6">
          Frontend Developer
        </p>

        <p className="max-w-xl text-gray-400">
          Saya suka membuat website modern menggunakan Next.js.
        </p>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-slate-800 py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-bold text-cyan-400 mb-10 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">

            <p>
              Halo! Saya Leni Sintiasari ✨
            </p>

            <p>
              Saya adalah seorang pelajar yang memiliki ketertarikan besar
              pada dunia teknologi, khususnya frontend development dan
              UI/UX design. Saya suka mempelajari bagaimana sebuah website
              dibuat dengan tampilan yang modern, aesthetic, dan nyaman
              digunakan.
            </p>

            <p>
              Bagi saya, coding bukan hanya sekadar menulis baris program,
              tetapi juga tentang kreativitas, detail, dan bagaimana
              menciptakan pengalaman yang menarik bagi pengguna 💻🌷
            </p>

            <p>
              Saat ini saya sedang belajar dan mengembangkan kemampuan
              dalam membuat website menggunakan HTML, CSS, JavaScript,
              React, Next.js, dan Tailwind CSS. Saya senang mencoba
              hal-hal baru, mengeksplor desain modern, dan terus
              meningkatkan skill agar bisa menjadi developer yang lebih
              baik setiap harinya.
            </p>

            <p>
              Selain belajar coding, saya juga menyukai dunia desain,
              mendengarkan musik, dan mencari inspirasi dari berbagai
              tampilan website modern. Saya percaya bahwa teknologi dan
              kreativitas bisa berjalan berdampingan untuk menciptakan
              sesuatu yang menarik dan bermanfaat ✨
            </p>

            <p>
              Ke depannya, saya ingin terus berkembang di bidang web
              development dan menciptakan project-project yang tidak
              hanya berfungsi dengan baik, tetapi juga memiliki tampilan
              yang aesthetic, responsive, dan user friendly 🌙
            </p>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Contact Us
        </h2>

        <p>Email: sintiasarileni71@gmail.com</p>
        <p>Instagram: @itssleni</p>
        <p>TikTok: @itssleni</p>
        <p>Telepon: 087762232248</p>
      </section>

    </main>
  );
}