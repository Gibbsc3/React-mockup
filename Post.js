import React from 'react'
import Bullet from './Bullet'
import LikeButton from './LikeButton'

class Post extends React.Component {

  render() {//return React.createElement('button', {type:'button'}, this.props.label)
  return <div className="col-md-8 col-md-offset-2">
    <a href={this.props.postLink}><h1>{this.props.header}</h1></a>
    <p>{this.props.date}</p>
    <img src={this.props.link} className="img-thumbnail"/>
    <LikeButton />
    </div>


  }
}

export default Post
