import HomeCardButtom from "../../components/HomeCardButtom";
import "./styles.css";
const HomeCard = () => {
  return (
    <>
      <nav className="container home-container">
        <h1>Desafio GitHub API</h1>
        <h5>Desenvolvimento de aplicativo para integrar com API</h5>
      </nav>
      <nav className="button-container">
        <HomeCardButtom />
      </nav>
    </>
  );
};
export default HomeCard;
