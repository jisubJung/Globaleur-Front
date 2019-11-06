import React, { useEffect } from 'react';
import { Form, Input, Tooltip, Icon, Button } from 'antd';

const LoginForm = () => {
    return (
        <Form style={{ marginTop: '30px' }}>
            <Input required placeholder="Enter your Id" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                    <Tooltip title="Extra information">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <Input.Password style={{ marginTop: '10px' }} required placeholder="Enter your password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            <Button type="primary">Sign in</Button>
            <Button>가입하기</Button>
        </Form>
    );
};

export default LoginForm;