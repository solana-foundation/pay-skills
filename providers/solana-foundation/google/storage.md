---
category: compute
description: Object storage for unstructured data.
endpoints:
- description: Returns the metadata of an Anywhere Cache instance.
  method: GET
  path: b/{bucket}/anywhereCaches/{anywhereCacheId}
  resource: anywhereCaches
- description: Returns a list of Anywhere Cache instances of the bucket matching the criteria.
  method: GET
  path: b/{bucket}/anywhereCaches
  resource: anywhereCaches
- description: Creates an Anywhere Cache instance.
  method: POST
  path: b/{bucket}/anywhereCaches
  resource: anywhereCaches
- description: Pauses an Anywhere Cache instance.
  method: POST
  path: b/{bucket}/anywhereCaches/{anywhereCacheId}/pause
  resource: anywhereCaches
- description: Resumes a paused or disabled Anywhere Cache instance.
  method: POST
  path: b/{bucket}/anywhereCaches/{anywhereCacheId}/resume
  resource: anywhereCaches
- description: Disables an Anywhere Cache instance.
  method: POST
  path: b/{bucket}/anywhereCaches/{anywhereCacheId}/disable
  resource: anywhereCaches
- description: Updates the config(ttl and admissionPolicy) of an Anywhere Cache instance.
  method: PATCH
  path: b/{bucket}/anywhereCaches/{anywhereCacheId}
  resource: anywhereCaches
- description: Returns the ACL entry for the specified entity on the specified bucket.
  method: GET
  path: b/{bucket}/acl/{entity}
  resource: bucketAccessControls
- description: Retrieves ACL entries on the specified bucket.
  method: GET
  path: b/{bucket}/acl
  resource: bucketAccessControls
- description: Creates a new ACL entry on the specified bucket.
  method: POST
  path: b/{bucket}/acl
  resource: bucketAccessControls
- description: Updates an ACL entry on the specified bucket.
  method: PUT
  path: b/{bucket}/acl/{entity}
  resource: bucketAccessControls
- description: Patches an ACL entry on the specified bucket.
  method: PATCH
  path: b/{bucket}/acl/{entity}
  resource: bucketAccessControls
- description: Permanently deletes the ACL entry for the specified entity on the specified bucket.
  method: DELETE
  path: b/{bucket}/acl/{entity}
  resource: bucketAccessControls
- description: Retrieves a list of buckets for a given project.
  method: GET
  path: b
  resource: buckets
- description: Returns metadata for the specified bucket.
  method: GET
  path: b/{bucket}
  resource: buckets
- description: Returns an IAM policy for the specified bucket.
  method: GET
  path: b/{bucket}/iam
  resource: buckets
- description: Returns the storage layout configuration for the specified bucket. Note that this operation requires storage.objects.lis
  method: GET
  path: b/{bucket}/storageLayout
  resource: buckets
- description: Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
  method: GET
  path: b/{bucket}/iam/testPermissions
  resource: buckets
- description: Restores a soft-deleted bucket.
  method: POST
  path: b/{bucket}/restore
  resource: buckets
- description: Initiates a long-running Relocate Bucket operation on the specified bucket.
  method: POST
  path: b/{bucket}/relocate
  resource: buckets
- description: Creates a new bucket.
  method: POST
  path: b
  resource: buckets
- description: Locks retention policy on a bucket.
  method: POST
  path: b/{bucket}/lockRetentionPolicy
  resource: buckets
- description: Updates an IAM policy for the specified bucket.
  method: PUT
  path: b/{bucket}/iam
  resource: buckets
- description: Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take t
  method: PUT
  path: b/{bucket}
  resource: buckets
- description: Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take t
  method: PATCH
  path: b/{bucket}
  resource: buckets
- description: Deletes an empty bucket. Deletions are permanent unless soft delete is enabled on the bucket.
  method: DELETE
  path: b/{bucket}
  resource: buckets
- description: Gets the latest state of a long-running operation.
  method: GET
  path: b/{bucket}/operations/{operationId}
  resource: operations
- description: Lists operations that match the specified filter in the request.
  method: GET
  path: b/{bucket}/operations
  resource: operations
- description: Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, bu
  method: POST
  path: b/{bucket}/operations/{operationId}/cancel
  resource: operations
