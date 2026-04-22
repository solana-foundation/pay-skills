---
category: compute
description: Create and manage virtual machines.
endpoints:
- description: Retrieves a list of Operation resources contained within the specified project.
  method: GET
  path: projects/{project}/global/operations
  resource: globalOperations
- description: Retrieves an aggregated list of all operations.  To prevent failure, Google recommends that you set the `returnPartialSu
  method: GET
  path: projects/{project}/aggregated/operations
  resource: globalOperations
- description: Retrieves the specified Operations resource.
  method: GET
  path: projects/{project}/global/operations/{operation}
  resource: globalOperations
- description: Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and
  method: POST
  path: projects/{project}/global/operations/{operation}/wait
  resource: globalOperations
- description: Deletes the specified Operations resource.
  method: DELETE
  path: projects/{project}/global/operations/{operation}
  resource: globalOperations
- description: Retrieves a list of Operation resources contained within the specified organization.
  method: GET
  path: locations/global/operations
  resource: globalOrganizationOperations
- description: Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.
  method: GET
  path: locations/global/operations/{operation}
  resource: globalOrganizationOperations
- description: Deletes the specified Operations resource.
  method: DELETE
  path: locations/global/operations/{operation}
  resource: globalOrganizationOperations
- description: Retrieves a list of Operation resources contained within the specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/operations
  resource: zoneOperations
- description: Retrieves the specified zone-specific Operations resource.
  method: GET
  path: projects/{project}/zones/{zone}/operations/{operation}
  resource: zoneOperations
- description: Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and
  method: POST
  path: projects/{project}/zones/{zone}/operations/{operation}/wait
  resource: zoneOperations
- description: Deletes the specified zone-specific Operations resource.
  method: DELETE
  path: projects/{project}/zones/{zone}/operations/{operation}
  resource: zoneOperations
- description: Retrieves a list of Operation resources contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/operations
  resource: regionOperations
- description: Retrieves the specified region-specific Operations resource.
  method: GET
  path: projects/{project}/regions/{region}/operations/{operation}
  resource: regionOperations
- description: Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and
  method: POST
  path: projects/{project}/regions/{region}/operations/{operation}/wait
  resource: regionOperations
- description: Deletes the specified region-specific Operations resource.
  method: DELETE
  path: projects/{project}/regions/{region}/operations/{operation}
  resource: regionOperations
- description: Retrieves a list of accelerator types that are available to the specified project.
  method: GET
  path: projects/{project}/zones/{zone}/acceleratorTypes
  resource: acceleratorTypes
- description: Retrieves an aggregated list of accelerator types.  To prevent failure, it is recommended that you set the `returnPartia
  method: GET
  path: projects/{project}/aggregated/acceleratorTypes
  resource: acceleratorTypes
- description: Returns the specified accelerator type.
  method: GET
  path: projects/{project}/zones/{zone}/acceleratorTypes/{acceleratorType}
  resource: acceleratorTypes
- description: Retrieves a list of global addresses.
  method: GET
  path: projects/{project}/global/addresses
  resource: globalAddresses
- description: Returns the specified address resource.
  method: GET
  path: projects/{project}/global/addresses/{address}
  resource: globalAddresses
- description: Creates an address resource in the specified project by using the data included in the request.
  method: POST
  path: projects/{project}/global/addresses
  resource: globalAddresses
- description: Moves the specified address resource from one project to another project.
  method: POST
  path: projects/{project}/global/addresses/{address}/move
  resource: globalAddresses
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/addresses/{resource}/testIamPermissions
  resource: globalAddresses
- description: Sets the labels on a GlobalAddress. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/global/addresses/{resource}/setLabels
  resource: globalAddresses
- description: Deletes the specified address resource.
  method: DELETE
  path: projects/{project}/global/addresses/{address}
  resource: globalAddresses
- description: Retrieves a list of addresses contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/addresses
  resource: addresses
- description: Retrieves an aggregated list of addresses.  To prevent failure, it is recommended that you set the `returnPartialSuccess
  method: GET
  path: projects/{project}/aggregated/addresses
  resource: addresses
- description: Returns the specified address resource.
  method: GET
  path: projects/{project}/regions/{region}/addresses/{address}
  resource: addresses
- description: Creates an address resource in the specified project by using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/addresses
  resource: addresses
- description: Moves the specified address resource.
  method: POST
  path: projects/{project}/regions/{region}/addresses/{address}/move
  resource: addresses
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/addresses/{resource}/testIamPermissions
  resource: addresses
- description: Sets the labels on an Address. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/regions/{region}/addresses/{resource}/setLabels
  resource: addresses
- description: Deletes the specified address resource.
  method: DELETE
  path: projects/{project}/regions/{region}/addresses/{address}
  resource: addresses
- description: 'Retrieves the list of custom images available to the specified project. Custom images are images you create that belong '
  method: GET
  path: projects/{project}/global/images
  resource: images
- description: Returns the specified image.
  method: GET
  path: projects/{project}/global/images/{image}
  resource: images
- description: 'Returns the latest image that is part of an image family and is not deprecated. For more information on image families, '
  method: GET
  path: projects/{project}/global/images/family/{family}
  resource: images
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/images/{resource}/getIamPolicy
  resource: images
- description: Creates an image in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/images
  resource: images
- description: Sets the labels on an image. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/global/images/{resource}/setLabels
  resource: images
- description: Sets the deprecation status of an image.  If an empty request body is given, clears the deprecation status instead.
  method: POST
  path: projects/{project}/global/images/{image}/deprecate
  resource: images
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/images/{resource}/setIamPolicy
  resource: images
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/images/{resource}/testIamPermissions
  resource: images
- description: 'Patches the specified image with the data included in the request. Only the following fields can be modified: family, de'
  method: PATCH
  path: projects/{project}/global/images/{image}
  resource: images
- description: Deletes the specified image.
  method: DELETE
  path: projects/{project}/global/images/{image}
  resource: images
- description: Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/imageFamilyViews/{family}
  resource: imageFamilyViews
- description: Retrieves the list of Snapshot resources contained within the specified project.
  method: GET
  path: projects/{project}/global/snapshots
  resource: snapshots
- description: Returns the specified Snapshot resource.
  method: GET
  path: projects/{project}/global/snapshots/{snapshot}
  resource: snapshots
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/snapshots/{resource}/getIamPolicy
  resource: snapshots
- description: Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consi
  method: POST
  path: projects/{project}/global/snapshots
  resource: snapshots
- description: Sets the labels on a snapshot. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/global/snapshots/{resource}/setLabels
  resource: snapshots
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/snapshots/{resource}/setIamPolicy
  resource: snapshots
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/snapshots/{resource}/testIamPermissions
  resource: snapshots
- description: Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all t
  method: DELETE
  path: projects/{project}/global/snapshots/{snapshot}
  resource: snapshots
- description: Retrieves a list of persistent disks contained within the specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/disks
  resource: disks
- description: Retrieves an aggregated list of persistent disks.  To prevent failure, it is recommended that you set the `returnPartial
  method: GET
  path: projects/{project}/aggregated/disks
  resource: disks
- description: Returns the specified persistent disk.
  method: GET
  path: projects/{project}/zones/{zone}/disks/{disk}
  resource: disks
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/zones/{zone}/disks/{resource}/getIamPolicy
  resource: disks
- description: Creates a persistent disk in the specified project using the data in the request. You can create a disk from a source (s
  method: POST
  path: projects/{project}/zones/{zone}/disks
  resource: disks
- description: Sets the labels on a disk. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/zones/{zone}/disks/{resource}/setLabels
  resource: disks
- description: Sets the labels on many disks at once. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/zones/{zone}/disks/bulkSetLabels
  resource: disks
- description: Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instea
  method: POST
  path: projects/{project}/zones/{zone}/disks/{disk}/createSnapshot
  resource: disks
- description: Resizes the specified persistent disk. You can only increase the size of the disk.
  method: POST
  path: projects/{project}/zones/{zone}/disks/{disk}/resize
  resource: disks
- description: Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling
  method: POST
  path: projects/{project}/zones/{zone}/disks/{disk}/addResourcePolicies
  resource: disks
- description: Removes resource policies from a disk.
  method: POST
  path: projects/{project}/zones/{zone}/disks/{disk}/removeResourcePolicies
  resource: disks
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/zones/{zone}/disks/{resource}/setIamPolicy
  resource: disks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/disks/{resource}/testIamPermissions
  resource: disks
- description: Starts asynchronous replication. Must be invoked on the primary disk.
  method: POST
  path: projects/{project}/zones/{zone}/disks/{disk}/startAsyncReplication
  resource: disks
- description: Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
  method: POST
  path: projects/{project}/zones/{zone}/disks/{disk}/stopAsyncReplication
  resource: disks
- description: Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope
  method: POST
  path: projects/{project}/zones/{zone}/disks/stopGroupAsyncReplication
  resource: disks
- description: Bulk create a set of disks.
  method: POST
  path: projects/{project}/zones/{zone}/disks/bulkInsert
  resource: disks
- description: Updates the specified disk with the data included in the request. The update is performed only on selected fields includ
  method: PATCH
  path: projects/{project}/zones/{zone}/disks/{disk}
  resource: disks
- description: Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleti
  method: DELETE
  path: projects/{project}/zones/{zone}/disks/{disk}
  resource: disks
- description: Retrieves the list of persistent disks contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/disks
  resource: regionDisks
- description: Returns a specified regional persistent disk.
  method: GET
  path: projects/{project}/regions/{region}/disks/{disk}
  resource: regionDisks
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/disks/{resource}/getIamPolicy
  resource: regionDisks
- description: Creates a persistent regional disk in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/disks
  resource: regionDisks
- description: Sets the labels on the target regional disk.
  method: POST
  path: projects/{project}/regions/{region}/disks/{resource}/setLabels
  resource: regionDisks
- description: Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instea
  method: POST
  path: projects/{project}/regions/{region}/disks/{disk}/createSnapshot
  resource: regionDisks
- description: Resizes the specified regional persistent disk.
  method: POST
  path: projects/{project}/regions/{region}/disks/{disk}/resize
  resource: regionDisks
- description: Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for s
  method: POST
  path: projects/{project}/regions/{region}/disks/{disk}/addResourcePolicies
  resource: regionDisks
- description: Removes resource policies from a regional disk.
  method: POST
  path: projects/{project}/regions/{region}/disks/{disk}/removeResourcePolicies
  resource: regionDisks
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/disks/{resource}/setIamPolicy
  resource: regionDisks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/disks/{resource}/testIamPermissions
  resource: regionDisks
- description: Starts asynchronous replication. Must be invoked on the primary disk.
  method: POST
  path: projects/{project}/regions/{region}/disks/{disk}/startAsyncReplication
  resource: regionDisks
- description: Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
  method: POST
  path: projects/{project}/regions/{region}/disks/{disk}/stopAsyncReplication
  resource: regionDisks
- description: Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope
  method: POST
  path: projects/{project}/regions/{region}/disks/stopGroupAsyncReplication
  resource: regionDisks
- description: Bulk create a set of disks.
  method: POST
  path: projects/{project}/regions/{region}/disks/bulkInsert
  resource: regionDisks
- description: Update the specified disk with the data included in the request. Update is performed only on selected fields included as
  method: PATCH
  path: projects/{project}/regions/{region}/disks/{disk}
  resource: regionDisks
- description: Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanentl
  method: DELETE
  path: projects/{project}/regions/{region}/disks/{disk}
  resource: regionDisks
- description: Retrieves the list of firewall rules available to the specified project.
  method: GET
  path: projects/{project}/global/firewalls
  resource: firewalls
- description: Returns the specified firewall.
  method: GET
  path: projects/{project}/global/firewalls/{firewall}
  resource: firewalls
- description: Creates a firewall rule in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/firewalls
  resource: firewalls
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/firewalls/{resource}/testIamPermissions
  resource: firewalls
- description: Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using
  method: PUT
  path: projects/{project}/global/firewalls/{firewall}
  resource: firewalls
- description: 'Updates the specified firewall rule with the data included in the request. This method supportsPATCH semantics and uses '
  method: PATCH
  path: projects/{project}/global/firewalls/{firewall}
  resource: firewalls
- description: Deletes the specified firewall.
  method: DELETE
  path: projects/{project}/global/firewalls/{firewall}
  resource: firewalls
- description: Lists all the policies that have been configured for the specified folder or organization.
  method: GET
  path: locations/global/firewallPolicies
  resource: firewallPolicies
- description: Lists associations of a specified target, i.e., organization or folder.
  method: GET
  path: locations/global/firewallPolicies/listAssociations
  resource: firewallPolicies
- description: Returns the specified firewall policy.
  method: GET
  path: locations/global/firewallPolicies/{firewallPolicy}
  resource: firewallPolicies
- description: Gets a rule of the specified priority.
  method: GET
  path: locations/global/firewallPolicies/{firewallPolicy}/getRule
  resource: firewallPolicies
- description: Gets an association with the specified name.
  method: GET
  path: locations/global/firewallPolicies/{firewallPolicy}/getAssociation
  resource: firewallPolicies
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: locations/global/firewallPolicies/{resource}/getIamPolicy
  resource: firewallPolicies
- description: Creates a new policy in the specified project using the data included in the request.
  method: POST
  path: locations/global/firewallPolicies
  resource: firewallPolicies
- description: Inserts a rule into a firewall policy.
  method: POST
  path: locations/global/firewallPolicies/{firewallPolicy}/addRule
  resource: firewallPolicies
- description: Deletes a rule of the specified priority.
  method: POST
  path: locations/global/firewallPolicies/{firewallPolicy}/removeRule
  resource: firewallPolicies
- description: Patches a rule of the specified priority.
  method: POST
  path: locations/global/firewallPolicies/{firewallPolicy}/patchRule
  resource: firewallPolicies
- description: Inserts an association for the specified firewall policy.
  method: POST
  path: locations/global/firewallPolicies/{firewallPolicy}/addAssociation
  resource: firewallPolicies
- description: Removes an association for the specified firewall policy.
  method: POST
  path: locations/global/firewallPolicies/{firewallPolicy}/removeAssociation
  resource: firewallPolicies
- description: Copies rules to the specified firewall policy.
  method: POST
  path: locations/global/firewallPolicies/{firewallPolicy}/cloneRules
  resource: firewallPolicies
- description: Moves the specified firewall policy.
  method: POST
  path: locations/global/firewallPolicies/{firewallPolicy}/move
  resource: firewallPolicies
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: locations/global/firewallPolicies/{resource}/setIamPolicy
  resource: firewallPolicies
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: locations/global/firewallPolicies/{resource}/testIamPermissions
  resource: firewallPolicies
- description: Patches the specified policy with the data included in the request.
  method: PATCH
  path: locations/global/firewallPolicies/{firewallPolicy}
  resource: firewallPolicies
- description: Deletes the specified policy.
  method: DELETE
  path: locations/global/firewallPolicies/{firewallPolicy}
  resource: firewallPolicies
- description: Lists all the policies that have been configured for the specified project.
  method: GET
  path: projects/{project}/global/firewallPolicies
  resource: networkFirewallPolicies
- description: Returns the specified network firewall policy.
  method: GET
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}
  resource: networkFirewallPolicies
- description: Gets a rule of the specified priority.
  method: GET
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/getRule
  resource: networkFirewallPolicies
- description: Gets a packet mirroring rule of the specified priority.
  method: GET
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/getPacketMirroringRule
  resource: networkFirewallPolicies
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/firewallPolicies/{resource}/getIamPolicy
  resource: networkFirewallPolicies
- description: Gets an association with the specified name.
  method: GET
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/getAssociation
  resource: networkFirewallPolicies
- description: 'Retrieves an aggregated list of network firewall policies, listing network firewall policies from all applicable scopes '
  method: GET
  path: projects/{project}/aggregated/firewallPolicies
  resource: networkFirewallPolicies
- description: Creates a new policy in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/firewallPolicies
  resource: networkFirewallPolicies
- description: Inserts a rule into a firewall policy.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/addRule
  resource: networkFirewallPolicies
