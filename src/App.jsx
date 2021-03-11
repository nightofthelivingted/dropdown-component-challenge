import React from 'react';
import styled from 'styled-components';
import Select from './components/controls/select';
import SelectGroup from './components/controls/select-group';
import GlobalStyle from './components/styles/global'

const groupOptions = ['singers', 'actors', 'athletes'];
const singerOptions = ['beyonce', 'bob dylan', 'taylor swift', 'prince'];
// const actorOptions = ["will smith", "kristen bell", "daniel radcliffe", "eva longoria"]
// const athleteOptions = ["payton manning", "steph curry", "serena williams", "tiger woods"]
const fakeOptionsService = [
  { singers: ['beyonce', 'bob dylan', 'taylor swift', 'prince'] },
  { actors: ['will smith', 'kristen bell', 'daniel radcliffe', 'eva longoria'] },
  { athletes: ['payton manning', 'steph curry', 'serena williams', 'tiger woods'] },
]

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 64px;
`;

const Heading = styled.h2`
  animation: shine 4s ease infinite;
  background: linear-gradient(to right, #2974e3 20%, #FF5640 40%, #FF5640 60%, #2974e3 80%);
  background-clip: text;
  background-size: 200% auto;
  color: #000;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: left;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <section>
        <Row>
          <Select label="Choose your type" options={groupOptions} />
          <Select label="Choose your player" options={singerOptions} placeholder />
        </Row>
      </section>
      <section>
        <Heading>✨ Alternate optgroup option ✨</Heading>
        <Row>
          <SelectGroup label="Choose your type and player" options={fakeOptionsService} placeholder />
        </Row>
      </section>
    </div>
  );
}

export default App;
