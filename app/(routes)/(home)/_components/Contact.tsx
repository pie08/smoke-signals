"use client";

import { FC, useActionState, useEffect } from "react";
import styles from "./Contact.module.scss";
import Section from "@/app/_components/Section";
import Container from "@/app/_components/Container";
import TextInput from "@/app/_components/TextInput";
import Button from "@/app/_components/Button";
import { sendMessage } from "@/app/_lib/actions";
import { ContactFormResponse } from "@/app/_types/contactFormResponse.type";
import toast from "react-hot-toast";

type ContactProps = object;

const intitalState: ContactFormResponse = {
  message: "",
  success: true,
  payload: new FormData(),
};

const Contact: FC<ContactProps> = ({}) => {
  const [response, formAction] = useActionState(sendMessage, intitalState);

  // send toast on form submission
  useEffect(() => {
    if (response.message.length) {
      if (response.success) {
        toast.success(response.message);
        return;
      }

      toast.error(response.message);
    }
  }, [response]);

  return (
    <Section>
      <Container>
        <h2>CONTACT</h2>
      </Container>

      <Container>
        <form className={styles.contactForm} action={formAction}>
          <TextInput
            fieldName="FIRST NAME"
            fieldId="firstName"
            required
            defaultValue={(response.payload?.get("firstName") || "") as string}
          />
          <TextInput
            fieldName="LAST NAME"
            fieldId="lastName"
            required
            defaultValue={(response.payload?.get("lastName") || "") as string}
          />
          <TextInput
            fieldName="EMAIL"
            fieldId="email"
            required
            defaultValue={(response.payload?.get("email") || "") as string}
          />
          <TextInput
            fieldName="MESSAGE"
            fieldId="message"
            inputType="textarea"
            required
            defaultValue={(response.payload?.get("message") || "") as string}
          />
          <Button type="submit">SEND YOUR MESSAGE!</Button>
        </form>
      </Container>
    </Section>
  );
};

export default Contact;
