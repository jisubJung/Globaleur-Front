import React, { useEffect, useRef } from 'react';
import { Form, Input, Tooltip, Icon, Button } from 'antd';

const LoginForm = ({ open }) => {
    const inputRef = useRef(null);
    const { input } = inputRef;
    return (
        <Form style={{ marginTop: '30px' }}>
            <Input required placeholder="Enter your Id" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                    <Tooltip title="Extra information">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
                ref={(input) => input && input.focus()}
            />
            <Input.Password style={{ marginTop: '10px' }} required placeholder="Enter your password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            <Button type="primary">Sign in</Button>
        </Form>
    );
};

export default LoginForm;