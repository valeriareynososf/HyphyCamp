import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../../store/users";

function ArtistsProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((store) => store.userReducer[userId]);
  //   const user = users.find((user) => user.id === userId);
  //const user = useSelector((store) => store.userReducer.artists);
console.log("hello???", user)
  useEffect(() => {
    dispatch(singleUser(userId));
  }, [userId, dispatch]);

  return (
    <>
      <h2>artist page</h2>
      {user !== null ? <p>{user.id}</p> : null}
    </>
  );
}
export default ArtistsProfile;
