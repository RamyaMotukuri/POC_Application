import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import '../../../src/Login.css';
//import TextFieldGroup from '../common/TextFieldGroup';
import classnames from 'classnames';
import HeaderPage from '../../../src/Header';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
          };

          this.onChange = this.onChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);

        }

        componentWillReceiveProps(nextProps) {
          if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/Welcome#/dashboard');

          }

          if(nextProps.errors) {
              this.setState({errors: nextProps.errors});
          }
        }

        onChange(e){
            this.setState({[e.target.name]: e.target.value});
        }

        onSubmit(e) {
            e.preventDefault();
            const userData = {
               username: this.state.username,
                password: this.state.password
            };
            if (this.state.password === 'ramyamotukuri' && this.state.username === 'ramyamotukuri') {
                this.setState({
                    isValidForm: true
                });
                this.props.history.push('/Welcome#/dashboard');
            }
         /*   loginUser(userData).then((res) => {
                if (res) {
                  this.props.history.push('/Welcome#/dashboard');
                }
              });*/
        //  this.props.loginUser(userData);
        //  this.props.history.push('/Welcome#/dashboard');
          if(this.props.loginUser(userData)){
          this.props.history.push('/Welcome#/dashboard');
          }
          /*  axois.post('/api/user/login',user)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))*/
        }

  render() {
    const { errors } = this.state;


    return (<div className ="login">
       <div> <HeaderPage />
            </div>
    <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Login</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className={classnames('form-control form-conrol-lg',
                        {'is-invalid': errors.username})}
                        placeholder="UserName" name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        />  
                        {errors.username && (
                            <div className="invalid-feedback">{errors.username}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <input type="password" className={classnames('form-control form-conrol-lg',
                        {'is-invalid': errors.password})}
                        placeholder="Password" name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />  
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                        )} 
                     </div>
                     <input type="submit" className="btn btn-info btn-block mt-4" />  
                </form>
            </div>
        </div>
    </div>
</div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
/*const mapStateToProps = state => {
    return {
      token: state.auth.token,
      auth: state.auth,
  errors: state.errors
    };
  };*/

export default connect(mapStateToProps, { loginUser })(Login);
























/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
//import {connect} from 'react-redux';
import classnames from 'classnames';
//import axios from 'axios';

class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/register');
        }

        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }
    
   
    onSubmit(e){
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
      // console.log(user);
      this.props.loginUser(userData);
       /*axios.post('/api/users/login', new user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))*/

        /*login(user).then((res) => {
            if (res) {
              this.props.history.push(`/register`);
            }
          });  */
    /*}
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        const {errors} = this.state;
        return(
            <div className ="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Login</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className={classnames('form-control form-conrol-lg',
                               {'is-invalid': errors.username})}
                                placeholder="UserName" name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                                />  
                                {errors.username && (
                                    <div className="invalid-feedback">{errors.username}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <input type="password" className={classnames('form-control form-conrol-lg',
                                {'is-invalid': errors.password})}
                                placeholder="Password" name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                />  
                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )} 
                             </div>
                             <input type="submit" className="btn btn-info btn-block mt-4" />  
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps =(state) => ({
    auth:state.auth,
    errors:state.errors
})
export  default connect(mapStateToProps ,{loginUser})(Login);
*/
