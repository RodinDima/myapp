import { Accordion } from "../Accordion/Accordion";
import "./style.css";

const faqList = [
  {
    q: "Какие ароматы доступны для свечей?",
    a: (
      <ol className="answ">
        <li>
          Ваніль - теплий, сладкий і затишний аромат, який нагадує про домашній
          затишок.
        </li>
        <li>
          Лаванда - приємний, успокійливий і релаксуючий запах, який допомагає
          зняти стрес і напругу.
        </li>

        <li>
          Рожевий грейпфрут - свіжий, фруктовий і енергійний аромат, який
          допомагає підняти настрій і збадьорити.
        </li>

        <li>
          Кедр - деревний, земний і маскулінний аромат, який надає відчуття
          стабільності і надійності.
        </li>

        <li>
          Яблуко і кориця - теплий і затишний аромат, який нагадує про зимові
          свята і домашність..
        </li>
      </ol>
    ),
  },
  {
    q: "Як довго горять свічки?",
    a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
  },
  {
    q: "Чи можна зробити замовлення на індивідуальний дизайн свічки?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
  {
    q: "Які є варіанти доставки?",
    a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
  },
  {
    q: "Як оплачувати замовлення?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
  {
    q: "Як довго триває курс?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
  {
    q: "Яка ціна на курс?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
  {
    q: "Чи є сертифікат на курс?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
];

function Faq() {
  return <Accordion faqList={faqList} />;
}

export default Faq;
