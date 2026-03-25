"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary-500 font-medium mb-4 block uppercase tracking-widest">Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Conversar?</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Estou sempre aberto a novas oportunidades, colaborações em projetos ou apenas para um café virtual. 
              Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">E-mail</h4>
                  <p className="text-gray-500 dark:text-gray-400">vsoareslins452@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-500">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <p className="text-gray-500 dark:text-gray-400">(11) 99569-4285</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Localização</h4>
                  <p className="text-gray-500 dark:text-gray-400">Franco da Rocha, SP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/30 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-6">Formulário de Contato</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Prefere preencher um formulário detalhado? Clique no botão abaixo para abrir o formulário oficial de contato.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEGRgj_aeODNnx8J6Uq4aP4c9Onw2rrNVMP_1t4ShSoZm40g/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto"
            >
              <Send size={18} />
              Abrir Formulário do Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
