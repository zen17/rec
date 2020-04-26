import { Test, TestingModule } from '@nestjs/testing';
import { StorageGcpController } from './storage-gcp.controller';

describe('StorageGcp Controller', () => {
  let controller: StorageGcpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageGcpController],
    }).compile();

    controller = module.get<StorageGcpController>(StorageGcpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
