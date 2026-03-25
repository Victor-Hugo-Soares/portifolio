import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Victor-Hugo-Soares?tab=repositories",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/victorhlins",
      icon: <Linkedin size={20} />,
    },
    {
      name: "E-mail",
      href: "mailto:vsoareslins452@gmail.com",
      icon: <Mail size={20} />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5511995694285",
      icon: <Phone size={20} />,
    },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="container mx-auto px-6 text-center">
        <Link href="/" className="text-2xl font-bold gradient-text mb-6 inline-block">
          VH
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Desenvolvedor Fullstack focado em automações, APIs e IA. Criando soluções inteligentes para problemas reais.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Victor Hugo Soares Lins. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
