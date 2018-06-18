import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import ArticleCard from './Components/ArticleCard';
import EditPost from './Components/EditPost';
import { Divider } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SearchBar/>
       <Divider horizontal></Divider>
        <div style={{"display": "flex", "flex-flow": "wrap", "height": "50vh"}} className="recent-articles">
          {/* <div style={{"margin": "30px"}}>
            <ArticleCard />
          </div> */}
          
        </div>

      </div>
    );
  }
}

export default App;
