import React, { useState } from 'react';
import { Button } from 'antd';
import LoginForm from './LoginForm';

const LoginModal = () => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<Button style={{ margin: '16px 24px 16px 0', float: 'right' }} onClick={() => setVisible(true)}>
				Account
			</Button>
			<LoginForm visible={visible} onCancel={() => setVisible(false)} />
		</>
	);
};

export default LoginModal;
