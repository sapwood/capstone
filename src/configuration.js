// This configuration file is a single place to provide any values to set up the app

export const IDENTITY_POOL_ID =
  "us-east-1:35618306-8a14-4c5b-9c1e-70e72f48a15a"; // REQUIRED - Amazon Cognito Identity Pool ID

export const REGION = "us-east-1"; // REQUIRED - Amazon Cognito Region

export const MAP = {
  NAME: "WorkshopMap", // REQUIRED - Amazon Location Service map resource name
  STYLE: "VectorHereExplore", // REQUIRED - String representing the style of map resource


};

export const PLACE = "WorkshopIndex"; // REQUIRED - Amazon Location Service place index resource name

export const ROUTE = "WorkshopRoutes"; // REQUIRED - Amazon Location Service route calculator resource name

export const GEOFENCE = "WorkshopCollection"; // REQUIRED - Amazon Location Service geofence collection resource name

export const TRACKER = "WorkshopAssets"; // REQUIRED - Amazon Location Service tracker resource name

export const TRACKER_SIMULATED_DEVICE = "Test3"; // REQUIRED - Simulated Device ID (Defaulting to Vehicle-1)
