import React from 'react';
import DuelingSelects from './components/controls/dueling-selects'
import GlobalStyle from './components/styles/global'

const groupOptions = ['singers', 'actors', 'athletes'];
const singerOptions = ['beyonce', 'bob dylan', 'taylor swift', 'prince'];
const actorOptions = ['will smith', 'kristen bell', 'daniel radcliffe', 'eva longoria']
const athleteOptions = ['payton manning', 'steph curry', 'serena williams', 'tiger woods']

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <section>
        <DuelingSelects
          categories={groupOptions}
          categoriesLabel="Choose your type"
          items={
            {
              singers: singerOptions,
              actors: actorOptions,
              athletes: athleteOptions,
            }
          }
          itemsLabel="Choose your player"
        />
      </section>
    </div>
  );
}

export default App;
