import Top5 from "../../src/images/top5.svg";
import Analitic from "../../src/images/analitic.svg";
import Desiner from "../../src/images/graficDisign.svg";
import DesinerInerfase from "../../src/images/desinerInterfase.svg";
import Tester from "../../src/images/tester.svg";
import ManagerProgect from "../../src/images/managerProgect.svg";
import ContentManager from "../../src/images/contentManager.svg";
import Frontend from "../../src/images/frontend.svg";
import Top5hover from "../../src/images/to5-Hover.svg";
import AnaliticHover from "../../src/images/analitic-hover.svg";
import DesinerHover from "../../src/images/desiner-Hovered.svg";
import DesinerInerfaseHover from "../../src/images/designer-interfase-hover.svg";
import TesterHover from "../../src/images/tester-hover.svg";
import ManagerProgectHover from "../../src/images/prodject-manager-hover.svg";
import ContentManagerHover from "../../src/images/kontent0manager-hover.svg";
import FrontendHover from "../../src/images/frontend developer-hover.svg";

export const userDataConst = [
  { id: 0, name: "мой классный навык", rate: 0, notes: "kakaka", editable: true },
  { id: 1, name: "HTML", rate: 0, notes: "", editable: false },
  { id: 2, name: "CSS", rate: 0, notes: "", editable: false },
  { id: 3, name: "JavaScript", rate: 0, notes: "", editable: false },
  { id: 4, name: "Python", rate: 0, notes: "", editable: false },
  { id: 5, name: "React", rate: 0, notes: "", editable: false },
  { id: 6, name: "Node.js", rate: 0, notes: "", editable: false },
  { id: 7, name: "SQL", rate: 0, notes: "", editable: false },
  { id: 8, name: "Vue.js", rate: 0, notes: "", editable: false },
  { id: 9, name: "Angular", rate: 0, notes: "", editable: false },
  { id: 10, name: "Композиция и сетки", rate: 80, notes: "", editable: false },
  { id: 11, name: "UX-копирайтинг", rate: 20, notes: "", editable: false },
  { id: 12, name: "Анимация", rate: 40, notes: "", editable: false },
  { id: 13, name: "Исследования", rate: 80, notes: "", editable: false },
  { id: 14, name: "Гайдлайны iOS", rate: 100, notes: "", editable: false },
  { id: 15, name: "Вайрфреймы", rate: 20, notes: "", editable: false },
  { id: 16, name: "Анализ ЦА", rate: 20, notes: "", editable: false },
  { id: 17, name: "Гипотезы", rate: 60, notes: "", editable: false },
  { id: 18, name: "Adobe Photoshop", rate: 80, notes: "", editable: false },
];

export const cards = [
  {
    id: 1,
    name: "Графический дизайнер",
    count: "10 навыков",
    image: Desiner,
    imageHover: DesinerHover,
  },
  {
    id: 2,
    name: "Топ 5 навыков в дизайне в 2023 году",
    count: "5 навыков",
    image: Top5,
    imageHover: Top5hover,
  },
  {
    id: 3,
    name: "Аналитик данных",
    count: "12 навыков",
    image: Analitic,
    imageHover: AnaliticHover,
  },
  {
    id: 4,
    name: "Дизайнер интерфейсов",
    count: "23 навыка",
    image: DesinerInerfase,
    imageHover: DesinerInerfaseHover,
  },
  {
    id: 5,
    name: "Инженер по тестированию",
    count: "15 навыков",
    image: Tester,
    imageHover: TesterHover,
  },
  {
    id: 6,
    name: "Менеджер проектов",
    count: "18 навыков",
    image: ManagerProgect,
    imageHover: ManagerProgectHover,
  },
  {
    id: 7,
    name: "Контент менеджер",
    count: "8 навыков",
    image: ContentManager,
    imageHover: ContentManagerHover,
  },
  {
    id: 8,
    name: "Фронтенд-разработчик",
    count: "14 навыков",
    image: Frontend,
    imageHover: FrontendHover,
  },
];
