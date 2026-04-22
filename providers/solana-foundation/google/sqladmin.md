---
category: compute
description: Managed MySQL, PostgreSQL, SQL Server.
endpoints:
- description: Lists databases in the specified Cloud SQL instance.
  method: GET
  path: v1/projects/{project}/instances/{instance}/databases
  resource: databases
- description: Retrieves a resource containing information about a database inside a Cloud SQL instance.
  method: GET
  path: v1/projects/{project}/instances/{instance}/databases/{database}
  resource: databases
- description: Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the d
  method: POST
  path: v1/projects/{project}/instances/{instance}/databases
  resource: databases
- description: Updates a resource containing information about a database inside a Cloud SQL instance.
  method: PUT
  path: v1/projects/{project}/instances/{instance}/databases/{database}
  resource: databases
- description: Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports p
  method: PATCH
  path: v1/projects/{project}/instances/{instance}/databases/{database}
  resource: databases
- description: Deletes a database from a Cloud SQL instance.
  method: DELETE
  path: v1/projects/{project}/instances/{instance}/databases/{database}
  resource: databases
- description: Retrieves a resource containing information about a backup run.
  method: GET
  path: v1/projects/{project}/instances/{instance}/backupRuns/{id}
  resource: backupRuns
- description: Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological ord
  method: GET
  path: v1/projects/{project}/instances/{instance}/backupRuns
  resource: backupRuns
- description: Creates a new backup run on demand.
  method: POST
  path: v1/projects/{project}/instances/{instance}/backupRuns
  resource: backupRuns
- description: Deletes the backup taken by a backup run.
  method: DELETE
  path: v1/projects/{project}/instances/{instance}/backupRuns/{id}
  resource: backupRuns
- description: Lists users in the specified Cloud SQL instance.
  method: GET
  path: v1/projects/{project}/instances/{instance}/users
  resource: users
- description: Retrieves a resource containing information about a user.
  method: GET
  path: v1/projects/{project}/instances/{instance}/users/{name}
  resource: users
- description: Creates a new user in a Cloud SQL instance.
  method: POST
  path: v1/projects/{project}/instances/{instance}/users
  resource: users
- description: Updates an existing user in a Cloud SQL instance.
  method: PUT
  path: v1/projects/{project}/instances/{instance}/users
  resource: users
- description: Deletes a user from a Cloud SQL instance.
  method: DELETE
  path: v1/projects/{project}/instances/{instance}/users
  resource: users
- description: Retrieves a resource containing information about a Cloud SQL instance.
  method: GET
  path: v1/projects/{project}/instances/{instance}
  resource: instances
- description: Lists instances under a given project.
  method: GET
  path: v1/projects/{project}/instances
  resource: instances
- description: 'Lists all versions of server certificates and certificate authorities (CAs) for the specified instance. There can be up '
  method: GET
  path: v1/projects/{project}/instances/{instance}/listServerCertificates
  resource: instances
- description: 'Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: '
  method: GET
  path: v1/projects/{project}/instances/{instance}/listServerCas
  resource: instances
- description: Lists all versions of EntraID certificates for the specified instance. There can be up to three sets of certificates lis
  method: GET
  path: v1/projects/{project}/instances/{instance}/listEntraIdCertificates
  resource: instances
- description: Execute SQL statements.
  method: POST
  path: v1/projects/{project}/instances/{instance}/executeSql
  resource: instances
- description: Restarts a Cloud SQL instance.
  method: POST
  path: v1/projects/{project}/instances/{instance}/restart
  resource: instances
- description: 'Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate '
  method: POST
  path: v1/projects/{project}/instances/{instance}/addServerCa
  resource: instances
- description: Execute MVU Pre-checks
  method: POST
  path: v1/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade
  resource: instances
- description: Creates a new Cloud SQL instance.
  method: POST
  path: v1/projects/{project}/instances
  resource: instances
- description: Promotes the read replica instance to be an independent Cloud SQL primary instance. Using this operation might cause you
  method: POST
  path: v1/projects/{project}/instances/{instance}/promoteReplica
  resource: instances
- description: Reencrypt CMEK instance with latest key version.
  method: POST
  path: v1/projects/{project}/instances/{instance}/reencrypt
  resource: instances
- description: Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primar
  method: POST
  path: v1/projects/{project}/instances/{instance}/failover
  resource: instances
- description: Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server
  method: POST
  path: v1/projects/{project}/instances/{instance}/addServerCertificate
  resource: instances
- description: Rotates the server certificate version to one previously added with the addServerCertificate method. For instances not u
  method: POST
  path: v1/projects/{project}/instances/{instance}/rotateServerCertificate
  resource: instances
- description: Stops the replication in the read replica instance.
  method: POST
  path: v1/projects/{project}/instances/{instance}/stopReplica
  resource: instances
- description: Switches over from the primary instance to the DR replica instance.
  method: POST
  path: v1/projects/{project}/instances/{instance}/switchover
  resource: instances
- description: Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
  method: POST
  path: v1/projects/{project}/instances/{instance}/demote
  resource: instances
- description: Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
  method: POST
  path: v1/projects/{project}/instances/{instance}/export
  resource: instances
- description: Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
  method: POST
  path: v1/projects/{project}/instances/{instance}/import
  resource: instances
- description: Truncate MySQL general and slow query log tables MySQL only.
  method: POST
  path: v1/projects/{project}/instances/{instance}/truncateLog
  resource: instances
