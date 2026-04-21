---
category: productivity
description: Build Chat apps for spaces and messages.
endpoints:
- description: Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.
  method: GET
  path: v1/media/{mediaId}
  resource: media
- description: Uploads an attachment. For an example, see [Upload media as a file attachment](https://developers.google.com/workspace/c
  method: POST
  path: v1/spaces/{spacesId}/attachments:upload
  resource: media
- description: Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an exampl
  method: GET
  path: v1/spaces
  resource: spaces
- description: Returns a list of spaces in a Google Workspace organization based on an administrator's search. In the request, set `use
  method: GET
  path: v1/spaces:search
  resource: spaces
- description: Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOU
  method: GET
  path: v1/spaces:findDirectMessage
  resource: spaces
- description: Returns details about a space. For an example, see [Get details about a space](https://developers.google.com/workspace/c
  method: GET
  path: v1/spaces/{spacesId}
  resource: spaces
- description: Creates a space. Can be used to create a named space, or a group chat in `Import mode`. For an example, see [Create a sp
  method: POST
  path: v1/spaces
  resource: spaces
- description: Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be s
  method: POST
  path: v1/spaces:setup
  resource: spaces
- description: Completes the [import process](https://developers.google.com/workspace/chat/import-data) for the specified space and mak
  method: POST
  path: v1/spaces/{spacesId}:completeImport
  resource: spaces
- description: Updates a space. For an example, see [Update a space](https://developers.google.com/workspace/chat/update-spaces). If yo
  method: PATCH
  path: v1/spaces/{spacesId}
  resource: spaces
- description: Deletes a named space. Always performs a cascading delete, which means that the space's child resources—like messages po
  method: DELETE
  path: v1/spaces/{spacesId}
  resource: spaces
- description: Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. System mes
  method: GET
  path: v1/spaces/{spacesId}/messages
  resource: spaces.messages
- description: Returns details about a message. For an example, see [Get details about a message](https://developers.google.com/workspa
  method: GET
  path: v1/spaces/{spacesId}/messages/{messagesId}
  resource: spaces.messages
- description: Creates a message in a Google Chat space. For an example, see [Send a message](https://developers.google.com/workspace/c
  method: POST
  path: v1/spaces/{spacesId}/messages
  resource: spaces.messages
- description: Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` requ
  method: PUT
  path: v1/spaces/{spacesId}/messages/{messagesId}
  resource: spaces.messages
- description: Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` requ
  method: PATCH
  path: v1/spaces/{spacesId}/messages/{messagesId}
  resource: spaces.messages
- description: Deletes a message. For an example, see [Delete a message](https://developers.google.com/workspace/chat/delete-messages).
  method: DELETE
  path: v1/spaces/{spacesId}/messages/{messagesId}
  resource: spaces.messages
- description: Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.googl
  method: GET
  path: v1/spaces/{spacesId}/messages/{messagesId}/attachments/{attachmentsId}
  resource: spaces.messages.attachments
- description: Lists reactions to a message. For an example, see [List reactions for a message](https://developers.google.com/workspace
  method: GET
  path: v1/spaces/{spacesId}/messages/{messagesId}/reactions
  resource: spaces.messages.reactions
- description: Creates a reaction and adds it to a message. For an example, see [Add a reaction to a message](https://developers.google
  method: POST
  path: v1/spaces/{spacesId}/messages/{messagesId}/reactions
  resource: spaces.messages.reactions
- description: Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/workspace/chat/de
  method: DELETE
  path: v1/spaces/{spacesId}/messages/{messagesId}/reactions/{reactionsId}
  resource: spaces.messages.reactions
- description: Lists memberships in a space. For an example, see [List users and Google Chat apps in a space](https://developers.google
  method: GET
  path: v1/spaces/{spacesId}/members
  resource: spaces.members
- description: Returns details about a membership. For an example, see [Get details about a user's or Google Chat app's membership](htt
  method: GET
  path: v1/spaces/{spacesId}/members/{membersId}
  resource: spaces.members
- description: Creates a membership for the calling Chat app, a user, or a Google Group. Creating memberships for other Chat apps isn't
  method: POST
  path: v1/spaces/{spacesId}/members
  resource: spaces.members
- description: Updates a membership. For an example, see [Update a user's membership in a space](https://developers.google.com/workspac
  method: PATCH
  path: v1/spaces/{spacesId}/members/{membersId}
  resource: spaces.members
- description: Deletes a membership. For an example, see [Remove a user or a Google Chat app from a space](https://developers.google.co
  method: DELETE
  path: v1/spaces/{spacesId}/members/{membersId}
  resource: spaces.members
- description: Returns an event from a Google Chat space. The [event payload](https://developers.google.com/workspace/chat/api/referenc
  method: GET
  path: v1/spaces/{spacesId}/spaceEvents/{spaceEventsId}
  resource: spaces.spaceEvents
- description: Lists events from a Google Chat space. For each event, the [payload](https://developers.google.com/workspace/chat/api/re
  method: GET
  path: v1/spaces/{spacesId}/spaceEvents
  resource: spaces.spaceEvents
- description: Lists custom emojis visible to the authenticated user. Custom emojis are only available for Google Workspace accounts, a
  method: GET
  path: v1/customEmojis
  resource: customEmojis
- description: Returns details about a custom emoji. Custom emojis are only available for Google Workspace accounts, and the administra
  method: GET
  path: v1/customEmojis/{customEmojisId}
  resource: customEmojis
- description: 'Creates a custom emoji. Custom emojis are only available for Google Workspace accounts, and the administrator must turn '
  method: POST
  path: v1/customEmojis
  resource: customEmojis
- description: Deletes a custom emoji. By default, users can only delete custom emoji they created. [Emoji managers](https://support.go
  method: DELETE
  path: v1/customEmojis/{customEmojisId}
  resource: customEmojis
- description: Returns details about a user's read state within a space, used to identify read and unread messages. For an example, see
  method: GET
  path: v1/users/{usersId}/spaces/{spacesId}/spaceReadState
  resource: users.spaces
- description: Updates a user's read state within a space, used to identify read and unread messages. For an example, see [Update a use
  method: PATCH
  path: v1/users/{usersId}/spaces/{spacesId}/spaceReadState
  resource: users.spaces
- description: Returns details about a user's read state within a thread, used to identify read and unread messages. For an example, se
  method: GET
  path: v1/users/{usersId}/spaces/{spacesId}/threads/{threadsId}/threadReadState
  resource: users.spaces.threads
- description: Gets the space notification setting. For an example, see [Get the caller's space notification setting](https://developer
  method: GET
  path: v1/users/{usersId}/spaces/{spacesId}/spaceNotificationSetting
  resource: users.spaces.spaceNotificationSetting
- description: Updates the space notification setting. For an example, see [Update the caller's space notification setting](https://dev
  method: PATCH
  path: v1/users/{usersId}/spaces/{spacesId}/spaceNotificationSetting
  resource: users.spaces.spaceNotificationSetting
- description: '[Developer Preview](https://developers.google.com/workspace/preview): Lists sections available to the Chat user. Section'
  method: GET
  path: v1/users/{usersId}/sections
  resource: users.sections
- description: '[Developer Preview](https://developers.google.com/workspace/preview): Creates a section in Google Chat. Sections help us'
  method: POST
  path: v1/users/{usersId}/sections
  resource: users.sections
- description: '[Developer Preview](https://developers.google.com/workspace/preview): Changes the sort order of a section. For details, '
  method: POST
  path: v1/users/{usersId}/sections/{sectionsId}:position
  resource: users.sections
- description: '[Developer Preview](https://developers.google.com/workspace/preview): Updates a section. Only sections of type `CUSTOM_S'
  method: PATCH
  path: v1/users/{usersId}/sections/{sectionsId}
  resource: users.sections
- description: '[Developer Preview](https://developers.google.com/workspace/preview): Deletes a section of type `CUSTOM_SECTION`. If the'
  method: DELETE
  path: v1/users/{usersId}/sections/{sectionsId}
  resource: users.sections
- description: '[Developer Preview](https://developers.google.com/workspace/preview): Lists items in a section. Only spaces can be secti'
  method: GET
  path: v1/users/{usersId}/sections/{sectionsId}/items
  resource: users.sections.items
- description: '[Developer Preview](https://developers.google.com/workspace/preview): Moves an item from one section to another. For exa'
  method: POST
  path: v1/users/{usersId}/sections/{sectionsId}/items/{itemsId}:move
  resource: users.sections.items
name: chat
service_url: https://chat.googleapis.com/
title: Google Chat API
version: v1
---
