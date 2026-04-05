export type TaskStatus = 'TODO' | 'DOING' | 'DONE';

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}