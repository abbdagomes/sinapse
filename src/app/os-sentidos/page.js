"use client";

import { useState } from "react";
import Menu from "../../components/Menu";
import { SENTIDOS as sections } from "../../data/sentidos";

export default function SensoryPage() {
  // Removi o <Record<string, boolean>> que causava o erro no .js
  const [activeImages, setActiveImages] = useState({});

  const assetsPath = "/images/";

  const toggleImage = (sense) => { // Removi o :string
    setActiveImages((prev) => ({
      ...prev,
      [sense]: !prev[sense],
    }));

    // Adicionei as crases corretas para o caminho do som
    const audio = new Audio(`${assetsPath}${sense}.mp3`);
    audio.play().catch((err) => {
      console.warn(`Erro ao tocar o som para ${sense}:`, err);
    });
  };

  const getImageSrc = (sense) => {
    const isSecondImage = activeImages[sense];

    if (isSecondImage) {
      if (sense === "ear") return `${assetsPath}ear2_.png`;
      return `${assetsPath}${sense}2.png`;
    }
    
    return `${assetsPath}${sense}1.png`;
  };

  return (
    
    
    <main className="bg-[#f7f7f7] min-h-screen flex flex-col items-center py-16 gap-16">

      {/* MENU ADICIONADO AQUI */}
      <Menu iconePersonalizado="/images/menu1.png" />

      {sections.map((section, index) => (
        <div
          key={index}
          className={`w-full max-w-6xl flex items-center justify-between ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } gap-10 px-10`}
        >
          {/* Texto com a mesma fonte e estilo */}
          <div className="w-1/2 text-black text-lg leading-relaxed font-medium">
            {section.text}
          </div>

          {/* Imagem interativa: a caixa tem altura fixa (h-72) para o texto
              não se mexer quando a imagem troca por outra de proporção diferente */}
          <div className="w-1/2 min-w-0 h-72 flex items-center justify-center">
            <img
              src={getImageSrc(section.sense)}
              alt={`Sentido ${section.sense}`}
              className="cursor-pointer max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
              onClick={() => toggleImage(section.sense)}
            />
          </div>
        </div>
      ))}
    </main>
  );
}