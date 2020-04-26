import { Module } from '@nestjs/common';
import { StorageGcpController } from './storage-gcp/storage-gcp.controller';

@Module({
  controllers: [StorageGcpController]
})
export class GcpModule {}
