import "./Certificates.css";
import Card from "react-bootstrap/Card";
import TitleSection from "../TitleSection/TitleSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/Themes";

const Certificates = () => {
  const [{ theme }] = useContext(ThemeContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const Data = [
    {
      id: 1,
      company: "Focal X Agency",
      year: "Jul 2023 - Nov 2023",
      certificate: "/certificate-1.jpg",
      attachmentLabel: "Recommendation Letter",
      attachment: "/recommendation.jpg",
      desc: "I completed a 4-month internship at Focal X Agency, where I gained experience in HTML, CSS, JavaScript, React.js, Bootstrap, APIs, and GitHub. I also improved my teamwork and communication skills by working closely with a team.",
    },
    {
      id: 2,
      company: "VICA Web Solution",
      year: "Nov 2023 - Jan 2024",
      certificate: "certificate-2.webp",
      attachmentLabel: "Online Profile",
      attachment: "https://vica.website/training/trainees/725165",
      desc: ` During my training, I completed a full-stack course with a focus on front-end development. I learned and applied:
              HTML, CSS, Bootstrap, Tailwind,
              JavaScript (ES6+), jQuery,
              API Integration, Git & GitHub,
              React (Basics & Hooks), Intro to Next.js. I built small projects and practiced responsive design and team collaboration.`,
    },
  ];

  return (
    <div id="certificates" className="cards-certificates" style={{ width: "85%", margin: "auto" }}>
      <TitleSection title="Certificates & Training" />
      <Slider {...settings} className="slide-certif">
        {Data.map((item) => (
          <Card
            key={item.id}
            className="card"
            style={{ marginBottom: "2rem", flexDirection: "row", padding: "1rem", background: "transparent", border: "1px solid #1f93ca", borderRadius: "10px" }}
          >
            <a href={item.certificate} target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src={item.certificate}
                style={{ border: "2px solid rgba(60, 29, 255, 0.2)", borderRadius: "20px", width: "18rem", margin: "auto" }}
              />
            </a>
            <Card.Body>
              <Card.Title className="card-title">{item.company} ({item.year})</Card.Title>
              <Card.Text className="card-text" style={{ color: theme.color }}>{item.desc}</Card.Text>
              <div style={{ marginBottom: "0.5rem", textAlign: 'center' }}>
                📜 <a href={item.certificate} target="_blank" rel="noreferrer">View Certificate</a>
              </div>
              {item.attachment && (
                <div style={{ textAlign: 'center' }}>
                  📎 <a href={item.attachment} target="_blank" rel="noreferrer">{item.attachmentLabel}</a>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
