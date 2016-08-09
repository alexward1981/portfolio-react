import React from 'react';

export default class ContactForm extends React.Component {
  render() {
    return(
      <form action="">
        <fieldset>
          <legend>Get in touch</legend>
          <div className="input_container">
            <label htmlFor="name">Hi!, My name is</label>
            <input type="text" id="name" name="name" value="" placeholder="Enter your name"/>
          </div>
          <div className="input_container">
            <label htmlFor="reason">I'd like to speak to you about</label>
            <select name="reason" id="reason">
              <option value="consulting">consulting</option>
              <option value="designing">designing</option>
              <option value="developing">developing</option>
            </select>
            <span>for a project</span>
          </div>
        </fieldset>
      </form>
    )
  }
}
