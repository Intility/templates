import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOAuth2, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AdminApiScope } from './../config/swagger';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssueDto } from './dto/issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { IssueService } from './issue.service';

/**
 * Create a controller that handles incoming requests.
 * Official Nest Documentation: https://docs.nestjs.com/controllers
 * 
 * All Routes are decorated with a HTTP method, 
 * as well as OpenApi specific decorators for setting properties for Swagger Documentation
 * Official Nest Documentation: https://docs.nestjs.com/openapi/operations
 */

@Controller({ path: 'issues', version: '1' }) // Set controller prefix and api version for all endpoints in this controller
@ApiOAuth2([ AdminApiScope ]) 	              // Set Swagger OAuth scope
@ApiTags('Issues')				                    // Set Swagger Tag
export class IssueController {

	// Inject IssueService through Dependency injection
	// Official Nest Documentation: https://docs.nestjs.com/providers#dependency-injection
  constructor(private readonly issueService: IssueService) {}

	@Post()
	@ApiCreatedResponse({ description: 'Created issue', type: IssueDto })
	@ApiOperation({
        description: 'Some example text to show that you can send a description',
        summary: 'Create a new issue',
    })
  	public create(@Body() createIssueDto: CreateIssueDto) {
    	return this.issueService.create(createIssueDto);
  	}

	@Get()
	@ApiOperation({ summary: 'Get all issues in database' })
	@ApiOkResponse({ description: 'List of all issues in database', type: IssueDto, isArray: true })
  	public findAll() {
    	return this.issueService.findAll();
  	}

	@Get(':id')
	@ApiOperation({ summary: 'Query for singe issue in database by its ID' })
	@ApiParam({ name: 'id', allowEmptyValue: false, example: 11111, description: "The issues ID" })
	@ApiOkResponse({ description: 'Found issue', type: IssueDto})
  	public findOne(@Param('id', ParseIntPipe) id: number) {
    	return this.issueService.findOne(id);
  	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update an issue by its ID' })
	@ApiBody({type: UpdateIssueDto})
	@ApiParam({ name: 'id', allowEmptyValue: false, example: 11111, description: "The issues ID" })
	@ApiOkResponse({ description: 'Updated issue', type: IssueDto})
	public update(@Param('id', ParseIntPipe) id: number, @Body() updateIssueDto: UpdateIssueDto) {
    	return this.issueService.update(id, updateIssueDto);
  	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete an issue by its ID' })
	@ApiParam({ name: 'id', allowEmptyValue: false, example: 11111, description: "The issues ID" })
  	@HttpCode(HttpStatus.NO_CONTENT)
  	public remove(@Param('id', ParseIntPipe) id: number) {
    	return this.issueService.remove(id);
  	}
}
