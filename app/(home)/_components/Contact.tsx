import { FC } from "react";
import styles from "./Contact.module.scss";
import Section from "@/app/_components/Section";
import Container from "@/app/_components/Container";

type ContactProps = object;

const Contact: FC<ContactProps> = ({}) => {
  return (
    <Section>
      <Container>
        <h2>CONTACT</h2>
      </Container>

      <Container>
        <p>contact</p>
      </Container>
    </Section>
  );
};

export default Contact;
