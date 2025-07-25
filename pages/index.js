import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-fuchsia-700 to-rose-400 text-white font-sans">
      <Head>
        <title>MAYBEART | Where Art Meets Blockchain</title>
      </Head>

      <header className="text-center py-16 space-y-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">MAYBEART</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-fuchsia-100">
          A visionary platform uniting artists and collectors through decentralized ownership. Backed by $MAYBEART and powered by Solana.
        </p>
        <button className="mt-4 bg-white text-indigo-800 font-bold px-6 py-2 rounded-full shadow-lg hover:bg-fuchsia-200 transition">
          Buy $MAYBEART Token
        </button>
      </header>

      <section className="px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Works by Ryan West</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 rounded-2xl p-4 shadow-lg backdrop-blur-lg">
            <Image src="/ /IMG_4910.jpg" ... />
<Image src="/images/IMG_4911.jpg" ... />
<Image src="/images/IMG_4912.jpg" ... />
 className="rounded-xl w-full object-cover" />
            <p className="mt-2 text-center font-semibold">"Muscle Bunny Fury"</p>
          </div>
        </div>
      </section>

      <section className="bg-indigo-950 py-16 px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold">Join the Token-Powered Art Movement</h2>
        <p className="text-lg max-w-2xl mx-auto text-fuchsia-100">
          Sign up to be part of the inaugural NFT drop. Own digital originals, support living artists, and unlock real-world utility via $MAYBEART.
        </p>
        <input type="email" placeholder="you@example.com" className="px-4 py-2 rounded-full w-full max-w-md mx-auto text-black" />
        <button className="bg-fuchsia-400 hover:bg-fuchsia-300 transition text-black font-semibold px-6 py-2 rounded-full shadow-lg">
          Request Invite
        </button>
      </section>

      <footer className="py-10 text-center text-sm text-white/70">
        © {new Date().getFullYear()} MAYBEART. Built for creators. Powered by community.
      </footer>
    </main>
  );
}import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <Image 
        src="/maybeart-home.jpg" 
        alt="MaybeArt Homepage" 
        width={1920} 
        height={1080} 
        className="w-full h-auto object-contain"
        priority 
      />
    </main>
  )
}
export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <img
        src="/maybeart-home.jpg"
        alt="MAYBEART Homepage"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
