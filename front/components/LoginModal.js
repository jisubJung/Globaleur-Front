import React, { useState, useRef } from 'react';
import { Button, Modal, Input } from 'antd';
import styled from 'styled-components';

import LoginForm from './LoginForm';
import Signup from './Signup';
import SignupSteps from './SignupSteps';

const LoginModal = () => {
	const [loginOpened, setLoginOpened] = useState(false);
	const [signupOpened, setSignupOpened] = useState(false);
	const [signupStepsOpened, setSignupStepsOpened] = useState(false);

	const openModal = (modalType) => {
		if (modalType === 'login') {
			setLoginOpened(true);
			setSignupOpened(false);
			setSignupStepsOpened(false);
		} else if (modalType === 'signup') {
			setLoginOpened(false);
			setSignupOpened(true);
			setSignupStepsOpened(false);
		} else if (modalType === 'signupSteps') {
			setLoginOpened(false);
			setSignupOpened(false);
			setSignupStepsOpened(true);
		}
	};

	const closeModal = (modalType) => {
		if (modalType === "login") {
			setLoginOpened(false);
		} else if (modalType === 'signup') {
			setSignupOpened(false);
		} else if (modalType === 'signupSteps') {
			setSignupStepsOpened(false);
		}
	};

	return (
		<>
			<Button style={{ margin: '16px 24px 16px 0', float: 'right' }} onClick={() => openModal('login')}>
				Account
			</Button>
			<Modal visible={loginOpened} closable={false} footer={null}>
				<Button onClick={() => closeModal('login')}>닫기</Button>
				{ loginOpened &&
					<LoginForm />
				}
				{ loginOpened &&
					<Button onClick={() => openModal('signup')}>Sign up</Button>
				}
			</Modal>
			<Modal visible={signupOpened} closable={false} footer={null}>
				<Button onClick={() => closeModal('signup')}>닫기</Button>
				{ signupOpened &&
					<Signup />
				}
				{ signupOpened &&
					<Button onClick={() => openModal('signupSteps')}>Sign up</Button>
				}
			</Modal>
			<Modal visible={signupStepsOpened} closable={false} footer={null}>
				<Button onClick={() => closeModal('signupSteps')}>닫기</Button>
				{ signupStepsOpened &&
					<SignupSteps />
				}
			</Modal>
		</>
	);
};

// const StyledButton = styled(Button)`
// 	border: 3px solid red;
// `;

export default LoginModal;
