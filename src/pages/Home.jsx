import { useNavigate } from "react-router-dom";
import ButtonMenuWithIcon from "../components/button/ButtonMenuWithIcon.jsx";
import Section from "../components/section/Section.jsx";
import { menuButton } from "../data/menuButtons.js";
import { useAppContext } from "../context/ContextProvider.jsx";

export default function Home() {
  const navigate = useNavigate();
  const { setScreen } = useAppContext();

  return (
    <div className="m-6">
      <Section title="GESTÃO DE CADASTROS">
        {menuButton.registration.map((el, index) => {
          el.onClick = () => {
            setScreen({ title: el.title, color: el.color });
            navigate(el.navigation, { state: el.property });
          };
          return <ButtonMenuWithIcon item={el} key={index} />;
        })}
      </Section>
    </div>
  );
}
