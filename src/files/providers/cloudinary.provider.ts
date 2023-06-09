import { v2 } from 'cloudinary';


export const CloudinaryProvider = {
  useFactory: (): any => {
    return v2.config({
      cloud_name: 'Your cloud name',
      api_key: 'Your api key',
      api_secret: 'Your api secret',
    });
  },
};