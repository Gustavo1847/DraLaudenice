
import { Scissors, Heart, Search, Sparkles, Shield, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Cirurgia",
      description: "Procedimentos cirúrgicos seguros e minimamente invasivos com tecnologia avançada.",
      gradient: "from-red-400 to-red-600"
    },
    {
      icon: Heart,
      title: "Clínica Geral e Odontologia Restauradora",
      description: "Tratamentos completos para restaurar a saúde e função dos seus dentes.",
      gradient: "from-rose-400 to-rose-600"
    },
    {
      icon: Search,
      title: "Estomatologia/Diagnóstico Oral",
      description: "Diagnóstico preciso de patologias orais com equipamentos de última geração.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "Estética",
      description: "Transformação do seu sorriso com técnicas modernas de harmonização facial.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Shield,
      title: "Odontologia Preventiva",
      description: "Prevenção é o melhor remédio. Cuidados para manter sua saúde bucal em dia.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Wrench,
      title: "Prótese Dentária",
      description: "Reabilitação oral completa com próteses modernas e confortáveis.",
      gradient: "from-amber-400 to-amber-600"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com foco na excelência e no bem-estar do paciente
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform rotate-3`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5583998003674" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Saiba mais sobre nossos tratamentos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
