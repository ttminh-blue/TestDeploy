import { CRUD } from '../../common/interfaces/crud.interface';
import CourseDao from '../daos/courses.dao';
import { CourseDto } from '../dto/course.dto';
import { CreateCourseDto } from '../dto/create.course.dto';
import { PatchCourseDto } from '../dto/patch.course.dto';
import { PutCourseDto } from '../dto/put.course.dto';
import debug from 'debug';

const log: debug.IDebugger = debug('app:course-service');

class CoursesService implements CRUD<CourseDto, CreateCourseDto, PutCourseDto, PatchCourseDto> {

  async create(resource: CreateCourseDto) {
    log('creating course', resource);
    const course = await CourseDao.addCourse(resource) as CreateCourseDto;
    return course;
  }

  async deleteById(id: string) {
    log(`delete course by id: ${id}`);
    return await CourseDao.removeCourseById(id) as CourseDto;
  }

  async list(limit: number, page: number) {
    log(`list courses with limit: ${limit}, page: ${page}`);
    return await CourseDao.getCourses(limit, page) as CourseDto[];
  }

  async patchById(id: string, resource: PatchCourseDto) {
    log('patch course', resource);
    return await CourseDao.updateCourseById(id, resource) as PatchCourseDto;
  }

  async getById(id: string) {
    log('read course by id', id);
    return await CourseDao.getCourseById(id) as CourseDto;
  }

  async putById(id: string, resource: PutCourseDto) {
    log('put course', resource);
    return await CourseDao.updateCourseById(id, resource) as PutCourseDto;
  }

  async getCourseByCode(code: string) {
    log('get course by code', code);
    return await CourseDao.getCourseByCode(code) as CourseDto;
  }
}

export default new CoursesService();