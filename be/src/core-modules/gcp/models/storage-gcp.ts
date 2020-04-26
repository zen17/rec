import {Storage} from '@google-cloud/storage';

export class StorageGcp {

    public storage = new Storage();

    public async uploadFileTest() {
        await this.storage.bucket('recenzija').upload('/home/zen/Documents/rrepo/fe/src/favicon.ico', {
            resumable: false,
            destination: 'test-folder/1afffjj23456-favicon.ico',
            gzip: true,
            metadata: {
                cacheControl: 'public max-age=31536000'
            },
        })
    }

}
