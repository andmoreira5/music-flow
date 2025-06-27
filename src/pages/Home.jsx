import { useNavigate } from "react-router-dom";
import ButtonMenuWithIcon from "../components/button/ButtonMenuWithIcon.jsx";
import Section from "../components/section/Section.jsx";
import { menuButton } from "../data/menuButtons.js";
import { useAppContext } from "../context/ContextProvider.jsx";
import { setBarColor } from "../utils/setBarColor.js";
import { useEffect } from "react";
import { student } from "../data/student.js";

export default function Home() {
  const navigate = useNavigate();
  const { setScreen, setData, setTableSelected } = useAppContext();
  setBarColor("#1d293d");

  useEffect(() => {
    setData({ student });
  }, []);

  return (
    <div className="m-6">
      <Section title="GESTÃO DE CADASTROS">
        {menuButton.registration.map((el, index) => {
          el.onClick = () => {
            setTableSelected(el.property);
            setScreen({ title: el.title, color: el.color });
            navigate(el.navigation);
          };
          return <ButtonMenuWithIcon item={el} key={index} />;
        })}
      </Section>
    </div>
  );
}
