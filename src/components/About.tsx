
import { Heart, Target, Shield, Smile } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#3D3D3D] mb-4">
        Sobre a Dra. Laudenice
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#B88A44] to-[#E8C2A0] mx-auto"></div>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="prose prose-lg">
          <p className="text-xl text-gray-700 leading-relaxed">
            Com ampla formação acadêmica e mais de uma década de experiência,
            <span className="font-semibold text-[#B88A44]"> Dra. Laudenice Lucena </span>
            oferece atendimento humanizado e técnico nas áreas de odontologia estética, cirurgia e prevenção.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Graduada pela <strong>UFPB</strong>, é Doutora em Patologia Oral pela <strong>UFRN </strong> 
            e Mestre em Diagnóstico Oral pela <strong>UFPB</strong>. Especialista em <strong>odontologia estética</strong>,
            habilitada em <strong>Laserterapia e terapias fotodinâmicas</strong>, alia excelência técnica, empatia e constante atualização.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#FFFDF9] to-[#F5F0E8] p-6 rounded-xl border border-[#E8C2A0]">
            <Heart className="w-8 h-8 text-[#B88A44] mb-4" />
            <h4 className="font-semibold text-[#3D3D3D] mb-2">Humanização</h4>
            <p className="text-sm text-gray-600">
              Atendimento acolhedor e empático em todos os procedimentos.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFFDF9] to-[#F5F0E8] p-6 rounded-xl border border-[#E8C2A0]">
            <Target className="w-8 h-8 text-[#B88A44] mb-4" />
            <h4 className="font-semibold text-[#3D3D3D] mb-2">Missão</h4>
            <p className="text-sm text-gray-600">
              Transformar sorrisos e elevar a autoestima de cada paciente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFFDF9] to-[#F5F0E8] p-6 rounded-xl border border-[#E8C2A0]">
            <Shield className="w-8 h-8 text-[#B88A44] mb-4" />
            <h4 className="font-semibold text-[#3D3D3D] mb-2">Formação</h4>
            <p className="text-sm text-gray-600">
              UFPB, UFRN, especialização em estética e habilitação em Laser.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFFDF9] to-[#F5F0E8] p-6 rounded-xl border border-[#E8C2A0]">
            <Smile className="w-8 h-8 text-[#B88A44] mb-4" />
            <h4 className="font-semibold text-[#3D3D3D] mb-2">Valores</h4>
            <p className="text-sm text-gray-600">
              Ética, excelência e cuidado personalizado.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:justify-self-end">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8C2A0] to-[#B88A44] rounded-3xl transform -rotate-3"></div>
          <img 
            src="/im1.jpg" 
            alt="Dra. Laudenice Lucena" 
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