- description: Inserts a packet mirroring rule into a firewall policy.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/addPacketMirroringRule
  resource: networkFirewallPolicies
- description: Deletes a rule of the specified priority.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/removeRule
  resource: networkFirewallPolicies
- description: Deletes a packet mirroring rule of the specified priority.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/removePacketMirroringRule
  resource: networkFirewallPolicies
- description: Patches a rule of the specified priority.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/patchRule
  resource: networkFirewallPolicies
- description: Patches a packet mirroring rule of the specified priority.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/patchPacketMirroringRule
  resource: networkFirewallPolicies
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/firewallPolicies/{resource}/setIamPolicy
  resource: networkFirewallPolicies
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/firewallPolicies/{resource}/testIamPermissions
  resource: networkFirewallPolicies
- description: Inserts an association for the specified firewall policy.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/addAssociation
  resource: networkFirewallPolicies
- description: Removes an association for the specified firewall policy.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/removeAssociation
  resource: networkFirewallPolicies
- description: Copies rules to the specified firewall policy.
  method: POST
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}/cloneRules
  resource: networkFirewallPolicies
- description: Patches the specified policy with the data included in the request.
  method: PATCH
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}
  resource: networkFirewallPolicies
- description: Deletes the specified policy.
  method: DELETE
  path: projects/{project}/global/firewallPolicies/{firewallPolicy}
  resource: networkFirewallPolicies
- description: Lists all the network firewall policies that have been configured for the specified project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/firewallPolicies
  resource: regionNetworkFirewallPolicies
- description: Returns the specified network firewall policy.
  method: GET
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}
  resource: regionNetworkFirewallPolicies
- description: Gets a rule of the specified priority.
  method: GET
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/getRule
  resource: regionNetworkFirewallPolicies
- description: Gets an association with the specified name.
  method: GET
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/getAssociation
  resource: regionNetworkFirewallPolicies
- description: Returns the effective firewalls on a given network.
  method: GET
  path: projects/{project}/regions/{region}/firewallPolicies/getEffectiveFirewalls
  resource: regionNetworkFirewallPolicies
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/firewallPolicies/{resource}/getIamPolicy
  resource: regionNetworkFirewallPolicies
- description: Creates a new network firewall policy in the specified project and region.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies
  resource: regionNetworkFirewallPolicies
- description: Inserts a rule into a network firewall policy.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/addRule
  resource: regionNetworkFirewallPolicies
- description: Deletes a rule of the specified priority.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/removeRule
  resource: regionNetworkFirewallPolicies
- description: Patches a rule of the specified priority.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/patchRule
  resource: regionNetworkFirewallPolicies
- description: Copies rules to the specified network firewall policy.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/cloneRules
  resource: regionNetworkFirewallPolicies
- description: Inserts an association for the specified network firewall policy.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/addAssociation
  resource: regionNetworkFirewallPolicies
- description: Removes an association for the specified network firewall policy.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/removeAssociation
  resource: regionNetworkFirewallPolicies
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies/{resource}/setIamPolicy
  resource: regionNetworkFirewallPolicies
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/firewallPolicies/{resource}/testIamPermissions
  resource: regionNetworkFirewallPolicies
- description: Patches the specified network firewall policy.
  method: PATCH
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}
  resource: regionNetworkFirewallPolicies
- description: Deletes the specified network firewall policy.
  method: DELETE
  path: projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}
  resource: regionNetworkFirewallPolicies
- description: List all the policies that have been configured for the specified project.
  method: GET
  path: projects/{project}/global/securityPolicies
  resource: securityPolicies
- description: List all of the ordered rules present in a single specified policy.
  method: GET
  path: projects/{project}/global/securityPolicies/{securityPolicy}
  resource: securityPolicies
- description: Gets a rule at the specified priority.
  method: GET
  path: projects/{project}/global/securityPolicies/{securityPolicy}/getRule
  resource: securityPolicies
- description: Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
  method: GET
  path: projects/{project}/global/securityPolicies/listPreconfiguredExpressionSets
  resource: securityPolicies
- description: Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.  To prevent
  method: GET
  path: projects/{project}/aggregated/securityPolicies
  resource: securityPolicies
- description: Creates a new policy in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/securityPolicies
  resource: securityPolicies
- description: Inserts a rule into a security policy.
  method: POST
  path: projects/{project}/global/securityPolicies/{securityPolicy}/addRule
  resource: securityPolicies
- description: Deletes a rule at the specified priority.
  method: POST
  path: projects/{project}/global/securityPolicies/{securityPolicy}/removeRule
  resource: securityPolicies
- description: Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the up
  method: POST
  path: projects/{project}/global/securityPolicies/{securityPolicy}/patchRule
  resource: securityPolicies
- description: Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.
  method: POST
  path: projects/{project}/global/securityPolicies/{resource}/setLabels
  resource: securityPolicies
- description: Patches the specified policy with the data included in the request. To clear fields in the policy, leave the fields empt
  method: PATCH
  path: projects/{project}/global/securityPolicies/{securityPolicy}
  resource: securityPolicies
- description: Deletes the specified policy.
  method: DELETE
  path: projects/{project}/global/securityPolicies/{securityPolicy}
  resource: securityPolicies
- description: List all the policies that have been configured for the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/securityPolicies
  resource: regionSecurityPolicies
- description: List all of the ordered rules present in a single specified policy.
  method: GET
  path: projects/{project}/regions/{region}/securityPolicies/{securityPolicy}
  resource: regionSecurityPolicies
- description: Gets a rule at the specified priority.
  method: GET
  path: projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/getRule
  resource: regionSecurityPolicies
- description: Creates a new policy in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/securityPolicies
  resource: regionSecurityPolicies
- description: Inserts a rule into a security policy.
  method: POST
  path: projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/addRule
  resource: regionSecurityPolicies
- description: Deletes a rule at the specified priority.
  method: POST
  path: projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/removeRule
  resource: regionSecurityPolicies
- description: Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the up
  method: POST
  path: projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/patchRule
  resource: regionSecurityPolicies
- description: Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.
  method: POST
  path: projects/{project}/regions/{region}/securityPolicies/{resource}/setLabels
  resource: regionSecurityPolicies
- description: Patches the specified policy with the data included in the request. To clear fields in the policy, leave the fields empt
  method: PATCH
  path: projects/{project}/regions/{region}/securityPolicies/{securityPolicy}
  resource: regionSecurityPolicies
- description: Deletes the specified policy.
  method: DELETE
  path: projects/{project}/regions/{region}/securityPolicies/{securityPolicy}
  resource: regionSecurityPolicies
- description: List all the policies that have been configured for the specified organization.  Use this API to read Cloud Armor polici
  method: GET
  path: locations/global/securityPolicies
  resource: organizationSecurityPolicies
- description: Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
  method: GET
  path: locations/global/securityPolicies/listPreconfiguredExpressionSets
  resource: organizationSecurityPolicies
- description: Lists associations of a specified target, i.e., organization or folder.  Use this API to read Cloud Armor policies. Prev
  method: GET
  path: locations/global/securityPolicies/listAssociations
  resource: organizationSecurityPolicies
- description: List all of the ordered rules present in a single specified policy.  Use this API to read Cloud Armor policies. Previous
  method: GET
  path: locations/global/securityPolicies/{securityPolicy}
  resource: organizationSecurityPolicies
- description: Gets a rule at the specified priority.  Use this API to read Cloud Armor policies. Previously, alpha and beta versions o
  method: GET
  path: locations/global/securityPolicies/{securityPolicy}/getRule
  resource: organizationSecurityPolicies
- description: Gets an association with the specified name.  Use this API to read Cloud Armor policies. Previously, alpha and beta vers
  method: GET
  path: locations/global/securityPolicies/{securityPolicy}/getAssociation
  resource: organizationSecurityPolicies
- description: Creates a new policy in the specified organization using the data included in the request.  Use this API to add Cloud Ar
  method: POST
  path: locations/global/securityPolicies
  resource: organizationSecurityPolicies
- description: Inserts a rule into a security policy.  Use this API to modify Cloud Armor policies. Previously, alpha and beta versions
  method: POST
  path: locations/global/securityPolicies/{securityPolicy}/addRule
  resource: organizationSecurityPolicies
- description: Deletes a rule at the specified priority.  Use this API to modify Cloud Armor policies. Previously, alpha and beta versi
  method: POST
  path: locations/global/securityPolicies/{securityPolicy}/removeRule
  resource: organizationSecurityPolicies
- description: Patches a rule at the specified priority.  Use this API to modify Cloud Armor policies. Previously, alpha and beta versi
  method: POST
  path: locations/global/securityPolicies/{securityPolicy}/patchRule
  resource: organizationSecurityPolicies
- description: Inserts an association for the specified security policy.  This has billing implications.  Projects in the hierarchy wit
  method: POST
  path: locations/global/securityPolicies/{securityPolicy}/addAssociation
  resource: organizationSecurityPolicies
- description: Removes an association for the specified security policy.  Use this API to modify Cloud Armor policies. Previously, alph
  method: POST
  path: locations/global/securityPolicies/{securityPolicy}/removeAssociation
  resource: organizationSecurityPolicies
- description: 'Copies rules to the specified security policy.  Use this API to modify Cloud Armor policies. Previously, alpha and beta '
  method: POST
  path: locations/global/securityPolicies/{securityPolicy}/copyRules
  resource: organizationSecurityPolicies
- description: Moves the specified security policy.  Use this API to modify Cloud Armor policies. Previously, alpha and beta versions o
  method: POST
  path: locations/global/securityPolicies/{securityPolicy}/move
  resource: organizationSecurityPolicies
- description: Patches the specified policy with the data included in the request.  Use this API to modify Cloud Armor policies. Previo
  method: PATCH
  path: locations/global/securityPolicies/{securityPolicy}
  resource: organizationSecurityPolicies
- description: 'Deletes the specified policy.  Use this API to remove Cloud Armor policies. Previously, alpha and beta versions of this '
  method: DELETE
  path: locations/global/securityPolicies/{securityPolicy}
  resource: organizationSecurityPolicies
- description: Retrieves the list of instances contained within the specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/instances
  resource: instances
- description: Retrieves an aggregated list of all of the instances in your project across all regions and zones.  The performance of t
  method: GET
  path: projects/{project}/aggregated/instances
  resource: instances
- description: Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is
  method: GET
  path: projects/{project}/zones/{zone}/instances/{instance}/referrers
  resource: instances
- description: Returns the specified Instance resource.
  method: GET
  path: projects/{project}/zones/{zone}/instances/{instance}
  resource: instances
- description: Returns the last 1 MB of serial port output from the specified instance.
  method: GET
  path: projects/{project}/zones/{zone}/instances/{instance}/serialPort
  resource: instances
- description: Returns the screenshot from the specified instance.
  method: GET
  path: projects/{project}/zones/{zone}/instances/{instance}/screenshot
  resource: instances
- description: Returns the specified guest attributes entry.
  method: GET
  path: projects/{project}/zones/{zone}/instances/{instance}/getGuestAttributes
  resource: instances
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/zones/{zone}/instances/{resource}/getIamPolicy
  resource: instances
- description: Returns the Shielded Instance Identity of an instance
  method: GET
  path: projects/{project}/zones/{zone}/instances/{instance}/getShieldedInstanceIdentity
  resource: instances
- description: Returns effective firewalls applied to an interface of the instance.
  method: GET
  path: projects/{project}/zones/{zone}/instances/{instance}/getEffectiveFirewalls
  resource: instances
- description: Creates an instance resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/zones/{zone}/instances
  resource: instances
- description: Performs a reset on the instance. This is a hard reset. The VM does not do a graceful shutdown. For more information, se
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/reset
  resource: instances
- description: Simulates a host maintenance event on a VM. For more information, see Simulate a host maintenance event.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/simulateMaintenanceEvent
  resource: instances
- description: Perform a manual maintenance on the instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/performMaintenance
  resource: instances
- description: Mark the host as faulty and try to restart the instance on a new host.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/reportHostAsFaulty
  resource: instances
- description: Adds an access config to an instance's network interface.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/addAccessConfig
  resource: instances
- description: Deletes an access config from an instance's network interface.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/deleteAccessConfig
  resource: instances
- description: Updates the specified access config from an instance's network interface with the data included in the request. This met
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/updateAccessConfig
  resource: instances
- description: Adds one dynamic network interface to an active instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/addNetworkInterface
  resource: instances
- description: 'Deletes one dynamic network interface from an active instance. InstancesDeleteNetworkInterfaceRequest indicates: - insta'
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/deleteNetworkInterface
  resource: instances
- description: Sets an instance's scheduling options. You can only call this method on astopped instance, that is, a VM instance that i
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setScheduling
  resource: instances
- description: Sends diagnostic interrupt to the instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/sendDiagnosticInterrupt
  resource: instances
- description: Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not po
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/attachDisk
  resource: instances
- description: Detaches a disk from an instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/detachDisk
  resource: instances
- description: Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setMachineResources
  resource: instances
- description: Changes the machine type for a stopped instance to the machine type specified in the request.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setMachineType
  resource: instances
- description: Sets metadata for the specified instance to the data included in the request.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setMetadata
  resource: instances
- description: Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. Fo
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setMinCpuPlatform
  resource: instances
- description: Sets network tags for the specified instance to the data included in the request.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setTags
  resource: instances
- description: Sets labels on an instance.  To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setLabels
  resource: instances
- description: Sets name of an instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setName
  resource: instances
- description: Sets the auto-delete flag for a disk attached to an instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setDiskAutoDelete
  resource: instances
- description: Starts an instance that was stopped using theinstances().stop method. For more information, seeRestart an instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/start
  resource: instances
- description: Starts an instance that was stopped using theinstances().stop method. For more information, seeRestart an instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/startWithEncryptionKey
  resource: instances
- description: Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped inst
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/stop
  resource: instances
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{resource}/setIamPolicy
  resource: instances
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{resource}/testIamPermissions
  resource: instances
- description: Sets the service account on the instance. For more information, readChanging the service account and access scopes for a
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setServiceAccount
  resource: instances
- description: Sets deletion protection on the instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{resource}/setDeletionProtection
  resource: instances
- description: This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance a
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/suspend
  resource: instances
- description: Resumes an instance that was suspended using theinstances().suspend method.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/resume
  resource: instances
- description: Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this inst
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/addResourcePolicies
  resource: instances
- description: Removes resource policies from an instance.
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/removeResourcePolicies
  resource: instances
- description: Sets the Google Cloud Armor security policy for the specified instance. For more information, seeGoogle Cloud Armor Over
  method: POST
  path: projects/{project}/zones/{zone}/instances/{instance}/setSecurityPolicy
  resource: instances
- description: Creates multiple instances. Count specifies the number of instances to create. For more information, seeAbout bulk creat
  method: POST
  path: projects/{project}/zones/{zone}/instances/bulkInsert
  resource: instances
- description: Updates an instance only if the necessary resources are available. This method can update only a specific set of instanc
  method: PUT
  path: projects/{project}/zones/{zone}/instances/{instance}
  resource: instances
- description: Updates an instance's network interface. This method can only update an interface's alias IP range and attached network.
  method: PATCH
  path: projects/{project}/zones/{zone}/instances/{instance}/updateNetworkInterface
  resource: instances
- description: Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method su
  method: PATCH
  path: projects/{project}/zones/{zone}/instances/{instance}/updateShieldedInstanceConfig
  resource: instances
- description: Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method support
  method: PATCH
  path: projects/{project}/zones/{zone}/instances/{instance}/updateDisplayDevice
  resource: instances
- description: Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This me
  method: PATCH
  path: projects/{project}/zones/{zone}/instances/{instance}/setShieldedInstanceIntegrityPolicy
  resource: instances
- description: Deletes the specified Instance resource. For more information, seeDeleting an instance.
  method: DELETE
  path: projects/{project}/zones/{zone}/instances/{instance}
  resource: instances
- description: Creates multiple instances in a given region. Count specifies the number of instances to create.
  method: POST
  path: projects/{project}/regions/{region}/instances/bulkInsert
  resource: regionInstances
