import * as React from 'react';
import { Container } from 'react-bootstrap';
import { ProfileInfo } from '@/components/ProfileInfo';

const ProfilePage: React.FC = () => {
	return (
		<Container>
			<h2>Профиль</h2>
			<ProfileInfo />
		</Container>
	);
};

export default ProfilePage;
