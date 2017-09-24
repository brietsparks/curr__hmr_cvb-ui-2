import React from 'react';
import { Sidebar, Button, Item, Menu, Icon } from 'semantic-ui-react'

// Components
import ContributionList from '../ContributionList';
import ProjectTreeList from '../ProjectList';
import SkillFilter from './SkillFilter';

// HOC
import Filterable from '../FilterableHOC';

export class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    }

  }

  render() {
    const { showSidebar } = this.state;

    const { actions, filters, model } = this.props;

    const {
      id, title, subtitle,
      contributionModels = [],
      childProjectModels = [],
    } = model;

    const hasContributions = contributionModels.length > 0;
    const hasChildProjects = childProjectModels.length > 0;

    return (
      <Item>
        <Item.Content>
          <Item.Header as={'h3'}>{title}</Item.Header>
          <Item.Meta>{subtitle}</Item.Meta>

          <Sidebar.Pushable as={'div'}>

            <Sidebar as={Menu} animation='push' width='thin' visible={showSidebar}
                     icon='labeled' vertical inverted>

              <Menu.Item name="skill_filter">
                <Icon
                  name="close"
                  onClick={ () => { this.setState({ showSidebar: false }) } }
                />
              </Menu.Item>
              <Menu.Item name="skill_filter">
                <SkillFilter
                  projectId={id}
                  projectModel={model}
                  skillFilters={filters.skill}
                  addSkillCriterion={actions.addSkillCriterion}
                  removeSkillCriterion={actions.removeSkillCriterion}
                />
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher style={{ marginLeft: showSidebar ? 10 : 0 }}>
              <Icon
                name="filter"
                onClick={ () => { this.setState({ showSidebar: !showSidebar }) } }
              />

              { hasContributions &&
              <div>
                <p>Contributions</p>
                <ContributionList
                  models={contributionModels}
                  actions={actions}
                  filters={filters}
                />
              </div>
              }

              { hasChildProjects &&
              <div>
                <p>Projects</p>
                <ProjectTreeList
                  parentId={id}
                  models={childProjectModels}
                  actions={actions}
                  filters={filters}
                />
              </div>
              }
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Item.Content>
      </Item>
    );
  }
}

export default Filterable(Project);