import { useUserState } from "../../redux/reducers/userSlice";
import "./index.css";
const UserCard = () => {
  const usersData = useUserState();
  console.log(usersData);
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {usersData.map((data) => (
        <div
          className="user-card"
          key={data.id}
          style={{ width: "30rem", margin: "1rem" }}
        >
          <h3 style={{ alignSelf: "center" }}>{data.id}.</h3>
          <span className="avatar-holder">
            <img src={data.avatar_url} alt="Avatar" />
          </span>
          <span className="user-info-holder">
            <h2 className="name">{data.login}</h2>
            <span className="skill">{data.type}</span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default UserCard;
