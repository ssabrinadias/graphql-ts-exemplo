import {
  Resolver, Query, Mutation, Arg,
} from 'type-graphql';
import { plainToClass } from 'class-transformer';

import * as crypto from 'crypto';
import { JuridicalPersonInput } from '../entities/juridicalPerson/juridicalPerson.input';
import { IPerson } from '../entities/person/person.interface';
import { JuridicalPerson } from '../entities/juridicalPerson/juridicalPerson.type';
import { NaturalPersonInput } from '../entities/naturalPerson/naturalPerson.input';
import { NaturalPerson } from '../entities/naturalPerson/naturalPerson.type';

// nao considerar essa parte do codigo é apenas para o exemplo, deve ser usado em um helper
export function getId(): string {
  const randomNumber = Math.random();
  const hash = crypto.createHash('sha256');
  hash.update(randomNumber.toString());
  return hash.digest('hex');
}
@Resolver()
export default class UserInheritance {
  private readonly personsRegistry: IPerson[] = [];

  constructor() {
    const natural = plainToClass(NaturalPerson, {
      id: getId(),
      name: 'Sabrina Dias',
      cpf: '12345678910',
    });
    this.personsRegistry.push(natural);
    const juridical = plainToClass(JuridicalPerson, {
      id: getId(),
      name: 'PicPay',
      cnpj: '10987654321',
    });
    this.personsRegistry.push(juridical);
  }

  @Query((returns) => [IPerson])
  persons(): IPerson[] {
    return this.personsRegistry;
  }

  @Mutation()
  addJuricialPerson(@Arg('input') input: JuridicalPersonInput): JuridicalPerson {
    const data = plainToClass(JuridicalPerson, {
      id: getId(),
      name: input.name,
      cnpj: input.cnpj,
    });
    this.personsRegistry.push(data);
    return data;
  }

  @Mutation()
  addNaturalPerson(@Arg('input') input: NaturalPersonInput): NaturalPerson {
    const data = plainToClass(NaturalPerson, {
      id: getId(),
      name: input.name,
      cpf: input.cpf,
    });
    this.personsRegistry.push(data);
    return data;
  }
}