- description: A list of all the reservations that have been configured for the specified project in specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/reservations
  resource: reservations
- description: Retrieves an aggregated list of reservations.  To prevent failure, it is recommended that you set the `returnPartialSucc
  method: GET
  path: projects/{project}/aggregated/reservations
  resource: reservations
- description: Retrieves information about the specified reservation.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{reservation}
  resource: reservations
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{resource}/getIamPolicy
  resource: reservations
- description: Creates a new reservation. For more information, readReserving zonal resources.
  method: POST
  path: projects/{project}/zones/{zone}/reservations
  resource: reservations
- description: Resizes the reservation (applicable to standalone reservations only). For more information, readModifying reservations.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservation}/resize
  resource: reservations
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{resource}/setIamPolicy
  resource: reservations
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{resource}/testIamPermissions
  resource: reservations
- description: Perform maintenance on an extended reservation
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservation}/performMaintenance
  resource: reservations
- description: Update share settings of the reservation.
  method: PATCH
  path: projects/{project}/zones/{zone}/reservations/{reservation}
  resource: reservations
- description: Deletes the specified reservation.
  method: DELETE
  path: projects/{project}/zones/{zone}/reservations/{reservation}
  resource: reservations
- description: 'Retrieves the list of zonal instance group resources contained within the specified zone.  For managed instance groups, '
  method: GET
  path: projects/{project}/zones/{zone}/instanceGroups
  resource: instanceGroups
- description: Retrieves the list of instance groups and sorts them by zone.  To prevent failure, Google recommends that you set the `r
  method: GET
  path: projects/{project}/aggregated/instanceGroups
  resource: instanceGroups
- description: Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request.  F
  method: GET
  path: projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}
  resource: instanceGroups
- description: Creates an instance group in the specified project using the parameters that are included in the request.
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroups
  resource: instanceGroups
- description: Adds a list of instances to the specified instance group.  All of the instances in the instance group must be in the sam
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/addInstances
  resource: instanceGroups
- description: Removes one or more instances from the specified instance group, but does not delete those instances.  If the group is p
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/removeInstances
  resource: instanceGroups
- description: Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query para
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/listInstances
  resource: instanceGroups
- description: Sets the named ports for the specified instance group.
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/setNamedPorts
  resource: instanceGroups
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroups/{resource}/testIamPermissions
  resource: instanceGroups
- description: Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belo
  method: DELETE
  path: projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}
  resource: instanceGroups
- description: Retrieves the list of instance group resources contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/instanceGroups
  resource: regionInstanceGroups
- description: Returns the specified instance group resource.
  method: GET
  path: projects/{project}/regions/{region}/instanceGroups/{instanceGroup}
  resource: regionInstanceGroups
- description: Lists the instances in the specified instance group and displays information about the named ports. Depending on the spe
  method: POST
  path: projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/listInstances
  resource: regionInstanceGroups
- description: Sets the named ports for the specified regional instance group.
  method: POST
  path: projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/setNamedPorts
  resource: regionInstanceGroups
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/instanceGroups/{resource}/testIamPermissions
  resource: regionInstanceGroups
- description: Retrieves a list of managed instance groups that are contained within the specified project and zone.
  method: GET
  path: projects/{project}/zones/{zone}/instanceGroupManagers
  resource: instanceGroupManagers
- description: Retrieves the list of managed instance groups and groups them by zone.  To prevent failure, Google recommends that you s
  method: GET
  path: projects/{project}/aggregated/instanceGroupManagers
  resource: instanceGroupManagers
- description: Returns all of the details about the specified managed instance group.
  method: GET
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}
  resource: instanceGroupManagers
- description: Lists all errors thrown by actions on instances for a given managed instance group. The filter and orderBy query paramet
  method: GET
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listErrors
  resource: instanceGroupManagers
- description: Creates a managed instance group using the information that you specify in the request. After the group is created, inst
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers
  resource: instanceGroupManagers
- description: 'Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from '
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances
  resource: instanceGroupManagers
- description: 'Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances '
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/suspendInstances
  resource: instanceGroupManagers
- description: Flags the specified instances in the managed instance group to be resumed. This method increases thetargetSize and decre
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resumeInstances
  resource: instanceGroupManagers
- description: Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances th
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/stopInstances
  resource: instanceGroupManagers
- description: Flags the specified instances in the managed instance group to be started. This method increases thetargetSize and decre
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/startInstances
  resource: instanceGroupManagers
- description: 'Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the '
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances
  resource: instanceGroupManagers
- description: Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated u
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances
  resource: instanceGroupManagers
- description: Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize
  resource: instanceGroupManagers
- description: Specifies the instance template to use when creating new instances in this group. The templates for existing instances i
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate
  resource: instanceGroupManagers
- description: Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatic
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools
  resource: instanceGroupManagers
- description: Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances
  resource: instanceGroupManagers
- description: 'Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not '
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listPerInstanceConfigs
  resource: instanceGroupManagers
- description: Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key us
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updatePerInstanceConfigs
  resource: instanceGroupManagers
- description: Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key us
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/patchPerInstanceConfigs
  resource: instanceGroupManagers
- description: Deletes selected per-instance configurations for the managed instance group.
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deletePerInstanceConfigs
  resource: instanceGroupManagers
- description: Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/applyUpdatesToInstances
  resource: instanceGroupManagers
- description: Creates instances with per-instance configurations in this managed instance group. Instances are created using the curre
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/createInstances
  resource: instanceGroupManagers
- description: Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE
  method: PATCH
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}
  resource: instanceGroupManagers
- description: Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must n
  method: DELETE
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}
  resource: instanceGroupManagers
- description: Returns all of the details about the specified resize request.
  method: GET
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}
  resource: instanceGroupManagerResizeRequests
- description: Retrieves a list of resize requests that are contained in the managed instance group.
  method: GET
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests
  resource: instanceGroupManagerResizeRequests
- description: Creates a new resize request that starts provisioning VMs immediately or queues VM creation.
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests
  resource: instanceGroupManagerResizeRequests
- description: Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the
  method: POST
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}/cancel
  resource: instanceGroupManagerResizeRequests
- description: 'Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does '
  method: DELETE
  path: projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}
  resource: instanceGroupManagerResizeRequests
- description: Retrieves the list of managed instance groups that are contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/instanceGroupManagers
  resource: regionInstanceGroupManagers
- description: Returns all of the details about the specified managed instance group.
  method: GET
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}
  resource: regionInstanceGroupManagers
- description: Lists all errors thrown by actions on instances for a given regional managed instance group. The filter andorderBy query
  method: GET
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listErrors
  resource: regionInstanceGroupManagers
- description: Creates a managed instance group using the information that you specify in the request. After the group is created, inst
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers
  resource: regionInstanceGroupManagers
- description: Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed fr
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deleteInstances
  resource: regionInstanceGroupManagers
- description: 'Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances '
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/suspendInstances
  resource: regionInstanceGroupManagers
- description: Flags the specified instances in the managed instance group to be resumed. This method increases thetargetSize and decre
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resumeInstances
  resource: regionInstanceGroupManagers
- description: Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances th
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/stopInstances
  resource: regionInstanceGroupManagers
- description: Flags the specified instances in the managed instance group to be started. This method increases thetargetSize and decre
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/startInstances
  resource: regionInstanceGroupManagers
- description: Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/abandonInstances
  resource: regionInstanceGroupManagers
- description: Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated u
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/recreateInstances
  resource: regionInstanceGroupManagers
- description: Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resize
  resource: regionInstanceGroupManagers
- description: 'Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances '
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate
  resource: regionInstanceGroupManagers
- description: Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setTargetPools
  resource: regionInstanceGroupManagers
- description: 'Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any '
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances
  resource: regionInstanceGroupManagers
- description: 'Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not '
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listPerInstanceConfigs
  resource: regionInstanceGroupManagers
- description: Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key us
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/updatePerInstanceConfigs
  resource: regionInstanceGroupManagers
- description: Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key us
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/patchPerInstanceConfigs
  resource: regionInstanceGroupManagers
- description: Deletes selected per-instance configurations for the managed instance group.
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deletePerInstanceConfigs
  resource: regionInstanceGroupManagers
- description: Apply updates to selected instances the managed instance group.
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/applyUpdatesToInstances
  resource: regionInstanceGroupManagers
- description: 'Creates instances with per-instance configurations in this regional managed instance group. Instances are created using '
  method: POST
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/createInstances
  resource: regionInstanceGroupManagers
- description: Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE
  method: PATCH
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}
  resource: regionInstanceGroupManagers
- description: Deletes the specified managed instance group and all of the instances in that group.
  method: DELETE
  path: projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}
  resource: regionInstanceGroupManagers
- description: Retrieves a list of autoscalers contained within the specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/autoscalers
  resource: autoscalers
- description: Retrieves an aggregated list of autoscalers.  To prevent failure, it is recommended that you set the `returnPartialSucce
  method: GET
  path: projects/{project}/aggregated/autoscalers
  resource: autoscalers
- description: Returns the specified autoscaler resource.
  method: GET
  path: projects/{project}/zones/{zone}/autoscalers/{autoscaler}
  resource: autoscalers
- description: Creates an autoscaler in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/zones/{zone}/autoscalers
  resource: autoscalers
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/autoscalers/{resource}/testIamPermissions
  resource: autoscalers
- description: Updates an autoscaler in the specified project using the data included in the request.
  method: PUT
  path: projects/{project}/zones/{zone}/autoscalers
  resource: autoscalers
- description: Updates an autoscaler in the specified project using the data included in the request. This method supportsPATCH semanti
  method: PATCH
  path: projects/{project}/zones/{zone}/autoscalers
  resource: autoscalers
- description: Deletes the specified autoscaler.
  method: DELETE
  path: projects/{project}/zones/{zone}/autoscalers/{autoscaler}
  resource: autoscalers
- description: Retrieves a list of autoscalers contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/autoscalers
  resource: regionAutoscalers
- description: Returns the specified autoscaler.
  method: GET
  path: projects/{project}/regions/{region}/autoscalers/{autoscaler}
  resource: regionAutoscalers
- description: Creates an autoscaler in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/autoscalers
  resource: regionAutoscalers
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/autoscalers/{resource}/testIamPermissions
  resource: regionAutoscalers
- description: Updates an autoscaler in the specified project using the data included in the request.
  method: PUT
  path: projects/{project}/regions/{region}/autoscalers
  resource: regionAutoscalers
- description: Updates an autoscaler in the specified project using the data included in the request. This method supportsPATCH semanti
  method: PATCH
  path: projects/{project}/regions/{region}/autoscalers
  resource: regionAutoscalers
- description: Deletes the specified autoscaler.
  method: DELETE
  path: projects/{project}/regions/{region}/autoscalers/{autoscaler}
  resource: regionAutoscalers
- description: Retrieves the list of BackendBucket resources available to the specified project.
  method: GET
  path: projects/{project}/global/backendBuckets
  resource: backendBuckets
- description: Returns the specified BackendBucket resource.
  method: GET
  path: projects/{project}/global/backendBuckets/{backendBucket}
  resource: backendBuckets
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/backendBuckets/{resource}/getIamPolicy
  resource: backendBuckets
- description: Creates a BackendBucket resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/backendBuckets
  resource: backendBuckets
- description: Adds a key for validating requests with signed URLs for this backend bucket.
  method: POST
  path: projects/{project}/global/backendBuckets/{backendBucket}/addSignedUrlKey
  resource: backendBuckets
- description: Deletes a key for validating requests with signed URLs for this backend bucket.
  method: POST
  path: projects/{project}/global/backendBuckets/{backendBucket}/deleteSignedUrlKey
  resource: backendBuckets
- description: Sets the edge security policy for the specified backend bucket.
  method: POST
  path: projects/{project}/global/backendBuckets/{backendBucket}/setEdgeSecurityPolicy
  resource: backendBuckets
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/backendBuckets/{resource}/setIamPolicy
  resource: backendBuckets
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/backendBuckets/{resource}/testIamPermissions
  resource: backendBuckets
- description: Updates the specified BackendBucket resource with the data included in the request.
  method: PUT
  path: projects/{project}/global/backendBuckets/{backendBucket}
  resource: backendBuckets
- description: 'Updates the specified BackendBucket resource with the data included in the request. This method supportsPATCH semantics '
  method: PATCH
  path: projects/{project}/global/backendBuckets/{backendBucket}
  resource: backendBuckets
- description: Deletes the specified BackendBucket resource.
  method: DELETE
  path: projects/{project}/global/backendBuckets/{backendBucket}
  resource: backendBuckets
- description: Retrieves the list of BackendService resources available to the specified project.
  method: GET
  path: projects/{project}/global/backendServices
  resource: backendServices
- description: Retrieves the list of all BackendService resources, regional and global, available to the specified project.  To prevent
  method: GET
  path: projects/{project}/aggregated/backendServices
  resource: backendServices
- description: Retrieves a list of all usable backend services in the specified project.
  method: GET
  path: projects/{project}/global/backendServices/listUsable
  resource: backendServices
- description: Returns the specified BackendService resource.
  method: GET
  path: projects/{project}/global/backendServices/{backendService}
  resource: backendServices
- description: Returns effective security policies applied to this backend service.
  method: GET
  path: projects/{project}/global/backendServices/{backendService}/getEffectiveSecurityPolicies
  resource: backendServices
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/backendServices/{resource}/getIamPolicy
  resource: backendServices
- description: Creates a BackendService resource in the specified project using the data included in the request. For more information,
  method: POST
  path: projects/{project}/global/backendServices
  resource: backendServices
- description: Adds a key for validating requests with signed URLs for this backend service.
  method: POST
  path: projects/{project}/global/backendServices/{backendService}/addSignedUrlKey
  resource: backendServices
- description: Deletes a key for validating requests with signed URLs for this backend service.
  method: POST
  path: projects/{project}/global/backendServices/{backendService}/deleteSignedUrlKey
  resource: backendServices
- description: Sets the Google Cloud Armor security policy for the specified backend service. For more information, seeGoogle Cloud Arm
  method: POST
  path: projects/{project}/global/backendServices/{backendService}/setSecurityPolicy
  resource: backendServices
- description: Sets the edge security policy for the specified backend service.
  method: POST
  path: projects/{project}/global/backendServices/{backendService}/setEdgeSecurityPolicy
  resource: backendServices
- description: 'Gets the most recent health check results for this BackendService.  Example request body:  {   ''group'': ''/zones/us-east1'
  method: POST
  path: projects/{project}/global/backendServices/{backendService}/getHealth
  resource: backendServices
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/backendServices/{resource}/setIamPolicy
  resource: backendServices
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/backendServices/{resource}/testIamPermissions
  resource: backendServices
- description: Updates the specified BackendService resource with the data included in the request. For more information, seeBackend se
  method: PUT
  path: projects/{project}/global/backendServices/{backendService}
  resource: backendServices
- description: 'Patches the specified BackendService resource with the data included in the request. For more information, see  Backend '
  method: PATCH
  path: projects/{project}/global/backendServices/{backendService}
  resource: backendServices
- description: Deletes the specified BackendService resource.
  method: DELETE
  path: projects/{project}/global/backendServices/{backendService}
  resource: backendServices
- description: Retrieves the list of regional BackendService resources available to the specified project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/backendServices
  resource: regionBackendServices
- description: Retrieves a list of all usable backend services in the specified project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/backendServices/listUsable
  resource: regionBackendServices
- description: Returns the specified regional BackendService resource.
  method: GET
  path: projects/{project}/regions/{region}/backendServices/{backendService}
  resource: regionBackendServices
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/backendServices/{resource}/getIamPolicy
  resource: regionBackendServices
- description: Creates a regional BackendService resource in the specified project using the data included in the request. For more inf
  method: POST
  path: projects/{project}/regions/{region}/backendServices
  resource: regionBackendServices
- description: Sets the Google Cloud Armor security policy for the specified backend service. For more information, seeGoogle Cloud Arm
  method: POST
  path: projects/{project}/regions/{region}/backendServices/{backendService}/setSecurityPolicy
  resource: regionBackendServices
- description: Gets the most recent health check results for this regional BackendService.
  method: POST
  path: projects/{project}/regions/{region}/backendServices/{backendService}/getHealth
  resource: regionBackendServices
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/backendServices/{resource}/setIamPolicy
  resource: regionBackendServices
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/backendServices/{resource}/testIamPermissions
  resource: regionBackendServices
- description: 'Updates the specified regional BackendService resource with the data included in the request. For more information, see '
  method: PUT
  path: projects/{project}/regions/{region}/backendServices/{backendService}
  resource: regionBackendServices
- description: 'Updates the specified regional BackendService resource with the data included in the request. For more information, see '
  method: PATCH
  path: projects/{project}/regions/{region}/backendServices/{backendService}
  resource: regionBackendServices
- description: Deletes the specified regional BackendService resource.
  method: DELETE
  path: projects/{project}/regions/{region}/backendServices/{backendService}
  resource: regionBackendServices
- description: 'Retrieves the list of all CompositeHealthCheck resources (all regional) available to the specified project.  To prevent '
  method: GET
  path: projects/{project}/aggregated/compositeHealthChecks
  resource: regionCompositeHealthChecks
- description: Lists the CompositeHealthChecks for a project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/compositeHealthChecks
  resource: regionCompositeHealthChecks
- description: Returns the specified CompositeHealthCheck resource in the given region.
  method: GET
  path: projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}
  resource: regionCompositeHealthChecks
- description: Create a CompositeHealthCheck in the specified project in the given region using the parameters that are included in the
  method: POST
  path: projects/{project}/regions/{region}/compositeHealthChecks
  resource: regionCompositeHealthChecks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/compositeHealthChecks/{resource}/testIamPermissions
  resource: regionCompositeHealthChecks
- description: Updates the specified regional CompositeHealthCheck resource with the data included in the request.  This method support
  method: PATCH
  path: projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}
  resource: regionCompositeHealthChecks
- description: Deletes the specified CompositeHealthCheck in the given region
  method: DELETE
  path: projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}
  resource: regionCompositeHealthChecks
- description: Advise how, where and when to create the requested amount of instances with specified accelerators, within the specified
  method: POST
  path: projects/{project}/regions/{region}/advice/calendarMode
  resource: advice
- description: Retrieves a list of commitments contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/commitments
  resource: regionCommitments
- description: Retrieves an aggregated list of commitments by region.  To prevent failure, it is recommended that you set the `returnPa
  method: GET
  path: projects/{project}/aggregated/commitments
  resource: regionCommitments
