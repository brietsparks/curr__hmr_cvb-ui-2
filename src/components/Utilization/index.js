import React from 'react';
import Chip from 'material-ui/Chip';

import Skill from '../Skill';

const Utilization  = ({
  id, contribution_id, skill
}) => {
  return (
    <Chip style={{ cursor: 'pointer' }}>
      <Skill {...skill} />
    </Chip>
  );
};

export default Utilization;