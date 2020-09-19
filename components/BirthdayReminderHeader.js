import React from "react";
import { Heading, Image } from "@chakra-ui/core";

const BirthdayReminderHeader = () => {
  return (
    <>
      <Heading>Bip.</Heading>
      <Heading mt={2} mb={3} size="md">
        Birthday Reminder
      </Heading>
      <Image
        width="100px"
        height="100px"
        src="/logo.png"
        alt="Bip. Birthday Reminder Logo"
      />
    </>
  );
};

export default BirthdayReminderHeader;
