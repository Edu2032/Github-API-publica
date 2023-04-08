import "./styles.css";
import HomeCardButtomSeach from "../../components/HomeCardButtomSearch";

const HomeCard = () => {
  return (
    <>
      <nav className="container home-container">
        <div className="card-container">
          <h1>Encontre um perfil no Github</h1>
        </div>
        <nav className="button-container">
          <HomeCardButtomSeach />
        </nav>
      </nav>
    </>
  );
};
export default HomeCard;
