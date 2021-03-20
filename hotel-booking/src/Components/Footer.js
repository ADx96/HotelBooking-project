import "../footer.css";
const FooterP = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> Our company care about the customer
          that searching about high quality hotles in almost all the countries
        </p>
        <div className="icons">
          <a href="www.google.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="www.google.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="www.google.com">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="www.google.com">
            <i className="fab fa-google-plus"></i>
          </a>
          <a href="www.google.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p> Kuwait, Kuwait City</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+965) 123 456 789</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="www.google.com"> BookMe@bookme.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          Book Me<span> logo</span>
        </h2>
        <p className="menu">
          <a href="www.google.com"> Home</a> |
          <a href="www.google.com"> About</a> |
          <a href="www.google.com"> Services</a> |
          <a href="www.google.com"> Portfolio</a> |
          <a href="www.google.com"> News</a> |
          <a href="www.google.com"> Contact</a>
        </p>
        <p className="name"> Book Me &copy; 2021</p>
      </div>
    </footer>
  );
};

export default FooterP;
