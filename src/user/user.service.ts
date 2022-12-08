import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create.input';
import { UpdateUserInput } from './dto/update.input';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

@Injectable()
export class UserService {
  #users = users;

  create(inputs: CreateUserInput) {
    const ids = this.#users.map(({ id }) => id);
    const incremantalId = Math.max(...ids) + 1;
    const user = { id: incremantalId, ...inputs };
    this.#users.push(user);
    return user;
  }

  findAll() {
    return this.#users;
  }

  findOne(id: number) {
    return this.#users.find((user) => user.id === id);
  }

  update(id: number, inputs: UpdateUserInput) {
    const target = this.findOne(id);
    const updated = { ...target, ...inputs };
    this.#users = this.#users.filter((user) => user.id !== id).concat(updated);
    return updated;
  }

  remove(id: number) {
    const removed = this.findOne(id);
    this.#users = this.#users.filter((user) => user.id !== id);
    return removed;
  }
}
