import React from 'react';

export default class ContactForm extends React.Component {
  render() {
    return(
      <form action="">
        <fieldset>
          <legend>Get in touch</legend>
          <div className="input_container">
            <label htmlFor="name">Hi!, My name is</label>
            <input type="text" id="name" name="name" placeholder="Enter your name"/>
          </div>
          <div className="input_container">
            <label htmlFor="reason">I'd like to speak to you about</label>
            <select name="reason" id="reason">
              <option default>-- Please select an option --</option>
              <option value="consulting">consulting</option>
              <option value="designing">designing</option>
              <option value="developing">developing</option>
            </select>
            <span>for a project</span>
          </div>
          <div className="input_container">
            <label htmlFor="email">You can email me at:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address"/>
          </div>
          <div className="input_container">
            <label htmlFor="tel">or call me on:</label>
            <input type="tel" name="tel" id="tel" placeholder="Enter your telephone number"/>
          </div>
          <div className="input_container">
            <label htmlFor="more_info">Here is some more information:</label>
            <textarea name="more_info" id="more_info" cols="30" rows="10" placeholder="more information about the project"></textarea>
          </div>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    )
  }
}
