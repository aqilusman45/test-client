import { Form, Input, Button, Row, Col } from "antd";
import "./styles.css";

interface ISumFormViewProps {
  state: {
    number1: string;
    number2: string;
    results: string;
  };
  submit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SumFormView: React.FC<ISumFormViewProps> = ({
  state,
  submit,
  onChange,
}) => {
  const { number1, number2, results } = state;
  return (
    <Row>
      <Col className="container" span={12} md={12} offset={6}>
        <Form onFinish={submit}>
          <h1 className="form-header">Enter the numbers</h1>
          <Form.Item className="form-item">
            <Input
              value={number1}
              name="number1"
              onChange={onChange}
              required={true}
              type="number"
              placeholder="Number 1"
            />
          </Form.Item>
          <Form.Item className="form-item">
            <Input
              value={number2}
              name="number2"
              onChange={onChange}
              required={true}
              type="number"
              placeholder="Number 2"
            />
          </Form.Item>
          <Form.Item className="form-item">
            <Button
              style={{
                background: "#C10708 0% 0% no-repeat padding-box",
                borderRadius: "2px",
                opacity: 1,
                width: "100%",
              }}
              size="large"
              type="primary"
              htmlType="submit"
            >
              Calculate
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col className="results-container" span={12} offset={6}>
        <h1 className="form-header">Results</h1>
        <Input value={results} disabled={true} />
      </Col>
    </Row>
  );
};

export default SumFormView;
