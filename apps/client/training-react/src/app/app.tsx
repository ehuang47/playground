import {CoursesReact} from '@playground/courses-react';
import {HomeReact} from '@playground/home-react';

import {Route, Routes, Link} from 'react-router-dom';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomeReact />} />
        <Route path="/courses" element={<CoursesReact />} />
      </Routes>
    </div>
  );
}

export default App;
