import React, { Component } from "react";

class JobFieldset extends Component {
  render() {
    const { resumeSum, job, jobDescr, handleChange } = this.props;

    return(
      <fieldset>
        <legend>Dados Profissionais</legend>
         <div className="container">
          Resumo do currículo:
          <textarea
            name="resumeSum"
            value={resumeSum}
            maxLength="1000"
            required
            onChange={handleChange}
          />
        </div>
        <div className="container">
          Cargo:
            <input
              type="text"
              name="job"
              value={job}
              maxLength="40"
              required
              onChange={handleChange}
            />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="jobDescr"
            value={jobDescr}
            maxLength="500"
            onChange={handleChange}
          />
        </div>
      </fieldset>
    );
  }
}

export default JobFieldset;