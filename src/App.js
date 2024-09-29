import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayouts from './components/layouts/MainLayouts';
import MainLayoutsTwo from './components/layouts/MainLayoutsTwo';
import Home from './pageRouter/home/Home';
import NotFound from './pageRouter/NotFound';
import ReactT from './pageRouter/react/ReactT';
import ReduxT from './pageRouter/redux/ReduxT';
import Npm from './pageRouter/npm/Npm';
import Portfolio from './pageRouter/portfolio/Portfolio';
import Usefull from './pageRouter/usefull/Usefull';
import Git from './pageRouter/git/Git';
import './style/style.css';
import RouterT from './pageRouter/router/RouterT';
import Vs from './pageRouter/usefull/Vs';
import Example from './pageRouter/usefull/Example';
import LinkT from './pageRouter/usefull/LinkT';
import SingleHooks from './pageRouter/react/SingleHooks';
import Footer from './components/Footer';
import Header from './components/Header';
import StateViaProps from './pageRouter/react/state-via-props/StateViaProps';
import IterateOverAnArrayOfObjects from './pageRouter/react/iterate-over-an-array-of-objects/IterateOverAnArrayOfObjects';
import LogicalAndOperator from './pageRouter/react/logical-and-operator/LogicalAndOperator';
import Fragment from './pageRouter/react/react-fragment/Fragment';
import Login from './pageRouter/react/control-pola/Login';
import ChildrenProp from './pageRouter/react/children-prop/ChildrenProp';
import FetchUseEfect from './pageRouter/react/fetch-useEfect/FetchUseEfect';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index={true} element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="react" element={<ReactT />} />
            <Route path="react/:hooksSlug" element={<SingleHooks />} />
            <Route path="react/state-via-props" element={<StateViaProps />} />
            <Route
              path="react/iterate-over-an-array-of-objects"
              element={<IterateOverAnArrayOfObjects />}
            />
            <Route
              path="react/logical-and-operator"
              element={<LogicalAndOperator />}
            />
            <Route path="react/fragment" element={<Fragment />} />
            <Route path="react/login" element={<Login />} />
            <Route path="react/children-prop" element={<ChildrenProp />} />
            <Route path="react/fetch-useefect" element={<FetchUseEfect />} />
            <Route path="router" element={<RouterT />} />
            <Route path="redux" element={<ReduxT />} />
            <Route path="npm" element={<Npm />} />
            <Route path="git" element={<Git />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="poleznoe" element={<MainLayoutsTwo />}>
              <Route index={true} element={<Usefull />} />
              {/* измени пути на динамические */}
              <Route path="vs" element={<Vs />} />
              <Route path="ssilki" element={<LinkT />} />
              <Route path="primeri" element={<Example />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
