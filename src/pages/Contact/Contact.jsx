import { Button } from "../../components/Button/Button";
import "./contact.css";
import { Pathname } from "../../components/Pathname";

export const Contact = () => {
  return (
    <section className="outlet container contact">
      <Pathname />
      <div className="contact-container">
        <div className="contact-info">
          <div>
            <p className="info-title">
              <img src=".././images/icons/call.svg" alt="call" />
              Call To Us
            </p>
            <ul>
              <li>We are available 24/7, 7 days a week.</li>
              <li>Phone: +8801611112222</li>
            </ul>
          </div>
          <div>
            <p className="info-title">
              <img src=".././images/icons/mail.svg" alt="mail" />
              Write To US
            </p>
            <ul>
              <li>
                Fill out our form and we will contact you within 24 hours.
              </li>
              <li>Emails: customer@exclusive.com</li>
              <li>Emails: support@exclusive.com</li>
            </ul>
          </div>
        </div>
        <form>
          <div>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="number" placeholder="Your Phone" />
          </div>
          <textarea placeholder="Your Massage"></textarea>
          <Button classname={"primary"} content={"Send Massage"} />
        </form>
      </div>
    </section>
  );
};
