import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateIssueDto {
    // Configuration for Open API spec
    @ApiProperty({
        description: 'Title of the issue',
        example: 'Implement NestJs template',
        type: String,
        required: true,
    })
    // Configure how this field should be validated
    @IsString()
    title: string;

    @ApiProperty({
        description: 'Descriptive text regarding the issue',
        example: 'Lorem ipsum dolor sit amet',
        type: String,
        required: false,
    })
    @IsString()
    description: string | null;
}
