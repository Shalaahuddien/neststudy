import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  // @Render('index')
  // root() {
  //   return {message: 'Hello World!'};
  // }
  @Render('index')
  root()
  {
    let dataUser = 
    [
      {
        nama: "halah",
        kelas: "H"
      },
      {
        nama: "huluh",
        kelas: "H"
      },
      {
        nama: "heleh",
        kelas: "H"
      }
    ];

    return {message: '<h1>hilih</h1>',dataUser};
  }
}
