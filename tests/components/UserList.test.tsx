import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';

describe('User List  Page', () => {
    it('should render user list when users are provided', () => {
        const users:User[]= [{id:1,name:'Malith'},{id:2,name:'John'}];
        render(<UserList users={users}/>);
        const userListItems = screen.getAllByRole('listitem'); // 'listitem' is the ARIA role for <li>
    // Check the length of the list
    expect(userListItems).toHaveLength(users.length); // Ensure length matches the users array
    });

    it('should render no users available when users are not provided',()=>{
        const users:User[] = [];
        render(<UserList users={users}/>);
        const noUsersElement = screen.getByText(/no users/i);
        expect(noUsersElement).toBeInTheDocument();
    })
});