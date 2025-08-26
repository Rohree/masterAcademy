import logo from "../assets/image01.jpg"

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center md:flex-row md:justify-between px-8 py-2 fixed top-8 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-2xl bg-white backdrop-blur-md shadow-2xl rounded-2xl border border-white/40 z-20 transition-all duration-300">
      <img src={logo} alt="Logo" className="h-20 object-contain rounded-full" />
      <button
        className="mt-4 md:mt-0 px-6 py-2 bg-white text-indigo-800 font-semibold rounded-lg border border-indigo-300 shadow hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Contact Me
      </button>
    </nav>
  )
}
