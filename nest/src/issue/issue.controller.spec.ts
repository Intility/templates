import { CACHE_MANAGER } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';
import { issueServiceMock } from './mocks/issue.service.mock';

/**
 * The issue controller contains next to no logic, so there is little point to testing all of
 * the functions. This file is only here to show how it could be done.
 */
describe('IssueController', () => {
    let controller: IssueController;
    let service: IssueService;

    beforeEach(async () => {
        // Nest provides utilities for creating a testing module to test classes https://docs.nestjs.com/fundamentals/testing#testing-utilities
        const module: TestingModule = await Test.createTestingModule({
            controllers: [IssueController],
            providers: [
                // IssueController needs an IssueService, so we mock it to be able to test the controller in isolation
                { provide: IssueService, useValue: issueServiceMock },
                {
                    provide: CACHE_MANAGER,
                    useValue: {},
                },
            ],
        }).compile();

        controller = module.get<IssueController>(IssueController);
        service = module.get<IssueService>(IssueService);
    });

    afterEach(() => jest.resetAllMocks());

    it('should call the service with expected values when create is called', () => {
        const createSpy = jest.spyOn(service, 'create');
        const dto: CreateIssueDto = {
            title: 'Write more tests',
            description: 'We need more tests for the issue controller',
        };

        controller.create(dto);

        expect(createSpy).toHaveBeenCalledTimes(1);
        expect(createSpy).toHaveBeenCalledWith(dto);
    });
});
