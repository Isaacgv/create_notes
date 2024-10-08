import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Avatar } from "./styles";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'

export function Profile() {
    const { user } = useAuth();
    const  [name, setName] = useState(user.name);
    const  [email, setEmail] = useState(user.email);
    const  [passwordOld, setPasswordOld] = useState();
    const  [passwordNew, setPasswordNew] = useState();

    return (
        <Container> 
            <header>
                <Link to ="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/Isaacgv.png" alt="User photo" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Save"/>
            </Form>

        </Container>   
    )
}