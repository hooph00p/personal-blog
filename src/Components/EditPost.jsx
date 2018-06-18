import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react';
import { Editor, EditorState } from 'draft-js';
import '../Style/Draft.css';

class EditPost extends Component {

  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() }
  }

  onChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {
    return (
      <div style={{ 'width': '100%', 'height': '100%' }}>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Title' placeholder='Title...' />
            <Form.Input fluid label='Author' placeholder='Author...' />
          </Form.Group>
          <Form.Input fluid label='Thumbnail' placeholder="Thumbnail url..." />
          <label className="editor-label">Body</label>
          <div className='editor-container'>
            <Editor style={{ height: '100%' }} editorState={this.state.editorState} onChange={this.onChange} />
          </div>
          <Divider horizontal></Divider>
          <Form.Button fluid style={{'background': 'black', 'color': 'white'}}>Save</Form.Button>
        </Form>

      </div>
    );
  }
}

export default EditPost;