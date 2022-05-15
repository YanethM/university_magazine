import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Layout, Form, Input, Button }  from "antd";
export default function SignIn() {
  return (
    <Layout className="">
      <Form>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Por favor ingresa tu nombre!" }]}
        >
          <Input />
        </Form.Item>
        <Input placeholder="default size" prefix={<UserOutlined />} />;
        <Input placeholder="default size" prefix={<MailOutlined />} />;
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Repeat Password"
          name="repeat-password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
