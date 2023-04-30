import * as React from 'react';
import { ProfileInfo } from '@/components/ProfileInfo';
import { MainLayout } from '@/layouts/MainLayout';

const ProfilePage: React.FC = () => {
	return (
		<MainLayout>
			<h2>Профиль</h2>
			<ProfileInfo />
		</MainLayout>
	);
};

export default ProfilePage;
