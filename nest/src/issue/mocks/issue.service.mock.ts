import { IssueService } from '../issue.service';

export const issueServiceMock: Partial<IssueService> = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
};
