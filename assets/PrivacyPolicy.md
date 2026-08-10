# Phasica Privacy Policy

> **Version**: v0.4.0 Beta 1 publication copy
> **Effective Date**: August 3, 2026
> **Last Updated**: August 6, 2026
> **Release scope**: External TestFlight Beta 1
> **Developer**: Ruishen Xu
> **Privacy Email**: [help.phasica@outlook.com](mailto:help.phasica@outlook.com)

This Privacy Policy explains how Phasica handles information in the External TestFlight Beta 1 release. Phasica may display English or Simplified Chinese. This English version is authoritative.

## 1. Information Phasica handles

Phasica handles information needed to provide the App, protect accounts, support testing, and process subscriptions:

- **Account information**: Sign in with Apple identifiers and Supabase Auth identifiers. Through Sign in with Apple, Apple may supply a relay email address that Supabase Auth can retain for authentication; Phasica does not read, display, or use that relay email
- **Locally entered health information**: Cycle dates, flow, symptoms, moods, notes, habits, and ovulation-test results
- **HealthKit information**: Health metrics that you authorize the App to read, and menstrual-flow information that you separately authorize the App to write
- **Subscription information**: RevenueCat customer and entitlement identifiers, purchase status, and receipt-related information
- **Email feedback draft information**: App version, build number, iOS version, device model, App language, and the text you choose to add or edit before sending
- **TestFlight Feedback**: Comments, screenshots, crash comments, and technical context that Apple makes available through TestFlight and App Store Connect

Phasica does not use an advertising SDK or an analytics SDK in Beta 1. The App does not silently send feedback, screenshots, diagnostic logs, health records, or account identifiers.

## 2. HealthKit and local health information

Phasica requests HealthKit access through Apple’s permission dialogs. You may decline or later revoke that permission in iOS Settings. Core cycle recording remains available when you do not grant HealthKit access, although features that depend on HealthKit metrics may be unavailable.

HealthKit data is processed for local display, trends, and prediction calculations. HealthKit values are stored in local SwiftData snapshots when the App needs to retain them for those local features. The App does not send HealthKit values to Supabase, GitHub, RevenueCat, or the email feedback draft. The App does not automatically attach HealthKit values, health records, symptoms, screenshots, or diagnostic logs to feedback.

The App may write menstrual-flow information to Apple Health only after you enable the relevant permission and action. Apple controls Apple Health storage and deletion. Manage Apple Health records in Apple’s Health app and Settings.

Phasica provides informational estimates and wellness education. It is not a medical device and does not provide medical advice, diagnosis, treatment, or emergency services. A Phasica prediction is not a contraceptive method and is not intended for contraception. Do not use a Phasica prediction as a contraceptive method.

## 3. Local storage and account data

Cycle and health information that you create in Phasica is stored locally in the App’s SwiftData store and related local preferences. Authentication credentials and other security material use the system Keychain where applicable. Local health data is not automatically copied into an email draft or sent through the Beta 1 feedback channels.

Supabase provides authentication and server-side account operations. The App does not use Supabase to automatically upload cycle records, symptoms, HealthKit values, email drafts, or feedback submissions in Beta 1. Apple’s Sign in with Apple may generate a relay email address. Phasica does not use the Apple relay email; Supabase Auth may retain it for authentication purposes only.

## 4. Beta 1 feedback channels

### 4.1 Apple TestFlight Feedback

TestFlight Feedback is the primary feedback channel for external Beta 1 testing. Apple receives and processes comments, screenshots, crash comments, and available technical context through TestFlight. The Phasica team reviews that information in App Store Connect.

Apple may make available the App version, build, device, iOS version, time, connection context, crash details, a tester name or email, and the tester’s comment or screenshot. Public-link testers may appear as anonymous unless they provide an email with the feedback. Apple’s processing is governed by Apple’s terms and privacy practices.

Please do not include health records, symptoms, HealthKit values, names, contact details, or sensitive screenshots in TestFlight comments. Use a neutral screenshot when a screenshot is necessary to explain a software issue.

### 4.2 User-initiated email feedback

Beta 1 provides user-initiated email feedback as a supplementary support channel. When you select **Send Feedback by Email**, the App opens the system mail editor. You can review, edit, send, or cancel the message before it leaves your device. The App does not send the message in the background.

The draft may contain only necessary non-sensitive technical context:

- App version
- Build number
- iOS version
- Device model
- App language

