import { ApiProperty } from '@nestjs/swagger';

export class IssueDto {
    @ApiProperty({
        type: Number,
        example: 11111,
        description: 'Unique ID for the issue',
        required: true,
    })
    id: number;

    @ApiProperty({
        description: 'Title of the issue',
        example: 'Implement NestJs template',
        type: String,
        required: true,
    })
    title: string;

    @ApiProperty({
        description: 'Descriptive text regarding the issue',
        example: 'Lorem ipsum dolor sit amet',
        type: String,
        required: false,
    })
    description: string | null;

    @ApiProperty({
        type: Boolean,
        example: true,
        description: 'Is the issue open, or closed?',
        required: true,
    })
    open: boolean;

    @ApiProperty({
        type: String,
        example: '2022-08-25T08:34:55.210Z',
        description: 'Timestamp for when the issue was created',
        required: true,
    })
    created: string;
}
