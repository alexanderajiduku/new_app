import './Counter'
import './App.css';
import './ButtonGroup.css'
import './NumberGame';
import './ImageRender';

import Counter from './Counter';
import ButtonGroup from './ButtonGroup';
import NumberGame from './NumberGame';
import ImageRender from './ImageRender';

function App() {
  return (
    <>
      <ImageRender src="https://picsum.photos/200/300" alt="Random" />
      <NumberGame />
      <Counter />
      <div>
      <ButtonGroup />
      </div>

    </>
  );
}

export default App;


