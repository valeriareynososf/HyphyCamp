function EditComment() {
  //editedSong =dispatch(editComment({ content }, id));
  //const [content, setContent] = useState("");

  //disabled={errors.length > 0}
  return (
    <>
      <form>
        <label>Edit your Comment</label>
        <br />
        <input
          type="text"
          //value={content}
          required
          //onChange={(e) => setContent(content)}
        />
        <button type="submit">Update Comment</button>
      </form>
    </>
  );
}

export default EditComment;