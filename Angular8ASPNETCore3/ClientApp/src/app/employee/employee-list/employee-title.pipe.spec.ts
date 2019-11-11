import { EmployeeTitlePipe } from './employee-title.pipe';

describe('EmployeeTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
