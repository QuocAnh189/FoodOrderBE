import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions';
import { IUser, IUserInfo } from '@/interfaces';
import { User, UserInfo } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';
import cloudinary from '@/configs/configImg';

@Service()
export class UserService {
  public async getuser(id: string): Promise<IUser> {
    if (!id) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, 'user not found');
    }
    const user = await User.findById(id).populate('info').exec();
    return user;
  }

  public async getusers(): Promise<IUser[]> {
    const users = await User.find({ isActive: true });
    return users;
  }

  public async updateuser(userData: IUser, id: string): Promise<IUser> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No User with id: ${id}`);
    }
    const user = await User.findByIdAndUpdate(id, userData, {
      new: true,
    });
    return user;
  }

  public async updateuserinfo(userInfoData: Partial<IUserInfo>, id: string): Promise<IUserInfo> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No UserInfo with id: ${id}`);
    }
    const userInfo = await UserInfo.findByIdAndUpdate(id, userInfoData, {
      new: true,
    });
    return userInfo;
  }

  public async deleteavatar(id: string): Promise<any> {
    const res = await cloudinary.uploader.destroy(id);
    if (!res) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No public_id with id: ${id}`);
    }
    return res;
  }
}
