import "./Navigation.css"

function About () {
    return (
      <div className="aboutContainer">
        <p>
          A Bandcamp clone with a focus on Hip Hop and a central theme of Bay
          Area music. Artists can upload and share their content.
        </p>
        <div>
          Developed by
          <p>
            <i className="fab fa-github fa-lg"></i>{" "}
            <a href="https://github.com/valeriareynososf" className="gitLink">
              Valeria Reynoso
            </a>
          </p>
        </div>
      </div>
    );
}
export default About;