import React, { useRef } from 'react';
import * as Icon from 'react-feather';

const Home: React.FC = () => {
  const technologiesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scroolToTechnologies = () => {
    technologiesRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scroolToSkills = () => {
    skillsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scroolToProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <div className="lg:flex lg:h-screen">
        <div className="w-full lg:flex lg:flex-row-reverse lg:w-1/2">
          <div className="px-5 lg:p-0 lg:w-3/4 xl:w-3/5 lg:mr-16">
            <div className="items-center mt-10 space-x-10 lg:flex">
              {/* Profile picture */}
              <img
                className="object-cover mx-auto mt-5 rounded-full lg:m-0 w-36 h-36 lg:w-16 lg:h-16"
                src="/profile.jpg"
              />

              {/* Navbar */}
              <nav className="hidden lg:block">
                <ul className="flex space-x-6 text-gray-500">
                  <li>
                    <a
                      onClick={scroolToTechnologies}
                      className="transition-all duration-300 cursor-pointer hover:text-black">
                      Tecnologias
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={scroolToSkills}
                      className="transition-all duration-300 cursor-pointer hover:text-black">
                      Competências
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={scroolToProjects}
                      className="transition-all duration-300 cursor-pointer hover:text-black">
                      Projetos
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Pofile title */}
            <h1 className="my-6 text-6xl font-black text-center lg:mt-28 lg:text-left">
              Ariane Inocêncio
            </h1>

            {/* Profile description */}
            <p className="text-lg text-center text-gray-500 lg:text-left">
              Apaixonada por criar, decorar, construir e principalmente
              projetar. Possuo as habilidades e dedicação necessárias para
              mergulhar no mundo da arquitetura. Otimista, dedicada e motivada,
              sei que tenho muito a aprender ainda, mas vislumbro um futuro
              empolgante e brilhante na área.
            </p>

            {/* Arrow button */}
            <button
              onClick={scroolToTechnologies}
              className="hidden p-2 mt-20 border border-black rounded-full lg:block w-max">
              <Icon.ArrowDown size={16} />
            </button>
          </div>
        </div>

        {/* Banner image */}
        <img
          className="block object-cover w-full h-64 mt-12 lg:w-1/2 lg:m-0 lg:h-screen"
          src="/banner.jpg"
        />
      </div>

      {/* Known technologies section */}
      <div
        ref={technologiesRef}
        className="flex flex-col items-center py-24 space-y-24 bg-gray-100 lg:flex-row lg:space-y-0 lg:space-x-24 lg:justify-center">
        <img src="/technologies/sketchup.png" />
        <img src="/technologies/layout.png" />
        <img src="/technologies/vray.png" />
        <img src="/technologies/enscape.png" />
        <img src="/technologies/autocad.png" />
      </div>

      <div
        ref={skillsRef}
        className="px-5 py-12 space-y-10 lg:px-32 xl:container xl:mx-auto">
        {/* Skills title */}
        <h2 className="mb-12 text-3xl font-thin">Competências</h2>

        <div className="space-y-10 lg:space-y-0 lg:flex lg:space-x-10">
          {/* Skill */}
          <div className="space-y-1 lg:w-1/3">
            <img
              className="object-cover w-full h-48 rounded-md"
              src="/skills/interior.jpg"
            />
            <h3 className="text-2xl font-bold">Interiores</h3>
            <p className="text-lg text-gray-500">
              Planejamento do espaço físico, trazendo praticidade,
              funcionalidade e estética para melhor aconchego do seu ambiente.
            </p>
          </div>

          {/* Skill */}
          <div className="space-y-1 lg:w-1/3">
            <img
              className="object-cover w-full h-48 rounded-md"
              src="/skills/landscaping.jpg"
            />
            <h3 className="text-2xl font-bold">Paisagismo</h3>
            <p className="text-lg text-gray-500">
              Recuperação de áreas deterioradas com a combinação de plantas de
              diferentes cores e formatos. Trabalho que visa buscar um ambiente
              harmonioso e mais prazeroso para o convívio das pessoas.
            </p>
          </div>

          {/* Skill */}
          <div className="space-y-1 lg:w-1/3">
            <img
              className="object-cover w-full h-48 rounded-md"
              src="/skills/executive.jpg"
            />
            <h3 className="text-2xl font-bold">Executivo</h3>
            <p className="text-lg text-gray-500">
              Otimização de processos de construção por meio de definições
              técnicas e detalhes construtivos. Visa a perfeita instalação,
              montagem e execução dos serviços.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={projectsRef}
        className="px-5 pb-12 space-y-10 lg:px-32 xl:container xl:mx-auto">
        {/* Projects title */}
        <h2 className="mb-12 text-3xl font-thin">Projetos</h2>

        {/* Project */}
        <div>
          <h3 className="mb-1 text-2xl font-bold">Cozinha</h3>
          <p className="mb-4 text-lg text-gray-500">
            Com um toque de modernidade e naturalidade, essa cozinha foi
            planejada com um buffet e um belo painel ripado. As cores e texturas
            ficaram no Freijó e Ipê Amarelo, sendo elas as cores preferidas para
            quem adora naturalidade sem ousar com cores marcantes.
          </p>
          <div className="space-y-2 lg:flex lg:space-y-0 lg:space-x-4">
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/kitchen/1.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/kitchen/2.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/kitchen/3.png"
            />
          </div>
        </div>

        {/* Project */}
        <div>
          <h3 className="mb-1 text-2xl font-bold">Escritório isométrico</h3>
          <p className="mb-4 text-lg text-gray-500">
            Este layout é de um escritório que também comporta visitas, sendo
            nas medidas 3x3m de modo a aproveitar o espaço e trazer aconchego
            para ambos os usos.
          </p>
          <div className="space-y-2 lg:flex lg:space-y-0 lg:space-x-4">
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/office/1.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/office/2.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/office/3.png"
            />
          </div>
        </div>

        {/* Project */}
        <div>
          <h3 className="mb-1 text-2xl font-bold">Quarto de hóspedes</h3>
          <p className="mb-4 text-lg text-gray-500">
            No quarto de hóspedes, tornar o ambiente aconchegante e funcional é
            a melhor forma para receber a família e amigos em ocasiões
            especiais. Além disso, pensar numa bela decoração para o quarto é
            uma forma de proporcionar conforto e estilo ao mesmo tempo,
            principalmente quando a decoração é feita para garantir o melhor
            aproveitamento do espaço.
          </p>
          <div className="space-y-2 lg:flex lg:space-y-0 lg:space-x-2">
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/guest-room/1.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/guest-room/2.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/guest-room/3.png"
            />
          </div>
          <div className="mt-2 space-y-2 lg:flex lg:space-y-0 lg:space-x-2">
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/guest-room/4.png"
            />
          </div>
        </div>

        {/* Project */}
        <div>
          <h3 className="mb-1 text-2xl font-bold">
            Sala integrada com cozinha
          </h3>
          <p className="mb-4 text-lg text-gray-500">
            Uma das principais vantagens da cozinha integrada com sala de estar
            ou tv é poder estar sempre em interação com a família e os amigos,
            não isolando quem está na cozinha. Além disso, esse modelo de
            conceito aberto está super em alta e deixa o ambiente mais arejado.
            No design, não é necessário que a cozinha integrada com sala tenha a
            mesma decoração.
          </p>
          <div className="space-y-2 lg:flex lg:space-y-0 lg:space-x-2">
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/living-room-integrated-with-kitchen/1.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/living-room-integrated-with-kitchen/2.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/living-room-integrated-with-kitchen/3.png"
            />
          </div>
          <div className="mt-2 space-y-2 lg:flex lg:space-y-0 lg:space-x-2">
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/living-room-integrated-with-kitchen/4.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/living-room-integrated-with-kitchen/5.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/living-room-integrated-with-kitchen/6.png"
            />
          </div>
          <div className="mt-2 space-y-2 lg:flex lg:space-y-0 lg:space-x-2">
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/living-room-integrated-with-kitchen/7.png"
            />
            <img
              className="object-cover rounded-md lg:w-1/3"
              src="/projects/living-room-integrated-with-kitchen/8.png"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-12 bg-gray-100">
        <div className="space-y-8 xl:container xl:mx-auto lg:px-32">
          {/* Contact title */}
          <h2 className="text-xl">Contatos</h2>

          <div className="space-y-4">
            {/* Contact */}
            <div className="flex items-center space-x-2">
              <Icon.Mail size={20} />
              <p className="italic">ari.arquiteturaedesign@gmail.com</p>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-2">
              <Icon.Phone size={20} />
              <p className="italic">(35) 9 9220-4164</p>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-2">
              <Icon.Instagram size={20} />
              <p className="italic">@ai.artearqedesign</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
