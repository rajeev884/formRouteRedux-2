import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router-dom";

class PostIndex extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderPosts(){
        // return this.props.ReducerPost.map((item)=>{
        //     return( <li className="list-group-item" key={item.id}>{item.title}</li>)
        // })
        return _.map(this.props.ReducerPost,item=>{
            return(
               <Link 
                to={`/post/${item.id}`} 
                key={item.id}>
                <li className="list-group-item" >{item.title}</li>
                </Link>
            );
        })
    }

    render(){
        const {ReducerPost}=this.props;
        if(Object.keys(ReducerPost).length === 0){
            return <div>Loading....</div>
        }
        return(
            <div>
                List of posts
                <div className="text-xs-right">
                <Link to="/post/new" className="btn btn-primary">ADD</Link>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
               
            </div>
        );
    }
}
function mapStateToProps(state){
  return {ReducerPost:state.ReducerPost}
}
export default connect(mapStateToProps,{fetchPosts})(PostIndex);