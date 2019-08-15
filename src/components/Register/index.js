import React from 'react'
import './register.css'

class Register extends React.Component {
  render (){
    return (
      <div id="spt_account_register">
        <div className="container">
          <div className="col-md-8 col-sm-12 col-xs-12 col-md-offset-2 spt_account_register_content spt_account_register_content">
            <div className="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6">
              <div className="spt_logo">
                <h1 className="h1Style" style={{fontSize: '2rem'}}>Ankara Hub</h1>
                <span>Beauty Beyond perfection</span>
              </div>
              <form>
                <input type="email" name="spt_account_register_email" placeholder="Enter email address" required="required" />
                <input type="password" name="spt_account_register_password" placeholder="Choose a password" required="required" />
                <input type="submit" defaultValue="Sing Up Now" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Register