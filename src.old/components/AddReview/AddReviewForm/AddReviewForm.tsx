import * as React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useField } from '@/hooks/useField';
import { Address } from '@/packages/web3';
import { useAddReviewMutation } from '@/models/reviews';
import { useLogin } from '@/hooks/useLogin';

export interface AddReviewFormProps {
	readonly subjectAddress: Address;
}

export const AddReviewForm: React.FC<AddReviewFormProps> = ({ subjectAddress, }) => {
	const text = useField('');
	const mark = useField(5);
	const [, { data: sender = '', }] = useLogin();
	const [addReview] = useAddReviewMutation();

	const onSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
		async (evt) => {
			evt.preventDefault();
			await addReview({ sender, subjectAddress, text: text.value, mark: mark.value, });
			mark.reset();
			text.reset();
		},
		[subjectAddress, text.value, mark.value]
	);
	return (
		<Form onSubmit={onSubmit}>
			<Row>
				<Col>
					<Form.Group>
						<Form.Label>Отзыв</Form.Label>
						<Form.Control value={text.value} onChange={text.onChange} />
					</Form.Group>
				</Col>
				<Col xs={3}>
					<Form.Group>
						<Form.Label>Оценка</Form.Label>
						<Form.Control
							value={mark.value}
							onChange={mark.onChange}
							type='number'
							min={0}
							max={10}
							step={1}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col>
					<Button type='submit'>Опубликовать</Button>
				</Col>
			</Row>
		</Form>
	);
};
