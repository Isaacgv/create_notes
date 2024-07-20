import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section} from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import { Link } from "react-router-dom";


export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <Link to="/">Back</Link>
                    </header>

                    <Input placeholder="Title" />
                    <Textarea placeholder="Notes"/>  

                    <Section title="Links">
                        <NoteItem value="https://"/>       
                        <NoteItem isNew placeholder="New Link"/>       
                    </Section>

                    <Section title="Tags">
                        <div className="tags">
                            <NoteItem value="react"/>       
                            <NoteItem isNew placeholder="New Tag"/>   
                        </div>
                        
                    </Section>

                    <Button title="Save"/>

                </Form>
            </main>
        </Container>
    );
}