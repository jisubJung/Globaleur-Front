import React from 'react';
import { Modal } from 'antd';

const LoginForm = ({ visible, onCancel, onCreate }) => {
	return (
		<Modal visible={visible} okText='Submit' onCancel={onCancel} onOk={onCreate}>
            테스트
		</Modal>
	);
};

export default LoginForm;
