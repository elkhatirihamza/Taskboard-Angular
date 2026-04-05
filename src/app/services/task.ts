import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {

    private nextId = 11;

    private tasks: Task[] = [
        { id: 1,  title: 'A first task',               description: 'This is the description of my first task',      status: 'TODO'  },
        { id: 2,  title: 'A second task',              description: 'This is the description of my second task',     status: 'TODO'  },
        { id: 3,  title: 'A third task',               description: 'This is the description of my third task',      status: 'TODO'  },
        { id: 4,  title: 'A fourth task',              description: 'This is the description of my fourth task',     status: 'TODO'  },
        { id: 5,  title: 'A task in progress',         description: 'This task is in progress but not finished yet', status: 'DOING' },
        { id: 6,  title: 'A task already done',        description: 'This task is done!',                            status: 'DONE'  },
        { id: 7,  title: 'Another task already done',  description: 'This one is very important and I am glad it is finally done', status: 'DONE' },
        { id: 8,  title: 'An urgent task in progress', description: 'I really need to do this task asap',            status: 'DOING' },
        { id: 9,  title: 'An optional task',           description: 'This task is not urgent',                       status: 'TODO'  },
        { id: 10, title: 'Another task in progress',   description: 'It would be nice if it is done soon',           status: 'DOING' },
    ];

    getTasksByStatus(status: TaskStatus): Task[] {
        return this.tasks.filter(t => t.status === status);
    }

    getTaskById(id: number): Task | undefined {
        return this.tasks.find(t => t.id === id);
    }

    addTask(title: string, description: string, status: TaskStatus): void {
        this.tasks.push({ id: this.nextId++, title, description, status });
    }

    updateTask(id: number, title: string, description: string, status: TaskStatus): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.title = title;
            task.description = description;
            task.status = status;
        }
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}