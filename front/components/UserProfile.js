import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(logoutAction);
    }, []);

	return (
		<Card
			actions={[
				<div key='twit'>
					테스트1<br />
					{user.Post.length}
				</div>,
				<div key='following'>
					테스트2<br />
					{user.Followings.length}
				</div>,
				<div key='follower'>
					테스트3<br />
					{user.Followers.length}
				</div>
			]}
		>
            <Card.Meta avatar={<Avatar>{user.nickname[0]}</Avatar>} title={user.nickname} />
            <Button onClick={onLogout}>로그아웃</Button>
		</Card>
	);
};

export default UserProfile;
