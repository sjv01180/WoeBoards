import React, { Component } from 'react';
import firebase from '../firebase-config';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('posts');
    this.state = {
      title: '',
      body: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body } = this.state;

    this.ref.add({
      title,
      body
    }).then((docRef) => {
      this.setState({
        title: '',
        body: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding post: ", error);
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="container">
          <img className="woahlrus" src={require('../media/woahlrus.gif')}/>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Create Discussion Post
            </h3>
          </div>
          <div className="panel-body">
          <div className="postBody">
            <h3><Link to="/" className="btn btn-primary">Back to Discussion Boards</Link></h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input required="required" type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <textArea required="required" className="form-control" name="body" onChange={this.onChange} cols="80" rows="3">{body}</textArea>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;