import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useField } from '@/hooks/useField';
import { useAddCommentMutation } from '@/models/comments';
import { Address } from '@/packages/web3';
import { useLoginMutation } from '@/models/auth';

export interface AddCommentFormProps {
	readonly subjectAddress: Address;
	readonly reviewId: number;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ subjectAddress, reviewId }) => {
	const text = useField('');
	const [, { data: sender = '' }] = useLoginMutation({
		fixedCacheKey: 'login',
	});
	const [trigger] = useAddCommentMutation();

	const onSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
		async (evt) => {
			evt.preventDefault();
			await trigger({
				subjectAddress,
				reviewId,
				text: text.value,
				sender,
			});
			text.reset();
		},
		[trigger, subjectAddress, reviewId, text.value, text.reset, sender]
	);

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group>
				<Form.Label>Комментарий</Form.Label>
				<Form.Control value={text.value} onChange={text.onChange} />
			</Form.Group>
			<Button type='submit'>Опубликовать</Button>
		</Form>
	);
};
