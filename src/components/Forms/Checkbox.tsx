import React from 'react';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { ValidatorComponent } from 'react-material-ui-form-validator';

const red300 = red['500'];

const BaseValidatorComponent = ValidatorComponent as React.ComponentClass<any>;

class CheckboxValidatorElement extends BaseValidatorComponent {
  renderValidatorComponent(): JSX.Element {
    const {
      classes,
      errorMessages,
      validatorListener,
      requiredError,
      value,
      ...rest
    } = (this as any).props;

    return (
      <div>
        <Checkbox
          {...rest}
          ref={(r) => { (this as any).input = r; }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText(): JSX.Element | null {
    const { isValid } = (this as any).state;

    if (isValid) {
      return null;
    }

    return (
      <Box
        sx={{
          left: 42,
          fontSize: 12,
          color: red300,
          position: 'absolute',
          mt: 1,
        }}
      >
        {(this as any).getErrorMessage()}
      </Box>
    );
  }
}

export default CheckboxValidatorElement;
