import { Controller, Get, Logger, Request } from '@nestjs/common';
import { Connection } from 'typeorm';
import { User } from './entities-modules/user/models/user';
import { Business } from './entities-modules/business/models/business';
import { Comment } from './entities-modules/comment/models/comment';

@Controller('api')
export class AppController {

  constructor(private connection: Connection) {
  }

  @Get('test')
  async test(@Request() req) {
    Logger.log('TEST');
    return JSON.stringify({ test: 'SUCCESS' });
  }

  @Get('importtestdata')
  async importTestData(@Request() req) {
    const business1 = new Business();
    business1.title = 'Kafana Staras Srbija';
    business1.description = 'Kafana Stara Srbija je retka kafana i građevina za koju se može reći da je simbol grada, sa svojom dugom tradicijom preko od preko 120. godina. Preko svojih kariranih stoljnjaka „preturila“ je štošta i ispisala istoriju kako grada Niša tako i Srbije.\n' +
      '\n' +
      'Locirana u strogom centru grada uvek je bila mesto okupljanja najrazličitijih ljudi od intelektualne i zanatske elite do probisveta.\n' +
      '\n' +
      'Do samo pre par godina ova kafana je tavorila dok se zub vremena uvlačio u sve zidove ove „lepotice“. Od nedavno kafana je prešla u ruke poznatog niškog privatnika koji je, po nama, uspeo da sačuva i vrati deo nekadašnjeg sjaja.\n' +
      '\n' +
      'Kafana je uvek puna iako broji više od 200 mesta, a na ulazu Vas dočekuju nasmejane hostese, iako to nije usluga koju smo navikli da viđamo u kafanama. Moderno vreme došlo :)';
    business1.thumbUrl = 'https://www.mojakafana.com/uploads/Kafane/15/i/1/Stara%20Srbija_03.JPG';
    business1.qualityMark = 5;
    business1.address = 'Nis, Centar, Medijana 18000';
    business1.latitude = 43.318560;
    business1.longitude = 21.891612;
    business1.phoneNumber = 604445555;
    business1.qualityMark = 5;
    business1.imageUrls = ['https://www.mojakafana.com/uploads/Kafane/15/i/1/Stara%20Srbija_03.JPG', 'https://www.mojakafana.com/uploads/Kafane/15/i/1/Stara%20Srbija_03.JPG'];

    await this.connection.manager.save(business1);

    const business2 = new Business();
    business2.title = 'Pekara Brankovic';
    business2.description = 'Pekara Brakovic opis';
    business2.thumbUrl = 'https://www.mojakafana.com/uploads/Kafane/15/i/1/Stara%20Srbija_03.JPG';
    business2.qualityMark = 5;
    business2.address = 'Nis, Centar, Medijana 18000';
    business2.latitude = 43.318154;
    business2.longitude = 21.895914;
    business2.phoneNumber = 604445555;
    business2.qualityMark = 5;
    business2.imageUrls = ['https://www.mojakafana.com/uploads/Kafane/15/i/1/Stara%20Srbija_03.JPG', 'https://www.mojakafana.com/uploads/Kafane/15/i/1/Stara%20Srbija_03.JPG'];

    await this.connection.manager.save(business2);

    const comment1 = new Comment();
    comment1.text = 'Super kafana nema sta ';
    comment1.photoUrls = ['https://www.mojakafana.com/uploads/Kafane/15/i/1/Stara%20Srbija_03.JPG'];
    comment1.business = business1;
    comment1.qualityMark = 5;
    await this.connection.manager.save(comment1);
    const comment2 = new Comment();
    comment2.text = 'Kafana samo za burzoaziju skupo sve u picku materinu ';
    comment2.photoUrls = ['https://www.mojakafana.com/uploads/Kafane/15/i/1/Stara%20Srbija_03.JPG'];
    comment2.business = business1;
    comment2.qualityMark = 4;
    await this.connection.manager.save(comment2);
    const bob = new User();
    bob.firstName = 'Bob';
    bob.password = 'aaaa';
    bob.lastName = 'aaaa';
    bob.email = 'bob@gmail.com';
    bob.city = 'Nis';
    bob.country = 'Srbija';
    bob.gender = 'male';
    bob.zip = 18000;
    bob.birthDate = '1996-10-17';
    bob.businesses = [business1];
    bob.comments = [comment1];
    await this.connection.manager.save(bob);
    const ned = new User();
    ned.firstName = 'Ned';
    ned.password = 'aaaa';
    ned.lastName = 'aaaa';
    ned.comments = [comment2];
    ned.email = 'ned@gmail.com';
    ned.city = 'Leskovac';
    ned.country = 'Srbija';
    ned.gender = 'male';
    ned.zip = 18000;
    ned.birthDate = '1996-10-17';
    await this.connection.manager.save(ned);
    return JSON.stringify({ test: 'SUCCESS ON TEST IMPORT DATA' });
  }

}
