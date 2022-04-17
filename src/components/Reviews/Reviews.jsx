import { Container } from "react-bootstrap";
import { RoleFilter } from "../RoleFilter";
import { AddReview } from "../AddReview";
import { ReviewsList } from "../ReviewsList";
import { ROLES } from "../../consts";

export const Reviews = ({ subjectAddress }) => {
	return (
		<Container>
			<h3>Отзывы</h3>
			<RoleFilter roles={[ROLES.USER, ROLES.ADMIN, ROLES.SHOPER]}>
				<AddReview subjectAddress={subjectAddress} />
			</RoleFilter>
			<ReviewsList subjectAddress={subjectAddress} />
		</Container>
	);
};
