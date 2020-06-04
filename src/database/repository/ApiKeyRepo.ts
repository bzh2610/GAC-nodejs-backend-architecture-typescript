import ApiKey, { ApiKeyModel } from '../model/ApiKey';


export default class ApiRepo {
  public static async findByKey(key: string): Promise<ApiKey> {
    return ApiKeyModel.findOne({ key: key, status: true }).lean<ApiKey>().exec();
  }



  public static async create(key: String): Promise<ApiKey> {
    
    let version: Number = 1; //TO change : env variable
    let status: Boolean = true;
    let createdAt: Date = new Date();
    let updatedAt: Date = createdAt;
    let metadata: String = "Dev key";

    const newKey = await ApiKeyModel.create({
      key: key,
      version: version,
      metadata: metadata,
      status: true,
      createdAt: createdAt,
      updatedAt: updatedAt
    } as ApiKey);
    return newKey.toObject();

  }

}
