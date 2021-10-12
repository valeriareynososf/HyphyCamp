import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
 //import { getUser } from "../../store/users";
import { singleUser } from "../../store/singleuser";
import "./profile.css"

function ArtistsProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
const user = useSelector((state) => state.single.main);

//const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    dispatch(singleUser(+userId))
  }, [userId, dispatch]);

  return (
    <>
      <h2>artist page</h2>
      <div>{user.username}</div>
      <div>
        <img src={user.imgUrl} alt="ArtistImage" className="profileImg" />
      </div>
    </>
  );

}

export default ArtistsProfile;
