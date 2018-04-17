import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class PostNew extends Component{
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input} />
                {field.meta.error}
            </div>
        );
    }
    render(){
        return(
            <div>
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
    if(values.content.length<10){
        errors.content="Content is too short"
    }
    return errors;
}
export default reduxForm({
    form:'newformPost'
})(PostNew);