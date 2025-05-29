
import { Star, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="pt-16 min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformando 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
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
                <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Anos de experiência</div>
                  <div className="text-sm text-gray-600">Expertise comprovada</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-100 to-rose-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Atendimento humanizado</div>
                  <div className="text-sm text-gray-600">Cuidado personalizado</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Resultados excepcionais</div>
                  <div className="text-sm text-gray-600">Sorrisos transformados</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="https://wa.me/5583998003674" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-amber-200 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Dra. Laudenice" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Dra. Laudenice</h3>
                  <p className="text-rose-600 font-medium">Cirurgiã-Dentista</p>
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
