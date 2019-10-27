import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Create from './Create';
import './App.css';
import firebase from '../firebase-config';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('posts');
    this.unsubscribe = null;
    this.state = {
      posts: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      console.log(doc);
      const { title } = doc.data();
      posts.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title
      });
    });
    this.setState({
      posts
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container App">
        <SiteHeader />
        <div className="panel panel-default">
          <div className="panel-heading">
          </div>
          <div className="panel-body">
            <h4><Link to="/create">Create Post</Link></h4>
            <div className="tableStyle">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Hype Board</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map(post =>
                  <tr key={post.key}>
                    <td><Link to={`/show/${post.key}`}>{post.title}</Link></td>
                  </tr>
                )}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;