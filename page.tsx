import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-8 py-20">

      <Link
        href="/"
        className="text-cyan-400"
      >
        ← Kembali
      </Link>

      <h1 className="text-5xl font-bold mt-10 mb-10 text-cyan-400">
        About Me
      </h1>

      <div className="max-w-4xl text-gray-300 leading-relaxed space-y-6 text-lg">

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

    </main>
  );
}