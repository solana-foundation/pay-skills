---
category: compute
description: NoSQL document database with real-time sync.
endpoints:
- description: 'Lists information about the supported locations for this service. This method can be called in two ways: * **List all pu'
  method: GET
  path: v1/projects/{projectsId}/locations
  resource: projects.locations
- description: Gets information about a location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}
  resource: projects.locations
- description: Gets information about a backup.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/backups/{backupsId}
  resource: projects.locations.backups
- description: Lists all the backups.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/backups
  resource: projects.locations.backups
- description: Deletes a backup.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/backups/{backupsId}
  resource: projects.locations.backups
- description: Gets information about a database.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}
  resource: projects.databases
- description: List all the databases in the project.
  method: GET
  path: v1/projects/{projectsId}/databases
  resource: projects.databases
- description: Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Clo
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}:exportDocuments
  resource: projects.databases
- description: 'Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs '
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}:importDocuments
  resource: projects.databases
- description: Bulk deletes a subset of documents from Google Cloud Firestore. Documents created or updated after the underlying system
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}:bulkDeleteDocuments
  resource: projects.databases
- description: Create a database.
  method: POST
  path: v1/projects/{projectsId}/databases
  resource: projects.databases
- description: Creates a new database by restoring from an existing backup. The new database must be in the same cloud region or multi-
  method: POST
  path: v1/projects/{projectsId}/databases:restore
  resource: projects.databases
- description: Creates a new database by cloning an existing one. The new database must be in the same cloud region or multi-region loc
  method: POST
  path: v1/projects/{projectsId}/databases:clone
  resource: projects.databases
- description: Updates a database.
  method: PATCH
  path: v1/projects/{projectsId}/databases/{databasesId}
  resource: projects.databases
- description: Deletes a database.
  method: DELETE
  path: v1/projects/{projectsId}/databases/{databasesId}
  resource: projects.databases
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/operations
  resource: projects.databases.operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/operations/{operationsId}
  resource: projects.databases.operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/operations/{operationsId}:cancel
  resource: projects.databases.operations
- description: Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result.
  method: DELETE
  path: v1/projects/{projectsId}/databases/{databasesId}/operations/{operationsId}
  resource: projects.databases.operations
- description: Lists composite indexes.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/indexes
  resource: projects.databases.collectionGroups.indexes
- description: Gets a composite index.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/indexes/{indexesId}
  resource: projects.databases.collectionGroups.indexes
- description: Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the crea
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/indexes
  resource: projects.databases.collectionGroups.indexes
- description: Deletes a composite index.
  method: DELETE
  path: v1/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/indexes/{indexesId}
  resource: projects.databases.collectionGroups.indexes
- description: Gets the metadata and configuration for a Field.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/fields/{fieldsId}
  resource: projects.databases.collectionGroups.fields
- description: Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/fields
  resource: projects.databases.collectionGroups.fields
- description: Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls t
  method: PATCH
  path: v1/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/fields/{fieldsId}
  resource: projects.databases.collectionGroups.fields
- description: Gets a user creds resource. Note that the returned resource does not contain the secret value itself.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/userCreds/{userCredsId}
  resource: projects.databases.userCreds
- description: List all user creds in the database. Note that the returned resource does not contain the secret value itself.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/userCreds
  resource: projects.databases.userCreds
- description: Create a user creds.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/userCreds
  resource: projects.databases.userCreds
- description: Enables a user creds. No-op if the user creds are already enabled.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/userCreds/{userCredsId}:enable
  resource: projects.databases.userCreds
- description: Disables a user creds. No-op if the user creds are already disabled.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/userCreds/{userCredsId}:disable
  resource: projects.databases.userCreds
- description: Resets the password of a user creds.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/userCreds/{userCredsId}:resetPassword
  resource: projects.databases.userCreds
- description: Deletes a user creds.
  method: DELETE
  path: v1/projects/{projectsId}/databases/{databasesId}/userCreds/{userCredsId}
  resource: projects.databases.userCreds
- description: Gets information about a backup schedule.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/backupSchedules/{backupSchedulesId}
  resource: projects.databases.backupSchedules
- description: List backup schedules.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/backupSchedules
  resource: projects.databases.backupSchedules
- description: 'Creates a backup schedule on a database. At most two backup schedules can be configured on a database, one daily backup '
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/backupSchedules
  resource: projects.databases.backupSchedules
- description: Updates a backup schedule.
  method: PATCH
  path: v1/projects/{projectsId}/databases/{databasesId}/backupSchedules/{backupSchedulesId}
  resource: projects.databases.backupSchedules
- description: Deletes a backup schedule.
  method: DELETE
  path: v1/projects/{projectsId}/databases/{databasesId}/backupSchedules/{backupSchedulesId}
  resource: projects.databases.backupSchedules
- description: Gets a single document.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{documentsId1}
  resource: projects.databases.documents
- description: Lists documents.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{documentsId1}/{collectionId}
  resource: projects.databases.documents
- description: Lists documents.
  method: GET
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{collectionId}
  resource: projects.databases.documents
- description: Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents:batchGet
  resource: projects.databases.documents
- description: Starts a new transaction.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents:beginTransaction
  resource: projects.databases.documents
- description: Commits a transaction, while optionally updating documents.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents:commit
  resource: projects.databases.documents
- description: Rolls back a transaction.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents:rollback
  resource: projects.databases.documents
- description: Runs a query.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{documentsId1}:runQuery
  resource: projects.databases.documents
- description: Executes a pipeline query.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents:executePipeline
  resource: projects.databases.documents
- description: Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an ag
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{documentsId1}:runAggregationQuery
  resource: projects.databases.documents
- description: 'Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition '
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{documentsId1}:partitionQuery
  resource: projects.databases.documents
- description: Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not RES
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents:write
  resource: projects.databases.documents
- description: Listens to changes. This method is only available via gRPC or WebChannel (not REST).
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents:listen
  resource: projects.databases.documents
- description: Lists all the collection IDs underneath a document.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{documentsId1}:listCollectionIds
  resource: projects.databases.documents
- description: 'Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply '
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents:batchWrite
  resource: projects.databases.documents
- description: Creates a new document.
  method: POST
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{collectionId}
  resource: projects.databases.documents
- description: Updates or inserts a document.
  method: PATCH
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{documentsId1}
  resource: projects.databases.documents
- description: Deletes a document.
  method: DELETE
  path: v1/projects/{projectsId}/databases/{databasesId}/documents/{documentsId}/{documentsId1}
  resource: projects.databases.documents
name: firestore
service_url: https://firestore.googleapis.com/
title: Cloud Firestore API
version: v1
---
