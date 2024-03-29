import { makeOptions, MakeOpts, paginate } from '../../modules/Functions';
import {
  EditLocationOptions,
  Location,
  LocationAttributes,
  LocationFilterInput,
  LocationIncludeInput,
  Locations
} from '../interfaces/Location';
import { Application } from '../index';

export class locationMethods {
  constructor(private readonly application: Application) {}
  /**
   * @internal
   */
  private getLocations = async (options: MakeOpts): Promise<Locations> => {
    return this.application.request(
      'GET',
      null,
      '',
      `/api/application/locations${makeOptions(options)}`
    );
  };
  /**
   * @param options - Include information about locations relationships
   * @param filter - Filter Location by specific fields and values
   * @returns Array of locations
   * @example
   * ```ts
   * const res = await app.getAllLocations() // res = Location[]
   * ```
   * @example
   * ```ts
   * app.getAllLocations().then((res) => console.log(res)) // res = Location[]
   * ```
   */
  public getAllLocations = async (
    options?: LocationIncludeInput,
    filter?: LocationFilterInput
  ): Promise<Location[]> => {
    return await paginate<Location>(this.getLocations.bind(this), {
      includes: { ...options },
      filter
    });
  };
  /**
   * @param locationId - The location id to get information about
   * @param options - Include information about locations relationships
   * @returns Location information
   * @example
   * ```ts
   * const res = await app.getLocationInfo(1) // res = LocationAttributes
   * ```
   * @example
   * ```ts
   * app.getLocationInfo(1).then((res) => console.log(res)) // res = LocationAttributes
   * ```
   */
  public getLocationInfo = async (
    locationId: number,
    options?: LocationIncludeInput
  ): Promise<LocationAttributes> => {
    return this.application.request(
      'GET',
      null,
      'attributes',
      `/api/application/locations/${locationId}${makeOptions({
        includes: { ...options }
      })}`
    );
  };
  /**
   * @param shortName - The short name of the new location
   * @param description - The description of location
   * @param options - Include information about locations relationships
   * @returns Location information
   * @example
   * ```ts
   * const res = await app.createLocation('Home') // res = LocationAttributes
   * ```
   * @example
   * ```ts
   * app.createLocation('Home').then((res) => console.log(res)) // res = LocationAttributes
   * ```
   */
  public createLocation = async (
    shortName: string,
    description?: string,
    options?: LocationIncludeInput
  ): Promise<LocationAttributes> => {
    return this.application.request(
      'POST',
      {
        short: shortName,
        long: description ? description : ''
      },
      'attributes',
      `/api/application/locations${makeOptions({
        includes: { ...options }
      })}`
    );
  };
  /**
   * @param locationId - The location id to edit
   * @param options - Location edit options
   * @returns Location information
   * @example
   * ```ts
   * const res = await app.editLocation(1, 'Homie') // res = LocationAttributes
   * ```
   * @example
   * ```ts
   * app.editLocation(1, undefined, 'Very good locaiton').then((res) => console.log(res)) // res = LocationAttributes
   * ```
   */
  public editLocation = async (
    locationId: number,
    options: EditLocationOptions
  ): Promise<LocationAttributes> => {
    const location = await this.getLocationInfo(locationId);
    return this.application.request(
      'PATCH',
      {
        short: options.shortName ?? location.short,
        long: options.description ?? location.long
      },
      'attributes',
      `/api/application/locations/${locationId}${makeOptions({
        includes: { ...options.options }
      })}`
    );
  };
  /**
   * @param locationId - The location id to delete
   * @returns Successfully deleted the location!
   * @example
   * ```ts
   * const res = await app.deleteLocation(1) // res = Successfully deleted the location!
   * ```
   * @example
   * ```ts
   * app.deleteLocation(1).then((res) => console.log(res)) // res = Successfully deleted the location!
   * ```
   */
  public deleteLocation = async (locationId: number): Promise<string> => {
    return this.application.request(
      'DELETE',
      null,
      'Successfully deleted the location!',
      `/api/application/locations/${locationId}`
    );
  };
}
