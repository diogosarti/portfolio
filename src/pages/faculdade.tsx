import NavbarComponent from "../components/Navbar";
import About from "../components/About";
import senac from "../img/senac.svg";
import Info from "../components/Info";
import { useState } from "react";

/* import { Tab } from '@headlessui/react'
import { Disclosure } from '@headlessui/react' */
import { ChevronUpIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Faculdade() {
  let [categories] = useState({
    '1º Semestre': [
      {
        id: 1,
        title: "Algoritmos e Programação I",
        date: "38h",
      },
      {
        id: 2,
        title: "Comunicação e Expressão",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 3,
        title: "Fundamentos de Computação",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: "Fundamentos de Sistemas de Informação",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 5,
        title: "Pesquisa, Tecnologia e Sociedade",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 6,
        title: "Pré-cálculo",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 7,
        title: "Projeto Integrador: pensamento computacional",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    '2º Semestre': [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    '3º Semestre': [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    '4º Semestre': [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    '5º Semestre': [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    '6º Semestre': [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    '7º Semestre': [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    '8º Semestre': [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <>
      <NavbarComponent />

      <div className="container flex justify-center md:flex-nowrap flex-wrap my-8 gap-8">
        <About
          subtitle={"Sistemas de Informação"}
          name="Senac"
          image={senac}
          className=""
        />
        <div className="w-[550px] md:w-[650px]">
          <Info name={"Sobre o curso"}>
            
          </Info>
        </div>
      </div>
    </>
  );
}
