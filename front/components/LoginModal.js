import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';

import LoginForm from './LoginForm';

const LoginModal = () => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Button style={{ margin: '16px 24px 16px 0', float: 'right' }} onClick={() => setVisible(true)}>
				Account
			</Button>
            <Modal visible={visible} onCancel={() => setVisible(false)} footer={null}>
                <LoginForm />
            </Modal>
		</>
	);
};

export default LoginModal;
