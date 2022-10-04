import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useField } from '@/hooks/useField';
import { addCommentThunk } from '@/models/comments';
import { Address } from '@/interfaces/web3';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';

export interface AddCommentFormProps {
	readonly subjectAddress: Address;
	readonly reviewId: number;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ subjectAddress, reviewId }) => {
	const { reset: resetComment, ...comment } = useField('');
	const dispatch = useTypedDispatch();

	const onSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
		async (evt) => {
			evt.preventDefault();
			await dispatch(addCommentThunk(subjectAddress, reviewId, comment.value));
			resetComment();
		},
		[dispatch, subjectAddress, reviewId, comment.value, resetComment]
	);

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group>
				<Form.Label>Комментарий</Form.Label>
				<Form.Control {...comment} />
			</Form.Group>
			<Button type='submit'>Опубликовать</Button>
		</Form>
	);
};
