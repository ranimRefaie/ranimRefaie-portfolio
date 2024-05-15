import "./Certificates.css";
import Card from "react-bootstrap/Card";
import certificate_1 from "../../assets/certificate-1.jpg";
import certificate_2 from "../../assets/certificate-2.jpg";
import ButtonDownload from "../ButtonDownload/ButtonDownload";
import TitleSection from "../TitleSection/TitleSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/Themes";

const Certificates = () => {
  const [{ theme }] = useContext(ThemeContext);
  var settings = {
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
      img: certificate_1,
      title: "Front End Training Certificate",
      desc: "During a 4-month training period at Focal x agency Company, I gained valuable experience in Front-end development using various technologies such as HTML, CSS, JavaScript, React.js, and Bootstrap. Additionally, I learned how to work with APIs and interact with GitHub to effectively manage projects. Collaborating within the team was a valuable experience where I learned how to communicate and cooperate with others to successfully achieve project goals.",
      link: "https://ranimrefaie.github.io/ranimRefaie-portfolio/certificate-1.jpg",
      nameLink: "certificate-1.jpg",
    },
    {
      id: 2,
      img: certificate_2,
      title: "Certificate Of Attendance",
      desc: " A certificate of attendance and successful completion of a 60-hour training course provided by the Syrian Scientific Society for Informatics for Full Stack developers, which includes HTML5, CSS, JavaScript, ASP.NET, and SQL Server.",
      link: "https://ranimrefaie.github.io/ranimRefaie-portfolio/certificate-2.jpg",
      nameLink: "certificate-2.jpg",
    },
  ];
  return (
    <div
      className="cards-certificates"
      style={{
        width: "85%",
        margin: "auto",
      }}
    >
      <TitleSection title="Certificate" />
      <Slider {...settings} className="slide-certif">
        {Data.map((item) => (
          <Card
            key={item.id}
            style={{
              margin: "auto",
              width: "75%",
              padding: "0.55rem",
              flexDirection: "row",
            }}
          >
            <Card.Img
              variant="top"
              src={item.img}
              style={{
                border: "2px solid rgba(60, 29, 255, 0.2)",
                borderRadius: "20px",
                width: "18rem",
                margin: "auto",
              }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text
                style={{
                  color: theme.color,
                }}
              >
                {item.desc}
              </Card.Text>
              <ButtonDownload
                text=" Download"
                link={item.link}
                name={item.nameLink}
              />
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