- description: Returns the specified commitment resource.
  method: GET
  path: projects/{project}/regions/{region}/commitments/{commitment}
  resource: regionCommitments
- description: Creates a commitment in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/commitments
  resource: regionCommitments
- description: Updates the specified commitment with the data included in the request. Update is performed only on selected fields incl
  method: PATCH
  path: projects/{project}/regions/{region}/commitments/{commitment}
  resource: regionCommitments
- description: Lists the cross-site networks for a project in the given scope.
  method: GET
  path: projects/{project}/global/crossSiteNetworks
  resource: crossSiteNetworks
- description: Returns the specified cross-site network in the given scope.
  method: GET
  path: projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}
  resource: crossSiteNetworks
- description: Creates a cross-site network in the specified project in the given scope using the parameters that are included in the r
  method: POST
  path: projects/{project}/global/crossSiteNetworks
  resource: crossSiteNetworks
- description: 'Updates the specified cross-site network with the data included in the request. This method supportsPATCH semantics and '
  method: PATCH
  path: projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}
  resource: crossSiteNetworks
- description: Deletes the specified cross-site network in the given scope.
  method: DELETE
  path: projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}
  resource: crossSiteNetworks
- description: Retrieves a list of disk types available to the specified project.
  method: GET
  path: projects/{project}/zones/{zone}/diskTypes
  resource: diskTypes
- description: Retrieves an aggregated list of disk types.  To prevent failure, it is recommended that you set the `returnPartialSucces
  method: GET
  path: projects/{project}/aggregated/diskTypes
  resource: diskTypes
- description: Returns the specified disk type.
  method: GET
  path: projects/{project}/zones/{zone}/diskTypes/{diskType}
  resource: diskTypes
- description: Retrieves a list of regional disk types available to the specified project.
  method: GET
  path: projects/{project}/regions/{region}/diskTypes
  resource: regionDiskTypes
- description: Returns the specified regional disk type.
  method: GET
  path: projects/{project}/regions/{region}/diskTypes/{diskType}
  resource: regionDiskTypes
- description: Retrieves the list of interconnect attachments contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/interconnectAttachments
  resource: interconnectAttachments
- description: Retrieves an aggregated list of interconnect attachments.  To prevent failure, Google recommends that you set the `retur
  method: GET
  path: projects/{project}/aggregated/interconnectAttachments
  resource: interconnectAttachments
- description: Returns the specified interconnect attachment.
  method: GET
  path: projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}
  resource: interconnectAttachments
- description: Creates an InterconnectAttachment in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/interconnectAttachments
  resource: interconnectAttachments
- description: Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.
  method: POST
  path: projects/{project}/regions/{region}/interconnectAttachments/{resource}/setLabels
  resource: interconnectAttachments
- description: Updates the specified interconnect attachment with the data included in the request. This method supportsPATCH semantics
  method: PATCH
  path: projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}
  resource: interconnectAttachments
- description: Deletes the specified interconnect attachment.
  method: DELETE
  path: projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}
  resource: interconnectAttachments
- description: Lists the InterconnectAttachmentGroups for a project in the given scope.
  method: GET
  path: projects/{project}/global/interconnectAttachmentGroups
  resource: interconnectAttachmentGroups
- description: Returns the specified InterconnectAttachmentGroup resource in the given scope.
  method: GET
  path: projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}
  resource: interconnectAttachmentGroups
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/interconnectAttachmentGroups/{resource}/getIamPolicy
  resource: interconnectAttachmentGroups
- description: Returns the InterconnectAttachmentStatuses for the specified InterconnectAttachmentGroup resource.
  method: GET
  path: projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}/getOperationalStatus
  resource: interconnectAttachmentGroups
- description: Creates a InterconnectAttachmentGroup in the specified project in the given scope using the parameters that are included
  method: POST
  path: projects/{project}/global/interconnectAttachmentGroups
  resource: interconnectAttachmentGroups
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/interconnectAttachmentGroups/{resource}/setIamPolicy
  resource: interconnectAttachmentGroups
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/interconnectAttachmentGroups/{resource}/testIamPermissions
  resource: interconnectAttachmentGroups
- description: Patches the specified InterconnectAttachmentGroup resource with the data included in the request. This method supports P
  method: PATCH
  path: projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}
  resource: interconnectAttachmentGroups
- description: Deletes the specified InterconnectAttachmentGroup in the given scope
  method: DELETE
  path: projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}
  resource: interconnectAttachmentGroups
- description: Retrieves the list of Interconnects available to the specified project.
  method: GET
  path: projects/{project}/global/interconnects
  resource: interconnects
- description: Returns the interconnectDiagnostics for the specified Interconnect.  In the event of a global outage, do not use this AP
  method: GET
  path: projects/{project}/global/interconnects/{interconnect}/getDiagnostics
  resource: interconnects
- description: Returns the interconnectMacsecConfig for the specified Interconnect.
  method: GET
  path: projects/{project}/global/interconnects/{interconnect}/getMacsecConfig
  resource: interconnects
- description: Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
  method: GET
  path: projects/{project}/global/interconnects/{interconnect}
  resource: interconnects
- description: Creates an Interconnect in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/interconnects
  resource: interconnects
- description: Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.
  method: POST
  path: projects/{project}/global/interconnects/{resource}/setLabels
  resource: interconnects
- description: Updates the specified Interconnect with the data included in the request. This method supportsPATCH semantics and uses t
  method: PATCH
  path: projects/{project}/global/interconnects/{interconnect}
  resource: interconnects
- description: Deletes the specified Interconnect.
  method: DELETE
  path: projects/{project}/global/interconnects/{interconnect}
  resource: interconnects
- description: Lists the InterconnectGroups for a project in the given scope.
  method: GET
  path: projects/{project}/global/interconnectGroups
  resource: interconnectGroups
- description: Returns the specified InterconnectGroup resource in the given scope.
  method: GET
  path: projects/{project}/global/interconnectGroups/{interconnectGroup}
  resource: interconnectGroups
- description: Returns the interconnectStatuses for the specified InterconnectGroup.
  method: GET
  path: projects/{project}/global/interconnectGroups/{interconnectGroup}/getOperationalStatus
  resource: interconnectGroups
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/interconnectGroups/{resource}/getIamPolicy
  resource: interconnectGroups
- description: Creates a InterconnectGroup in the specified project in the given scope using the parameters that are included in the re
  method: POST
  path: projects/{project}/global/interconnectGroups
  resource: interconnectGroups
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/interconnectGroups/{resource}/setIamPolicy
  resource: interconnectGroups
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/interconnectGroups/{resource}/testIamPermissions
  resource: interconnectGroups
- description: Create Interconnects with redundancy by creating them in a specified interconnect group.
  method: POST
  path: projects/{project}/global/interconnectGroups/{interconnectGroup}/createMembers
  resource: interconnectGroups
- description: Patches the specified InterconnectGroup resource with the data included in the request. This method supports PATCH seman
  method: PATCH
  path: projects/{project}/global/interconnectGroups/{interconnectGroup}
  resource: interconnectGroups
- description: Deletes the specified InterconnectGroup in the given scope
  method: DELETE
  path: projects/{project}/global/interconnectGroups/{interconnectGroup}
  resource: interconnectGroups
- description: Retrieves the list of ExternalVpnGateway available to the specified project.
  method: GET
  path: projects/{project}/global/externalVpnGateways
  resource: externalVpnGateways
- description: Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.
  method: GET
  path: projects/{project}/global/externalVpnGateways/{externalVpnGateway}
  resource: externalVpnGateways
- description: Creates a ExternalVpnGateway in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/externalVpnGateways
  resource: externalVpnGateways
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/externalVpnGateways/{resource}/testIamPermissions
  resource: externalVpnGateways
- description: Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.
  method: POST
  path: projects/{project}/global/externalVpnGateways/{resource}/setLabels
  resource: externalVpnGateways
- description: Deletes the specified externalVpnGateway.
  method: DELETE
  path: projects/{project}/global/externalVpnGateways/{externalVpnGateway}
  resource: externalVpnGateways
- description: Retrieves a list of GlobalForwardingRule resources available to the specified project.
  method: GET
  path: projects/{project}/global/forwardingRules
  resource: globalForwardingRules
- description: Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() reques
  method: GET
  path: projects/{project}/global/forwardingRules/{forwardingRule}
  resource: globalForwardingRules
- description: Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/forwardingRules
  resource: globalForwardingRules
- description: Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
  method: POST
  path: projects/{project}/global/forwardingRules/{forwardingRule}/setTarget
  resource: globalForwardingRules
- description: Sets the labels on the specified resource. To learn more about labels, read the  Labeling resources documentation.
  method: POST
  path: projects/{project}/global/forwardingRules/{resource}/setLabels
  resource: globalForwardingRules
- description: Updates the specified forwarding rule with the data included in the request. This method supportsPATCH semantics and use
  method: PATCH
  path: projects/{project}/global/forwardingRules/{forwardingRule}
  resource: globalForwardingRules
- description: Deletes the specified GlobalForwardingRule resource.
  method: DELETE
  path: projects/{project}/global/forwardingRules/{forwardingRule}
  resource: globalForwardingRules
- description: Retrieves a list of ForwardingRule resources available to the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/forwardingRules
  resource: forwardingRules
- description: Retrieves an aggregated list of forwarding rules.  To prevent failure, it is recommended that you set the `returnPartial
  method: GET
  path: projects/{project}/aggregated/forwardingRules
  resource: forwardingRules
- description: Returns the specified ForwardingRule resource.
  method: GET
  path: projects/{project}/regions/{region}/forwardingRules/{forwardingRule}
  resource: forwardingRules
- description: Creates a ForwardingRule resource in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/forwardingRules
  resource: forwardingRules
- description: Changes target URL for forwarding rule. The new target should be of the same type as the old target.
  method: POST
  path: projects/{project}/regions/{region}/forwardingRules/{forwardingRule}/setTarget
  resource: forwardingRules
- description: Sets the labels on the specified resource. To learn more about labels, read the  Labeling Resources documentation.
  method: POST
  path: projects/{project}/regions/{region}/forwardingRules/{resource}/setLabels
  resource: forwardingRules
- description: Updates the specified forwarding rule with the data included in the request. This method supportsPATCH semantics and use
  method: PATCH
  path: projects/{project}/regions/{region}/forwardingRules/{forwardingRule}
  resource: forwardingRules
- description: Deletes the specified ForwardingRule resource.
  method: DELETE
  path: projects/{project}/regions/{region}/forwardingRules/{forwardingRule}
  resource: forwardingRules
- description: Retrieves information about the specified future reservation.
  method: GET
  path: projects/{project}/zones/{zone}/futureReservations/{futureReservation}
  resource: futureReservations
- description: A list of all the future reservations that have been configured for the specified project in specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/futureReservations
  resource: futureReservations
- description: Retrieves an aggregated list of future reservations.  To prevent failure, it is recommended that you set the `returnPart
  method: GET
  path: projects/{project}/aggregated/futureReservations
  resource: futureReservations
- description: Creates a new Future Reservation.
  method: POST
  path: projects/{project}/zones/{zone}/futureReservations
  resource: futureReservations
- description: Cancel the specified future reservation.
  method: POST
  path: projects/{project}/zones/{zone}/futureReservations/{futureReservation}/cancel
  resource: futureReservations
- description: Updates the specified future reservation.
  method: PATCH
  path: projects/{project}/zones/{zone}/futureReservations/{futureReservation}
  resource: futureReservations
- description: Deletes the specified future reservation.
  method: DELETE
  path: projects/{project}/zones/{zone}/futureReservations/{futureReservation}
  resource: futureReservations
- description: Lists the HealthAggregationPolicies for a project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/healthAggregationPolicies
  resource: regionHealthAggregationPolicies
- description: Returns the specified HealthAggregationPolicy resource in the given region.
  method: GET
  path: projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}
  resource: regionHealthAggregationPolicies
- description: Retrieves the list of all HealthAggregationPolicy resources, regional and global, available to the specified project.  T
  method: GET
  path: projects/{project}/aggregated/healthAggregationPolicies
  resource: regionHealthAggregationPolicies
- description: 'Create a HealthAggregationPolicy in the specified project in the given region using the parameters that are included in '
  method: POST
  path: projects/{project}/regions/{region}/healthAggregationPolicies
  resource: regionHealthAggregationPolicies
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/healthAggregationPolicies/{resource}/testIamPermissions
  resource: regionHealthAggregationPolicies
- description: Updates the specified regional HealthAggregationPolicy resource with the data included in the request. This method suppo
  method: PATCH
  path: projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}
  resource: regionHealthAggregationPolicies
- description: Deletes the specified HealthAggregationPolicy in the given region.
  method: DELETE
  path: projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}
  resource: regionHealthAggregationPolicies
- description: Retrieves the list of all HealthCheckService resources, regional and global, available to the specified project.  To pre
  method: GET
  path: projects/{project}/aggregated/healthCheckServices
  resource: regionHealthCheckServices
- description: Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/healthCheckServices
  resource: regionHealthCheckServices
- description: Returns the specified regional HealthCheckService resource.
  method: GET
  path: projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}
  resource: regionHealthCheckServices
- description: Creates a regional HealthCheckService resource in the specified project and region using the data included in the reques
  method: POST
  path: projects/{project}/regions/{region}/healthCheckServices
  resource: regionHealthCheckServices
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/healthCheckServices/{resource}/testIamPermissions
  resource: regionHealthCheckServices
- description: Updates the specified regional HealthCheckService resource with the data included in the request.  This method supportsP
  method: PATCH
  path: projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}
  resource: regionHealthCheckServices
