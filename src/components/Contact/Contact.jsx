import React, { useState } from 'react';
import { Form, Input, Button, message, Card } from 'antd';

const { TextArea } = Input;

const Contact = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            message.success('Your message has been sent!');
            form.resetFields();
        }, 1500);
    };

    return (
        <div style={{ maxWidth: 500, margin: '40px auto' }}>
            <Card title="Contact Us" bordered={false}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input placeholder="Your Name" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' }
                        ]}
                    >
                        <Input placeholder="Your Email" />
                    </Form.Item>
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please enter your message' }]}
                    >
                        <TextArea rows={4} placeholder="Your Message" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Send Message
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Contact;