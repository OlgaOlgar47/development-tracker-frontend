import React from "react";
import "./Collections.css";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import SearchFormCollection from "../SearchFormCollection/SearchFormCollection";
import CollectionCards from "../CollectionCards/CollectionCards";

export default function Collections({ collectionData }) {
  return (
    <section className="collections">
      <Title text="Подборки навыков" />
      <Paragraph text="Здесь ты можешь посмотреть, какие навыки работодатели ожидают от кандидата на определенную профессию, и добавить их к изучению." />
      <SearchFormCollection subtitleName="Поиск по подборкам" collectionData={collectionData} />
      <CollectionCards collectionData={collectionData} />
    </section>
  );
}
