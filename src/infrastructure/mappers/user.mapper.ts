import { User } from '@domain/entities/user.entity';
import { UserEntity } from '@infrastructure/db/entities/user.entity';

export class UserMapper {
  static toDomain(entity: UserEntity): User {
    return new User(
      entity.id,
      entity.name,
      entity.email,
      entity.password,
      entity.roles,
    );
  }

  static toPersistence(user: User): UserEntity {
    const entity = new UserEntity();
    entity.id = user.id ?? undefined;
    entity.name = user.name;
    entity.email = user.email;
    entity.password = user.password;
    entity.roles = user.role;
    return entity;
  }
}
