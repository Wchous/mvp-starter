import React from 'react';

const Headlines = (props) => (
  <div>
    <h4> Today's Headlines </h4>
    { props.regions.map(poke => <ListItem region={region}/>)}
  </div>
)

export default Headlines;