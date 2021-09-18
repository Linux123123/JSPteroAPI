import { Client } from '../index';
import {
    Schedule,
    ScheduleAttributes,
    ScheduleTaskAttributes,
    SheduleEditOptions,
    TaskEditOptions,
} from '../interfaces/Schedule';

export class scheduleMethods {
    constructor(private readonly client: Client) {}
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @returns An Array of servers schedules
     * @example
     * ```ts
     * const res = await client.getAllSchedules() // res = Schedule[]
     * ```
     * @example
     * ```ts
     * client.getAllSchedules().then((res) => console.log(res)) // res = Schedule[]
     * ```
     */
    public getAllSchedules = async (serverId: string): Promise<Schedule[]> => {
        return this.client.request(
            'GET',
            null,
            'data',
            `/api/client/servers/${serverId}/schedules`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param name - Name of the schedule
     * @param minute - Cron minute syntax
     * @param hour - Cron hour syntax
     * @param dayOfMonth - Cron day of month syntax
     * @param month - Cron month syntax
     * @param dayOfWeek - Cron day of week syntax
     * @param isActive - Whether the schedule should be activated on creation (default true)
     * @param onlyWhenOnline - Whether the schedule should only run when server is on (default true)
     * @returns The schedule information
     * @example
     * ```ts
     * const res = await client.createSchedule('TESTING', '*', '*', '*', '*') // res = ScheduleAttributes
     * ```
     * @example
     * ```ts
     * client.createSchedule('TESTING', '*', '*', '*', '*').then((res) => console.log(res)) // res = ScheduleAttributes
     * ```
     */
    public createSchedule = async (
        serverId: string,
        name: string,
        minute: string,
        hour: string,
        dayOfMonth: string,
        month: string,
        dayOfWeek: string,
        isActive = true,
        onlyWhenOnline = true,
    ): Promise<ScheduleAttributes> => {
        return this.client.request(
            'POST',
            {
                name: name,
                minute: minute,
                hour: hour,
                day_of_month: dayOfMonth,
                month: month,
                day_of_week: dayOfWeek,
                is_active: isActive,
                only_when_online: onlyWhenOnline,
            },
            'attributes',
            `/api/client/servers/${serverId}/schedules`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param scheduleId - Id of the schedule to get info
     * @returns Schedule information
     * @example
     * ```ts
     * const res = await client.getScheduleInfo('7e74354d', 7) // res = ScheduleAttributes
     * ```
     * @example
     * ```ts
     * client.getScheduleInfo('7e74354d', 8).then((res) => console.log(res)) // res = ScheduleAttributes
     * ```
     */
    public getScheduleInfo = async (
        serverId: string,
        scheduleId: number,
    ): Promise<ScheduleAttributes> => {
        return this.client.request(
            'GET',
            null,
            'attributes',
            `/api/client/servers/${serverId}/schedules/${scheduleId}`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param scheduleId - Id of the schedule to edit
     * @param options - Edit schedule options
     * @returns The schedule information
     * @example
     * ```ts
     * const res = await client.editSchedule('7e74354d', 5, { name: 'EditedName' }) // res = ScheduleAttributes
     * ```
     * @example
     * ```ts
     * client.editSchedule('7e74354d', 5, { name: 'EditedName' }).then((res) => console.log(res)) // res = ScheduleAttributes
     * ```
     */
    public editSchedule = async (
        serverId: string,
        scheduleId: number,
        options: SheduleEditOptions,
    ): Promise<ScheduleAttributes> => {
        const schedule = await this.getScheduleInfo(serverId, scheduleId);
        return this.client.request(
            'POST',
            {
                name: options.name ?? schedule.name,
                minute: options.minute ?? schedule.cron.minute,
                hour: options.hour ?? schedule.cron.hour,
                day_of_month: options.dayOfMonth ?? schedule.cron.day_of_month,
                month: options.month ?? schedule.cron.month,
                day_of_week: options.dayOfWeek ?? schedule.cron.day_of_week,
                is_active: options.isActive ?? schedule.is_active,
            },
            'attributes',
            `/api/client/servers/${serverId}/schedules/${scheduleId}`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param scheduleId - Id of the schedule to delete
     * @returns Successfuly deleted schedule!
     * @example
     * ```ts
     * const res = await client.deleteSchedule('7e74354d', 5) // res = Successfuly deleted schedule!
     * ```
     * @example
     * ```ts
     * client.deleteSchedule('7e74354d', 5).then((res) => console.log(res)) // res = Successfuly deleted schedule!
     * ```
     */
    public deleteSchedule = async (
        serverId: string,
        scheduleId: number,
    ): Promise<string> => {
        return this.client.request(
            'DELETE',
            null,
            'Successfuly deleted schedule!',
            `/api/client/servers/${serverId}/schedules/${scheduleId}`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param scheduleId - Id of the schedule to create task for
     * @param action - Action that the schedule should perform (command/power/backup)
     * @param payload - What that action should do. Command or power (start/stop/restart/kill). Backup payload is ignored file list.
     * @param timeOffset - The time offset that the task should run after the schdule is triggered. (default 0)
     * @param continueOnFailure - Should the task continue to work on failure. (default false)
     * @returns The task information
     * @example
     * ```ts
     * const res = await client.createTask('7e74354d', 5, 'power', 'start') // res = ScheduleTaskAttributes
     * ```
     * @example
     * ```ts
     * client.createTask('7e74354d', 5, 'power', 'start').then((res) => console.log(res)) // res = ScheduleTaskAttributes
     * ```
     */
    public createTask = async (
        serverId: string,
        scheduleId: number,
        action: 'command' | 'power' | 'backup',
        payload: string,
        timeOffset = 0,
        continueOnFailure = false,
    ): Promise<ScheduleTaskAttributes> => {
        return this.client.request(
            'POST',
            {
                action: action,
                time_offset: timeOffset,
                payload: payload,
                continue_on_failure: continueOnFailure,
            },
            'attributes',
            `/api/client/servers/${serverId}/schedules/${scheduleId}/tasks`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param scheduleId - ID of the schedule to edit task for
     * @param taskId - ID of the task to edit
     * @returns The task information
     * @example
     * ```ts
     * const res = await client.editTask('7e74354d', 5, 1, { payload: 'restart' }) // res = ScheduleTaskAttributes
     * ```
     * @example
     * ```ts
     * client.editTask('7e74354d', 5, 1, { payload: 'restart' }).then((res) => console.log(res)) // res = ScheduleTaskAttributes
     * ```
     */
    public editTask = async (
        serverId: string,
        scheduleId: number,
        taskId: number,
        options: TaskEditOptions,
    ): Promise<ScheduleTaskAttributes> => {
        const schedule = await this.getScheduleInfo(serverId, scheduleId);
        const task = schedule.relationships.tasks.data.find(
            ({ attributes: { id } }) => id === taskId,
        )?.attributes;
        if (!task) throw new Error('Task could not be found!');
        return this.client.request(
            'POST',
            {
                action: options.action ?? task.action,
                time_offset: options.timeOffset ?? task.time_offset,
                payload: options.payload ?? task.payload,
                continue_on_failure:
                    options.continueOnFailure ?? task.continue_on_failure,
            },
            'attributes',
            `/api/client/servers/${serverId}/schedules/${scheduleId}/tasks/${taskId}`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param scheduleId - ID of the schedule
     * @param taskId - ID of the task to delete
     * @returns Successfuly deleted schedule!
     * @example
     * ```ts
     * const res = await client.deleteTask('7e74354d', 5) // res = Successfuly deleted schedule!
     * ```
     * @example
     * ```ts
     * client.deleteTask('7e74354d', 5).then((res) => console.log(res)) // res = Successfuly deleted schedule!
     * ```
     */
    public deleteTask = async (
        serverId: string,
        scheduleId: number,
        taskId: number,
    ): Promise<string> => {
        return this.client.request(
            'DELETE',
            null,
            'Successfuly deleted task!',
            `/api/client/servers/${serverId}/schedules/${scheduleId}/tasks/${taskId}`,
        );
    };
}
