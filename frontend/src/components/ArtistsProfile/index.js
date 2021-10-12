import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../../store/singleuser";
import "./profile.css"

function ArtistsProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
const user = useSelector((state) => state.single.main);

  useEffect(() => {
    dispatch(singleUser(+userId))
  }, [userId, dispatch]);

  return (
    <div className="container">
      <div className="songsList">songs</div>
      <div className="profileInfo">
        <img src={user.imgUrl} alt="ArtistImage" className="profileImg" />
      <div>{user.username}</div>
      </div>
    </div>
  );

}

export default ArtistsProfile;