- description: 'Starts asynchronous advancement of the relocate bucket operation in the case of required write downtime, to allow it to '
  method: POST
  path: b/{bucket}/operations/{operationId}/advanceRelocateBucket
  resource: operations
- description: Stop watching resources through this channel
  method: POST
  path: channels/stop
  resource: channels
- description: Returns the default object ACL entry for the specified entity on the specified bucket.
  method: GET
  path: b/{bucket}/defaultObjectAcl/{entity}
  resource: defaultObjectAccessControls
- description: Retrieves default object ACL entries on the specified bucket.
  method: GET
  path: b/{bucket}/defaultObjectAcl
  resource: defaultObjectAccessControls
- description: Creates a new default object ACL entry on the specified bucket.
  method: POST
  path: b/{bucket}/defaultObjectAcl
  resource: defaultObjectAccessControls
- description: Updates a default object ACL entry on the specified bucket.
  method: PUT
  path: b/{bucket}/defaultObjectAcl/{entity}
  resource: defaultObjectAccessControls
- description: Patches a default object ACL entry on the specified bucket.
  method: PATCH
  path: b/{bucket}/defaultObjectAcl/{entity}
  resource: defaultObjectAccessControls
- description: Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
  method: DELETE
  path: b/{bucket}/defaultObjectAcl/{entity}
  resource: defaultObjectAccessControls
- description: Returns metadata for the specified folder. Only applicable to buckets with hierarchical namespace enabled.
  method: GET
  path: b/{bucket}/folders/{folder}
  resource: folders
- description: Retrieves a list of folders matching the criteria. Only applicable to buckets with hierarchical namespace enabled.
  method: GET
  path: b/{bucket}/folders
  resource: folders
- description: Deletes a folder recursively. Only applicable to buckets with hierarchical namespace enabled.
  method: POST
  path: b/{bucket}/folders/{folder}/deleteRecursive
  resource: folders
- description: Creates a new folder. Only applicable to buckets with hierarchical namespace enabled.
  method: POST
  path: b/{bucket}/folders
  resource: folders
- description: Renames a source folder to a destination folder. Only applicable to buckets with hierarchical namespace enabled.
  method: POST
  path: b/{bucket}/folders/{sourceFolder}/renameTo/folders/{destinationFolder}
  resource: folders
- description: Permanently deletes a folder. Only applicable to buckets with hierarchical namespace enabled.
  method: DELETE
  path: b/{bucket}/folders/{folder}
  resource: folders
- description: Returns metadata of the specified managed folder.
  method: GET
  path: b/{bucket}/managedFolders/{managedFolder}
  resource: managedFolders
- description: Returns an IAM policy for the specified managed folder.
  method: GET
  path: b/{bucket}/managedFolders/{managedFolder}/iam
  resource: managedFolders
- description: Lists managed folders in the given bucket.
  method: GET
  path: b/{bucket}/managedFolders
  resource: managedFolders
- description: Tests a set of permissions on the given managed folder to see which, if any, are held by the caller.
  method: GET
  path: b/{bucket}/managedFolders/{managedFolder}/iam/testPermissions
  resource: managedFolders
- description: Creates a new managed folder.
  method: POST
  path: b/{bucket}/managedFolders
  resource: managedFolders
- description: Updates an IAM policy for the specified managed folder.
  method: PUT
  path: b/{bucket}/managedFolders/{managedFolder}/iam
  resource: managedFolders
- description: Permanently deletes a managed folder.
  method: DELETE
  path: b/{bucket}/managedFolders/{managedFolder}
  resource: managedFolders
- description: View a notification configuration.
  method: GET
  path: b/{bucket}/notificationConfigs/{notification}
  resource: notifications
- description: Retrieves a list of notification subscriptions for a given bucket.
  method: GET
  path: b/{bucket}/notificationConfigs
  resource: notifications
- description: Creates a notification subscription for a given bucket.
  method: POST
  path: b/{bucket}/notificationConfigs
  resource: notifications
- description: Permanently deletes a notification subscription.
  method: DELETE
  path: b/{bucket}/notificationConfigs/{notification}
  resource: notifications
