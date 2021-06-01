/** @module ClientSchedule */

export interface ScheduleCron {
    day_of_week: string;
    day_of_month: string;
    hour: string;
    month: string;
    minute: string;
}

export interface ScheduleTaskAttributes {
    id: number;
    sequence_id: number;
    action: string;
    payload: string;
    time_offset: number;
    is_queued: boolean;
    created_at: string;
    updated_at: string;
}

export interface ScheduleTask {
    object: 'schedule_task';
    attributes: ScheduleTaskAttributes;
}

export interface ScheduleTasks {
    object: string;
    data: ScheduleTask[];
}

export interface ScheduleRelationships {
    tasks: ScheduleTasks;
}

export interface ScheduleAttributes {
    id: number;
    name: string;
    cron: ScheduleCron;
    is_active: boolean;
    is_processing: boolean;
    last_run_at: string | null;
    next_run_at: string;
    created_at: string;
    updated_at: string;
    relationships: ScheduleRelationships;
}

export interface Schedule {
    object: 'server_schedule';
    attributes: ScheduleAttributes;
}

export interface ScheduleList {
    object: 'list';
    data: Schedule[];
}

export interface SheduleEditOptions {
    /** Schedule name */
    name?: string;
    /** Cron minute syntax */
    minute?: string;
    /** Cron hour syntax */
    hour?: string;
    /** Cron day of month syntax */
    dayOfMonth?: string;
    /** Cron month syntax */
    month?: string;
    /** Cron day of week syntax */
    dayOfWeek?: string;
    /** Whether the schedule should be activated on creation */
    isActive?: boolean;
}
