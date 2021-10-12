function AddSong() {
    return (
      <>
        <form className="addSongForm">
          <label>Track Name</label>
          <input type="text" />
          <br />
          <label>Image</label>
          <input type="text" placeholder="image url" />
          <br />
          <label>Add Audio</label>
          <input type="text" placeholder="track url" />
        </form>
      </>
    );
}

export default AddSong;