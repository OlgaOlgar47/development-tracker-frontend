import React from "react";
import "./Professions.css";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import SearchForm from "../SearchForm/SearchForm";
import CollectionCards from "../CollectionCards/CollectionCards";

export default function Professions() {
  return (
    <section className="professions">
      <Title text="Подборки навыков" />
      <div className="professions__grid-item">
        <Paragraph text="Здесь ты можешь посмотреть, какие навыки работодатели ожидают от кандидата на определенную профессию, и добавить их к изучению." />
        <SearchForm subtitleName="Поиск по подборкам" hasButton={true} />
      </div>
      <CollectionCards />
    </section>
  );
}
