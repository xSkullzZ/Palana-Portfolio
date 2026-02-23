import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils"; // Importiamo la tua funzione magica

export default function ImageHover({ 
  children, 
  className, 
  image, 
  alt = "image" 
}) {
  return (
    <div className={cn("group relative overflow-hidden rounded-lg", className)}>
      {/* Immagine che si rivela */}
      <motion.img
        src={image}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        initial={{ filter: "blur(10px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Overlay con il testo (il "children") */}
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
        <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0 text-white">
          {children}
        </div>
      </div>
    </div>
  );
}