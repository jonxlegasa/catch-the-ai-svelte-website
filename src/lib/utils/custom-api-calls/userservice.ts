import axiosInstance from "../axiosinstance";



export class UserService {
  static async getCurrentUser(token: string): Promise<any> {
    const response = await axiosInstance.get('/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  }

  static async updateCurrentUser(token: string, userData: any): Promise<any> {
    const response = await axiosInstance.patch('/users/me', userData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  }

  static async getUserById(token: string, id: string): Promise<any> {
    const response = await axiosInstance.get(`/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  }

  static async updateUserById(token: string, id: string, userData: any): Promise<any> {
    const response = await axiosInstance.patch(`/users/${id}`, userData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  }

  static async deleteUserById(token: string, id: string): Promise<void> {
    await axiosInstance.delete(`/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
