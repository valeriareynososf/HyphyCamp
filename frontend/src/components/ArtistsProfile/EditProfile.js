import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import {editUser} from "../../store/singleuser";
import "./profile.css";

function EditProfile({user, close}) {
    const dispatch = useDispatch();
const [email, setEmail] = useState(user.email);
const [imgUrl, setImgUrl] = useState(user.imgUrl);
const [username, setUsername] = useState(user.username);
const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
e.preventDefault();
      close(false);
        window.location.reload();
      return dispatch(editUser({ email, imgUrl, username }, user.id))
    }
      

 useEffect(() => {
   const errors = [];
   if (!email) errors.push("Email field is required");
   if (!username) errors.push("Username is required")
   if (!imgUrl) errors.push("An image is required");
   setErrors(errors);
 }, [email, username, imgUrl]);

const handleCancelClick = (e) => {
  e.preventDefault();
  close(false)
};
// useEffect(() => {
//   if (user) {
//     setEmail(user.name);
//     setImgUrl(user.imgUrl);
//     setUsername(user.url);
//   }
// }, [user]);

  return (
    <div className="editProContainer">
      <form onSubmit={handleSubmit} className="editProForm">
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label>Email</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Username</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Profle Image</label>
        <br />
        <input
          type="text"
          placeholder="image url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <br />
        <button
          type="submit"
          disabled={errors.length > 0}
          class="updateTrackBtn"
        >
          Update Profile
        </button>
      </form>
      <br />
      <button
        type="button"
        onClick={handleCancelClick}
        className="cancelEditBtn"
      >
        Cancel
      </button>
    </div>
  );
}

export default EditProfile;
