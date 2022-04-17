import { Container } from "react-bootstrap";
import { ProfileInfo } from "../components/ProfileInfo";

export const ProfilePage = () => {
	return (
		<Container>
			<h2>Профиль</h2>
			<ProfileInfo />
		</Container>
	);
};
