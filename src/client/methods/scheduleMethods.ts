import { Client } from '..';
import {
    Schedule,
    ScheduleAttributes,
    SheduleEditOptions,
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
    public async getAllSchedules(serverId: string): Promise<Schedule[]> {
        return this.client.request(
            'GET',
            null,
            'data',
            `/api/client/servers/${serverId}/schedules`,
        );
    }
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param name - Name of the schedule
     * @param minute - Cron minute syntax
     * @param hour - Cron hour syntax
     * @param dayOfMonth - Cron day of month syntax
     * @param month - Cron month syntax
     * @param dayOfWeek - Cron day of week syntax
     * @param isActive - Whether the schedule should be activated on creation (default true)
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
    public async createSchedule(
        serverId: string,
        name: string,
        minute: string,
        hour: string,
        dayOfMonth: string,
        month: string,
        dayOfWeek: string,
        isActive = true,
    ): Promise<ScheduleAttributes> {
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
            },
            'attributes',
            `/api/client/servers/${serverId}/schedules`,
        );
    }
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
    public async getScheduleInfo(
        serverId: string,
        scheduleId: number,
    ): Promise<ScheduleAttributes> {
        return this.client.request(
            'GET',
            null,
            'attributes',
            `/api/client/servers/${serverId}/schedules/${scheduleId}`,
        );
    }
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
    public async editSchedule(
        serverId: string,
        scheduleId: number,
        options: SheduleEditOptions,
    ): Promise<ScheduleAttributes> {
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
    }
}
