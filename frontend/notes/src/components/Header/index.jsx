import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile,  Logout} from "./styles"; 

export function Header() {
    const { signOut } = useAuth();

    return (
        <Container>
            <Profile to="/Profile">
                <img 
                    src="https://github.com/isaacgv.png" 
                    alt="User photo"
                />

                <div>
                    <span>Welcome,</span>
                    <strong>Isaac Gonzales</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
      
        </Container>
    );
}