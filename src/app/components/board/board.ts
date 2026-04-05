import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskService } from '../../services/task';

@Component({
    selector: 'app-board',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './board.html',
    styleUrl: './board.css'
})
export class Board {

    statuses: TaskStatus[] = ['TODO', 'DOING', 'DONE'];

    constructor(private taskService: TaskService, private router: Router) {}

    getTasksByStatus(status: TaskStatus): Task[] {
        return this.taskService.getTasksByStatus(status);
    }

    onEdit(task: Task): void {
        this.router.navigate(['/form', task.id]);
    }

    onDelete(task: Task): void {
        this.taskService.deleteTask(task.id);
    }
}