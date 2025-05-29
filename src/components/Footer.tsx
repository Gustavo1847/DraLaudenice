
import { Heart, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dra. Laudenice</h3>
            <p className="text-gray-300 leading-relaxed">
              Transformando sorrisos e elevando autoestima através da odontologia de excelência em João Pessoa, PB.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center hover:from-rose-500 hover:to-pink-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Cirurgia</li>
              <li>Clínica Geral</li>
              <li>Estomatologia</li>
              <li>Estética Dental</li>
              <li>Odontologia Preventiva</li>
              <li>Prótese Dentária</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>Av. Epitácio Pessoa, 753</p>
              <p>11º andar – Sala 1114</p>
              <p>João Pessoa, PB</p>
              <p className="text-green-400 font-medium">(83) 9 9800-3674</p>
            </div>
            <a 
              href="https://wa.me/5583998003674" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Dra. Laudenice. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-rose-400" />
              <span>para transformar sorrisos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
