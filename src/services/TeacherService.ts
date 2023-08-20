import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { TeacherDetail, Review } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTeacher(): Promise<AxiosResponse<TeacherDetail[]>> {
    return apiClient.get<TeacherDetail[]>('/teacher')
  },
  getTeacherById(id: number): Promise<AxiosResponse<TeacherDetail>> {
    return apiClient.get<TeacherDetail>('teacher/' + id.toString())
  },
  getTeacherReviews(id: number): Promise<AxiosResponse<Review[]>> {
    return apiClient.get<Review[]>(`teacher/${id}/reviews`)
  }
}
