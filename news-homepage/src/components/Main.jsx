import "../assets/Main.css";
import imgMobile from "../assets/images/image-web-3-mobile.jpg";
import imgDesktop from "../assets/images/image-web-3-desktop.jpg";

const Main = () => {
  const cardAside = (title, text) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-8">
          <img className="img-desktop" src={imgDesktop} alt="img-desktop" />
          <div className="row pt-3">
            <div className="col-6">
              <h1 className="title-future">The Bright Future of Web 3.0?</h1>
            </div>
            <div className="col-6 d-flex align-items-start flex-column justify-content-between">
              <p className="text-title">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the
                hands of the people. But is it really fulfilling its promise?
              </p>
              <button className="read-button mb-5">Read More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-between aside-color aside-container p-4">
          <h2>New</h2>
          {cardAside("Hydrogen VS Electric Cars", "Will hydrogen-fueled cars ever catch up to EVs?")}
          {cardAside(
            "The Downsides of AI Artistry",
            "What are the possible adverse effects of on-demand AI image generation?"
          )}
          {cardAside(
            "Is VC Funding Drying Up?",
            "Private funding by VC firms is down 50% YOY. We take a look at what that means."
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
