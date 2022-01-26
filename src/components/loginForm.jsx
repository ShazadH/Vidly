import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

export class LoginForm extends Component {
    state = {
        account: { username: "", password: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(
            this.state.account,
            this.schema,
            options
        );

        console.log({ error });

        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        console.log({ error });
        return error ? error.details[0].message : null;
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = { ...this.state.account };
        account[input.name] = input.value;

        this.setState({ account, errors });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        //Call the server
        console.log("Submitted");
    };

    render() {
        const { account, errors } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        label="Username"
                        value={account.username}
                        error={errors.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        name="password"
                        label="Password"
                        value={account.password}
                        error={errors.password}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
