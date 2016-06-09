import React from 'react';
import { connect } from 'react-redux';
import { skillsLoad } from '../../../scripts/actions';
import SkillsTable from './SkillsTable.jsx';

export class SkillsTableWrapper extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(skillsLoad());
  }

  render() {
    const { skills } = this.props;

    if(skills.isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      if(skills.items) {
        return(
          <section class="c-skill-table">
            <h2>Skills Breakdown</h2>
            <p>{skills.items.intro}</p>
            <SkillsTable level="1" skills={skills.items}/>
            <SkillsTable level="2" skills={skills.items}/>
            <SkillsTable level="3" skills={skills.items}/>
          </section>
        )
      } else {
        return(
          <section class="loader">
            <span>Content isn't loading...</span>
          </section>
        )
      }
    }
  }
}

function select(state) {
  const { skills } = state;
  return {
    skills
  };
}

export default connect(select)(SkillsTableWrapper);
