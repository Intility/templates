import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issue } from './entities/issue.entity';
import { IssueRepository } from './issue.repository';
import { IssueService } from './issue.service';
import { issueRepositoryMock } from './mocks/issue.repository.mock';

describe('IssueService', () => {
    let service: IssueService;
    let repository: IssueRepository;
    let mockIssue: Issue;
    let readSpy: jest.SpyInstance;

    beforeEach(async () => {
        // Nest provides utilities for creating a testing module to test classes https://docs.nestjs.com/fundamentals/testing#testing-utilities
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IssueService,
                // IssueService needs an IssueRepository, so we mock it to be able to test the service in isolation
                { provide: IssueRepository, useValue: issueRepositoryMock },
            ],
        }).compile();

        service = module.get<IssueService>(IssueService);
        repository = module.get<IssueRepository>(IssueRepository);

        mockIssue = {
            title: 'Write more tests',
            description: 'We need more tests for the issue service',
            id: expect.any(Number),
            created: expect.stringContaining(new Date().toISOString().substring(0, 11)),
            open: true,
        };
        readSpy = jest.spyOn(repository, 'read').mockReturnValue([mockIssue]);
    });

    afterEach(() => jest.resetAllMocks());

    describe('create issue', () => {
        let dto: CreateIssueDto;

        beforeEach(() => {
            dto = {
                title: mockIssue.title,
                description: mockIssue.description,
            };
        });

        it('should call the repository with expected values when create is called', () => {
            const createSpy = jest.spyOn(repository, 'create');

            service.create(dto);

            expect(createSpy).toHaveBeenCalledTimes(1);
            expect(createSpy).toHaveBeenCalledWith(mockIssue);
        });

        it('should return created issue', () => {
            const issue = service.create(dto);

            expect(issue).toEqual(mockIssue);
        });
    });

    describe('find issue', () => {
        it('should return all issues when calling findAll', () => {
            const issues = service.findAll();

            expect(issues).toEqual([mockIssue]);
            expect(readSpy).toHaveBeenCalledTimes(1);
        });

        it('should return found issue when calling findOne', () => {
            service.findOne(12345);

            expect(readSpy).toHaveBeenCalledTimes(1);
            expect(readSpy).toHaveBeenCalledWith(12345);
        });

        it('should call the repository with expected value when calling findOne', () => {
            const issues = service.findOne(12345);

            expect(issues).toEqual(mockIssue);
        });

        it('should throw not found exception when calling findOne if the issue does not exist', () => {
            readSpy.mockReturnValue([]);

            expect(() => service.findOne(12345)).toThrow(new NotFoundException());
        });
    });

    describe('update issue', () => {
        let dto: UpdateIssueDto;

        beforeEach(() => {
            dto = {
                open: false,
            };
        });

        it('should call the repository with expected values when update is called', () => {
            const createSpy = jest.spyOn(repository, 'update');

            service.update(mockIssue.id, dto);

            expect(createSpy).toHaveBeenCalledTimes(1);
            expect(createSpy).toHaveBeenCalledWith({ ...mockIssue, open: false });
        });

        it('should return updated issue', () => {
            const issue = service.update(mockIssue.id, dto);

            expect(issue).toEqual({ ...mockIssue, open: false });
        });

        it('should throw not found exception when calling update if the issue does not exist', () => {
            readSpy.mockReturnValue([]);

            expect(() => service.update(mockIssue.id, dto)).toThrow(new NotFoundException());
        });
    });

    describe('remove issue', () => {
        it('should call the repository with expected value when calling remove', () => {
            const deleteSpy = jest.spyOn(repository, 'delete');

            service.remove(12345);

            expect(deleteSpy).toHaveBeenCalledTimes(1);
            expect(deleteSpy).toHaveBeenCalledWith(12345);
        });

        it('should throw not found exception when calling remove if the issue does not exist', () => {
            readSpy.mockReturnValue([]);

            expect(() => service.remove(12345)).toThrow(new NotFoundException());
        });
    });
});
