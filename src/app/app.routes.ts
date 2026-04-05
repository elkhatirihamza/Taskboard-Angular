import { Routes } from '@angular/router';
import { Board } from './components/board/board';
import { TaskForm } from './components/task-form/task-form';

export const routes: Routes = [
    { path: 'tasks',    component: Board },
    { path: 'form',     component: TaskForm },
    { path: 'form/:id', component: TaskForm },
    { path: '',         redirectTo: 'tasks', pathMatch: 'full' },
];