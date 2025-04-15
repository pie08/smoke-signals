import { FC } from "react";
import styles from "./Contact.module.scss";
import Section from "@/app/_components/Section";
import Container from "@/app/_components/Container";
import TextInput from "@/app/_components/TextInput";
import Button from "@/app/_components/Button";

type ContactProps = object;

const Contact: FC<ContactProps> = ({}) => {
  return (
    <Section>
      <Container>
        <h2>CONTACT</h2>
      </Container>

      <Container>
        <form className={styles.contactForm} action="">
          <TextInput fieldName="FIRST NAME" fieldId="firstName" required />
          <TextInput fieldName="LAST NAME" fieldId="lastName" required />
          <TextInput fieldName="EMAIL" fieldId="email" required />
          <TextInput
            fieldName="MESSAGE"
            fieldId="message"
            inputType="textarea"
            required
          />
          <Button type="submit">SEND YOUR MESSAGE!</Button>
        </form>
      </Container>
    </Section>
  );
};

export default Contact;
