import { Container } from "react-bootstrap";
import { ROLES } from "../../consts";
import { AddComment } from "../AddComment/AddComment";
import { RoleFilter } from "../RoleFilter";
import { CommentsList } from "./CommentsList/";

export const Comments = ({ reviewId, subjectAddress }) => {
	return (
		<Container>
			<h3>Комментарии</h3>
			<RoleFilter roles={[ROLES.ADMIN, ROLES.SHOPER, ROLES.USER]}>
				<AddComment subjectAddress={subjectAddress} reviewId={reviewId} />
			</RoleFilter>
			<CommentsList subjectAddress={subjectAddress} reviewId={reviewId} />
		</Container>
	);
};
