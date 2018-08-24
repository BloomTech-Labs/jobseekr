const mongoose = require('mongoose');
const chai = require('chai');
const chaihttp = require('chai-http');
const { expect } = chai;

chai.use(chaihttp);

const user = process.env.TEST_USER;
const pass = process.env.TEST_PASS;
const dbUri = process.env.TEST_DB || 'mongodb://localhost/test';

const server = require('./server');

describe(`Jobs`, () => {
  let token;

  before(done => {
    mongoose.Promise = global.Promise;

    mongoose.connect(
      `mongodb://${dbUri}`,
      { user, pass, authSource: 'admin', useNewUrlParser: true },
    );

    const db = mongoose.connection;
    db.on('error', () => console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('\n*~*~*~*~*~*~*~*~*~ we are connected ~*~*~*~*~*~*~*~*~*\n');

      const user = {
        email: 'test@test.com',
        password: 'test',
      };

      chai
        .request(server)
        .post(`/api/signup`)
        .send(user)
        .end((err, res) => {
          token = res.body.token;

          !err
            ? console.log(`TOKEN RECEIVED`)
            : console.log(`ERROR SIGNING UP`);

          done();
        });
    });
  });

  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
      console.log('\n*~*~*~*~*~*~*~*~ we are disconnected *~*~*~*~*~*~*~*~*\n');
    });
  });

  describe(`[POST] /api/jobs`, () => {
    describe(`not using jobId`, () => {
      let job;

      beforeEach(() => {
        job = {
          status: 'Want to Apply',
          notes: '',
          companyName: 'Lambda School',
          position: 'Software Engineer',
          jobId: '',
          jobPostingLink: '',
          pointOfContactName: '',
          contactInfo: '',
          sourceOfJob: 'Source of Job',
          rejectionUrl: '',
          offerUrl: '',
          token,
        };
      });

      afterEach(() => {
        mongoose.connection.db.dropCollection('jobs', _ => {});
      });

      it(`should return a status code of 200 when a job is created`, done => {
        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            expect(res).to.have.status(200);

            done();
          });
      });

      it(`should return the saved job`, done => {
        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            const b = res.body;

            Object.keys(job).forEach(
              k => (b[k] ? expect(job[k]).to.equal(b[k]) : null),
            );

            done();
          });
      });

      it(`should return a status code of 422 when there is a duplicate job with the same company name and position`, done => {
        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            expect(res).to.have.status(200);

            chai
              .request(server)
              .post(`/api/jobs`)
              .send(job)
              .end((err, res) => {
                expect(res).to.have.status(422);

                done();
              });
          });
      });

      it(`should add the job and return a status code of 200 when bypass is set to true`, done => {
        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            expect(res).to.have.status(200);

            chai
              .request(server)
              .post(`/api/jobs`)
              .send({ ...job, bypassDup: true })
              .end((err, res) => {
                expect(res).to.have.status(200);

                done();
              });
          });
      });
    });

    describe(`using jobId`, () => {
      let job;

      beforeEach(() => {
        job = {
          status: 'Want to Apply',
          notes: '',
          companyName: 'Lambda School',
          position: 'Software Engineer',
          jobId: 'ABCDEFG12345',
          jobPostingLink: '',
          pointOfContactName: '',
          contactInfo: '',
          sourceOfJob: 'Source of Job',
          rejectionUrl: '',
          offerUrl: '',
          token,
        };
      });

      afterEach(() => {
        mongoose.connection.db.dropCollection('jobs', _ => {});
      });

      it(`should return a status code of 200 when a job is created with jobId`, done => {
        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            expect(res).to.have.status(200);

            done();
          });
      });

      it(`should return the saved job when it is created with jobId`, done => {
        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            const b = res.body;

            Object.keys(job).forEach(
              k => (b[k] ? expect(job[k]).to.equal(b[k]) : null),
            );

            done();
          });
      });

      it(`should return a status code of 422 when there is a job with the same jobId`, done => {
        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            expect(res).to.have.status(200);

            chai
              .request(server)
              .post(`/api/jobs`)
              .send({ ...job, companyName: 'changed', position: 'changed' })
              .end((err, res) => {
                expect(res).to.have.status(422);

                done();
              });
          });
      });

      it(`should add the job and return a status code of 200 when bypass is true`, done => {
        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            expect(res).to.have.status(200);

            chai
              .request(server)
              .post(`/api/jobs`)
              .send({
                ...job,
                companyName: 'changed',
                position: 'changed',
                bypassDup: true,
              })
              .end((err, res) => {
                expect(res).to.have.status(200);

                done();
              });
          });
      });
    });
  });

  describe(`[PUT] /api/jobs`, () => {
    describe(`not using jobId`, () => {
      let resJob;

      beforeEach(done => {
        const job = {
          status: 'Want to Apply',
          notes: '',
          companyName: 'Lambda School',
          position: 'Software Engineer',
          jobId: '',
          jobPostingLink: '',
          pointOfContactName: '',
          contactInfo: '',
          sourceOfJob: 'Source of Job',
          rejectionUrl: '',
          offerUrl: '',
          token,
        };

        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            expect(res).to.have.status(200);

            resJob = res.body;

            done();
          });
      });

      afterEach(() => {
        mongoose.connection.db.dropCollection('jobs', _ => {});
      });

      it(`should return a status code of 200 when a job is edited`, done => {
        chai
          .request(server)
          .put(`/api/jobs`)
          .send({ ...resJob, companyName: 'LS' })
          .end((err, res) => {
            expect(res).to.have.status(200);

            done();
          });
      });

      it(`should return the edited job`, done => {
        chai
          .request(server)
          .put(`/api/jobs`)
          .send({ ...resJob, companyName: 'LS' })
          .end((err, res) => {
            const b = res.body;

            const localJob = {
              ...resJob,
              companyName: 'LS',
            };

            Object.keys(localJob).forEach(
              k => (b[k] ? expect(localJob[k]).to.equal(b[k]) : null),
            );

            done();
          });
      });

      it(`should return a status code of 422 when there is a duplicate job when editing`, done => {
        const localJob = {
          status: 'Want to Apply',
          notes: '',
          companyName: 'aaa',
          position: 'Software Engineer',
          jobId: '',
          jobPostingLink: '',
          pointOfContactName: '',
          contactInfo: '',
          sourceOfJob: 'Source of Job',
          rejectionUrl: '',
          offerUrl: '',
          token,
        };

        chai
          .request(server)
          .post(`/api/jobs`)
          .send(localJob)
          .end((err, res) => {
            expect(res).to.have.status(200);

            const savedJob = { ...res.body, token };

            chai
              .request(server)
              .put(`/api/jobs`)
              .send({ ...savedJob, companyName: 'Lambda School' })
              .end((err, res) => {
                expect(res).to.have.status(422);

                done();
              });
          });
      });

      it(`should return a status code of 200 when bypass is true while editing a job`, done => {
        const localJob = {
          status: 'Want to Apply',
          notes: '',
          companyName: 'aaa',
          position: 'Software Engineer',
          jobId: '',
          jobPostingLink: '',
          pointOfContactName: '',
          contactInfo: '',
          sourceOfJob: 'Source of Job',
          rejectionUrl: '',
          offerUrl: '',
          token,
        };

        chai
          .request(server)
          .post(`/api/jobs`)
          .send(localJob)
          .end((err, res) => {
            expect(res).to.have.status(200);

            const savedJob = { ...res.body, token };

            chai
              .request(server)
              .put(`/api/jobs`)
              .send({
                ...savedJob,
                companyName: 'Lambda School',
                bypassDup: true,
              })
              .end((err, res) => {
                expect(res).to.have.status(200);

                done();
              });
          });
      });
    });

    describe(`using jobId`, () => {
      let resJob;

      beforeEach(done => {
        const job = {
          status: 'Want to Apply',
          notes: '',
          companyName: 'Lambda School',
          position: 'Software Engineer',
          jobId: 'ABCDE12345',
          jobPostingLink: '',
          pointOfContactName: '',
          contactInfo: '',
          sourceOfJob: 'Source of Job',
          rejectionUrl: '',
          offerUrl: '',
          token,
        };

        chai
          .request(server)
          .post(`/api/jobs`)
          .send(job)
          .end((err, res) => {
            expect(res).to.have.status(200);

            resJob = res.body;

            done();
          });
      });

      afterEach(() => {
        mongoose.connection.db.dropCollection('jobs', _ => {});
      });

      it(`should return a status code of 200 when a job is edited`, done => {
        chai
          .request(server)
          .put(`/api/jobs`)
          .send({ ...resJob, companyName: 'LS' })
          .end((err, res) => {
            expect(res).to.have.status(200);

            done();
          });
      });

      it(`should return the edited job`, done => {
        chai
          .request(server)
          .put(`/api/jobs`)
          .send({ ...resJob, companyName: 'LS' })
          .end((err, res) => {
            const b = res.body;

            const localJob = {
              ...resJob,
              companyName: 'LS',
            };

            Object.keys(localJob).forEach(
              k => (b[k] ? expect(localJob[k]).to.equal(b[k]) : null),
            );

            done();
          });
      });

      it(`should return a status code of 422 when there is a duplicate job when editing`, done => {
        const localJob = {
          status: 'Want to Apply',
          notes: '',
          companyName: 'aaa',
          position: 'Software Engineer',
          jobId: '12345ABCDE',
          jobPostingLink: '',
          pointOfContactName: '',
          contactInfo: '',
          sourceOfJob: 'Source of Job',
          rejectionUrl: '',
          offerUrl: '',
          token,
        };

        chai
          .request(server)
          .post(`/api/jobs`)
          .send(localJob)
          .end((err, res) => {
            expect(res).to.have.status(200);

            const savedJob = { ...res.body, token };

            chai
              .request(server)
              .put(`/api/jobs`)
              .send({
                ...savedJob,
                companyName: 'different',
                jobId: 'ABCDE12345',
              })
              .end((err, res) => {
                expect(res).to.have.status(422);

                done();
              });
          });
      });

      it(`should return a status code of 200 when bypass is true while editing a job`, done => {
        const localJob = {
          status: 'Want to Apply',
          notes: '',
          companyName: 'aaa',
          position: 'Software Engineer',
          jobId: '12345ABCDE',
          jobPostingLink: '',
          pointOfContactName: '',
          contactInfo: '',
          sourceOfJob: 'Source of Job',
          rejectionUrl: '',
          offerUrl: '',
          token,
        };

        chai
          .request(server)
          .post(`/api/jobs`)
          .send(localJob)
          .end((err, res) => {
            expect(res).to.have.status(200);

            const savedJob = { ...res.body, token };

            chai
              .request(server)
              .put(`/api/jobs`)
              .send({
                ...savedJob,
                companyName: 'different',
                jobId: 'ABCDE12345',
                bypassDup: true,
              })
              .end((err, res) => {
                expect(res).to.have.status(200);

                done();
              });
          });
      });
    });
  });
});
