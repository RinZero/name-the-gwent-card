import * as React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Panel from "./Panel";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import InputGroup from "./InputGroup";
import Input from "./Input";
import Button from "./Button";

const Container = styled.section`
  max-width: 40rem;
  width: 100%;
`;

export default function InstructionsViewers() {
  const [channel, setChannel] = React.useState("");
  const history = useHistory();

  return (
    <Container>
      <Panel>
        <Heading>Play with your viewers</Heading>
        <Paragraph>
          The game is the same. The only difference is that the answers are
          taken from your Twitch chat. The first viewer to send the correct
          answer will be credited here.
        </Paragraph>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            history.push(`/play/${channel}`);
          }}
        >
          <Paragraph as="label" htmlFor="channel">
            What is your Twitch channel?
          </Paragraph>
          <InputGroup>
            <Input
              type="text"
              id="channel"
              placeholder="Your channel..."
              onChange={(event) => setChannel(event.currentTarget.value)}
              value={channel}
              required
            />
            <Button type="submit">Play</Button>
          </InputGroup>
        </form>
      </Panel>
      <Footer />
    </Container>
  );
}
