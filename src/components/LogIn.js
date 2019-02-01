import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import request from 'superagent';


class LogIn extends Component{
  constructor(props) {
    super(props)
        this.state = {
            firstForm: true,
            secondForm: false
        }
    }



    showFirstForm = () => {
      this.setState({
        firstForm: !this.state.firstForm,
        secondForm: !this.state.secondForm,
      })
    }
  render(){
    const formStyles = {
      width: 400,
     margin: '50px auto',
    }

  return(
  <React.Fragment>
  {this.state.firstForm &&
    <div style={formStyles}>
    <form onSubmit={ this.showFirstForm }>
           <TextField
             required
             name="email"
             label="Email"
             fullWidth
             // onChange={ this.handleChange }
           />
           <TextField
             required
             name="password"
             type="password"
             label="Password"
             fullWidth
             // onChange={ this.handleChange }
           />
           <Button type='submit'  variant='contained'>Login</Button>
         </form>
        </div>
  }

  {this.state.secondForm &&
    <div style={formStyles}>
      <form onSubmit={ this.login }>
             <TextField
               required
               name="Name"
               label="Name"
               fullWidth
               // onChange={ this.handleChange }
             />
             <TextField
               required
               name="Email"
               type="password"
               label="Email"
               fullWidth
               // onChange={ this.handleChange }
             />
             <Button type='submit'  variant='contained'>Record</Button>
           </form>
        </div>
        }
    </React.Fragment>
  );
  }
}
export default LogIn
