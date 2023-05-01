import * as React from 'react';
import { Container } from 'react-bootstrap';
import { ROLES } from '@/consts';
import { AddComment } from '../AddComment';
import { RoleFilter } from '../RoleFilter';
import { CommentsList } from './CommentsList';
import { Address } from '@/packages/web3';

export interface CommentsProps {
	readonly reviewId: number;
	readonly subjectAddress: Address;
}

export const Comments: React.FC<CommentsProps> = (props) => {
	const { reviewId, subjectAddress, } = props;
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
