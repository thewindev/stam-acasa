import React from "react";
import { Hero } from "@code4ro/taskforce-fe-components";

import BasePage from "../BasePage";
import StepsBar from "../StepsBar";

const MyAccount = () => {
  return (
    <BasePage>
      <Hero
        title="Ce pași ai de urmat"
        subtitle="Pentru a te putea ajuta iata ce ai la dispozitie in contul tau:"
        useFallbackIcon={true}
      />
      <StepsBar />
    </BasePage>
  );
};

export default MyAccount;
