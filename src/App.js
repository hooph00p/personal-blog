import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import ArticleCard from './Components/ArticleCard';
import EditPost from './Components/EditPost';
import { Divider } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App" style={{'display': 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{width: '50%'}}>
          <SearchBar/>
        </div>
       <Divider horizontal></Divider>
        <div style={{"display": "flex", "flexFlow": "wrap", "height": "50%", 'width': '50%'}} className="recent-articles">
          {/* <div style={{"margin": "30px"}}>
            <ArticleCard />
          </div> */}
          <EditPost/>
        </div>
      </div>
    );
  }
}

export default App;
