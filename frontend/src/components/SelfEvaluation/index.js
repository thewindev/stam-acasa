import React from "react";
import { Link } from "react-router-dom";
import { Form, Hero, SocialsShare } from "@code4ro/taskforce-fe-components";
import data from "../../data/personal-assesment.json";
import api from "../../api";

const SelfEvaluation = () => {
  // eslint-disable-next-line no-unused-vars
  const evaluateCallback = (formState, options) => {
    return options[0];
  };

  const onFinishingForm = result => {
    api.post(`http://localhost:5008/api/form?id=${result.formId}`, result);
  };

  return (
    <>
      <Hero title="Completează formularul de evaluare" />
      <SocialsShare currentPage={window.location.href} />

      <Link to="/family-evaluation">Membrii familiei</Link>
      <Form
        data={data}
        evaluateForm={evaluateCallback}
        onFinishingForm={onFinishingForm}
      />
    </>
  );
};

export default SelfEvaluation;
