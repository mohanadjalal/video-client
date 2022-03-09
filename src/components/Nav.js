function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          Video List
        </a>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by id"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
