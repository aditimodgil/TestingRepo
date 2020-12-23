import React, {Component} from 'react';
import './styles.scss';
import Header from './Components/Header/Header';
import Headline from './Components/Headline/Headline';
import SharedButton from './Components/Button';
import ListItem from './Components/ListItem';
import { connect, useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from './actions'

class App extends Component{
   constructor(props){
     super(props);

     this.fetch = this.fetch.bind(this);
   }


  fetch = () =>{
    this.props.fetchPosts();
  }

 
  render(){


  // const posts = useSelector(state => state.posts);
  // const dispatch = useDispatch();

  const buttonProps ={
    buttonText : 'Get Posts',
    emitEvent : this.fetch
  }

  const tArr =[
    {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true
    }
  ]
  return (
    <div className="app" data-test="appComponent">
      <Header />
      <section className="content">
         <Headline title="Test Title" description="this is descriptions" tempArr={tArr}/>
         <SharedButton className="sbutton" {...buttonProps} />
         <div className="posts">
         {this.props.posts.map((post,index)=>{
           const {title, body} = post;
           const itemProps ={
             title,
             description : body
           }
           return(<ListItem key={index} {...itemProps}/>)
         })}
         </div>
      </section>
    </div>
  );
        }
}

const mapStateToProps = state =>{
  return{
    posts : state.posts
  }
}

export default connect(mapStateToProps,{fetchPosts})(App);
