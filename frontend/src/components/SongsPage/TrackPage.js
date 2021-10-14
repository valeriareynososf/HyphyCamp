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

function TrackPage() {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const songs = useSelector((state) => state.songReducer?.songs);
const user = useSelector((store) => store.userReducer.artists);
  const [showModal, setShowModal] = useState(false);
const comments = useSelector((store) => store.commentReducer.comments);
const id = useSelector((state) => state.session.user?.id);

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
    <div>
      <h2>song here</h2>
      <br />
      {songs !== null ? (
        <div>
          <div key={songs.id} className="userSongs">
            <h3>
              {songs.name} by{" "}
              {user !== null ? (
                <>
                  {Object.values(user).map((artist) => (
                    <span key={artist.id}>
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
            <img src={songs.imgUrl} alt="SongImage" className="imgUrl" />
            <audio src={songs.url} controls />
          </div>
        </div>
      ) : null}
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add A Comment</label>
          <br />
          <input
            type="text"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
            className="inputBox"
          />
          <button type="submit" disabled={errors.length > 0}>
            Add Comment
          </button>
        </form>
      </div>
      Comments:
      {comments !== null ? (
        <div>
          {Object.values(comments).map((comment) => (
            <div key={comment.id}>
              {comment.content}
              {id === comment.userId ? (
                <>
                  <button onClick={() => setShowModal(true)}>
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
                <button onClick={() => deleteBtn(comment.id)}>delete</button>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}



export default TrackPage;