The draft does not automatically contain a Supabase user ID, Apple user identifier, RevenueCat App User ID, cycle data, symptoms, sexual or reproductive information, pregnancy or fertility information, HealthKit data, SwiftData, UserDefaults or Keychain contents, diagnostic logs, screenshots, exact device identifiers, precise location, region, or authentication information.

The draft reminds you: “Please review the message before sending. Do not include health information or other sensitive personal information unless you intentionally choose to share it for support.” The Simplified Chinese message provides the same warning.

The recipient address is `help.phasica@outlook.com`. If no mail account is configured, the App explains that email is unavailable and displays this address as the manual contact option. If you cancel the mail editor, Phasica does not treat the action as a sent report and does not record it as a successful submission.

After you choose **Send**, your mail provider and the recipient process the message. Phasica cannot control copies retained in your Sent mailbox, mail backups, or the recipient’s mailbox. You remain responsible for reviewing the message before sending.

The email channel is used for support, troubleshooting, security review, and product improvement. It is not used for advertising.

### 4.3 No automatic feedback upload in Beta 1

Beta 1 does not automatically send feedback to Supabase or GitHub. The previous Supabase-to-GitHub Issue implementation is preserved in repository history for possible future evaluation. It is not an active Beta 1 feedback path. Existing historical test records or remote records, if any, are not represented as automatically deleted by this Policy.

## 5. Third-party services

Phasica uses the following services for the stated purposes:

| Service | Purpose | Beta 1 data boundary |
|---|---|---|
| Apple and TestFlight | Authentication, Apple Health, subscription billing, beta distribution, and TestFlight Feedback | Apple processes the information described in Apple’s policies and TestFlight documentation |
| Supabase | Authentication and server-side account deletion | No automatic Beta 1 feedback or HealthKit value upload |
| RevenueCat | Subscription entitlement and purchase restoration | No HealthKit value or health record is sent by Phasica |
| Email provider selected by you | Sending a message after you review and approve it | Receives only the draft content you choose to send and the technical fields shown in the editor |

Phasica does not sell personal information. Phasica does not send service-role keys, private keys, authentication tokens, user identifiers, or local health databases to the feedback email.

## 6. Retention and deletion

### 6.1 Local data

Local health data remains on the device after account deletion. **Uninstall the App to remove local health data stored by Phasica.** Uninstalling Phasica does not delete records that remain in Apple Health.

### 6.2 Account and server data

You can start account deletion from Settings. The flow deletes the Supabase Auth account and associated cloud business data. The App’s account deletion contract does not promise removal of local health data, Apple Health records, mail-provider copies, or previously existing remote records outside the active account deletion operation.

Account deletion is irreversible. It does not cancel an Apple App Store subscription. Use [Manage App Store Subscription](https://apps.apple.com/account/subscriptions) to review or cancel the subscription separately.

Supabase account deletion and provider backup handling remain subject to the provider’s technical deletion process and applicable legal retention requirements. Ask us at the privacy email if you need a deletion-status clarification.

### 6.3 Feedback retention

Beta 1 does not create new Supabase feedback rows or GitHub Issues from the App feedback path. Email copies are retained by the mail services and recipients selected by you. Existing historical test data or remote records require an owner-led review; this Policy does not claim that they were automatically removed.

## 7. Your choices and rights

You can:

- Decline or revoke HealthKit permission in iOS Settings
- Review, edit, or cancel an email feedback draft before sending
- Delete your Phasica account from Settings
- Request privacy information or deletion clarification by emailing [help.phasica@outlook.com](mailto:help.phasica@outlook.com)
- Manage or cancel an Apple subscription through [Manage App Store Subscription](https://apps.apple.com/account/subscriptions)

We respond to privacy requests within the period required by applicable law. We may ask for information needed to verify a request and protect another person’s information.

## 8. Children

Phasica is not designed for children. We do not knowingly collect personal information from children in violation of applicable law. If you believe a child has provided personal information, contact [help.phasica@outlook.com](mailto:help.phasica@outlook.com).

## 9. Security and incidents

Phasica uses system protections, access controls, and authenticated server operations appropriate to the Beta 1 scope. No online service can guarantee absolute security. If we identify a security incident, we will respond and provide notices required by applicable law.

## 10. Policy changes and contact

We may update this Policy when the App, services, or legal requirements change. The Last Updated date identifies the current publication copy. Material changes to data collection or processing will be reflected before the changed processing begins where required.

For privacy questions, deletion requests, or complaints, contact [help.phasica@outlook.com](mailto:help.phasica@outlook.com).
