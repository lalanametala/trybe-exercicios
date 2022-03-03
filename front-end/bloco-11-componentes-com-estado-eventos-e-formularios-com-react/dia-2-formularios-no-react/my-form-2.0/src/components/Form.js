import React, { Component } from "react";
import JobFieldset from "./JobFieldset";
import PersonalFieldset from "./PersonalFieldset";
import PropTypes from 'prop-types';

const STATE_OBJ = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  resType: '',
  resumeSum: '',
  job: '',
  jobDescr: '',
}

class Form extends Component {
  constructor() {
    super();

    this.state = STATE_OBJ;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { addResume } = this.props;
    addResume(this.state);
    this.setState(STATE_OBJ);
  }

  handleErase = () => {
    const { clickHandler } = this.props;
    clickHandler();
    this.setState(STATE_OBJ);
  }

  render() {
    const { name, email, cpf, address, city, state, resumeSum, job, jobDescr } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
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
        <button type="submit">
          Gerar Currículo
        </button>

        <button onClick={this.handleErase}>Apagar</button>
      </form>
    );
  }
}
Form.propTypes = {
  addResume: PropTypes.func.isRequired,
};

export default Form;