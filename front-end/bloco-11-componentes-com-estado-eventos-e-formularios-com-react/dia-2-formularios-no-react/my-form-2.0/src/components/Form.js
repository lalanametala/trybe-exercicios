import React, { Component } from "react";
import JobFieldset from "./JobFieldset";
import PersonalFieldset from "./PersonalFieldset";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      resType: '',
      resumeSum: '',
      job: '',
      jobDescr: ''
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, email, cpf, address, city, state, resumeSum, job, jobDescr } = this.state;
    return(
      <form>
        <PersonalFieldset 
          name={name} 
          email={email} 
          cpf={cpf} 
          address={address} 
          city={city} 
          state={state} 
          handleChange={this.handleChange}
        />
        <JobFieldset
          resumeSum={resumeSum} 
          job={job} 
          jobDescr={jobDescr}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;