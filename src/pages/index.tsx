import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavbarComponent from '../components/Navbar'
import About from '../components/About'
import Info from '../components/Info'

import me from '../../public/img/me.jpg'


// icons
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiNodedotjs, SiJava } from 'react-icons/si';

export default function Home() {
  return (
    <>
      <NavbarComponent />

      
      <div className='container flex justify-center md:flex-nowrap flex-wrap my-8 gap-8'>
        <About subtitle={'Frontend Developer'} contato="diogosarti13@gmail.com" name={'Diogo Sarti'} image={me} className='' />
        <div className='w-[550px] md:w-[650px]'>
          <Info name={'Sobre'} className=''>
            <p>Comecei minha jornada pela computação pesquisando conteúdo gratuito online aos 16 anos e hoje estudo sistemas de informação.</p>
          </Info>
          <Info name={'Competências'} className=''>
            <div className='flex flex-row gap-6 flex-wrap lg:flex-nowrap'>
              <SiHtml5 size="4rem" color='red'/>
              <SiCss3 size="4rem" color='blue'/>
              <SiJavascript size="4rem" color='#facc15'/>
              <SiReact size="4rem" color='#38bdf8' />
              <SiNextdotjs size="4rem" />
              <SiNodedotjs  size="4rem" color='#84cc16' />
              <SiJava size="4rem" />
            </div>
          </Info>
          <Info name={'Formação Acadêmica'} className=''> 
            <div className='flex flex-col'>
              <div className='flex flex-row flex-wrap items-center gap-2'>
                <h1 className='font-bold'>Bacharelado em Sistemas de Informação - </h1> 
                <span className='p-2 text-sm rounded-md bg-gray-900 font-bold text-white'> Centro Universitário SENAC</span>
              </div>
              
              <p className='py-4'>Formação para projetar, desenvolver e administrar sistemas e tecnologias de informação, além de coordenar equipes de desenvolvimento de sistemas.</p>
              <div className='flex flex-row justify-between'>
                <p>Previsão de conclusao: 06/2026</p>
                <Link className='text-yellow-600' href="/faculdade">Clique aqui para ver minhas notas!</Link>
              </div>
              
            </div>
          </Info>
          <Info name={'Experiência'} className='' >
            <div className='flex flex-col'>
              <div className='flex flex-row flex-wrap items-center gap-2'>
                <h1 className='font-bold'>Javascript</h1> 
                <span className='p-2 text-sm rounded-md bg-gray-900 font-bold text-white'> Projetos pessoais</span>
              </div>
              <p>Realizei diversas aplicações <span className='font-bold'>(frontend e backend)</span> utilizando o nodejs com conceitos de API Rest e frameworks como React e NextJS.</p>
            </div>
          </Info>
        </div>
      </div>
      
        
        
      <footer className={styles.footer}>
        <Link
           href="/"
        >
          Desenvolvido por {' Diogo Sarti '}
        </Link>
      </footer>
    </>
  )
}
