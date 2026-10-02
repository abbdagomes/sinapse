import type { Metadata } from "next";
import Link from "next/link";
import Menu from "../components/Menu";

export const metadata: Metadata = {
  title: "Página não encontrada | Sinapse",
};

// Página mostrada quando alguém abre um endereço que não existe no site
export default function NaoEncontrada() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] px-8 flex flex-col items-center justify-center gap-8 text-center">
      <Menu iconePersonalizado="/images/menu1.png" />

      <img src="/images/vectors/star1.svg" alt="" width={90} height={78} />

      <h1 className="text-3xl font-bold text-[#0004FF] tracking-tighter uppercase italic">
        Página não encontrada
      </h1>

      <p className="text-black text-lg font-medium max-w-md">
        Parece que você se perdeu pela cidade. Esse endereço não existe no Sinapse.
      </p>

      <Link
        href="/"
        className="bg-[#0004FF] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
      >
        Voltar para a home
      </Link>
    </main>
  );
}
