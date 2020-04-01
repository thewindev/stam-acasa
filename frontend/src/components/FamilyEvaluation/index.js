import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Form,
  Hero,
  SocialsShare,
  Select
} from "@code4ro/taskforce-fe-components";
import data from "../../data/personal-assesment.json";
import api from "../../api";

const familyMembers = [
  { text: "A", value: "value1" },
  { text: "B", value: "value2" },
  { text: "C", value: "value3" }
];

const FamilyEvaluation = () => {
  // eslint-disable-next-line no-unused-vars
  const [textValue, setTextValue] = useState("A");

  const evaluateCallback = (formState, options) => {
    return options[0];
  };

  const handleChangeSelect = e => {
    setTextValue(e.target.value);
  };

  const onFinishingForm = result => {
    api.post(`http://localhost:5008/api/form?id=${result.formId}`, result);
  };

  return (
    <>
      <Hero title="Informează-ne cu privire la starea ta" />
      <SocialsShare currentPage={window.location.href} />
      <Link to="/self-evaluation">Evaluarea mea</Link>

      <Select
        label="Completează pentru:"
        selectProps={handleChangeSelect}
        options={familyMembers}
      />
      <Form
        data={data}
        evaluateForm={evaluateCallback}
        onFinishingForm={onFinishingForm}
      />
    </>
  );
};

export default FamilyEvaluation;
