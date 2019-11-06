import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const LoginModal = () => {
	const [loginOpened, setLoginOpened] = useState(false);
	const [signupOpened, setSignupOpened] = useState(false);

	const openModal = (modalType) => {
		if (modalType === 'login') {
			setLoginOpened(true);
			setSignupOpened(false);
		} else if (modalType === 'signup') {
			setLoginOpened(false);
			setSignupOpened(true);
		}
	};

	const closeModal = (modalType) => {
		if (modalType === "login") {
			setLoginOpened(false);
		} else if (modalType === 'signup') {
			setSignupOpened(false);
		}
	};

	return (
		<>
			<Button style={{ margin: '16px 24px 16px 0', float: 'right' }} onClick={() => openModal('login')}>
				Account
			</Button>
			<Modal visible={loginOpened} closable={false} footer={null}>
				<Button onClick={() => closeModal('login')}></Button>
				<div>로그인 모달</div>
				<Button onClick={() => openModal('signup')}>가입하기</Button>
			</Modal>
			<Modal visible={signupOpened} closable={false} footer={null}>
				<Button onClick={() => closeModal('signup')}></Button>
				<div>가입하기 모달</div>
				<Button onClick={() => openModal('login')}>로그인</Button>
			</Modal>
		</>
	);
};

export default LoginModal;
