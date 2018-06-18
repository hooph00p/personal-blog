import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {
  render() {
    return (
        <div>
          <Input style={{width:"100%"}} icon='search' placeholder='Search...' />
        </div>

    );
  }
}

export default SearchBar;