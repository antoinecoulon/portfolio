import { Stack, Input, Textarea } from "@chakra-ui/react";
import { useForm } from "@formspree/react";
import "./Contact.css";

{/**
      TODO: validation, loader, redirect reset
  */}

export default function Contact() {
  const [state, handleSubmit, reset] = useForm('movdjblb')

  if (state.submitting) {
    return <p>Submitting...</p>
  }
  if (state.succeeded) {
    return (
      <section className="contact">
        <div className="succeeded-box">
          <h2>Merci pour votre retour, je m'efforce de regarder régulièrement ma boite mail!</h2>
          <button onClick={reset}>Reset</button>
        </div>
      </section>
    )
  }
  
  return (
    <section className="contact">
      <h2 className="contact-title">
        Une question, un bug à signaler ?
        <span className="contactez-moi">Contactez-moi</span>
      </h2>
      <form action={handleSubmit} className="contact-form">
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
        <button type="submit" className="contact-button" disabled={state.submitting}>Envoyer</button>
      </form>
    </section>
  );
}
