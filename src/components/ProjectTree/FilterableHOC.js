import React from 'react';

import SkillFiltersModel from '../../models/SkillFilters';

// functions
import { evaluateFilterCallbacks } from './util';
import { ContainsSkills } from './filterCallbacks';

export const FilterableHOC = Component => class Filterable extends React.Component {

  render() {
    const { model, filters } = this.props;

    const skillFiltersModel = new SkillFiltersModel({ data: filters.skills });

    // // EVAL FILTERS
    const meetsFilterCriteria = evaluateFilterCallbacks([
      ContainsSkills({ model, skillFiltersModel  })
    ]);

    if (meetsFilterCriteria) {
      return (
        <Component {...this.props} />
      );
    }

    return null;
  }
};

export default FilterableHOC;