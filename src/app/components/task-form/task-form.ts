import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskStatus } from '../../models/task.model';
import { TaskService } from '../../services/task';

@Component({
    selector: 'app-task-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './task-form.html',
    styleUrl: './task-form.css'
})
export class TaskForm implements OnInit {

    isEdit = false;
    taskId = 0;

    title = '';
    description = '';
    status: TaskStatus = 'TODO';

    statuses: TaskStatus[] = ['TODO', 'DOING', 'DONE'];

    constructor(
        private taskService: TaskService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEdit = true;
            this.taskId = +id;
            const task = this.taskService.getTaskById(this.taskId);
            if (task) {
                this.title = task.title;
                this.description = task.description;
                this.status = task.status;
            }
        }
    }

    onSubmit(): void {
        if (this.isEdit) {
            this.taskService.updateTask(this.taskId, this.title, this.description, this.status);
        } else {
            this.taskService.addTask(this.title, this.description, this.status);
        }
        this.router.navigate(['/tasks']);
    }

    onCancel(): void {
        this.router.navigate(['/tasks']);
    }
}