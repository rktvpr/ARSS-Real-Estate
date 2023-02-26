
// import React from 'react';
// import { Form, Input, Button, Spin } from 'antd';
// //import { NavLink } from "react-router-dom";
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { SmileOutlined } from '@ant-design/icons';
// import Icons from '@ant-design/icons';


// import React, { useState } from 'react';

// import ReactDOM from 'react-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import Header from '../components/Header';

// import Auth from '../utils/auth';

// const FormItem = Form.Item;
// const antIcon = <Icons type="loading" style={{ fontSize: 24 }} spin />;
  

//   class NormalLoginForm extends React.Component {
//     handleSubmit = (e) => {
//       e.preventDefault();
//       this.props.form.validateFields((err, values) => {
//         if (!err) {
//           this.props.onAuth(values.userName, values.password);
//           this.props.history.push('/');
//         }
//       });
//     }
  
//     render() {
//       let errorMessage = null;
//       if (this.props.error) {
//           errorMessage = (
//               <p>{this.props.error.message}</p>
//           );
//       }

  
//       const { getFieldDecorator } = this.props.form;
//       return (
//           <div>
//               {errorMessage}
//               {
//                   this.props.loading ?
  
//                   <Spin indicator={antIcon} />
  
//                   :
  
//                   <Form onSubmit={this.handleSubmit} className="login-form">
//                       <FormItem name='userName' rules={[{ required: true, message: 'Please input your username!' }]}>
//                           <Input prefix={<Icons type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//                       </FormItem>
  
//                       <FormItem name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
//                           <Input prefix={<Icons type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//                       </FormItem>
  
//                       <FormItem>
//                       <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
//                           Login
//                       </Button>
//                       Or 
//                       <NavLink 
//                           style={{marginRight: '10px'}} 
//                           to='/signup/'> signup
//                       </NavLink>
//                       </FormItem>
//                   </Form>
//               }
//         </div>
//       );
//     }
//   }
  
  
//   const mapStateToProps = (state) => {
//       return {
//           loading: state.loading,
//           error: state.error
//       }
//   }
  
//   const mapDispatchToProps = dispatch => {
//       return {
//           onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
//       }
//   }
  
//   export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);

