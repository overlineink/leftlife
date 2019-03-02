export interface Task {
    taskTitle: string;
    taskTopic: string;
    taskExecuter: {
        ID: string;
        name: string;
        profilePhoto: string;
    };
}

export interface TaskID extends Task {
    id: string;
}
