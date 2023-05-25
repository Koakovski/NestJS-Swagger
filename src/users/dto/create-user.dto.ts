import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: "'name' é utilizado para exibir dados no perfil",
    example: 'Higor Koakovski',
  })
  name: string;

  /**
   * 'email' será utilizado para autênticação na API
   * @example example@email.com
   */
  email: string;

  /**
   * se 'nickName' for informado ele será utilizado como identificação no lugar do 'name'
   * @example Koakovski
   */
  nickName?: string;

  @ApiProperty({
    description: "'password' será utilizada para autênticação na API",
    example: '@Abc12345',
  })
  password: string;
}
