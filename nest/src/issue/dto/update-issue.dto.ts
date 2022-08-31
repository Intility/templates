import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateIssueDto } from './create-issue.dto';

export class UpdateIssueDto extends PartialType(CreateIssueDto) {
    // Configuration for Open API spec
    @ApiProperty({
        type: Boolean,
        example: true,
        description: 'Is the issue open, or closed?',
        required: false,
    })
    // Configure how this field should be validated
    @IsOptional()
    @IsBoolean()
    open?: boolean;
}
