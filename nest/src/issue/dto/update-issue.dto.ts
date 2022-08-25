import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateIssueDto } from './create-issue.dto';

export class UpdateIssueDto extends PartialType(CreateIssueDto) {
	@ApiProperty({
		type: Boolean,
		example: true,
		description: 'Is the issue open, or closed?',
		required: false
	})
    open?: boolean;
}
