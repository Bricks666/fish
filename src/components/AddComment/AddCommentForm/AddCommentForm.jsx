import { useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useField } from "../../../hooks";
import { addCommentThunk } from "../../../models/comments";

export const AddCommentForm = ({ subjectAddress, reviewId }) => {
	const { reset: resetComment, ...comment } = useField("");
	const dispatch = useDispatch();

	const onSubmit = useCallback(
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
			<Button type="submit">Опубликовать</Button>
		</Form>
	);
};
