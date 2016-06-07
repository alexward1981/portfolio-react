import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { skillsLoad } from '../../scripts/actions';

export class SkillsTable extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(skillsLoad());
  }

  render() {
    const { skills } = this.props;
    // const levelNames = skills && skills.items ? skills.items.asMutable().map((item) => {
    //     return <th key={item._id}>item.name</th>
    // }) : null;
    if(skills.isFetching) {
      return(
        <section class="loader test">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      if(skills.items) {
        return(
          <section class="skill-table">
            <p>{skills.items.intro}</p>
            <table>
              <tbody>
              <tr>
                //TODO: Get this component working
              </tr>
              </tbody>
            </table>
          </section>
        )
      } else {
        return(
          <section class="loader test2">
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

export default connect(select)(SkillsTable);
