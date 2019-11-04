import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';

/*
배열안에 JSX를 쓸 경우 key를 꼭 넣어야함
JSX에서 배열은 반복문 사용을 의미 하는 것이기 때문
*/

const dummyUser = {
	name: '정지섭'
};

const Profile = () => {
	return (
		<div>
			<NicknameEditForm />
			<List
				style={{ marginBottom: '20px' }}
				grid={{ gutter: 4, xs: 2, md: 3 }}
				size='small'
				header={<div>팔로잉 목록</div>}
				loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
				bordered
				dataSource={['정지섭', '바보', '테스트2']}
				renderItem={item => (
					<List.Item style={{ marginTop: '20px' }}>
						<Card actions={[<Icon key='stop' type='stop' />]}>
							<Card.Meta description={item} />
						</Card>
					</List.Item>
				)}
			/>
			<List
				style={{ marginBottom: '20px' }}
				grid={{ gutter: 4, xs: 2, md: 3 }}
				size='small'
				header={<div>팔로워 목록</div>}
				loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
				bordered
				dataSource={['정지섭', '바보', '테스트1']}
				renderItem={item => (
					<List.Item style={{ marginTop: '20px' }}>
						<Card actions={[<Icon key='stop' type='stop' />]}>
							<Card.Meta description={item} />
						</Card>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default Profile;
