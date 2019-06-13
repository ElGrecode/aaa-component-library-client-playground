import React, {Component} from 'react';
import {AAAPrimaryTheme, Button, ButtonGroup, Form, FormGroup, FormInput} from 'aaa-component-library';

const VALIDATIONS = {
  firstName: {
    required: 'First name is required',
    'max_length[24]': 'Too long. Do you have a nickname?',
    alpha_dash_dot_space: 'Name can only contain letters, dashes, periods, and spaces',
  },
  lastName: {
    alpha_dash_dot_space: 'Name can only contain letters, dashes, periods, and spaces',
  },
  password: {
    required: 'Password is required',
    'min_length[6]': 'Password must be at least 6 characters',
    'max_length[24]': 'Password should be under 24 characters.',
  },
  passwordConfirm: {
    required: 'Password confirmation is required',
    'matches[password]': 'This does not match',
  },
};

class App extends Component {
  handleFormValueSubmission(vals){
    console.log('vals', vals);
  }

  render() {
    return (
      <div>
        <AAAPrimaryTheme>
          <h1>Hello React :)</h1>
          <Button>Hello Button</Button>
        </AAAPrimaryTheme>


        <AAAPrimaryTheme>
          <h3>Form Check</h3>
          <div className="u-background--gray">
            <Form
              validations={VALIDATIONS}
              onSubmit={this.handleFormValueSubmission}
              render={({ allRequiredFieldsHaveBeenVisited, handleSubmit }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <FormGroup>
                      <FormInput 
                        autoFocus
                        name="firstName"
                        id="firstName"
                        labelName="First name"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormInput 
                        name="lastName"
                        id="lastName"
                        labelName="Last name"
                        helperText="Not required"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormInput 
                        name="password"
                        id="password"
                        labelName="Password"
                        type="password"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormInput 
                        name="passwordConfirm"
                        id="passwordConfirm"
                        labelName="Password Confirm"
                        type="password"
                      />
                    </FormGroup>
                    <ButtonGroup>
                      <Button
                        disabled={!allRequiredFieldsHaveBeenVisited}
                        fadeUp={allRequiredFieldsHaveBeenVisited}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </ButtonGroup>
                  </form>
                );
              }
            }
          />
          </div>
        </AAAPrimaryTheme>
      </div>
    );
  }
}
export default App;