- description: Returns the ACL entry for the specified entity on the specified object.
  method: GET
  path: b/{bucket}/o/{object}/acl/{entity}
  resource: objectAccessControls
- description: Retrieves ACL entries on the specified object.
  method: GET
  path: b/{bucket}/o/{object}/acl
  resource: objectAccessControls
- description: Creates a new ACL entry on the specified object.
  method: POST
  path: b/{bucket}/o/{object}/acl
  resource: objectAccessControls
- description: Updates an ACL entry on the specified object.
  method: PUT
  path: b/{bucket}/o/{object}/acl/{entity}
  resource: objectAccessControls
- description: Patches an ACL entry on the specified object.
  method: PATCH
  path: b/{bucket}/o/{object}/acl/{entity}
  resource: objectAccessControls
- description: Permanently deletes the ACL entry for the specified entity on the specified object.
  method: DELETE
  path: b/{bucket}/o/{object}/acl/{entity}
  resource: objectAccessControls
- description: Retrieves an object or its metadata.
  method: GET
  path: b/{bucket}/o/{object}
  resource: objects
- description: Returns an IAM policy for the specified object.
  method: GET
  path: b/{bucket}/o/{object}/iam
  resource: objects
- description: Retrieves a list of objects matching the criteria.
  method: GET
  path: b/{bucket}/o
  resource: objects
- description: Tests a set of permissions on the given object to see which, if any, are held by the caller.
  method: GET
  path: b/{bucket}/o/{object}/iam/testPermissions
  resource: objects
- description: Concatenates a list of existing objects into a new object in the same bucket.
  method: POST
  path: b/{destinationBucket}/o/{destinationObject}/compose
  resource: objects
- description: Copies a source object to a destination object. Optionally overrides metadata.
  method: POST
  path: b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}
  resource: objects
- description: Stores a new object and metadata.
  method: POST
  path: b/{bucket}/o
  resource: objects
- description: Rewrites a source object to a destination object. Optionally overrides metadata.
  method: POST
  path: b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}
  resource: objects
- description: Moves the source object to the destination object in the same bucket.
  method: POST
  path: b/{bucket}/o/{sourceObject}/moveTo/o/{destinationObject}
  resource: objects
- description: Watch for changes on all objects in a bucket.
  method: POST
  path: b/{bucket}/o/watch
  resource: objects
- description: Restores a soft-deleted object.
  method: POST
  path: b/{bucket}/o/{object}/restore
  resource: objects
- description: Initiates a long-running bulk restore operation on the specified bucket.
  method: POST
  path: b/{bucket}/o/bulkRestore
  resource: objects
- description: Updates an IAM policy for the specified object.
  method: PUT
  path: b/{bucket}/o/{object}/iam
  resource: objects
- description: Updates an object's metadata.
  method: PUT
  path: b/{bucket}/o/{object}
  resource: objects
- description: Patches an object's metadata.
  method: PATCH
  path: b/{bucket}/o/{object}
  resource: objects
- description: Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the gener
  method: DELETE
  path: b/{bucket}/o/{object}
  resource: objects
- description: Retrieves an HMAC key's metadata
  method: GET
  path: projects/{projectId}/hmacKeys/{accessId}
  resource: projects.hmacKeys
- description: Retrieves a list of HMAC keys matching the criteria.
  method: GET
  path: projects/{projectId}/hmacKeys
  resource: projects.hmacKeys
- description: Creates a new HMAC key for the specified service account.
  method: POST
  path: projects/{projectId}/hmacKeys
  resource: projects.hmacKeys
- description: Updates the state of an HMAC key. See the [HMAC Key resource descriptor](https://cloud.google.com/storage/docs/json_api/
  method: PUT
  path: projects/{projectId}/hmacKeys/{accessId}
  resource: projects.hmacKeys
- description: Deletes an HMAC key.
  method: DELETE
  path: projects/{projectId}/hmacKeys/{accessId}
  resource: projects.hmacKeys
- description: Get the email address of this project's Google Cloud Storage service account.
  method: GET
  path: projects/{projectId}/serviceAccount
  resource: projects.serviceAccount
name: storage
service_url: https://sandbox-pay-google-storage-v2c65mhlba-uc.a.run.app
title: Cloud Storage API
version: v1
---
