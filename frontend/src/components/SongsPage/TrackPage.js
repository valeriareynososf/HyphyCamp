import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../../store/users";
import {singleSong } from "../../store/songs";
import { songComments } from "../../store/comments";
import { addComment } from "../../store/comments";
import { deleteComment } from "../../store/comments";
import { Modal } from "../../context/Modal";
import EditComment from "./EditComment";
import "./trackPage.css";

function TrackPage() {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const songs = useSelector((state) => state.songReducer?.songs);
const user = useSelector((store) => store.userReducer.artists);
  const [showModal, setShowModal] = useState(false);
const comments = useSelector((store) => store.commentReducer.comments);
const id = useSelector((state) => state.session.user?.id);
console.log("hello??", user)
const [content, setContent] = useState("");
const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getUser());
    dispatch(songComments(+songId));
    dispatch(singleSong(+songId));
    const errors = [];
    if (!content) errors.push("Content required");
    setErrors(errors);
  }, [ dispatch, songId, content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContent("")
    return dispatch(addComment({ content }, songId));
  };
function deleteBtn(id) {
  const deletetrack = dispatch(deleteComment(id));
  if (deletetrack) {
    window.location.reload();
  }
}

  return (
    <div className="containerTrackPage">
      <div className="innerContainer">
        {songs !== null ? (
          <div key={songs.id} className="userTracks">
            <h2 className="titleSong">{songs.name}</h2>
            <h3 className="titleArtists">
              by{" "}
              {user !== null ? (
                <>
                  {Object.values(user).map((artist) => (
                    <span key={artist.id} className="artistsN">
                      {songs.artistId === artist.id ? (
                        <Link key={artist.id} to={`/artists/${artist.id}`}>
                          {artist.username}
                        </Link>
                      ) : null}
                    </span>
                  ))}
                </>
              ) : null}
            </h3>
            <audio src={songs.url} controls />
          </div>
        ) : null}
        <div className="supportedBy">supported by</div>
        {comments !== null ? (
          <div>
            {Object.values(comments).map((comment) => (
              <div className="commentBlock"  key={comment.id}>
                {user !== null ? (
                  <div className="commentsDiv">
                    <img
                      src={user[+comment.userId].imgUrl}
                      alt="userImg"
                      className="userCImg"
                    />
                    <span className="userCName">
                      {user[+comment.userId].username}
                    </span>
                  </div>
                ) : null}{" "}
                <div className="cmntSection">
                  {comment.content}
                  {id === comment.userId ? (
                    <>
                      <button
                        onClick={() => setShowModal(true)}
                        className="editCBtn"
                      >
                        Edit Comment{" "}
                      </button>
                      {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                          <EditComment
                            setShowModal={setShowModal}
                            comment={comment}
                          />
                        </Modal>
                      )}
                    </>
                  ) : null}
                  {id === comment.userId ? (
                    <button
                      onClick={() => deleteBtn(comment.id)}
                      className="deleteCBtn"
                    >
                      delete
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="track_Img">
        {songs !== null ? (
          <img src={songs.imgUrl} alt="SongImage" className="trackUrl" />
        ) : null}
        <form onSubmit={handleSubmit}>
          <br />
          <input
            type="text"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
            className="inputBox"
          />
          <br />
          <button
            className="commentBtn"
            type="submit"
            disabled={errors.length > 0}
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}



export default TrackPage;
