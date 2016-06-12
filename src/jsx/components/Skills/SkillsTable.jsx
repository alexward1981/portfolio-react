import React from 'react';
import { connect } from 'react-redux';

export class SkillsTable extends React.Component {
  render() {
    const { skills, level } = this.props;
    const skillItems = skills.items;
    const levelName = skills && skillItems.levels ? skillItems.levels.asMutable().map((item) => {
      if(item.level == level) return <h1 key={ item.level }>{ item.name }</h1>
    }) : null;
    const skillsList = skills && skillItems.skills ? skillItems.skills.asMutable().map((item) => {
      if(item.level == level) return <li key={ item.key }>{ item.name }</li>
    }) : null;
    if(skills.isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      if(skillItems.skills) {
        var className = "skill-level-"+level;
        return(
          <div class={className}>
            {levelName}
            <ul>
              {skillsList}
            </ul>
          </div>
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

export default connect(select)(SkillsTable);
