import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile,  Logout} from "./styles"; 

export function Header() {
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

            <Logout>
                <RiShutDownLine />
            </Logout>
      
        </Container>
    );
}