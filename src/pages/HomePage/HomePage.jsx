import "./HomePage.css";
import video from "../../images/MobileAppPresentation_VideoTemplate.mp4";
function HomePage() {
  return (
    <div className="homepage-video-container">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="homepage-video-overlay">
        <h1>Phone Cave</h1>
        <h2>Welcome to Phone Cave!</h2>
        <p>Find the best information about phones in the market</p>
        <p>
          See our fonelist, click on details, and save phones in which you are
          more interested
        </p>
        <p>Log in to see your saved phones! (On construction)</p>
      </div>
    </div>
  );
}

export default HomePage;