- description: Deletes the specified regional HealthCheckService.
  method: DELETE
  path: projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}
  resource: regionHealthCheckServices
- description: Retrieves the list of HealthCheck resources available to the specified project.
  method: GET
  path: projects/{project}/global/healthChecks
  resource: healthChecks
- description: Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.  To prevent fa
  method: GET
  path: projects/{project}/aggregated/healthChecks
  resource: healthChecks
- description: Returns the specified HealthCheck resource.
  method: GET
  path: projects/{project}/global/healthChecks/{healthCheck}
  resource: healthChecks
- description: Creates a HealthCheck resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/healthChecks
  resource: healthChecks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/healthChecks/{resource}/testIamPermissions
  resource: healthChecks
- description: Updates a HealthCheck resource in the specified project using the data included in the request.
  method: PUT
  path: projects/{project}/global/healthChecks/{healthCheck}
  resource: healthChecks
- description: Updates a HealthCheck resource in the specified project using the data included in the request. This method supportsPATC
  method: PATCH
  path: projects/{project}/global/healthChecks/{healthCheck}
  resource: healthChecks
- description: Deletes the specified HealthCheck resource.
  method: DELETE
  path: projects/{project}/global/healthChecks/{healthCheck}
  resource: healthChecks
- description: Retrieves the list of HealthCheck resources available to the specified project.
  method: GET
  path: projects/{project}/regions/{region}/healthChecks
  resource: regionHealthChecks
- description: Returns the specified HealthCheck resource.
  method: GET
  path: projects/{project}/regions/{region}/healthChecks/{healthCheck}
  resource: regionHealthChecks
- description: Creates a HealthCheck resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/healthChecks
  resource: regionHealthChecks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/healthChecks/{resource}/testIamPermissions
  resource: regionHealthChecks
- description: Updates a HealthCheck resource in the specified project using the data included in the request.
  method: PUT
  path: projects/{project}/regions/{region}/healthChecks/{healthCheck}
  resource: regionHealthChecks
- description: Updates a HealthCheck resource in the specified project using the data included in the request. This method supportsPATC
  method: PATCH
  path: projects/{project}/regions/{region}/healthChecks/{healthCheck}
  resource: regionHealthChecks
- description: Deletes the specified HealthCheck resource.
  method: DELETE
  path: projects/{project}/regions/{region}/healthChecks/{healthCheck}
  resource: regionHealthChecks
- description: Retrieves the list of all HealthSource resources (all regional) available to the specified project.  To prevent failure,
  method: GET
  path: projects/{project}/aggregated/healthSources
  resource: regionHealthSources
- description: Lists the HealthSources for a project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/healthSources
  resource: regionHealthSources
- description: Returns the specified HealthSource resource in the given region.
  method: GET
  path: projects/{project}/regions/{region}/healthSources/{healthSource}
  resource: regionHealthSources
- description: Create a HealthSource in the specified project in the given region using the parameters that are included in the request
  method: POST
  path: projects/{project}/regions/{region}/healthSources
  resource: regionHealthSources
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/healthSources/{resource}/testIamPermissions
  resource: regionHealthSources
- description: Updates the specified regional HealthSource resource with the data included in the request.  This method supportsPATCH s
  method: PATCH
  path: projects/{project}/regions/{region}/healthSources/{healthSource}
  resource: regionHealthSources
- description: Deletes the specified HealthSource in the given region
  method: DELETE
  path: projects/{project}/regions/{region}/healthSources/{healthSource}
  resource: regionHealthSources
- description: Retrieves the list of HttpHealthCheck resources available to the specified project.
  method: GET
  path: projects/{project}/global/httpHealthChecks
  resource: httpHealthChecks
- description: Returns the specified HttpHealthCheck resource.
  method: GET
  path: projects/{project}/global/httpHealthChecks/{httpHealthCheck}
  resource: httpHealthChecks
- description: Creates a HttpHealthCheck resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/httpHealthChecks
  resource: httpHealthChecks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/httpHealthChecks/{resource}/testIamPermissions
  resource: httpHealthChecks
- description: Updates a HttpHealthCheck resource in the specified project using the data included in the request.
  method: PUT
  path: projects/{project}/global/httpHealthChecks/{httpHealthCheck}
  resource: httpHealthChecks
- description: Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports
  method: PATCH
  path: projects/{project}/global/httpHealthChecks/{httpHealthCheck}
  resource: httpHealthChecks
- description: Deletes the specified HttpHealthCheck resource.
  method: DELETE
  path: projects/{project}/global/httpHealthChecks/{httpHealthCheck}
  resource: httpHealthChecks
- description: Retrieves the list of HttpsHealthCheck resources available to the specified project.
  method: GET
  path: projects/{project}/global/httpsHealthChecks
  resource: httpsHealthChecks
- description: Returns the specified HttpsHealthCheck resource.
  method: GET
  path: projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}
  resource: httpsHealthChecks
- description: Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/httpsHealthChecks
  resource: httpsHealthChecks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/httpsHealthChecks/{resource}/testIamPermissions
  resource: httpsHealthChecks
- description: Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
  method: PUT
  path: projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}
  resource: httpsHealthChecks
- description: Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method support
  method: PATCH
  path: projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}
  resource: httpsHealthChecks
- description: Deletes the specified HttpsHealthCheck resource.
  method: DELETE
  path: projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}
  resource: httpsHealthChecks
- description: Retrieves a list of instance templates that are contained within the specified project.
  method: GET
  path: projects/{project}/global/instanceTemplates
  resource: instanceTemplates
- description: Returns the specified instance template.
  method: GET
  path: projects/{project}/global/instanceTemplates/{instanceTemplate}
  resource: instanceTemplates
- description: Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.  To prev
  method: GET
  path: projects/{project}/aggregated/instanceTemplates
  resource: instanceTemplates
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/instanceTemplates/{resource}/getIamPolicy
  resource: instanceTemplates
- description: Creates an instance template in the specified project using the data that is included in the request. If you are creatin
  method: POST
  path: projects/{project}/global/instanceTemplates
  resource: instanceTemplates
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/instanceTemplates/{resource}/setIamPolicy
  resource: instanceTemplates
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/instanceTemplates/{resource}/testIamPermissions
  resource: instanceTemplates
- description: Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not poss
  method: DELETE
  path: projects/{project}/global/instanceTemplates/{instanceTemplate}
  resource: instanceTemplates
- description: Retrieves a list of instance templates that are contained within the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/instanceTemplates
  resource: regionInstanceTemplates
- description: Returns the specified instance template.
  method: GET
  path: projects/{project}/regions/{region}/instanceTemplates/{instanceTemplate}
  resource: regionInstanceTemplates
- description: Creates an instance template in the specified project and region using the global instance template whose URL is include
  method: POST
  path: projects/{project}/regions/{region}/instanceTemplates
  resource: regionInstanceTemplates
- description: Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone.
  method: DELETE
  path: projects/{project}/regions/{region}/instanceTemplates/{instanceTemplate}
  resource: regionInstanceTemplates
- description: Get Instance settings.
  method: GET
  path: projects/{project}/zones/{zone}/instanceSettings
  resource: instanceSettings
- description: Patch Instance settings
  method: PATCH
  path: projects/{project}/zones/{zone}/instanceSettings
  resource: instanceSettings
- description: Retrieves the list of InstantSnapshot resources contained within the specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/instantSnapshots
  resource: instantSnapshots
- description: Returns the specified InstantSnapshot resource in the specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/instantSnapshots/{instantSnapshot}
  resource: instantSnapshots
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/zones/{zone}/instantSnapshots/{resource}/getIamPolicy
  resource: instantSnapshots
- description: Retrieves an aggregated list of instantSnapshots.  To prevent failure, Google recommends that you set the `returnPartial
  method: GET
  path: projects/{project}/aggregated/instantSnapshots
  resource: instantSnapshots
- description: Creates an instant snapshot in the specified zone.
  method: POST
  path: projects/{project}/zones/{zone}/instantSnapshots
  resource: instantSnapshots
- description: Sets the labels on a instantSnapshot in the given zone. To learn more about labels, read the Labeling Resources document
  method: POST
  path: projects/{project}/zones/{zone}/instantSnapshots/{resource}/setLabels
  resource: instantSnapshots
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/zones/{zone}/instantSnapshots/{resource}/setIamPolicy
  resource: instantSnapshots
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/instantSnapshots/{resource}/testIamPermissions
  resource: instantSnapshots
- description: Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessaril
  method: DELETE
  path: projects/{project}/zones/{zone}/instantSnapshots/{instantSnapshot}
  resource: instantSnapshots
- description: Retrieves the list of InstantSnapshot resources contained within the specified region.
  method: GET
  path: projects/{project}/regions/{region}/instantSnapshots
  resource: regionInstantSnapshots
- description: Returns the specified InstantSnapshot resource in the specified region.
  method: GET
  path: projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}
  resource: regionInstantSnapshots
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/instantSnapshots/{resource}/getIamPolicy
  resource: regionInstantSnapshots
- description: Creates an instant snapshot in the specified region.
  method: POST
  path: projects/{project}/regions/{region}/instantSnapshots
  resource: regionInstantSnapshots
- description: Sets the labels on a instantSnapshot in the given region. To learn more about labels, read the Labeling Resources docume
  method: POST
  path: projects/{project}/regions/{region}/instantSnapshots/{resource}/setLabels
  resource: regionInstantSnapshots
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/instantSnapshots/{resource}/setIamPolicy
  resource: regionInstantSnapshots
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/instantSnapshots/{resource}/testIamPermissions
  resource: regionInstantSnapshots
- description: Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessaril
  method: DELETE
  path: projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}
  resource: regionInstantSnapshots
- description: Retrieves the list of interconnect locations available to the specified project.
  method: GET
  path: projects/{project}/global/interconnectLocations
  resource: interconnectLocations
- description: Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a
  method: GET
  path: projects/{project}/global/interconnectLocations/{interconnectLocation}
  resource: interconnectLocations
- description: Retrieves the list of interconnect remote locations available to the specified project.
  method: GET
  path: projects/{project}/global/interconnectRemoteLocations
  resource: interconnectRemoteLocations
- description: Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locatio
  method: GET
  path: projects/{project}/global/interconnectRemoteLocations/{interconnectRemoteLocation}
  resource: interconnectRemoteLocations
- description: Return a specified license code. License codes are mirrored across all projects that have permissions to read the Licens
  method: GET
  path: projects/{project}/global/licenseCodes/{licenseCode}
  resource: licenseCodes
- description: Returns permissions that a caller has on the specified resource.  *Caution* This resource is intended for use only by th
  method: POST
  path: projects/{project}/global/licenseCodes/{resource}/testIamPermissions
  resource: licenseCodes
- description: Returns the specified License resource.  *Caution* This resource is intended for use only by third-party partners who ar
  method: GET
  path: projects/{project}/global/licenses/{license}
  resource: licenses
- description: 'Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to '
  method: GET
  path: projects/{project}/global/licenses
  resource: licenses
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.  *Caution* This resour
  method: GET
  path: projects/{project}/global/licenses/{resource}/getIamPolicy
  resource: licenses
- description: Create a License resource in the specified project.  *Caution* This resource is intended for use only by third-party par
  method: POST
  path: projects/{project}/global/licenses
  resource: licenses
- description: Sets the access control policy on the specified resource. Replaces any existing policy.  *Caution* This resource is inte
  method: POST
  path: projects/{project}/global/licenses/{resource}/setIamPolicy
  resource: licenses
- description: Returns permissions that a caller has on the specified resource.  *Caution* This resource is intended for use only by th
  method: POST
  path: projects/{project}/global/licenses/{resource}/testIamPermissions
  resource: licenses
- description: Updates a License resource in the specified project.  *Caution* This resource is intended for use only by third-party pa
  method: PATCH
  path: projects/{project}/global/licenses/{license}
  resource: licenses
- description: Deletes the specified license.  *Caution* This resource is intended for use only by third-party partners who are creatin
  method: DELETE
  path: projects/{project}/global/licenses/{license}
  resource: licenses
- description: Retrieves a list of machine images that are contained within the specified project.
  method: GET
  path: projects/{project}/global/machineImages
  resource: machineImages
- description: Returns the specified machine image.
  method: GET
  path: projects/{project}/global/machineImages/{machineImage}
  resource: machineImages
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/global/machineImages/{resource}/getIamPolicy
  resource: machineImages
- description: Creates a machine image in the specified project using the data that is included in the request. If you are creating a n
  method: POST
  path: projects/{project}/global/machineImages
  resource: machineImages
- description: Sets the labels on a machine image. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/global/machineImages/{resource}/setLabels
  resource: machineImages
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/global/machineImages/{resource}/setIamPolicy
  resource: machineImages
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/machineImages/{resource}/testIamPermissions
  resource: machineImages
- description: Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.
  method: DELETE
  path: projects/{project}/global/machineImages/{machineImage}
  resource: machineImages
- description: Retrieves a list of machine types available to the specified project.
  method: GET
  path: projects/{project}/zones/{zone}/machineTypes
  resource: machineTypes
- description: Retrieves an aggregated list of machine types.  To prevent failure, Google recommends that you set the `returnPartialSuc
  method: GET
  path: projects/{project}/aggregated/machineTypes
  resource: machineTypes
- description: Returns the specified machine type.
  method: GET
  path: projects/{project}/zones/{zone}/machineTypes/{machineType}
  resource: machineTypes
- description: Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.  To prev
  method: GET
  path: projects/{project}/aggregated/networkAttachments
  resource: networkAttachments
- description: Lists the NetworkAttachments for a project in the given scope.
  method: GET
  path: projects/{project}/regions/{region}/networkAttachments
  resource: networkAttachments
- description: Returns the specified NetworkAttachment resource in the given scope.
  method: GET
  path: projects/{project}/regions/{region}/networkAttachments/{networkAttachment}
  resource: networkAttachments
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/networkAttachments/{resource}/getIamPolicy
  resource: networkAttachments
- description: Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the re
  method: POST
  path: projects/{project}/regions/{region}/networkAttachments
  resource: networkAttachments
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/networkAttachments/{resource}/setIamPolicy
  resource: networkAttachments
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/networkAttachments/{resource}/testIamPermissions
  resource: networkAttachments
- description: Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH seman
  method: PATCH
  path: projects/{project}/regions/{region}/networkAttachments/{networkAttachment}
  resource: networkAttachments
- description: Deletes the specified NetworkAttachment in the given scope
  method: DELETE
  path: projects/{project}/regions/{region}/networkAttachments/{networkAttachment}
  resource: networkAttachments
- description: Gets a specified NetworkEdgeSecurityService.
  method: GET
  path: projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}
  resource: networkEdgeSecurityServices
- description: 'Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.  To prevent failure, '
  method: GET
  path: projects/{project}/aggregated/networkEdgeSecurityServices
  resource: networkEdgeSecurityServices
- description: Creates a new service in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/networkEdgeSecurityServices
  resource: networkEdgeSecurityServices
- description: Patches the specified policy with the data included in the request.
  method: PATCH
  path: projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}
  resource: networkEdgeSecurityServices
- description: Deletes the specified service.
  method: DELETE
  path: projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}
  resource: networkEdgeSecurityServices
- description: Retrieves the list of network endpoint groups that are located in the specified project and zone.
  method: GET
  path: projects/{project}/zones/{zone}/networkEndpointGroups
  resource: networkEndpointGroups
- description: Retrieves the list of network endpoint groups and sorts them by zone.  To prevent failure, Google recommends that you se
  method: GET
  path: projects/{project}/aggregated/networkEndpointGroups
  resource: networkEndpointGroups
- description: Returns the specified network endpoint group.
  method: GET
  path: projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}
  resource: networkEndpointGroups
- description: 'Creates a network endpoint group in the specified project using the parameters that are included in the request.  Note: '
  method: POST
  path: projects/{project}/zones/{zone}/networkEndpointGroups
  resource: networkEndpointGroups
- description: Attach a list of network endpoints to the specified network endpoint group.
  method: POST
  path: projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints
  resource: networkEndpointGroups
