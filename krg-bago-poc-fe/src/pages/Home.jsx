import cumpleaños from "../assets/happy.svg";
import { MyCard } from "../components/MyCard";
import { HappyBirthdayService as data } from "../service/HappyBirthdayService";

export const Home = () => {
  return (
    <div style={{ marginLeft: "17.5%" }}>
      <div className='p-col-12 flex flex-column align-items-center justify-content-center'>
        <img src={cumpleaños} alt='cumpleaños' width='300px' />
        <h1>Cumpleañeros del mes</h1>
      </div>
      <div className='cards-container'>
        {data.map((item, index) => (
          <MyCard
            key={index}
            name={item.name}
            birthday={item.birthday}
            phone={item.phone}
            email={item.email}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
