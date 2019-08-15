import React from 'react'

class Login extends React.Component {

  render () {
    return (
      <li id="spt_virtual_shop_login">
        <h4>Login</h4>
        <form>
          <input type="email" name="spt_virtual_shop_login_email" placeholder="Enter email address"
                 required="required"/>
          <input type="password" name="spt_virtual_shop_login_password" placeholder="Enter password"
                 required="required"/>
          <input type="submit" defaultValue="Login"/>
          <input id="spt_virtual_shop_login_keep_login" type="checkbox"
                 name="spt_virtual_shop_login_keep_login"/>
          <label htmlFor="spt_virtual_shop_login_keep_login">Keep me logged in</label>
        </form>
        <a href="/password">Forgot Password</a>
        <a href="/register">Not Yet Registered?</a>
      </li>
    )
  }
}

export default Login