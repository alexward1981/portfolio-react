import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { configLoad } from '../../scripts/actions';

export default class Availability extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(configLoad());
  }

  render() {
    const { config, isFetching } = this.props
    const configItems = config.items;

    function renderStatus() {
      return { __html: configItems.statusText }
    }

    return(
      <div className="cta">
        <div dangerouslySetInnerHTML={renderStatus()} />
        <div>
          <Link to="contact">Get in touch</Link>
          <a href="https://www.dropbox.com/s/arxwap21eqkw2h3/AlexWard-ContractorCV.docx?dl=0">Download CV</a>
        </div>
      </div>
    )
  }
}

function select(state) {
  const { config } = state;
  return {
    config
  };
}

export default connect(select)(Availability);
