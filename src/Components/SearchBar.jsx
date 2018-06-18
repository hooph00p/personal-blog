import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import * as FA from 'react-fontawesome';

class SearchBar extends Component {
  render() {
    return (
     <div style={{"display":"flex"}}>
       <Input placeholder="Search..."/>
       <Button style={{"background":"none", "border": "none"}}>
         <FA name='fas fa-search'/>
        </Button>
     </div>
   );
 }
}
 
export default SearchBar;