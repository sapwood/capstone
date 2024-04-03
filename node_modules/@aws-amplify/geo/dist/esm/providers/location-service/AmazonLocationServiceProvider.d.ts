import { AmazonLocationServiceDeleteGeofencesResults, AmazonLocationServiceGeofence, AmazonLocationServiceGeofenceOptions, AmazonLocationServiceListGeofenceOptions, AmazonLocationServiceMapStyle, Coordinates, GeoConfig, GeoProvider, GeofenceId, GeofenceInput, ListGeofenceResults, Place, SaveGeofencesResults, SearchByCoordinatesOptions, SearchByTextOptions, SearchForSuggestionsResults, searchByPlaceIdOptions } from '../../types';
export declare class AmazonLocationServiceProvider implements GeoProvider {
    static CATEGORY: string;
    static PROVIDER_NAME: string;
    /**
     * @private
     */
    private _config;
    private _credentials;
    /**
     * Initialize Geo with AWS configurations
     * @param {Object} config - Configuration object for Geo
     */
    constructor(config?: GeoConfig);
    /**
     * get the category of the plugin
     * @returns {string} name of the category
     */
    getCategory(): string;
    /**
     * get provider name of the plugin
     * @returns {string} name of the provider
     */
    getProviderName(): string;
    /**
     * Get the map resources that are currently available through the provider
     * @returns {AmazonLocationServiceMapStyle[]}- Array of available map resources
     */
    getAvailableMaps(): AmazonLocationServiceMapStyle[];
    /**
     * Get the map resource set as default in amplify config
     * @returns {AmazonLocationServiceMapStyle} - Map resource set as the default in amplify config
     */
    getDefaultMap(): AmazonLocationServiceMapStyle;
    /**
     * Search by text input with optional parameters
     * @param  {string} text The text string that is to be searched for
     * @param  {SearchByTextOptions} options Optional parameters to the search
     * @returns {Promise<Place[]>} - Promise resolves to a list of Places that match search parameters
     */
    searchByText(text: string, options?: SearchByTextOptions): Promise<Place[]>;
    /**
     * Search for suggestions based on the input text
     * @param  {string} text The text string that is to be searched for
     * @param  {SearchByTextOptions} options Optional parameters to the search
     * @returns {Promise<SearchForSuggestionsResults>} - Resolves to an array of search suggestion strings
     */
    searchForSuggestions(text: string, options?: SearchByTextOptions): Promise<SearchForSuggestionsResults>;
    private _verifyPlaceId;
    searchByPlaceId(placeId: string, options?: searchByPlaceIdOptions): Promise<Place | undefined>;
    /**
     * Reverse geocoding search via a coordinate point on the map
     * @param coordinates Coordinates array for the search input
     * @param options Options parameters for the search
     * @returns {Promise<Place>} - Promise that resolves to a place matching search coordinates
     */
    searchByCoordinates(coordinates: Coordinates, options?: SearchByCoordinatesOptions): Promise<Place>;
    /**
     * Create geofences inside of a geofence collection
     * @param geofences Array of geofence objects to create
     * @param options Optional parameters for creating geofences
     * @returns a promise that resolves to an object that conforms to {@link SaveGeofencesResults}:
     *   successes: list of geofences successfully created
     *   errors: list of geofences that failed to create
     */
    saveGeofences(geofences: GeofenceInput[], options?: AmazonLocationServiceGeofenceOptions): Promise<SaveGeofencesResults>;
    /**
     * Get geofence from a geofence collection
     * @param geofenceId string
     * @param options Optional parameters for getGeofence
     * @returns {Promise<AmazonLocationServiceGeofence>} - Promise that resolves to a geofence object
     */
    getGeofence(geofenceId: GeofenceId, options?: AmazonLocationServiceGeofenceOptions): Promise<AmazonLocationServiceGeofence>;
    /**
     * List geofences from a geofence collection
     * @param  options ListGeofenceOptions
     * @returns a promise that resolves to an object that conforms to {@link ListGeofenceResults}:
     *   entries: list of geofences - 100 geofences are listed per page
     *   nextToken: token for next page of geofences
     */
    listGeofences(options?: AmazonLocationServiceListGeofenceOptions): Promise<ListGeofenceResults>;
    /**
     * Delete geofences from a geofence collection
     * @param geofenceIds string|string[]
     * @param options GeofenceOptions
     * @returns a promise that resolves to an object that conforms to {@link AmazonLocationServiceDeleteGeofencesResults}:
     *  successes: list of geofences successfully deleted
     *  errors: list of geofences that failed to delete
     */
    deleteGeofences(geofenceIds: string[], options?: AmazonLocationServiceGeofenceOptions): Promise<AmazonLocationServiceDeleteGeofencesResults>;
    /**
     * @private
     */
    private _ensureCredentials;
    private _refreshConfig;
    private _verifyMapResources;
    private _verifySearchIndex;
    private _verifyGeofenceCollections;
    private _AmazonLocationServiceBatchPutGeofenceCall;
    private _AmazonLocationServiceBatchDeleteGeofenceCall;
}
