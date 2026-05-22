import Image from "next/image";
import Link from "next/link";
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
          <Link href="/about">About</Link>
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
          Saya adalah siswi SMK Telkom Malang yang saat ini mengambil jurusan RPL (Rekayasa Perangkat Lunak), 
          terutama di bidangfrontend development. 
          Saya suka membuat tampilan website yang modern dan responsive.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-10 px-4 text-center bg-slate-800"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Contact Us
        </h2>

        <p>Email: sintiasarileni71@gmail.com</p>
        <p>Instagram: @itssleni</p>
        <p>GitHub: @lenisintiasari</p>
        <p>tiktok: @Leni_15</p>
        <p>Telepon: 087762232248</p>
      </section>

    </main>
  );
}