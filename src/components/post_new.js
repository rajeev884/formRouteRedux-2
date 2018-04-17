import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { createPosts } from "../actions/index";
import { connect } from "react-redux";
class PostNew extends Component{
    renderField(field){
        const {meta:{touched,error}} = field;
        const classadded = `form-group ${touched && error?'has-danger':''}`
        return(
            <div className={classadded}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input} />
                <div className="text-help">{touched?error:''}</div>
            </div>
        );
    }
    onsubmit(values){
        this.props.createPosts(values,()=>{
            this.props.history.push('/');
        });
        // this.props.createPosts(values).then(()=>{
        //     this.props.history.push('/');
        // }).catch(err=>console.log(err));
    }
    render(){
        const {handleSubmit}=this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(this.onsubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField} />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField} />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField} />
                <button type='submit' className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
function validate(values){
    const errors={};
    if(!values.title){
        errors.title="Title is required"
    }
    if(!values.categories){
        errors.categories="Categories is required"
    }
    if(!values.content){
        errors.content="Content is required"
    }
    if(values.content  && values.content.length<10){
        errors.content="Content is too short"
    }
    return errors;
}
export default reduxForm({
    form:'newformPost',
    validate
})(connect(null,{createPosts})(PostNew));