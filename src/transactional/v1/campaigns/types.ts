import type { Attributes, TriggerProperties, UserAlias } from '../../../common/types'

/**
 * Request body for sending transactional email via API-triggered delivery.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_transactional_message/#request-body}
 */
export interface TransactionalV1CampaignsSendObject {
  external_send_id?: string
  trigger_properties?: TriggerProperties
  recipient: (RecipientWithExternalUserId | RecipientWithUserAlias)[]
}

interface RecipientWithExternalUserId {
  external_user_id: string
  attributes?: Attributes
}

interface RecipientWithUserAlias {
  user_alias: UserAlias
  attributes?: Attributes
}
