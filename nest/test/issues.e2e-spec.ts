import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateIssueDto } from 'src/issue/dto/create-issue.dto';

describe('Issue controller (e2e)', () => {
    let app: INestApplication;
    const issuesPath = '/issues/';

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('should /GET all issues', () => {
        return request(app.getHttpServer())
            .get(issuesPath)
            .expect(200)
            .expect((res) => {
                expect(res.body instanceof Array).toBe(true);
            });
    });

    it('should /GET specific issue', async () => {
        const createdIssue = await request(app.getHttpServer())
            .post(issuesPath)
            .send({ title: 'Add endpoint for health check' } as CreateIssueDto)
            .expect(201)
            .then((res) => res.body);

        return request(app.getHttpServer())
            .get(issuesPath + createdIssue.id)
            .expect(200)
            .expect(createdIssue);
    });
});
