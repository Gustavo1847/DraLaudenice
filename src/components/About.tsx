
import { Heart, Target, Shield, Smile } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a Dra. Laudenice
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed">
                Com anos de experiência, Dra. Laudenice oferece atendimento humanizado e técnico nas áreas de 
                <span className="font-semibold text-rose-600"> odontologia estética, cirurgia e prevenção</span>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sua abordagem combina técnica avançada com cuidado personalizado, garantindo que cada paciente 
                se sinta confortável e confiante durante todo o tratamento. A missão é proporcionar sorrisos 
                saudáveis e autoestima elevada através da excelência odontológica.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl">
                <Heart className="w-8 h-8 text-rose-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Humanização</h4>
                <p className="text-sm text-gray-600">
                  Atendimento acolhedor e empático em todos os procedimentos
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
                <Target className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Missão</h4>
                <p className="text-sm text-gray-600">
                  Transformar sorrisos e elevar a autoestima de cada paciente
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Valores</h4>
                <p className="text-sm text-gray-600">
                  Ética, transparência e compromisso com a excelência
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <Smile className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Formação</h4>
                <p className="text-sm text-gray-600">
                  Especialização em estética e atualização constante
                </p>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl transform -rotate-3"></div>
              <img 
                src="/placeholder.svg" 
                alt="Consultório Dra. Laudenice" 
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