- description: Detach a list of network endpoints from the specified network endpoint group.
  method: POST
  path: projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints
  resource: networkEndpointGroups
- description: Lists the network endpoints in the specified network endpoint group.
  method: POST
  path: projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints
  resource: networkEndpointGroups
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/networkEndpointGroups/{resource}/testIamPermissions
  resource: networkEndpointGroups
- description: Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are n
  method: DELETE
  path: projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}
  resource: networkEndpointGroups
- description: Retrieves the list of network endpoint groups that are located in the specified project.
  method: GET
  path: projects/{project}/global/networkEndpointGroups
  resource: globalNetworkEndpointGroups
- description: Returns the specified network endpoint group.
  method: GET
  path: projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}
  resource: globalNetworkEndpointGroups
- description: 'Creates a network endpoint group in the specified project using the parameters that are included in the request.  Note: '
  method: POST
  path: projects/{project}/global/networkEndpointGroups
  resource: globalNetworkEndpointGroups
- description: Attach a network endpoint to the specified network endpoint group.
  method: POST
  path: projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints
  resource: globalNetworkEndpointGroups
- description: Detach the network endpoint from the specified network endpoint group.
  method: POST
  path: projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints
  resource: globalNetworkEndpointGroups
- description: Lists the network endpoints in the specified network endpoint group.
  method: POST
  path: projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints
  resource: globalNetworkEndpointGroups
- description: Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referenci
  method: DELETE
  path: projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}
  resource: globalNetworkEndpointGroups
- description: Retrieves the list of regional network endpoint groups available to the specified project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/networkEndpointGroups
  resource: regionNetworkEndpointGroups
- description: Returns the specified network endpoint group.
  method: GET
  path: projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}
  resource: regionNetworkEndpointGroups
- description: 'Creates a network endpoint group in the specified project using the parameters that are included in the request.  Note: '
  method: POST
  path: projects/{project}/regions/{region}/networkEndpointGroups
  resource: regionNetworkEndpointGroups
- description: Attach a list of network endpoints to the specified network endpoint group.
  method: POST
  path: projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints
  resource: regionNetworkEndpointGroups
- description: Detach the network endpoint from the specified network endpoint group.
  method: POST
  path: projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints
  resource: regionNetworkEndpointGroups
- description: Lists the network endpoints in the specified network endpoint group.
  method: POST
  path: projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints
  resource: regionNetworkEndpointGroups
- description: 'Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a '
  method: DELETE
  path: projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}
  resource: regionNetworkEndpointGroups
- description: Retrieves the list of networks available to the specified project.
  method: GET
  path: projects/{project}/global/networks
  resource: networks
- description: Returns the specified network.
  method: GET
  path: projects/{project}/global/networks/{network}
  resource: networks
- description: Returns the effective firewalls on a given network.
  method: GET
  path: projects/{project}/global/networks/{network}/getEffectiveFirewalls
  resource: networks
- description: Lists the peering routes exchanged over peering connection.
  method: GET
  path: projects/{project}/global/networks/{network}/listPeeringRoutes
  resource: networks
- description: Creates a network in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/networks
  resource: networks
- description: Adds a peering to the specified network.
  method: POST
  path: projects/{project}/global/networks/{network}/addPeering
  resource: networks
- description: Requests to remove a peering from the specified network. Applicable only for PeeringConnection with update_strategy=CONS
  method: POST
  path: projects/{project}/global/networks/{network}/requestRemovePeering
  resource: networks
- description: Removes a peering from the specified network.
  method: POST
  path: projects/{project}/global/networks/{network}/removePeering
  resource: networks
- description: Switches the network mode from auto subnet mode to custom subnet mode.
  method: POST
  path: projects/{project}/global/networks/{network}/switchToCustomMode
  resource: networks
- description: Patches the specified network with the data included in the request. Only routingConfig can be modified.
  method: PATCH
  path: projects/{project}/global/networks/{network}
  resource: networks
- description: Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.expo
  method: PATCH
  path: projects/{project}/global/networks/{network}/updatePeering
  resource: networks
- description: Deletes the specified network.
  method: DELETE
  path: projects/{project}/global/networks/{network}
  resource: networks
- description: 'Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details abou'
  method: GET
  path: projects/{project}/zones/{zone}/nodeGroups
  resource: nodeGroups
- description: 'Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.  To preve'
  method: GET
  path: projects/{project}/aggregated/nodeGroups
  resource: nodeGroups
- description: 'Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the ''nodes'' field '
  method: GET
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}
  resource: nodeGroups
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/zones/{zone}/nodeGroups/{resource}/getIamPolicy
  resource: nodeGroups
- description: Creates a NodeGroup resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups
  resource: nodeGroups
- description: Adds specified number of nodes to the node group.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/addNodes
  resource: nodeGroups
- description: Deletes specified nodes from the node group.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/deleteNodes
  resource: nodeGroups
- description: Lists nodes in the node group.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/listNodes
  resource: nodeGroups
- description: Updates the node template of the node group.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/setNodeTemplate
  resource: nodeGroups
- description: Simulates maintenance event on specified nodes from the node group.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/simulateMaintenanceEvent
  resource: nodeGroups
- description: Perform maintenance on a subset of nodes in the node group.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/performMaintenance
  resource: nodeGroups
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups/{resource}/setIamPolicy
  resource: nodeGroups
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/nodeGroups/{resource}/testIamPermissions
  resource: nodeGroups
- description: Updates the specified node group.
  method: PATCH
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}
  resource: nodeGroups
- description: Deletes the specified NodeGroup resource.
  method: DELETE
  path: projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}
  resource: nodeGroups
- description: Retrieves a list of node templates available to the specified project.
  method: GET
  path: projects/{project}/regions/{region}/nodeTemplates
  resource: nodeTemplates
- description: Retrieves an aggregated list of node templates.  To prevent failure, Google recommends that you set the `returnPartialSu
  method: GET
  path: projects/{project}/aggregated/nodeTemplates
  resource: nodeTemplates
- description: Returns the specified node template.
  method: GET
  path: projects/{project}/regions/{region}/nodeTemplates/{nodeTemplate}
  resource: nodeTemplates
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/nodeTemplates/{resource}/getIamPolicy
  resource: nodeTemplates
- description: Creates a NodeTemplate resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/nodeTemplates
  resource: nodeTemplates
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/nodeTemplates/{resource}/setIamPolicy
  resource: nodeTemplates
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/nodeTemplates/{resource}/testIamPermissions
  resource: nodeTemplates
- description: Deletes the specified NodeTemplate resource.
  method: DELETE
  path: projects/{project}/regions/{region}/nodeTemplates/{nodeTemplate}
  resource: nodeTemplates
- description: Retrieves a list of node types available to the specified project.
  method: GET
  path: projects/{project}/zones/{zone}/nodeTypes
  resource: nodeTypes
- description: Retrieves an aggregated list of node types.  To prevent failure, Google recommends that you set the `returnPartialSucces
  method: GET
  path: projects/{project}/aggregated/nodeTypes
  resource: nodeTypes
- description: Returns the specified node type.
  method: GET
  path: projects/{project}/zones/{zone}/nodeTypes/{nodeType}
  resource: nodeTypes
- description: Retrieves the list of all NotificationEndpoint resources, regional and global, available to the specified project.
  method: GET
  path: projects/{project}/aggregated/notificationEndpoints
  resource: regionNotificationEndpoints
- description: Lists the NotificationEndpoints for a project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/notificationEndpoints
  resource: regionNotificationEndpoints
- description: Returns the specified NotificationEndpoint resource in the given region.
  method: GET
  path: projects/{project}/regions/{region}/notificationEndpoints/{notificationEndpoint}
  resource: regionNotificationEndpoints
- description: Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the
  method: POST
  path: projects/{project}/regions/{region}/notificationEndpoints
  resource: regionNotificationEndpoints
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/notificationEndpoints/{resource}/testIamPermissions
  resource: regionNotificationEndpoints
- description: Deletes the specified NotificationEndpoint in the given region
  method: DELETE
  path: projects/{project}/regions/{region}/notificationEndpoints/{notificationEndpoint}
  resource: regionNotificationEndpoints
- description: Returns the specified PacketMirroring resource.
  method: GET
  path: projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}
  resource: packetMirrorings
- description: Retrieves a list of PacketMirroring resources available to the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/packetMirrorings
  resource: packetMirrorings
- description: Retrieves an aggregated list of packetMirrorings.  To prevent failure, Google recommends that you set the `returnPartial
  method: GET
  path: projects/{project}/aggregated/packetMirrorings
  resource: packetMirrorings
- description: Creates a PacketMirroring resource in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/packetMirrorings
  resource: packetMirrorings
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/packetMirrorings/{resource}/testIamPermissions
  resource: packetMirrorings
- description: Patches the specified PacketMirroring resource with the data included in the request. This method supportsPATCH semantic
  method: PATCH
  path: projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}
  resource: packetMirrorings
- description: Deletes the specified PacketMirroring resource.
  method: DELETE
  path: projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}
  resource: packetMirrorings
- description: Returns the specified Project resource.  To decrease latency for this method, you can optionally omit any unneeded infor
  method: GET
  path: projects/{project}
  resource: projects
- description: Gets the shared VPC host project that this project links to. May be empty if no link exists.
  method: GET
  path: projects/{project}/getXpnHost
  resource: projects
- description: Gets service resources (a.k.a service project) associated with this host project.
  method: GET
  path: projects/{project}/getXpnResources
  resource: projects
- description: Sets metadata common to all instances within the specified project using the data included in the request.
  method: POST
  path: projects/{project}/setCommonInstanceMetadata
  resource: projects
- description: Enables the usage export feature and sets theusage export bucket where reports are stored. If you provide an empty reque
  method: POST
  path: projects/{project}/setUsageExportBucket
  resource: projects
- description: 'Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this '
  method: POST
  path: projects/{project}/moveInstance
  resource: projects
- description: 'Moves a persistent disk from one zone to another. *Note*: The moveDisk API will be deprecated on September 29, 2026.  St'
  method: POST
  path: projects/{project}/moveDisk
  resource: projects
- description: Lists all shared VPC host projects visible to the user in an organization.
  method: POST
  path: projects/{project}/listXpnHosts
  resource: projects
- description: Enable this project as a shared VPC host project.
  method: POST
  path: projects/{project}/enableXpnHost
  resource: projects
- description: Disable this project as a shared VPC host project.
  method: POST
  path: projects/{project}/disableXpnHost
  resource: projects
- description: Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by i
  method: POST
  path: projects/{project}/enableXpnResource
  resource: projects
- description: Disable a service resource (also known as service project) associated with this host project.
  method: POST
  path: projects/{project}/disableXpnResource
  resource: projects
- description: Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance i
  method: POST
  path: projects/{project}/setDefaultNetworkTier
  resource: projects
- description: Sets the Cloud Armor tier of the project. To set ENTERPRISE or above the billing account of the project must be subscrib
  method: POST
  path: projects/{project}/setCloudArmorTier
  resource: projects
- description: Lists the PublicAdvertisedPrefixes for a project.
  method: GET
  path: projects/{project}/global/publicAdvertisedPrefixes
  resource: publicAdvertisedPrefixes
- description: Returns the specified PublicAdvertisedPrefix resource.
  method: GET
  path: projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}
  resource: publicAdvertisedPrefixes
- description: Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
  method: POST
  path: projects/{project}/global/publicAdvertisedPrefixes
  resource: publicAdvertisedPrefixes
- description: Announces the specified PublicAdvertisedPrefix
  method: POST
  path: projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}/announce
  resource: publicAdvertisedPrefixes
- description: Withdraws the specified PublicAdvertisedPrefix
  method: POST
  path: projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}/withdraw
  resource: publicAdvertisedPrefixes
- description: Patches the specified Router resource with the data included in the request. This method supportsPATCH semantics and use
  method: PATCH
  path: projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}
  resource: publicAdvertisedPrefixes
- description: Deletes the specified PublicAdvertisedPrefix
  method: DELETE
  path: projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}
  resource: publicAdvertisedPrefixes
- description: Lists the global PublicDelegatedPrefixes for a project.
  method: GET
  path: projects/{project}/global/publicDelegatedPrefixes
  resource: globalPublicDelegatedPrefixes
- description: Returns the specified global PublicDelegatedPrefix resource.
  method: GET
  path: projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}
  resource: globalPublicDelegatedPrefixes
- description: Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.
  method: POST
  path: projects/{project}/global/publicDelegatedPrefixes
  resource: globalPublicDelegatedPrefixes
- description: Patches the specified global PublicDelegatedPrefix resource with the data included in the request. This method supportsP
  method: PATCH
  path: projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}
  resource: globalPublicDelegatedPrefixes
- description: Deletes the specified global PublicDelegatedPrefix.
  method: DELETE
  path: projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}
  resource: globalPublicDelegatedPrefixes
- description: Lists the PublicDelegatedPrefixes for a project in the given region.
  method: GET
  path: projects/{project}/regions/{region}/publicDelegatedPrefixes
  resource: publicDelegatedPrefixes
- description: Returns the specified PublicDelegatedPrefix resource in the given region.
  method: GET
  path: projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}
  resource: publicDelegatedPrefixes
- description: Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.  To prevent failure, Google r
  method: GET
  path: projects/{project}/aggregated/publicDelegatedPrefixes
  resource: publicDelegatedPrefixes
- description: Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in t
  method: POST
  path: projects/{project}/regions/{region}/publicDelegatedPrefixes
  resource: publicDelegatedPrefixes
- description: Announces the specified PublicDelegatedPrefix in the given region.
  method: POST
  path: projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}/announce
  resource: publicDelegatedPrefixes
- description: Withdraws the specified PublicDelegatedPrefix in the given region.
  method: POST
  path: projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}/withdraw
  resource: publicDelegatedPrefixes
- description: Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supportsPATCH se
  method: PATCH
  path: projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}
  resource: publicDelegatedPrefixes
- description: Deletes the specified PublicDelegatedPrefix in the given region.
  method: DELETE
  path: projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}
  resource: publicDelegatedPrefixes
- description: Retrieves the list of region resources available to the specified project.  To decrease latency for this method, you can
  method: GET
  path: projects/{project}/regions
  resource: regions
- description: Returns the specified Region resource.  To decrease latency for this method, you can optionally omit any unneeded inform
  method: GET
  path: projects/{project}/regions/{region}
  resource: regions
- description: Retrieves a list of subnetworks available to the specified project.
  method: GET
  path: projects/{project}/regions/{region}/subnetworks
  resource: subnetworks
- description: Retrieves an aggregated list of subnetworks.  To prevent failure, Google recommends that you set the `returnPartialSucce
  method: GET
  path: projects/{project}/aggregated/subnetworks
  resource: subnetworks
- description: Retrieves an aggregated list of all usable subnetworks in the project.
  method: GET
  path: projects/{project}/aggregated/subnetworks/listUsable
  resource: subnetworks
- description: Returns the specified subnetwork.
  method: GET
  path: projects/{project}/regions/{region}/subnetworks/{subnetwork}
  resource: subnetworks
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/subnetworks/{resource}/getIamPolicy
  resource: subnetworks
- description: Creates a subnetwork in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/subnetworks
  resource: subnetworks
- description: Expands the IP CIDR range of the subnetwork to a specified value.
  method: POST
  path: projects/{project}/regions/{region}/subnetworks/{subnetwork}/expandIpCidrRange
  resource: subnetworks
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/subnetworks/{resource}/setIamPolicy
  resource: subnetworks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/subnetworks/{resource}/testIamPermissions
  resource: subnetworks
- description: Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google
  method: POST
  path: projects/{project}/regions/{region}/subnetworks/{subnetwork}/setPrivateIpGoogleAccess
  resource: subnetworks
- description: 'Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch '
  method: PATCH
  path: projects/{project}/regions/{region}/subnetworks/{subnetwork}
  resource: subnetworks
- description: Deletes the specified subnetwork.
  method: DELETE
  path: projects/{project}/regions/{region}/subnetworks/{subnetwork}
  resource: subnetworks
