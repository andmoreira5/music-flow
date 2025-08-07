import { useNavigate } from "react-router-dom";
import ButtonMenuWithIcon from "../components/button/ButtonMenuWithIcon.jsx";
import Section from "../components/section/Section.jsx";
import { menuButton } from "../data/menuButtons.js";
import { useAppContext } from "../context/ContextProvider.jsx";
import { setBarColor } from "../utils/setBarColor.js";
import { useEffect } from "react";
import { student } from "../data/student.js";
import { columns } from "../data/columns.js";
import { professor } from "../data/professor.js";
import { course } from "../data/course.js";

export default function Home() {
  const navigate = useNavigate();
  const { setScreen, setData, setTableSelected, setColumns, data } =
    useAppContext();
  setBarColor("#1d293d");

  useEffect(() => {
    if (!data) {
      setData({ student, professor, course });
      setColumns(columns);
    }
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
