
import { Star, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="pt-16 min-h-screen bg-gradient-to-br from-[#FFFDF9] via-white to-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#3D3D3D] leading-tight">
                Transformando 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B88A44] to-[#E8C2A0]">
                  sorrisos.
                </span>
                <span className="block">Elevando autoestima.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Cuidado, tecnologia e confiança em cada atendimento.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E8C2A0] to-[#D4A974] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <div>
                  <div className="font-semibold text-[#3D3D3D]">Anos de experiência</div>
                  <div className="text-sm text-gray-600">Expertise comprovada</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E8C2A0] to-[#D4A974] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <div>
                  <div className="font-semibold text-[#3D3D3D]">Atendimento humanizado</div>
                  <div className="text-sm text-gray-600">Cuidado personalizado</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E8C2A0] to-[#D4A974] rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#3D3D3D]" />
                </div>
                <div>
                  <div className="font-semibold text-[#3D3D3D]">Resultados excepcionais</div>
                  <div className="text-sm text-gray-600">Sorrisos transformados</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="https://wa.me/83982210377" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#E8C2A0] text-[#3D3D3D] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#D4A974] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Agende sua consulta
              </a>
              <p className="text-sm text-gray-500">
                WhatsApp: (83) 9 9800-3674 • Resposta rápida garantida
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8C2A0] to-[#B88A44] rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <img 
                  src="/Imagens/Dra/Perfil-01.jpeg" 
                  alt="Dra. Laudenice" 
                  className="w-full h-96 object-cover object-top rounded-2xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-[#3D3D3D]">Dra. Laudenice Lucena</h3>
                  <p className="text-[#B88A44] font-medium">Cirurgiã-Dentista</p>
                  <p className="text-sm text-gray-600 mt-2">João Pessoa, PB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
