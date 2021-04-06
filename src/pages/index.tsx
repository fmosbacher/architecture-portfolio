import React from 'react';
import * as Icon from 'react-feather';

const Home: React.FC = () => (
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
                  <a className="transition-all duration-300 cursor-pointer hover:text-black">
                    Tecnologias
                  </a>
                </li>
                <li>
                  <a className="transition-all duration-300 cursor-pointer hover:text-black">
                    Competências
                  </a>
                </li>
                <li>
                  <a className="transition-all duration-300 cursor-pointer hover:text-black">
                    Projetos
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Pofile title */}
          <h1 className="my-6 text-6xl font-black text-center lg:mt-28 2xl:mt-48 lg:text-left">
            Ariane Inocêncio
          </h1>

          {/* Profile description */}
          <p className="text-lg text-center text-gray-500 lg:text-left">
            Apaixonada por criar, decorar, construir e principalmente projetar.
            Possuo as habilidades e dedicação necessárias para mergulhar no
            mundo da arquitetura. Otimista, dedicada e motivada, sei que tenho
            muito a aprender ainda, mas vislumbro um futuro empolgante e
            brilhante na área.
          </p>

          {/* Arrow button */}
          <button className="hidden p-2 mt-20 border border-black rounded-full 2xl:mt-40 lg:block w-max">
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

    {/* Known tecnologies section */}
    <div className="flex flex-col items-center py-24 space-y-24 bg-gray-100 lg:flex-row lg:space-y-0 lg:space-x-24 lg:justify-center">
      <img src="/sketchup.png" />
      <img src="/vray.png" />
      <img src="/enscape.png" />
      <img src="/autocad.png" />
    </div>

    <div className="px-5 py-12 space-y-10 lg:px-32 xl:container xl:mx-auto">
      {/* Skills title */}
      <h2 className="mb-12 text-3xl font-thin">Competências</h2>

      <div className="space-y-10 lg:space-y-0 lg:flex lg:space-x-10">
        {/* Skill */}
        <div className="space-y-1 lg:w-1/3">
          <img
            className="object-cover w-full h-48 rounded-md"
            src="/interior.jpg"
          />
          <h3 className="text-2xl font-bold">Interiores</h3>
          <p className="text-lg text-gray-500">
            Aqui vem uma descrição rápida sobre a competência apresentada na
            imagem.
          </p>
        </div>

        {/* Skill */}
        <div className="space-y-1 lg:w-1/3">
          <img
            className="object-cover w-full h-48 rounded-md"
            src="/landscaping.jpg"
          />
          <h3 className="text-2xl font-bold">Paisagismo</h3>
          <p className="text-lg text-gray-500">
            Aqui vem uma descrição rápida sobre a competência apresentada na
            imagem.
          </p>
        </div>

        {/* Skill */}
        <div className="space-y-1 lg:w-1/3">
          <img
            className="object-cover w-full h-48 rounded-md"
            src="/executive.jpg"
          />
          <h3 className="text-2xl font-bold">Executivo</h3>
          <p className="text-lg text-gray-500">
            Aqui vem uma descrição rápida sobre a competência apresentada na
            imagem.
          </p>
        </div>
      </div>
    </div>

    <div className="px-5 pb-12 space-y-10 lg:px-32 xl:container xl:mx-auto">
      {/* Projects title */}
      <h2 className="mb-12 text-3xl font-thin">Projetos</h2>

      <div className="space-y-10 lg:space-y-0 lg:flex lg:space-x-10">
        {/* Project */}
        <div className="space-y-2 lg:w-1/3">
          <div className="space-y-1">
            <img
              className="object-cover w-full h-64 rounded-md"
              src="/interior.jpg"
            />
            <h3 className="text-2xl font-bold">
              Cantinho do café com nome um pouco longo
            </h3>
          </div>
          <button className="flex items-center space-x-1 text-sm font-bold group text-primary-600">
            <span>Ver projeto</span>
            <Icon.ArrowRight
              className="transition duration-500 group-hover:transform group-hover:translate-x-1.5"
              size={14}
            />
          </button>
        </div>

        {/* Project */}
        <div className="space-y-2 lg:w-1/3">
          <div className="space-y-1">
            <img
              className="object-cover w-full h-64 rounded-md"
              src="/interior.jpg"
            />
            <h3 className="text-2xl font-bold">
              Cantinho do café com nome um pouco longo
            </h3>
          </div>
          <button className="flex items-center space-x-1 text-sm font-bold group text-primary-600">
            <span>Ver projeto</span>
            <Icon.ArrowRight
              className="transition duration-500 group-hover:transform group-hover:translate-x-1.5"
              size={14}
            />
          </button>
        </div>

        {/* Project */}
        <div className="space-y-2 lg:w-1/3">
          <div className="space-y-1">
            <img
              className="object-cover w-full h-64 rounded-md"
              src="/interior.jpg"
            />
            <h3 className="text-2xl font-bold">
              Cantinho do café com nome um pouco longo
            </h3>
          </div>
          <button className="flex items-center space-x-1 text-sm font-bold group text-primary-600">
            <span>Ver projeto</span>
            <Icon.ArrowRight
              className="transition duration-500 group-hover:transform group-hover:translate-x-1.5"
              size={14}
            />
          </button>
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
            <p className="italic">arianeinocencio@gmail.com</p>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-2">
            <Icon.Phone size={20} />
            <p className="italic">(99) 9999-9999</p>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-2">
            <Icon.Instagram size={20} />
            <p className="italic">@arianeinocencio</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
