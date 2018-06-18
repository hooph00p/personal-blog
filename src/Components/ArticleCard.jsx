import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import articleDefault from '../img/article-default.png';

class ArticleCard extends Component {
  render() {
    return (
      <Card>
        <Image src={articleDefault} />
        <Card.Content>
          <Card.Header>
            Default
          </Card.Header>
          <Card.Meta>
            Default Author
          </Card.Meta>
          <Card.Description>
            Default Description
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ArticleCard;