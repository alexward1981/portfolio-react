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
    var statusClass = this.props.cssclass + "_status-text";
    var ctaClass = this.props.cssclass + "_cta";

    return(
      <div class={this.props.cssclass}>
        <div class={statusClass} dangerouslySetInnerHTML={renderStatus()} />
        <div class={ctaClass}>
          <Link to="contact" class="o-btn"><i class="fa fa-envelope-o"></i>Get in touch</Link>
          <a href="https://www.dropbox.com/s/arxwap21eqkw2h3/AlexWard-ContractorCV.docx?dl=0" class="o-btn"><i class="fa fa-file-word-o"></i>Download CV</a>
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
