import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount';


describe("User Account Page", ()=>{
    it('should render user name when user is provided',()=>{
      // Arrange
      const user = {id:1,name:'Malith',isAdmin:true};
      // Act
      render(<UserAccount  user={user}/>);
      const nameElement = screen.getByText(/Name:/i);
    expect(nameElement).toBeInTheDocument(); 
    
    const nameValue = screen.getByText('Malith');
    expect(nameValue).toBeInTheDocument(); // Ensures "John Doe" is found
  // checking for admin
    });
    it('should render edit button when user is admin',()=>{
      const user = {id:1,name:'Malith',isAdmin:true};
      render(<UserAccount user={user}/>);
      const editButton = screen.getByRole('button');
      expect(editButton).toBeInTheDocument();
      expect(editButton).toHaveTextContent(/Edit/i);
    })
  
    it('should not render edit button when user is not admin',()=>{
      const user = {id:1,name:'Malith',isAdmin:false};
      render(<UserAccount user={user}/>);
      const editButton = screen.queryByRole('button');
      expect(editButton).not.toBeInTheDocument();
    })
  })