import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';


describe('ExpandableText', () => {
it('should be truncated if the text size is greater than 255',()=>{
    const text = 'a'.repeat(256);
    render(<ExpandableText text={text}/>);
    const truncatedText = screen.getByText(/a{3}.../);
    expect(truncatedText).toBeInTheDocument();
});

it('should not be truncated if the text size less than 255',()=>{
    const text = 'a'.repeat(254);
    render(<ExpandableText text={text}/>);
    const truncatedText = screen.getByText(/a{3}.../);
    expect(truncatedText).not.toBeInTheDocument();
});


    
});