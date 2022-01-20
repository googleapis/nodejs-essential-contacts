// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(contacts, resource, notificationCategory) {
  // [START essentialcontacts_v1_generated_EssentialContactsService_SendTestMessage_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The list of names of the contacts to send a test message to.
   *  Format: organizations/{organization_id}/contacts/{contact_id},
   *  folders/{folder_id}/contacts/{contact_id} or
   *  projects/{project_id}/contacts/{contact_id}
   */
  // const contacts = 'abc123'
  /**
   *  Required. The name of the resource to send the test message for. All
   *  contacts must either be set directly on this resource or inherited from
   *  another resource that is an ancestor of this one. Format:
   *  organizations/{organization_id}, folders/{folder_id} or
   *  projects/{project_id}
   */
  // const resource = 'abc123'
  /**
   *  Required. The notification category to send the test message for. All
   *  contacts must be subscribed to this category.
   */
  // const notificationCategory = {}

  // Imports the Essentialcontacts library
  const {EssentialContactsServiceClient} = require('@google-cloud/essential-contacts').v1;

  // Instantiates a client
  const essentialcontactsClient = new EssentialContactsServiceClient();

  async function callSendTestMessage() {
    // Construct request
    const request = {
      contacts,
      resource,
      notificationCategory,
    };

    // Run request
    const response = await essentialcontactsClient.sendTestMessage(request);
    console.log(response);
  }

  callSendTestMessage();
  // [END essentialcontacts_v1_generated_EssentialContactsService_SendTestMessage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
