import { Provide } from '@midwayjs/decorator';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user';
import { Photo } from './photo';
import { InjectEntityModel } from '../../../../../src';
@Provide()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  findMyPost() {
    return this.findOne();
  }

  async createSave(u: any) {
    const count = await this.photoModel.count();
    console.log(count)
    return this.manager.save(u);
  }
}
