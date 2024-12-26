import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';


describe('TermsAndConditionsPage', () => {
  it('Button should be disabled when terms are not accepted', () => {
    render(<TermsAndConditions />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');  
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    
    if(checkbox){
      const button = screen.getByRole('button');
      expect(button);}
      
  });

  it('Button should be enabled when terms are accepted', async() => {

    render(<TermsAndConditions/>);
    const button = screen.getByRole('button');
    const checkbox = screen.getByRole('checkbox');
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(button).toBeEnabled();
});
});