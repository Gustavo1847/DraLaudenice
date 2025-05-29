
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Localização e Contato
          </h2>
          <p className="text-xl text-gray-600">
            Estamos prontos para cuidar do seu sorriso
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Entre em Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Epitácio Pessoa, 753 – 11º andar – Sala 1114<br />
                      João Pessoa, PB
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-gray-600">(83) 9 9800-3674</p>
                    <p className="text-sm text-green-600">Resposta rápida garantida</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <a 
                  href="https://wa.me/5583998003674" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Quero agendar agora</span>
                </a>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Clique e fale diretamente conosco pelo WhatsApp
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Por que escolher a Dra. Laudenice?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Atendimento Personalizado</h4>
                  <p className="text-gray-600 text-sm">Cada paciente é único e merece um tratamento exclusivo</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tecnologia Avançada</h4>
                  <p className="text-gray-600 text-sm">Equipamentos modernos para diagnósticos precisos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ambiente Acolhedor</h4>
                  <p className="text-gray-600 text-sm">Consultório projetado para seu conforto e tranquilidade</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Resultados Comprovados</h4>
                  <p className="text-gray-600 text-sm">Centenas de sorrisos transformados com excelência</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Facilidade de Pagamento</h4>
                  <p className="text-gray-600 text-sm">Planos flexíveis para tornar seu tratamento acessível</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">🎯 Sua primeira consulta</h4>
              <p className="text-gray-600 text-sm mb-4">
                Agende uma avaliação completa e descubra como podemos transformar seu sorriso
              </p>
              <p className="text-rose-600 font-semibold text-sm">
                ✓ Consulta detalhada ✓ Plano personalizado ✓ Sem compromisso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
