import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./card.css";

const CardData = () => {
  const data = [
    { title: `Lower Interest Rates`, img: `img2.jpg` },
    { title: `Interest Free Payments`, img: `img3.jpg` },
    { title: `Discount On Meterials`, img: `img1.jpg` },
    { title: `Lower Interest Rates`, img: `img2.jpg` },
    { title: `Interest Free Payments`, img: `img3.jpg` },
    { title: `Discount On Meterials`, img: `img1.jpg` },
  ];
  const chunkedData = Array.from(
    { length: Math.ceil(data.length / 3) },
    (_, index) => data.slice(index * 3, (index + 1) * 3)
  );

  return (
    <div>
      <Carousel className="carousel">
        {chunkedData.map((carouselItems, index) => (
          <Carousel.Item
            key={index}
            className="display"
            style={{ widows: "15rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                gap: "20px",
              }}
            >
              {carouselItems.map((d, subIndex) => (
                <Card
                  key={subIndex}
                  style={{ width: "15rem", border: "1px solid #31b092" }}
                >
                  <Card.Img variant="top" src={d.img} />
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: "center", color: "#19b6ff" }}
                    >
                      {d.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardData;
