import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: "'name' é utilizado para exibir dados no perfil",
    example: 'Higor Koakovski',
  })
  name: string;

  @ApiProperty({
    description: "'email' será utilizado para autênticação na API",
    example: 'example@email.com',
  })
  email: string;

  @ApiProperty({
    description: "'password' será utilizada para autênticação na API",
    example: '@Abc12345',
  })
  password: string;
}
