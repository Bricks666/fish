import { Container } from 'react-bootstrap';
import { AddCommentForm } from './AddCommentForm';

export const AddComment = (props) => {
	return (
		<Container>
			<h3>Добавление комментария</h3>
			<AddCommentForm {...props} />
		</Container>
	);
};
