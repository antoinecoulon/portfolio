import { Stack, Input, Textarea } from "@chakra-ui/react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">
        Une question, un bug à signaler ?
        <span className="contactez-moi">Contactez-moi</span>
      </h2>
      <form action="" className="contact-form">
        <Stack spacing="32px" className="contact-stack">
          <div className="input-box">
            <label htmlFor="name">Nom:</label>
            <Input
              id="name"
              name="name"
              placeholder="Jonathan Cohen"
              size="lg"
              className="input"
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <Input
              id="email"
              name="email"
              placeholder="jonathan@cohen.fr"
              size="lg"
              className="input"
            />
          </div>
          <div className="input-box">
            <label htmlFor="message">Message:</label>
            <Textarea
              name="message"
              id="message"
              className="textarea"
              placeholder="Here is a sample placeholder"
              size="lg"
            />
          </div>
        </Stack>
      </form>
    </section>
  );
}
