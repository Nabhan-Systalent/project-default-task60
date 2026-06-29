import { Injectable } from '@nestjs/common';
import { ProjectResponse } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectResponse[] = [
    { id: '1', name: 'Alpha Project' },
    { id: '2', name: 'Beta Project' },
  ];

  async findAll(): Promise<ProjectResponse[]> {
    return this.projects;
  }

  async delete(id: string): Promise<void> {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
