import "./Clients.css";
import client1 from "../assets/1.webp";
import client2 from "../assets/2.webp";
import client3 from "../assets/3.webp";
import client4 from "../assets/4.webp";
import client5 from "../assets/5.webp";
import client6 from "../assets/6.webp";
import client7 from "../assets/7.webp";
import client8 from "../assets/8.webp";
import client9 from "../assets/9.webp";
import client10 from "../assets/10.webp";
import client11 from "../assets/11.webp";
import client12 from "../assets/12.webp";
import client13 from "../assets/13.webp";
import client14 from "../assets/14.webp";
import client15 from "../assets/15.webp";
import client16 from "../assets/16.webp";
import client17 from "../assets/17.webp";
import client18 from "../assets/18.webp";
import client19 from "../assets/19.webp";
import client20 from "../assets/20.webp";
import client21 from "../assets/21.webp";
import client22 from "../assets/22.webp";
import client23 from "../assets/23.webp";
import client24 from "../assets/24.webp";
import client25 from "../assets/25.webp";
import client26 from "../assets/26.webp";
import client27 from "../assets/27.webp";
import client28 from "../assets/28.webp";
import client29 from "../assets/29.webp";
import client30 from "../assets/30.webp";

function Clients() {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client28,
    client29,
    client30,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
    client16,
    client17,
    client18,
    client19,
    client20,
    client21,
    client22,
    client23,
    client24,
    client25,
    client26,
    client27,
  ];
  return (
    <section className="clients-section">
      <div className="clients-header" id="client">
        {/* <span>TRUSTED BY</span>
        <h2>Clients & Partners</h2> */}
      </div>

      <div className="clients-marquee">
        <div className="clients-track">
          {[...clients, ...clients].map((logo, index) => (
            <div className="client-logo" key={index}>
              <img src={logo} alt="Client Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
