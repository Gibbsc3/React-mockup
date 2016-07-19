import React from 'react'
import ReactDOM from 'react-dom'
// import Hello from './Hello'
import Post from './Post'
// import Bullet from './Bullet'
// import LikeButton from '/.LikeButton'
//name is a props. call it with this.props.value (ie tony)
ReactDOM.render(
  <div>
  <Post postLink="google.com" header="Terrible Style" date="10/19/2004" link="https://pbs.twimg.com/profile_images/24679042/317x317_soulja_boy_400x400.jpg" />
  <Post postLink="google.com" header="Childhood Poster" date="10/19/1990" link="http://www.sellit.co.nz/au/store/media/homieportrait.jpg" />
</div>, document.getElementById('app'))