- description: Deletes all client certificates and generates a new server SSL certificate for the instance.
  method: POST
  path: v1/projects/{project}/instances/{instance}/resetSslConfig
  resource: instances
- description: Rotates the server certificate version to one previously added with the addEntraIdCertificate method.
  method: POST
  path: v1/projects/{project}/instances/{instance}/rotateEntraIdCertificate
  resource: instances
- description: Acquire a lease for the setup of SQL Server Reporting Services (SSRS).
  method: POST
  path: v1/projects/{project}/instances/{instance}/acquireSsrsLease
  resource: instances
- description: Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.
  method: POST
  path: v1/projects/{projectsId}:pointInTimeRestore
  resource: instances
- description: Starts the replication in the read replica instance.
  method: POST
  path: v1/projects/{project}/instances/{instance}/startReplica
  resource: instances
- description: Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restar
  method: POST
  path: v1/projects/{project}/instances/{instance}/clone
  resource: instances
- description: Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
  method: POST
  path: v1/projects/{project}/instances/{instance}/demoteMaster
  resource: instances
- description: Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
  method: POST
  path: v1/projects/{project}/instances/{instance}/restoreBackup
  resource: instances
- description: Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServ
  method: POST
  path: v1/projects/{project}/instances/{instance}/rotateServerCa
  resource: instances
- description: Release a lease for the setup of SQL Server Reporting Services (SSRS).
  method: POST
  path: v1/projects/{project}/instances/{instance}/releaseSsrsLease
  resource: instances
- description: Adds a new Entra ID certificate for the specified instance. If an Entra ID certificate was previously added but never us
  method: POST
  path: v1/projects/{project}/instances/{instance}/addEntraIdCertificate
  resource: instances
- description: Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.
  method: PUT
  path: v1/projects/{project}/instances/{instance}
  resource: instances
- description: Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method su
  method: PATCH
  path: v1/projects/{project}/instances/{instance}
  resource: instances
- description: Deletes a Cloud SQL instance.
  method: DELETE
  path: v1/projects/{project}/instances/{instance}
  resource: instances
- description: Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be s
  method: GET
  path: v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
  resource: sslCerts
- description: Lists all of the current SSL certificates for the instance.
  method: GET
  path: v1/projects/{project}/instances/{instance}/sslCerts
  resource: sslCerts
- description: Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certifica
  method: POST
  path: v1/projects/{project}/instances/{instance}/sslCerts
  resource: sslCerts
- description: 'Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the '
  method: POST
  path: v1/projects/{project}/instances/{instance}/createEphemeral
  resource: sslCerts
- description: Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restart
  method: DELETE
  path: v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
  resource: sslCerts
- description: Lists all available database flags for Cloud SQL instances.
  method: GET
  path: v1/flags
  resource: flags
- description: Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see http
  method: GET
  path: v1/projects/{project}/tiers
  resource: tiers
- description: Get Disk Shrink Config for a given instance.
  method: GET
  path: v1/projects/{project}/instances/{instance}/getDiskShrinkConfig
  resource: projects.instances
- description: Get Latest Recovery Time for a given instance.
  method: GET
  path: v1/projects/{project}/instances/{instance}/getLatestRecoveryTime
  resource: projects.instances
- description: Verify External primary instance external sync settings.
  method: POST
  path: v1/projects/{project}/instances/{instance}/verifyExternalSyncSettings
  resource: projects.instances
- description: Start External primary instance migration.
  method: POST
  path: v1/projects/{project}/instances/{instance}/startExternalSync
  resource: projects.instances
- description: Reset Replica Size to primary instance disk size.
  method: POST
  path: v1/projects/{project}/instances/{instance}/resetReplicaSize
  resource: projects.instances
- description: Reschedules the maintenance on the given instance.
  method: POST
  path: v1/projects/{project}/instances/{instance}/rescheduleMaintenance
  resource: projects.instances
- description: Perform Disk Shrink on primary instance.
  method: POST
  path: v1/projects/{project}/instances/{instance}/performDiskShrink
  resource: projects.instances
- description: Retrieves a resource containing information about a backup.
  method: GET
  path: v1/projects/{projectsId}/backups/{backupsId}
  resource: Backups
- description: Lists all backups associated with the project.
  method: GET
  path: v1/projects/{projectsId}/backups
  resource: Backups
- description: Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups.
  method: POST
  path: v1/projects/{projectsId}/backups
  resource: Backups
- description: Updates the retention period and description of the backup. You can use this API to update final backups only.
  method: PATCH
  path: v1/projects/{projectsId}/backups/{backupsId}
  resource: Backups
- description: Deletes the backup.
  method: DELETE
  path: v1/projects/{projectsId}/backups/{backupsId}
  resource: Backups
- description: Retrieves an instance operation that has been performed on an instance.
  method: GET
  path: v1/projects/{project}/operations/{operation}
  resource: operations
- description: Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological orde
  method: GET
  path: v1/projects/{project}/operations
  resource: operations
- description: Cancels an instance operation that has been performed on an instance.
  method: POST
  path: v1/projects/{project}/operations/{operation}/cancel
  resource: operations
- description: Retrieves connect settings about a Cloud SQL instance.
  method: GET
  path: v1/projects/{project}/instances/{instance}/connectSettings
  resource: connect
- description: 'Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the '
  method: POST
  path: v1/projects/{project}/instances/{instance}:generateEphemeralCert
  resource: connect
name: sqladmin
service_url: https://sandbox-pay-google-sqladmin-v2c65mhlba-uc.a.run.app
title: Cloud SQL Admin API
version: v1
---
