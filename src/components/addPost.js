import React, { Component } from 'react';

import { serverPoint } from "./global";

export default class AddPost extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      title: '',
      content: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async onSubmit(event) {
    event.preventDefault();

    const postData = {
      username: this.state.username,
      title: this.state.title,
      content: this.state.content,
    };
    const body = JSON.stringify(postData);
    const headers = new Headers();
    headers.set('Content-Type', 'text/plain');

    const endpoint = `${serverPoint}/posts`;
    const resp = await fetch(endpoint, { method: "POST", headers, body });
    
    this.setState({
      username: '',
      title: '',
      content: '',
    });

    if (resp.status === 200) {
      this.props.setPosts([...this.props.posts, postData]);
    }
    else {
      this.props.setError("Could not add post."); 
    }
  };
  

  render() {
    return (
      <form class="add-post" onSubmit={this.onSubmit}>
        <h2>Add post</h2>

        <div class="field">
          <div >
            <label class="add-post-label">Username</label>
          </div>
          <input class="add-post" 
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
        </div>

        <div class="field">
          <div class="add-post-label">
            <label>Title</label>
          </div>
          <input class="add-post" 
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>

        <div class="field">
          <div class="add-post-label">
            <label>Content</label>
          </div>
          <textarea class="add-post" rows="4"
            name="content"
            value={this.state.content}
            onChange={this.onChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