- description: Retrieves a list of network profiles available to the specified project.
  method: GET
  path: projects/{project}/global/networkProfiles
  resource: networkProfiles
- description: Returns the specified network profile.
  method: GET
  path: projects/{project}/global/networkProfiles/{networkProfile}
  resource: networkProfiles
- description: Returns the details of the given PreviewFeature.
  method: GET
  path: projects/{project}/global/previewFeatures/{previewFeature}
  resource: previewFeatures
- description: Returns the details of the given PreviewFeature.
  method: GET
  path: projects/{project}/global/previewFeatures
  resource: previewFeatures
- description: Patches the given PreviewFeature. This method is used to enable or disable a PreviewFeature.
  method: PATCH
  path: projects/{project}/global/previewFeatures/{previewFeature}
  resource: previewFeatures
- description: Retrieves information about the specified reservation block.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks/{reservationBlock}
  resource: reservationBlocks
- description: Retrieves a list of reservation blocks under a single reservation.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks
  resource: reservationBlocks
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/getIamPolicy
  resource: reservationBlocks
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/setIamPolicy
  resource: reservationBlocks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/testIamPermissions
  resource: reservationBlocks
- description: Allows customers to perform maintenance on a reservation block
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks/{reservationBlock}/performMaintenance
  resource: reservationBlocks
- description: Retrieves information about the specified reservation slot.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{reservationSubBlocksId}/reservationSlots/{reservationSlot}
  resource: reservationSlots
- description: Retrieves a list of reservation slots under a single reservation.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{reservationSubBlocksId}/reservationSlots
  resource: reservationSlots
- description: Allows customers to get SBOM versions of a reservation slot.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{reservationSubBlocksId}/reservationSlots/{reservationSlot}/getVersion
  resource: reservationSlots
- description: Update a reservation slot in the specified sub-block.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{reservationSubBlocksId}/reservationSlots/{reservationSlot}
  resource: reservationSlots
- description: Retrieves information about the specified reservation subBlock.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{reservationSubBlock}
  resource: reservationSubBlocks
- description: Retrieves a list of reservation subBlocks under a single reservation.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks
  resource: reservationSubBlocks
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{resource}/getIamPolicy
  resource: reservationSubBlocks
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{resource}/setIamPolicy
  resource: reservationSubBlocks
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{resource}/testIamPermissions
  resource: reservationSubBlocks
- description: Allows customers to perform maintenance on a reservation subBlock
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{reservationSubBlock}/performMaintenance
  resource: reservationSubBlocks
- description: Allows customers to report a faulty subBlock.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{reservationSubBlock}/reportFaulty
  resource: reservationSubBlocks
- description: Allows customers to get SBOM versions of a reservation subBlock.
  method: POST
  path: projects/{project}/zones/{zone}/reservations/{reservationsId}/reservationBlocks/{reservationBlocksId}/reservationSubBlocks/{reservationSubBlock}/getVersion
  resource: reservationSubBlocks
- description: A list all the resource policies that have been configured for the specified project in specified region.
  method: GET
  path: projects/{project}/regions/{region}/resourcePolicies
  resource: resourcePolicies
- description: Retrieves an aggregated list of resource policies.  To prevent failure, Google recommends that you set the `returnPartia
  method: GET
  path: projects/{project}/aggregated/resourcePolicies
  resource: resourcePolicies
- description: Retrieves all information of the specified resource policy.
  method: GET
  path: projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}
  resource: resourcePolicies
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/resourcePolicies/{resource}/getIamPolicy
  resource: resourcePolicies
- description: Creates a new resource policy.
  method: POST
  path: projects/{project}/regions/{region}/resourcePolicies
  resource: resourcePolicies
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/resourcePolicies/{resource}/setIamPolicy
  resource: resourcePolicies
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/resourcePolicies/{resource}/testIamPermissions
  resource: resourcePolicies
- description: Modify the specified resource policy.
  method: PATCH
  path: projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}
  resource: resourcePolicies
- description: Deletes the specified resource policy.
  method: DELETE
  path: projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}
  resource: resourcePolicies
- description: Retrieves the list of Route resources available to the specified project.
  method: GET
  path: projects/{project}/global/routes
  resource: routes
- description: Returns the specified Route resource.
  method: GET
  path: projects/{project}/global/routes/{route}
  resource: routes
- description: Creates a Route resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/routes
  resource: routes
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/routes/{resource}/testIamPermissions
  resource: routes
- description: Deletes the specified Route resource.
  method: DELETE
  path: projects/{project}/global/routes/{route}
  resource: routes
- description: Returns the specified Router resource.
  method: GET
  path: projects/{project}/regions/{region}/routers/{router}
  resource: routers
- description: Retrieves a list of Router resources available to the specified project.
  method: GET
  path: projects/{project}/regions/{region}/routers
  resource: routers
- description: 'Retrieves an aggregated list of routers.  To prevent failure, Google recommends that you set the `returnPartialSuccess` '
  method: GET
  path: projects/{project}/aggregated/routers
  resource: routers
- description: Retrieves runtime information of the specified router.
  method: GET
  path: projects/{project}/regions/{region}/routers/{router}/getRouterStatus
  resource: routers
- description: Retrieves runtime Nat mapping information of VM endpoints.
  method: GET
  path: projects/{project}/regions/{region}/routers/{router}/getNatMappingInfo
  resource: routers
- description: Retrieves runtime NAT IP information.
  method: GET
  path: projects/{project}/regions/{region}/routers/{router}/getNatIpInfo
  resource: routers
- description: Returns specified Route Policy
  method: GET
  path: projects/{project}/regions/{region}/routers/{router}/getRoutePolicy
  resource: routers
- description: Retrieves a list of router route policy subresources available to the specified project.
  method: GET
  path: projects/{project}/regions/{region}/routers/{router}/listRoutePolicies
  resource: routers
- description: Retrieves a list of router bgp routes available to the specified project.
  method: GET
  path: projects/{project}/regions/{region}/routers/{router}/listBgpRoutes
  resource: routers
- description: Creates a Router resource in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/routers
  resource: routers
- description: Preview fields auto-generated during router create andupdate operations. Calling this method does NOT create or update t
  method: POST
  path: projects/{project}/regions/{region}/routers/{router}/preview
  resource: routers
- description: Updates or creates new Route Policy
  method: POST
  path: projects/{project}/regions/{region}/routers/{router}/updateRoutePolicy
  resource: routers
- description: Patches Route Policy
  method: POST
  path: projects/{project}/regions/{region}/routers/{router}/patchRoutePolicy
  resource: routers
- description: Deletes Route Policy
  method: POST
  path: projects/{project}/regions/{region}/routers/{router}/deleteRoutePolicy
  resource: routers
- description: Updates the specified Router resource with the data included in the request.  This method conforms toPUT semantics, whic
  method: PUT
  path: projects/{project}/regions/{region}/routers/{router}
  resource: routers
- description: Patches the specified Router resource with the data included in the request. This method supportsPATCH semantics and use
  method: PATCH
  path: projects/{project}/regions/{region}/routers/{router}
  resource: routers
- description: Deletes the specified Router resource.
  method: DELETE
  path: projects/{project}/regions/{region}/routers/{router}
  resource: routers
- description: Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.  To prev
  method: GET
  path: projects/{project}/aggregated/serviceAttachments
  resource: serviceAttachments
- description: Lists the ServiceAttachments for a project in the given scope.
  method: GET
  path: projects/{project}/regions/{region}/serviceAttachments
  resource: serviceAttachments
- description: Returns the specified ServiceAttachment resource in the given scope.
  method: GET
  path: projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}
  resource: serviceAttachments
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/regions/{region}/serviceAttachments/{resource}/getIamPolicy
  resource: serviceAttachments
- description: Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the re
  method: POST
  path: projects/{project}/regions/{region}/serviceAttachments
  resource: serviceAttachments
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/regions/{region}/serviceAttachments/{resource}/setIamPolicy
  resource: serviceAttachments
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/serviceAttachments/{resource}/testIamPermissions
  resource: serviceAttachments
- description: Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH seman
  method: PATCH
  path: projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}
  resource: serviceAttachments
- description: Deletes the specified ServiceAttachment in the given scope
  method: DELETE
  path: projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}
  resource: serviceAttachments
- description: Get snapshot settings.
  method: GET
  path: projects/{project}/global/snapshotSettings
  resource: snapshotSettings
- description: Patch snapshot settings.
  method: PATCH
  path: projects/{project}/global/snapshotSettings
  resource: snapshotSettings
- description: Retrieves the list of SslCertificate resources available to the specified project.
  method: GET
  path: projects/{project}/global/sslCertificates
  resource: sslCertificates
- description: Returns the specified SslCertificate resource.
  method: GET
  path: projects/{project}/global/sslCertificates/{sslCertificate}
  resource: sslCertificates
- description: Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.  To prevent
  method: GET
  path: projects/{project}/aggregated/sslCertificates
  resource: sslCertificates
- description: Creates a SslCertificate resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/sslCertificates
  resource: sslCertificates
- description: Deletes the specified SslCertificate resource.
  method: DELETE
  path: projects/{project}/global/sslCertificates/{sslCertificate}
  resource: sslCertificates
- description: Retrieves the list of SslCertificate resources available to the specified project in the specified region.
  method: GET
  path: projects/{project}/regions/{region}/sslCertificates
  resource: regionSslCertificates
- description: Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by makin
  method: GET
  path: projects/{project}/regions/{region}/sslCertificates/{sslCertificate}
  resource: regionSslCertificates
- description: Creates a SslCertificate resource in the specified project and region using the data included in the request
  method: POST
  path: projects/{project}/regions/{region}/sslCertificates
  resource: regionSslCertificates
- description: Deletes the specified SslCertificate resource in the region.
  method: DELETE
  path: projects/{project}/regions/{region}/sslCertificates/{sslCertificate}
  resource: regionSslCertificates
- description: Lists all the SSL policies that have been configured for the specified project.
  method: GET
  path: projects/{project}/global/sslPolicies
  resource: sslPolicies
- description: Lists all of the ordered rules present in a single specified policy.
  method: GET
  path: projects/{project}/global/sslPolicies/{sslPolicy}
  resource: sslPolicies
- description: Lists all features that can be specified in the SSL policy when using custom profile.
  method: GET
  path: projects/{project}/global/sslPolicies/listAvailableFeatures
  resource: sslPolicies
- description: Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.  To prevent fail
  method: GET
  path: projects/{project}/aggregated/sslPolicies
  resource: sslPolicies
- description: Returns the specified SSL policy resource.
  method: POST
  path: projects/{project}/global/sslPolicies
  resource: sslPolicies
- description: Patches the specified SSL policy with the data included in the request.
  method: PATCH
  path: projects/{project}/global/sslPolicies/{sslPolicy}
  resource: sslPolicies
- description: Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProx
  method: DELETE
  path: projects/{project}/global/sslPolicies/{sslPolicy}
  resource: sslPolicies
- description: Lists all the SSL policies that have been configured for the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/sslPolicies
  resource: regionSslPolicies
- description: Lists all of the ordered rules present in a single specified policy.
  method: GET
  path: projects/{project}/regions/{region}/sslPolicies/{sslPolicy}
  resource: regionSslPolicies
- description: Lists all features that can be specified in the SSL policy when using custom profile.
  method: GET
  path: projects/{project}/regions/{region}/sslPolicies/listAvailableFeatures
  resource: regionSslPolicies
- description: Creates a new policy in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/sslPolicies
  resource: regionSslPolicies
- description: Patches the specified SSL policy with the data included in the request.
  method: PATCH
  path: projects/{project}/regions/{region}/sslPolicies/{sslPolicy}
  resource: regionSslPolicies
- description: Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProx
  method: DELETE
  path: projects/{project}/regions/{region}/sslPolicies/{sslPolicy}
  resource: regionSslPolicies
- description: Retrieves a list of storage pool types available to the specified project.
  method: GET
  path: projects/{project}/zones/{zone}/storagePoolTypes
  resource: storagePoolTypes
- description: Retrieves an aggregated list of storage pool types.  To prevent failure, Google recommends that you set the `returnParti
  method: GET
  path: projects/{project}/aggregated/storagePoolTypes
  resource: storagePoolTypes
- description: Returns the specified storage pool type.
  method: GET
  path: projects/{project}/zones/{zone}/storagePoolTypes/{storagePoolType}
  resource: storagePoolTypes
- description: Retrieves a list of storage pools contained within the specified zone.
  method: GET
  path: projects/{project}/zones/{zone}/storagePools
  resource: storagePools
- description: Retrieves an aggregated list of storage pools.  To prevent failure, Google recommends that you set the `returnPartialSuc
  method: GET
  path: projects/{project}/aggregated/storagePools
  resource: storagePools
- description: Returns a specified storage pool. Gets a list of available storage pools by making a list() request.
  method: GET
  path: projects/{project}/zones/{zone}/storagePools/{storagePool}
  resource: storagePools
- description: Gets the access control policy for a resource. May be empty if no such policy or resource exists.
  method: GET
  path: projects/{project}/zones/{zone}/storagePools/{resource}/getIamPolicy
  resource: storagePools
- description: Lists the disks in a specified storage pool.
  method: GET
  path: projects/{project}/zones/{zone}/storagePools/{storagePool}/listDisks
  resource: storagePools
- description: Creates a storage pool in the specified project using the data in the request.
  method: POST
  path: projects/{project}/zones/{zone}/storagePools
  resource: storagePools
- description: Sets the access control policy on the specified resource. Replaces any existing policy.
  method: POST
  path: projects/{project}/zones/{zone}/storagePools/{resource}/setIamPolicy
  resource: storagePools
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/storagePools/{resource}/testIamPermissions
  resource: storagePools
- description: Updates the specified storagePool with the data included in the request. The update is performed only on selected fields
  method: PATCH
  path: projects/{project}/zones/{zone}/storagePools/{storagePool}
  resource: storagePools
- description: Deletes the specified storage pool. Deleting a storagePool removes its data permanently and is irreversible. However, de
  method: DELETE
  path: projects/{project}/zones/{zone}/storagePools/{storagePool}
  resource: storagePools
- description: Lists the TargetGrpcProxies for a project in the given scope.
  method: GET
  path: projects/{project}/global/targetGrpcProxies
  resource: targetGrpcProxies
- description: Returns the specified TargetGrpcProxy resource in the given scope.
  method: GET
  path: projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}
  resource: targetGrpcProxies
- description: Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the requ
  method: POST
  path: projects/{project}/global/targetGrpcProxies
  resource: targetGrpcProxies
- description: Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semanti
  method: PATCH
  path: projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}
  resource: targetGrpcProxies
- description: Deletes the specified TargetGrpcProxy in the given scope
  method: DELETE
  path: projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}
  resource: targetGrpcProxies
- description: Retrieves the list of TargetHttpProxy resources available to the specified project.
  method: GET
  path: projects/{project}/global/targetHttpProxies
  resource: targetHttpProxies
- description: Returns the specified TargetHttpProxy resource.
  method: GET
  path: projects/{project}/global/targetHttpProxies/{targetHttpProxy}
  resource: targetHttpProxies
- description: Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.  To preven
  method: GET
  path: projects/{project}/aggregated/targetHttpProxies
  resource: targetHttpProxies
- description: Creates a TargetHttpProxy resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/targetHttpProxies
  resource: targetHttpProxies
- description: Changes the URL map for TargetHttpProxy.
  method: POST
  path: projects/{project}/targetHttpProxies/{targetHttpProxy}/setUrlMap
  resource: targetHttpProxies
- description: Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semanti
  method: PATCH
  path: projects/{project}/global/targetHttpProxies/{targetHttpProxy}
  resource: targetHttpProxies
- description: Deletes the specified TargetHttpProxy resource.
  method: DELETE
  path: projects/{project}/global/targetHttpProxies/{targetHttpProxy}
  resource: targetHttpProxies
- description: Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
  method: GET
  path: projects/{project}/regions/{region}/targetHttpProxies
  resource: regionTargetHttpProxies
- description: Returns the specified TargetHttpProxy resource in the specified region.
  method: GET
  path: projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}
  resource: regionTargetHttpProxies
- description: Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/targetHttpProxies
  resource: regionTargetHttpProxies
- description: Changes the URL map for TargetHttpProxy.
  method: POST
  path: projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}/setUrlMap
  resource: regionTargetHttpProxies
- description: Deletes the specified TargetHttpProxy resource.
  method: DELETE
  path: projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}
  resource: regionTargetHttpProxies
- description: Retrieves the list of TargetHttpsProxy resources available to the specified project.
  method: GET
  path: projects/{project}/global/targetHttpsProxies
  resource: targetHttpsProxies
- description: Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.  To preve
  method: GET
  path: projects/{project}/aggregated/targetHttpsProxies
  resource: targetHttpsProxies
- description: Returns the specified TargetHttpsProxy resource.
  method: GET
  path: projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}
  resource: targetHttpsProxies
- description: Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/targetHttpsProxies
  resource: targetHttpsProxies
- description: Changes the URL map for TargetHttpsProxy.
  method: POST
  path: projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap
  resource: targetHttpsProxies
- description: Replaces SslCertificates for TargetHttpsProxy.
  method: POST
  path: projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates
  resource: targetHttpsProxies
- description: Changes the Certificate Map for TargetHttpsProxy.
  method: POST
  path: projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setCertificateMap
  resource: targetHttpsProxies
- description: Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affect
  method: POST
  path: projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setSslPolicy
  resource: targetHttpsProxies
- description: Sets the QUIC override policy for TargetHttpsProxy.
  method: POST
  path: projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setQuicOverride
  resource: targetHttpsProxies
- description: Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semant
  method: PATCH
  path: projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}
  resource: targetHttpsProxies
- description: Deletes the specified TargetHttpsProxy resource.
  method: DELETE
  path: projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}
  resource: targetHttpsProxies
- description: Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
  method: GET
  path: projects/{project}/regions/{region}/targetHttpsProxies
  resource: regionTargetHttpsProxies
- description: Returns the specified TargetHttpsProxy resource in the specified region.
  method: GET
  path: projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}
  resource: regionTargetHttpsProxies
- description: Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/targetHttpsProxies
  resource: regionTargetHttpsProxies
- description: Changes the URL map for TargetHttpsProxy.
  method: POST
  path: projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap
  resource: regionTargetHttpsProxies
- description: Replaces SslCertificates for TargetHttpsProxy.
  method: POST
  path: projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates
  resource: regionTargetHttpsProxies
- description: Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PAT
  method: PATCH
  path: projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}
  resource: regionTargetHttpsProxies
- description: Deletes the specified TargetHttpsProxy resource.
  method: DELETE
  path: projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}
  resource: regionTargetHttpsProxies
- description: Retrieves a list of TargetInstance resources available to the specified project and zone.
  method: GET
  path: projects/{project}/zones/{zone}/targetInstances
  resource: targetInstances
- description: Retrieves an aggregated list of target instances.  To prevent failure, Google recommends that you set the `returnPartial
  method: GET
  path: projects/{project}/aggregated/targetInstances
  resource: targetInstances
