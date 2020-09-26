import { Test, TestingModule } from '@nestjs/testing';
import { Machine.DetailsService } from './machine.details.service';

describe('Machine.DetailsService', () => {
  let service: Machine.DetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Machine.DetailsService],
    }).compile();

    service = module.get<Machine.DetailsService>(Machine.DetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
