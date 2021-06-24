import PageLayout from "layouts";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "routes";

function App() {
  return (
    <div className="App">
      <Router>
        <PageLayout>
          <Routes />
        </PageLayout>
      </Router>
    </div>
  );
}

export default App;
