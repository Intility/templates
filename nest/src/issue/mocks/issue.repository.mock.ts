import { IssueRepository } from '../issue.repository';

export const issueRepositoryMock: Partial<IssueRepository> = {
    read: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
};
