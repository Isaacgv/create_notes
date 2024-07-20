import { FiPlus } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import {Header} from '../../components/Header';
import { Input } from "../../components/Input"; 
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

export function Home() {
    return(
        <Container>
            
            <Brand>
                <h1>Notes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="All" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
            </Menu>
            <Search>
                <Input placeholder="Search by title"/>
            </Search>
            <Content>
                <Section title="Notes">
                    <Note data={{
                        title: "React", 
                        tags: [
                            {id: '1', name: 'React'}, 
                            {id: '2', name: 'Javascript'}
                        ]
                    }}/>

                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus/>
                    Create Note
            </NewNote>       
         
        </Container>

    )
}