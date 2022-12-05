import { Injectable } from '@nestjs/common';
import { CreateInput } from './dto/create.input';
import { UpdateInput } from './dto/update.input';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

@Injectable()
export class UserService {
  #users = users;

  create({ ...props }: CreateInput) {
    const ids = this.#users.map(({ id }) => id);
    const incremantalId = Math.max(...ids) + 1;
    const user = { id: incremantalId, ...props };
    this.#users.push(user);
    return user;
  }

  findAll() {
    return this.#users;
  }

  findOne(id: number) {
    return this.#users.find((user) => user.id === id);
  }

  update(id: number, updateUserInput: UpdateInput) {
    const [target] = this.#users
      .filter((user) => user.id === id)
      .map((user) => ({ ...user, ...updateUserInput }));
    this.#users = this.#users.filter((user) => user.id !== id).concat(target);
    return target;
  }

  remove(id: number) {
    const target = this.#users.filter((user) => user.id === id);
    this.#users = this.#users.filter((user) => user.id !== id);
    return target;
  }
}
