import React,{ Component } from "react";
import { connect } from "react-redux";
import { fetchPostById,deletePost } from "../actions/index";

class PostShow extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPostById(id);
    }
    ondelete(){
        const {id} = this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push('/');
        })
    }
    render(){
        const {ReducerPost} = this.props;
        if(!ReducerPost){
            return<div>Loading..</div>
        }
        return(
            <div>
                <button className="btn btn-danger" onClick={this.ondelete.bind(this)}>Delete</button>
                <h5>{ReducerPost.title}</h5>
                <div>Categories:{ReducerPost.categories}</div>
                <p>{ReducerPost.content}</p>
            </div>
        );
    }
}
function mapStateToProps({ReducerPost},ownProps){
    return {ReducerPost:ReducerPost[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchPostById,deletePost})(PostShow);