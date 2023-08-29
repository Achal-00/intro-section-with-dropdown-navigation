import { useEffect, useState } from "react";

const width = screen.width;

const Header = () => {
  if (width < 1200) {
    const [mainMenu, setMainMenu] = useState(false);
    const [featureMenu, setFeatureMenu] = useState(false);
    const [companyMenu, setCompanyMenu] = useState(false);

    useEffect(() => {
      if (mainMenu) {
        document.querySelector(".greyed-out").style.display = "block";
        document.querySelector(".overlay").style.display = "flex";
        document.querySelector(".menu-holder img").src = "icon-close-menu.svg";
      } else {
        document.querySelector(".greyed-out").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".menu-holder img").src = "icon-menu.svg";
      }
    }, [mainMenu]);

    useEffect(() => {
      if (featureMenu) {
        document.querySelector(".feature-body").style.display = "grid";
        document.querySelector(".feature-heading img").src =
          "icon-arrow-up.svg";
      } else {
        document.querySelector(".feature-body").style.display = "none";
        document.querySelector(".feature-heading img").src =
          "icon-arrow-down.svg";
      }
    }, [featureMenu]);

    useEffect(() => {
      if (companyMenu) {
        document.querySelector(".company-body").style.display = "grid";
        document.querySelector(".company-heading img").src =
          "icon-arrow-up.svg";
      } else {
        document.querySelector(".company-body").style.display = "none";
        document.querySelector(".company-heading img").src =
          "icon-arrow-down.svg";
      }
    }, [companyMenu]);

    return (
      <section className="header">
        <div className="logo-holder">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="right-section">
          <div className="menu-holder">
            <img
              src="icon-menu.svg"
              alt="menu"
              onClick={() => setMainMenu((prev) => !prev)}
            />
          </div>
        </div>
        <div className="greyed-out"></div>
        <div className="overlay">
          <div className="features-section">
            <div className="feature-heading">
              <p>Features</p>
              <img
                src="icon-arrow-down.svg"
                alt="arrow-down"
                onClick={() => setFeatureMenu((prev) => !prev)}
              />
            </div>
            <div className="feature-body">
              <img src="icon-todo.svg" alt="todo" />
              <p>Todo List</p>
              <img src="icon-calendar.svg" alt="calender" />
              <p>Calendar</p>
              <img src="icon-reminders.svg" alt="reminder" />
              <p>Reminders</p>
              <img src="icon-planning.svg" alt="planning" />
              <p>Planning</p>
            </div>
          </div>
          <div className="company-section">
            <div className="company-heading">
              <p>Company</p>
              <img
                src="icon-arrow-down.svg"
                alt="arrow-down"
                onClick={() => setCompanyMenu((prev) => !prev)}
              />
            </div>
            <div className="company-body">
              <p>History</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>
          </div>
          <p>Careers</p>
          <p>About</p>
          <div className="login-section">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </section>
    );
  } else {
    useEffect(() => {
      document
        .querySelector(".desk-features-section")
        .addEventListener("mouseenter", () => {
          document.querySelector(".desk-feature-heading img").src =
            "icon-arrow-up.svg";
        });
      document
        .querySelector(".desk-features-section")
        .addEventListener("mouseleave", () => {
          document.querySelector(".desk-feature-heading img").src =
            "icon-arrow-down.svg";
        });
      document
        .querySelector(".desk-company-section")
        .addEventListener("mouseenter", () => {
          document.querySelector(".desk-company-heading img").src =
            "icon-arrow-up.svg";
        });
      document
        .querySelector(".desk-company-section")
        .addEventListener("mouseleave", () => {
          document.querySelector(".desk-company-heading img").src =
            "icon-arrow-down.svg";
        });
    }, []);

    return (
      <section className="desk-header">
        <div className="desk-left-side">
          <div className="desk-image-holder">
            <img src="logo.svg" alt="logo" />
          </div>
          <div className="links">
            <div className="desk-features-section">
              <div className="desk-feature-heading">
                <p>Features</p>
                <img src="icon-arrow-down.svg" alt="arrow-down" />
              </div>
              <div className="desk-feature-body">
                <img src="icon-todo.svg" alt="todo" />
                <p>Todo List</p>
                <img src="icon-calendar.svg" alt="calender" />
                <p>Calendar</p>
                <img src="icon-reminders.svg" alt="reminder" />
                <p>Reminders</p>
                <img src="icon-planning.svg" alt="planning" />
                <p>Planning</p>
              </div>
            </div>
            <div className="desk-company-section">
              <div className="desk-company-heading">
                <p>Company</p>
                <img src="icon-arrow-down.svg" alt="arrow-down" />
              </div>
              <div className="desk-company-body">
                <p>History</p>
                <p>Our Team</p>
                <p>Blog</p>
              </div>
            </div>
            <p>Careers</p>
            <p>About</p>
          </div>
        </div>
        <div className="desk-login-section">
          <button>Login</button>
          <button>Register</button>
        </div>
      </section>
    );
  }
};

export default Header;
