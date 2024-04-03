import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import { createAmplifyGeocoder } from 'maplibre-gl-js-amplify';
import { useMap, useControl } from 'react-map-gl';
import { useSetUserAgent } from '@aws-amplify/ui-react-core';
import { VERSION } from '../../version.mjs';

const LOCATION_SEARCH_OPTIONS = {
    maplibregl,
    marker: { color: '#3FB1CE' },
    popup: true,
    showResultMarkers: { color: '#3FB1CE' },
    showResultsWhileTyping: true,
};
const LOCATION_SEARCH_CONTAINER = 'geocoder-container';
const LocationSearchControl = ({ position = 'top-right', ...props }) => {
    useControl(() => createAmplifyGeocoder(props), {
        position,
    });
    return null;
};
const LocationSearchStandalone = (props) => {
    const hasMounted = useRef(false);
    useEffect(() => {
        if (!hasMounted.current) {
            createAmplifyGeocoder(props).addTo(`#${LOCATION_SEARCH_CONTAINER}`);
            hasMounted.current = true;
        }
    }, [props]);
    return React.createElement("div", { id: LOCATION_SEARCH_CONTAINER });
};
/**
 * The `<LocationSearch>` component provides location search.
 *
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/geo#location-search)
 *
 * @example
 * // Used as a map control:
 * function App() {
 *   return (
 *     <MapView>
 *       <LocationSearch />
 *     </MapView>
 *   );
 * }
 *
 * @example
 * // Used as a standalone component:
 * function App() {
 *   return <LocationSearch />;
 * }
 */
const LocationSearch = (props) => {
    const { current: map } = useMap();
    useSetUserAgent({
        componentName: 'LocationSearch',
        packageName: 'react-geo',
        version: VERSION,
    });
    /**
     * This logic determines whether the LocationSearch exists as part of a Map component or if it is a standalone component.
     * The `useControl` hook inside `LocationSearchControl` from `react-map-gl` makes it easy to add a control to a map,
     * but throws an error if that map doesn't exist. If the map doesn't exist, the LocationSearch is mounted to a container
     * upon rendering inside the `LocationSearchStandalone`.
     */
    if (map) {
        return React.createElement(LocationSearchControl, { ...LOCATION_SEARCH_OPTIONS, ...props });
    }
    return React.createElement(LocationSearchStandalone, { ...LOCATION_SEARCH_OPTIONS, ...props });
};

export { LocationSearch };
