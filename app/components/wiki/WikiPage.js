import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

const utf8 = require('utf8');
const atob = require('atob');


class WikiPage extends Component {
  constructor(){
    super(...arguments);

    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(e){
    let { onEditPage, page } = this.props;
    onEditPage(page);
  }

  render(){
    let { page } = this.props;
    let title = page.title || "untitled";
    let content = page.contents || "";
    content = utf8.decode(atob(content));

    return (
      <div className="wiki-page">
        <div className="toolbar">
          <button className="btn btn-primary" onClick={this.onEditClick}>Edit</button>
        </div>
        <div className="page-title-bar">
          <h2>{title}</h2>
        </div>
        <div className="page-content">
          <ReactMarkdown
            source={content} />
        </div>
      </div>
    );
  }
}

WikiPage.propTypes = {
  page: PropTypes.object.isRequired,
  onEditPage: PropTypes.func.isRequired
}

export default WikiPage;