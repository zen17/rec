import { Controller, Post, Logger, Get } from '@nestjs/common';
import { StorageGcp } from '../models/storage-gcp';

@Controller('storage-gcp')
export class StorageGcpController {

    @Get('upload')
    async uploadFileTest() {
        const storageGcp = new StorageGcp();
      return  await storageGcp.uploadFileTest().catch((err) => Logger.log(err));
    }

}
