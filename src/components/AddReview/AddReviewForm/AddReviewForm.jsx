import { useCallback } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useField } from '../../../hooks';
import { addReviewThunk } from '../../../models/reviews';

export const AddReviewForm = ({ subjectAddress, }) => {
	const { reset: resetReview, ...review } = useField('');
	const { reset: resetMark, ...mark } = useField(5);
	const dispatch = useDispatch();

	const onSubmit = useCallback(
		async (evt) => {
			evt.preventDefault();
			await dispatch(addReviewThunk(subjectAddress, review.value, mark.value));
			resetMark();
			resetReview();
		},
		[dispatch, subjectAddress, review.value, mark.value, resetReview, resetMark]
	);
	return (
		<Form onSubmit={onSubmit}>
			<Row>
				<Col>
					<Form.Group>
						<Form.Label>Отзыв</Form.Label>
						<Form.Control {...review} />
					</Form.Group>
				</Col>
				<Col xs={3}>
					<Form.Group>
						<Form.Label>Оценка</Form.Label>
						<Form.Control {...mark} type='number' min={0} max={10} step={1} />
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
