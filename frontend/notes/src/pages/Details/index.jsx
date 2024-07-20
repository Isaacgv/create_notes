import { Container,  Links, Content} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';


export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
        <ButtonText title="Remove note" />
        <h1>React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus quod temporibus corporis modi placeat tempore voluptatibus nulla repellendus maxime veritatis ex eaque, id quisquam cumque, dolor nostrum quae fugit?
        </p>
        <Section title="Links">
          <Links>
            <li><a href="#">https://</a></li>
            <li><a href="#">https://</a></li>
          </Links>
        </Section>

        <Section title="Tags">
            <Tag title="express"/>
            <Tag title="nodejs"/>

        </Section>
        <Button title="Return" loading/>

      </Content>
      </main>
    </Container>
  )
}