- description: Returns the specified TargetInstance resource.
  method: GET
  path: projects/{project}/zones/{zone}/targetInstances/{targetInstance}
  resource: targetInstances
- description: Creates a TargetInstance resource in the specified project and zone using the data included in the request.
  method: POST
  path: projects/{project}/zones/{zone}/targetInstances
  resource: targetInstances
- description: Sets the Google Cloud Armor security policy for the specified target instance. For more information, seeGoogle Cloud Arm
  method: POST
  path: projects/{project}/zones/{zone}/targetInstances/{targetInstance}/setSecurityPolicy
  resource: targetInstances
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/zones/{zone}/targetInstances/{resource}/testIamPermissions
  resource: targetInstances
- description: Deletes the specified TargetInstance resource.
  method: DELETE
  path: projects/{project}/zones/{zone}/targetInstances/{targetInstance}
  resource: targetInstances
- description: Retrieves a list of target pools available to the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/targetPools
  resource: targetPools
- description: Retrieves an aggregated list of target pools.  To prevent failure, Google recommends that you set the `returnPartialSucc
  method: GET
  path: projects/{project}/aggregated/targetPools
  resource: targetPools
- description: Returns the specified target pool.
  method: GET
  path: projects/{project}/regions/{region}/targetPools/{targetPool}
  resource: targetPools
- description: Creates a target pool in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/targetPools
  resource: targetPools
- description: Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
  method: POST
  path: projects/{project}/regions/{region}/targetPools/{targetPool}/getHealth
  resource: targetPools
- description: Adds health check URLs to a target pool.
  method: POST
  path: projects/{project}/regions/{region}/targetPools/{targetPool}/addHealthCheck
  resource: targetPools
- description: Removes health check URL from a target pool.
  method: POST
  path: projects/{project}/regions/{region}/targetPools/{targetPool}/removeHealthCheck
  resource: targetPools
- description: Adds an instance to a target pool.
  method: POST
  path: projects/{project}/regions/{region}/targetPools/{targetPool}/addInstance
  resource: targetPools
- description: Removes instance URL from a target pool.
  method: POST
  path: projects/{project}/regions/{region}/targetPools/{targetPool}/removeInstance
  resource: targetPools
- description: Changes a backup target pool's configurations.
  method: POST
  path: projects/{project}/regions/{region}/targetPools/{targetPool}/setBackup
  resource: targetPools
- description: Sets the Google Cloud Armor security policy for the specified target pool. For more information, seeGoogle Cloud Armor O
  method: POST
  path: projects/{project}/regions/{region}/targetPools/{targetPool}/setSecurityPolicy
  resource: targetPools
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/targetPools/{resource}/testIamPermissions
  resource: targetPools
- description: Deletes the specified target pool.
  method: DELETE
  path: projects/{project}/regions/{region}/targetPools/{targetPool}
  resource: targetPools
- description: Retrieves the list of TargetSslProxy resources available to the specified project.
  method: GET
  path: projects/{project}/global/targetSslProxies
  resource: targetSslProxies
- description: Returns the specified TargetSslProxy resource.
  method: GET
  path: projects/{project}/global/targetSslProxies/{targetSslProxy}
  resource: targetSslProxies
- description: Creates a TargetSslProxy resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/targetSslProxies
  resource: targetSslProxies
- description: Changes the BackendService for TargetSslProxy.
  method: POST
  path: projects/{project}/global/targetSslProxies/{targetSslProxy}/setBackendService
  resource: targetSslProxies
- description: Changes SslCertificates for TargetSslProxy.
  method: POST
  path: projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslCertificates
  resource: targetSslProxies
- description: Changes the Certificate Map for TargetSslProxy.
  method: POST
  path: projects/{project}/global/targetSslProxies/{targetSslProxy}/setCertificateMap
  resource: targetSslProxies
- description: Changes the ProxyHeaderType for TargetSslProxy.
  method: POST
  path: projects/{project}/global/targetSslProxies/{targetSslProxy}/setProxyHeader
  resource: targetSslProxies
- description: 'Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects '
  method: POST
  path: projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslPolicy
  resource: targetSslProxies
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/targetSslProxies/{resource}/testIamPermissions
  resource: targetSslProxies
- description: Deletes the specified TargetSslProxy resource.
  method: DELETE
  path: projects/{project}/global/targetSslProxies/{targetSslProxy}
  resource: targetSslProxies
- description: Retrieves the list of TargetTcpProxy resources available to the specified project.
  method: GET
  path: projects/{project}/global/targetTcpProxies
  resource: targetTcpProxies
- description: Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.  To prevent
  method: GET
  path: projects/{project}/aggregated/targetTcpProxies
  resource: targetTcpProxies
- description: Returns the specified TargetTcpProxy resource.
  method: GET
  path: projects/{project}/global/targetTcpProxies/{targetTcpProxy}
  resource: targetTcpProxies
- description: Creates a TargetTcpProxy resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/targetTcpProxies
  resource: targetTcpProxies
- description: Changes the BackendService for TargetTcpProxy.
  method: POST
  path: projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setBackendService
  resource: targetTcpProxies
- description: Changes the ProxyHeaderType for TargetTcpProxy.
  method: POST
  path: projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setProxyHeader
  resource: targetTcpProxies
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/targetTcpProxies/{resource}/testIamPermissions
  resource: targetTcpProxies
- description: Deletes the specified TargetTcpProxy resource.
  method: DELETE
  path: projects/{project}/global/targetTcpProxies/{targetTcpProxy}
  resource: targetTcpProxies
- description: Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.
  method: GET
  path: projects/{project}/regions/{region}/targetTcpProxies
  resource: regionTargetTcpProxies
- description: Returns the specified TargetTcpProxy resource.
  method: GET
  path: projects/{project}/regions/{region}/targetTcpProxies/{targetTcpProxy}
  resource: regionTargetTcpProxies
- description: Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/targetTcpProxies
  resource: regionTargetTcpProxies
- description: Deletes the specified TargetTcpProxy resource.
  method: DELETE
  path: projects/{project}/regions/{region}/targetTcpProxies/{targetTcpProxy}
  resource: regionTargetTcpProxies
- description: Retrieves a list of target VPN gateways available to the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/targetVpnGateways
  resource: targetVpnGateways
- description: Retrieves an aggregated list of target VPN gateways.  To prevent failure, Google recommends that you set the `returnPart
  method: GET
  path: projects/{project}/aggregated/targetVpnGateways
  resource: targetVpnGateways
- description: Returns the specified target VPN gateway.
  method: GET
  path: projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}
  resource: targetVpnGateways
- description: Creates a target VPN gateway in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/targetVpnGateways
  resource: targetVpnGateways
- description: Sets the labels on a TargetVpnGateway. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/regions/{region}/targetVpnGateways/{resource}/setLabels
  resource: targetVpnGateways
- description: Deletes the specified target VPN gateway.
  method: DELETE
  path: projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}
  resource: targetVpnGateways
- description: Retrieves the list of UrlMap resources available to the specified project.
  method: GET
  path: projects/{project}/global/urlMaps
  resource: urlMaps
- description: Retrieves the list of all UrlMap resources, regional and global, available to the specified project.  To prevent failure
  method: GET
  path: projects/{project}/aggregated/urlMaps
  resource: urlMaps
- description: Returns the specified UrlMap resource.
  method: GET
  path: projects/{project}/global/urlMaps/{urlMap}
  resource: urlMaps
- description: Creates a UrlMap resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/global/urlMaps
  resource: urlMaps
- description: 'Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method '
  method: POST
  path: projects/{project}/global/urlMaps/{urlMap}/validate
  resource: urlMaps
- description: Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.  For more inf
  method: POST
  path: projects/{project}/global/urlMaps/{urlMap}/invalidateCache
  resource: urlMaps
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/global/urlMaps/{resource}/testIamPermissions
  resource: urlMaps
- description: Updates the specified UrlMap resource with the data included in the request.
  method: PUT
  path: projects/{project}/global/urlMaps/{urlMap}
  resource: urlMaps
- description: Patches the specified UrlMap resource with the data included in the request. This method supportsPATCH semantics and use
  method: PATCH
  path: projects/{project}/global/urlMaps/{urlMap}
  resource: urlMaps
- description: Deletes the specified UrlMap resource.
  method: DELETE
  path: projects/{project}/global/urlMaps/{urlMap}
  resource: urlMaps
- description: Retrieves the list of UrlMap resources available to the specified project in the specified region.
  method: GET
  path: projects/{project}/regions/{region}/urlMaps
  resource: regionUrlMaps
- description: Returns the specified UrlMap resource.
  method: GET
  path: projects/{project}/regions/{region}/urlMaps/{urlMap}
  resource: regionUrlMaps
- description: Creates a UrlMap resource in the specified project using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/urlMaps
  resource: regionUrlMaps
- description: 'Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method '
  method: POST
  path: projects/{project}/regions/{region}/urlMaps/{urlMap}/validate
  resource: regionUrlMaps
- description: Updates the specified UrlMap resource with the data included in the request.
  method: PUT
  path: projects/{project}/regions/{region}/urlMaps/{urlMap}
  resource: regionUrlMaps
- description: Patches the specified UrlMap resource with the data included in the request. This method supportsPATCH semantics and use
  method: PATCH
  path: projects/{project}/regions/{region}/urlMaps/{urlMap}
  resource: regionUrlMaps
- description: Deletes the specified UrlMap resource.
  method: DELETE
  path: projects/{project}/regions/{region}/urlMaps/{urlMap}
  resource: regionUrlMaps
- description: Retrieves a list of VPN gateways available to the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/vpnGateways
  resource: vpnGateways
- description: Retrieves an aggregated list of VPN gateways.  To prevent failure, Google recommends that you set the `returnPartialSucc
  method: GET
  path: projects/{project}/aggregated/vpnGateways
  resource: vpnGateways
- description: Returns the specified VPN gateway.
  method: GET
  path: projects/{project}/regions/{region}/vpnGateways/{vpnGateway}
  resource: vpnGateways
- description: Returns the status for the specified VPN gateway.
  method: GET
  path: projects/{project}/regions/{region}/vpnGateways/{vpnGateway}/getStatus
  resource: vpnGateways
- description: Creates a VPN gateway in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/vpnGateways
  resource: vpnGateways
- description: Returns permissions that a caller has on the specified resource.
  method: POST
  path: projects/{project}/regions/{region}/vpnGateways/{resource}/testIamPermissions
  resource: vpnGateways
- description: Sets the labels on a VpnGateway. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/regions/{region}/vpnGateways/{resource}/setLabels
  resource: vpnGateways
- description: Deletes the specified VPN gateway.
  method: DELETE
  path: projects/{project}/regions/{region}/vpnGateways/{vpnGateway}
  resource: vpnGateways
- description: Retrieves a list of VpnTunnel resources contained in the specified project and region.
  method: GET
  path: projects/{project}/regions/{region}/vpnTunnels
  resource: vpnTunnels
- description: Retrieves an aggregated list of VPN tunnels.  To prevent failure, Google recommends that you set the `returnPartialSucce
  method: GET
  path: projects/{project}/aggregated/vpnTunnels
  resource: vpnTunnels
- description: Returns the specified VpnTunnel resource.
  method: GET
  path: projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}
  resource: vpnTunnels
- description: Creates a VpnTunnel resource in the specified project and region using the data included in the request.
  method: POST
  path: projects/{project}/regions/{region}/vpnTunnels
  resource: vpnTunnels
- description: Sets the labels on a VpnTunnel. To learn more about labels, read theLabeling Resources documentation.
  method: POST
  path: projects/{project}/regions/{region}/vpnTunnels/{resource}/setLabels
  resource: vpnTunnels
- description: Deletes the specified VpnTunnel resource.
  method: DELETE
  path: projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}
  resource: vpnTunnels
- description: Lists the wire groups for a project in the given scope.
  method: GET
  path: projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups
  resource: wireGroups
- description: Gets the specified wire group resource in the given scope.
  method: GET
  path: projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}
  resource: wireGroups
- description: Creates a wire group in the specified project in the given scope using the parameters that are included in the request.
  method: POST
  path: projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups
  resource: wireGroups
- description: Updates the specified wire group resource with the data included in the request. This method supportsPATCH semantics and
  method: PATCH
  path: projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}
  resource: wireGroups
- description: Deletes the specified wire group in the given scope.
  method: DELETE
  path: projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}
  resource: wireGroups
- description: Retrieves the list of Zone resources available to the specified project.
  method: GET
  path: projects/{project}/zones
  resource: zones
- description: Returns the specified Zone resource.
  method: GET
  path: projects/{project}/zones/{zone}
  resource: zones
- description: Retrieves the list of Zone resources under the specific region available to the specified project.
  method: GET
  path: projects/{project}/regions/{region}/zones
  resource: regionZones
name: compute
service_url: https://sandbox-pay-google-compute-v2c65mhlba-uc.a.run.app
title: Compute Engine API
version: v1
---
