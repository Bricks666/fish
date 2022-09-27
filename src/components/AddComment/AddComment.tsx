import * as React from 'react';
import { Container } from 'react-bootstrap';
import { AddCommentForm, AddCommentFormProps } from '../AddCommentForm';

export interface AddCommentProps extends AddCommentFormProps {}

export const AddComment: React.FC<AddCommentProps> = (props) => {
	return (
		<Container>
			<h3>Добавление комментария</h3>
			<AddCommentForm {...props} />
		</Container>
	);
};
