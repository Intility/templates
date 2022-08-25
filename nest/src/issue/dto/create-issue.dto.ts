import { ApiProperty } from "@nestjs/swagger";

export class CreateIssueDto {
	@ApiProperty({
		description: 'Title of the issue',
		example: 'Implement NestJs template',
		type: String,
		required: true
	})
	title: string;
	
	@ApiProperty({
		description: 'Descriptive text regarding the issue',
		example: 'Lorem ipsum dolor sit amet',
		type: String,
		required: false
	})
    description: string | null;
}
