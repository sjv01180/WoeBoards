import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import './App.css';
import firebase from '../firebase-config';
import ImageExporter from './ImageExporter';

class PostMemes extends Component {
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
      const { title, body } = doc.data();
      posts.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        body
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
            <h3 className="panel-title">
              CUTE ANIMALS
            </h3>
            <ImageExporter message={"Upload Cute Animals"}/>
          </div>
          <div className="panel-body">
          <div id="gallery">
          <ul class="nivo">
            <li>
            <a href="images/106927941_pa-6355447.jpg"><img src={require("./images/106927941_pa-6355447.jpg")} alt="doggo" width="300" height="200"/>
            <span>cute puppies</span></a>
            </li>
            <li>
            <a href="images/skynews-kitten-cat_4627790.jpg"><img src={require("./images/skynews-kitten-cat_4627790.jpg")} alt="kittens" width="300" height="200"/>
            <span>cute kittens</span></a>
            </li>
          </ul>
          </div>
          </div>
        <div class="clearfix"></div>
      </div>
    </div>
    );
  }
}

export default PostMemes;