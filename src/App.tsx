import CustomHeader from "./components/Header";
import Content from "./components/Content";
import SumForm from "./components/SumForm";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <CustomHeader title="Calculator" />
      <Content>
        <SumForm />
      </Content>
    </div>
  );
}

export default App;
