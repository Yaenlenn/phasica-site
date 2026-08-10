---
layout: legal
lang: de
title: Datenschutzbestimmungen
legal_id: "01"
last_updated: "6. August 2026"
permalink: /de/privacy/
translation_key: privacy
legal_review_required: true
---

> **Version**: v0.4.0 Beta 1 Veröffentlichungsexemplar  
> **Inkrafttreten**: 3. August 2026  
> **Zuletzt aktualisiert**: 6. August 2026  
> **Release-Umfang**: Externe TestFlight Beta 1  
> **Entwickler**: Ruishen Xu  
> **Datenschutz-E-Mail**: [help.phasica@outlook.com](mailto:help.phasica@outlook.com)

Diese Datenschutzbestimmungen erläutern, wie Phasica mit Informationen in der Veröffentlichung der externen TestFlight Beta 1 umgeht. Phasica kann in englischer oder vereinfachter chinesischer Sprache angezeigt werden. Diese englische Version ist maßgebend.

## 1. Von Phasica verarbeitete Informationen

Phasica verarbeitet Informationen, die erforderlich sind, um die App bereitzustellen, Konten zu schützen, Tests zu unterstützen und Abonnements zu verarbeiten:

- **Kontoinformationen**: Sign in with Apple-Kennungen und Supabase Auth-Kennungen. Über Sign in with Apple stellt Apple möglicherweise eine Relay-E-Mail-Adresse bereit, die Supabase Auth zur Authentifizierung aufbewahren kann; Phasica liest, zeigt oder verwendet diese Relay-E-Mail nicht
- **Lokal eingegebene Gesundheitsinformationen**: Zyklusdaten, Blutungsstärke, Symptome, Stimmungen, Notizen, Gewohnheiten und Ovulationstestergebnisse
- **HealthKit-Informationen**: Gesundheitsmesswerte, für deren Lesen Sie die App autorisieren, und Informationen zum Menstruationsfluss, für deren Schreiben Sie die App separat autorisieren
- **Abonnementinformationen**: RevenueCat-Kunden- und Berechtigungskennungen, Kaufstatus und belegbezogene Informationen
- **E-Mail-Feedback-Entwurfsinformationen**: App-Version, Build-Nummer, iOS-Version, Gerätemodell, App-Sprache und der Text, den Sie vor dem Senden hinzufügen oder bearbeiten
- **TestFlight-Feedback**: Kommentare, Screenshots, Absturzkommentare und technischer Kontext, die Apple über TestFlight und App Store Connect zur Verfügung stellt

Phasica verwendet in Beta 1 weder ein Werbe-SDK noch ein Analyse-SDK. Die App sendet weder Feedback, Screenshots, Diagnoseprotokolle, Gesundheitsdaten noch Kontokennungen im Hintergrund.

## 2. HealthKit und lokale Gesundheitsinformationen

Phasica fordert den Zugriff auf HealthKit über die Berechtigungsdialoge von Apple an. Sie können diese Berechtigung in den iOS-Einstellungen ablehnen oder später widerrufen. Die grundlegende Zyklusaufzeichnung bleibt verfügbar, auch wenn Sie keinen Zugriff auf HealthKit gewähren, obwohl Funktionen, die von HealthKit-Messwerten abhängen, möglicherweise nicht verfügbar sind.

HealthKit-Daten werden für die lokale Anzeige, Trends und Vorhersageberechnungen verarbeitet. HealthKit-Werte werden in lokalen SwiftData-Snapshots gespeichert, wenn die App sie für diese lokalen Funktionen aufbewahren muss. Die App sendet keine HealthKit-Werte an Supabase, GitHub, RevenueCat oder den E-Mail-Feedback-Entwurf. Die App fügt dem Feedback nicht automatisch HealthKit-Werte, Gesundheitsdaten, Symptome, Screenshots oder Diagnoseprotokolle bei.

Die App schreibt erst nach Aktivierung der entsprechenden Berechtigung und Aktion Informationen zum Menstruationsfluss in Apple Health. Apple steuert die Speicherung und Löschung von Apple Health. Verwalten Sie Apple Health-Datensätze in der Health-App und den Einstellungen von Apple.

Phasica bietet informative Schätzungen und Wellness-Aufklärung. Es ist kein Medizinprodukt und bietet keine medizinische Beratung, Diagnose, Behandlung oder Notfalldienste. Eine Phasica-Vorhersage ist keine Verhütungsmethode und nicht zur Empfängnisverhütung bestimmt. Verwenden Sie eine Phasica-Vorhersage nicht als Verhütungsmethode.

## 3. Lokaler Speicher und Kontodaten

Zyklus- und Gesundheitsinformationen, die Sie in Phasica erstellen, werden lokal im SwiftData-Speicher der App und den zugehörigen lokalen Einstellungen gespeichert. Authentifizierungsdaten und anderes Sicherheitsmaterial verwenden gegebenenfalls den System-Keychain. Lokale Gesundheitsdaten werden nicht automatisch in einen E-Mail-Entwurf kopiert oder über die Beta 1-Feedbackkanäle gesendet.

Supabase bietet Authentifizierung und serverseitige Kontoverwaltung. Die App verwendet Supabase in Beta 1 nicht zum automatischen Hochladen von Zyklusaufzeichnungen, Symptomen, HealthKit-Werten, E-Mail-Entwürfen oder Feedback-Eingaben. Die Funktion „Anmelden mit Apple“ von Apple generiert möglicherweise eine Relay-E-Mail-Adresse. Phasica verwendet diese Apple-Relay-E-Mail nicht; Supabase Auth bewahrt sie nur für Authentifizierungszwecke auf.

## 4. Beta 1 Feedback-Kanäle

### 4.1 Apple TestFlight-Feedback

TestFlight-Feedback ist der primäre Feedbackkanal für externe Beta 1-Tests. Apple empfängt und verarbeitet Kommentare, Screenshots, Absturzkommentare und verfügbaren technischen Kontext über TestFlight. Das Phasica-Team überprüft diese Informationen in App Store Connect.

Apple stellt möglicherweise die App-Version, den Build, das Gerät, die iOS-Version, die Uhrzeit, den Verbindungskontext, Absturzdetails, einen Testernamen oder eine E-Mail-Adresse sowie den Kommentar oder Screenshot des Testers zur Verfügung. Tester mit öffentlichem Link erscheinen möglicherweise anonym, es sei denn, sie geben mit dem Feedback eine E-Mail-Adresse an. Die Verarbeitung durch Apple unterliegt den Bedingungen und Datenschutzpraktiken von Apple.

Bitte fügen Sie den TestFlight-Kommentaren keine Gesundheitsdaten, Symptome, HealthKit-Werte, Namen, Kontaktdaten oder sensiblen Screenshots bei. Verwenden Sie einen neutralen Screenshot, wenn ein Screenshot erforderlich ist, um ein Softwareproblem zu erklären.

### 4.2 Vom Benutzer initiiertes E-Mail-Feedback

Beta 1 bietet vom Benutzer initiiertes E-Mail-Feedback als ergänzenden Support-Kanal. Wenn Sie **Feedback per E-Mail senden** auswählen, öffnet die App den System-E-Mail-Editor. Sie können die Nachricht überprüfen, bearbeiten, senden oder abbrechen, bevor sie Ihr Gerät verlässt. Die App sendet die Nachricht nicht im Hintergrund.

Der Entwurf darf nur den erforderlichen nicht-sensiblen technischen Kontext enthalten:

- App-Version
- Build-Nummer
- iOS-Version
- Gerätemodell
- App-Sprache

Der Entwurf enthält nicht automatisch eine Supabase-Benutzer-ID, eine Apple-Benutzerkennung, eine RevenueCat-App-Benutzer-ID, Zyklusdaten, Symptome, sexuelle oder reproduktive Informationen, Schwangerschafts- oder Fruchtbarkeitsinformationen, HealthKit-Daten, SwiftData-, UserDefaults- oder Keychain-Inhalte, Diagnoseprotokolle, Screenshots, genaue Gerätekennungen, den genauen Standort, die Region oder Authentifizierungsinformationen.

Der Entwurf erinnert Sie daran: „Bitte überprüfen Sie die Nachricht vor dem Senden. Fügen Sie keine Gesundheitsinformationen oder andere sensible persönliche Informationen bei, es sei denn, Sie entscheiden sich vorsätzlich dazu, diese für den Support zu teilen.“

Die Empfängeradresse lautet `help.phasica@outlook.com`. Wenn kein E-Mail-Konto konfiguriert ist, erklärt die App, dass E-Mail nicht verfügbar ist, und zeigt diese Adresse als manuelle Kontaktoption an. Wenn Sie den E-Mail-Editor abbrechen, behandelt Phasica die Aktion nicht als gesendeten Bericht und zeichnet sie nicht als erfolgreiche Übermittlung auf.

Nachdem Sie **Senden** ausgewählt haben, verarbeiten Ihr E-Mail-Anbieter und der Empfänger die Nachricht. Phasica kann Kopien, die in Ihrem Gesendet-Postfach, in E-Mail-Backups oder im Postfach des Empfängers aufbewahrt werden, nicht kontrollieren. Sie bleiben dafür verantwortlich, die Nachricht vor dem Senden zu überprüfen.

Der E-Mail-Kanal wird für Support, Fehlerbehebung, Sicherheitsüberprüfung und Produktverbesserung genutzt. Er wird nicht für Werbung verwendet.

### 4.3 Kein automatischer Feedback-Upload in Beta 1

Beta 1 sendet Feedback nicht automatisch an Supabase oder GitHub. Die vorherige Supabase-zu-GitHub Issue-Implementierung bleibt in der Repository-Historie für eine spätere Auswertung aufbewahrt. Es ist kein aktiver Beta 1-Feedbackpfad. Vorhandene historische Testdatensätze oder Remote-Datensätze, falls vorhanden, werden durch diese Richtlinie nicht als automatisch gelöscht dargestellt.

## 5. Dienste von Drittanbietern

Phasica nutzt die folgenden Dienste für die angegebenen Zwecke:

| Dienst | Zweck | Beta 1 Datengrenze |
|---|---|---|
| Apple und TestFlight | Authentifizierung, Apple Health, Abonnementabrechnung, Beta-Verteilung und TestFlight-Feedback | Apple verarbeitet die in den Richtlinien und der TestFlight-Dokumentation von Apple beschriebenen Informationen |
| Supabase | Authentifizierung und serverseitige Kontolöschung | Kein automatischer Beta 1-Feedback- oder HealthKit-Wert-Upload |
| RevenueCat | Abonnementberechtigung und Kaufwiederherstellung | Es werden keine HealthKit-Werte oder Gesundheitsdaten von Phasica gesendet |
| Von Ihnen gewählter E-Mail-Anbieter | Senden einer Nachricht, nachdem Sie diese überprüft und genehmigt haben | Empfängt nur den von Ihnen gesendeten Entwurfsinhalt und die im Editor angezeigten technischen Felder |

Phasica verkauft keine persönlichen Informationen. Phasica sendet keine Dienstschlüssel, privaten Schlüssel, Authentifizierungs-Token, Benutzerkennungen oder lokalen Gesundheitsdatenbanken an die Feedback-E-Mail.

## 6. Aufbewahrung und Löschung

### 6.1 Lokale Daten

Lokale Gesundheitsdaten verbleiben nach der Kontolöschung auf dem Gerät. **Deinstallieren Sie die App, um die von Phasica gespeicherten lokalen Gesundheitsdaten zu entfernen.** Das Deinstallieren von Phasica löscht keine Datensätze, die in Apple Health verbleiben.

### 6.2 Konto- und Serverdaten

Sie können die Kontolöschung in den Einstellungen starten. Der Ablauf löscht das Supabase Auth-Konto und die zugehörigen Cloud-Geschäftsdaten. Der Kontolöschungsvertrag der App verspricht nicht die Entfernung lokaler Gesundheitsdaten, von Apple Health-Datensätzen, E-Mail-Anbieterkopien oder zuvor vorhandenen Remote-Datensätzen außerhalb des aktiven Kontolöschvorgangs.

Die Kontolöschung ist unwiderruflich. Sie kündigt kein Apple App Store-Abonnement. Verwenden Sie [App Store-Abonnement verwalten](https://apps.apple.com/account/subscriptions), um das Abonnement separat zu überprüfen oder zu kündigen.

Die Löschung von Supabase-Konten und die Bearbeitung von Anbieter-Backups unterliegen weiterhin dem technischen Löschprozess des Anbieters und den geltenden gesetzlichen Aufbewahrungsanforderungen. Fragen Sie uns unter der Datenschutz-E-Mail, wenn Sie eine Klärung des Löschstatus benötigen.

### 6.3 Aufbewahrung von Feedback

Beta 1 erstellt keine neuen Supabase-Feedbackzeilen oder GitHub Issues aus dem App-Feedbackpfad. E-Mail-Kopien werden von den von Ihnen ausgewählten E-Mail-Diensten und Empfängern aufbewahrt. Vorhandene historische Testdaten oder Remote-Datensätze erfordern eine vom Eigentümer geleitete Überprüfung; diese Richtlinie behauptet nicht, dass sie automatisch entfernt wurden.

## 7. Ihre Entscheidungen und Rechte

Sie können:

- Die HealthKit-Berechtigung in den iOS-Einstellungen ablehnen oder widerrufen
- Einen E-Mail-Feedback-Entwurf vor dem Senden überprüfen, bearbeiten oder abbrechen
- Ihr Phasica-Konto in den Einstellungen löschen
- Datenschutzinformationen oder Löschungsklärungen per E-Mail an [help.phasica@outlook.com](mailto:help.phasica@outlook.com) anfordern
- Ein Apple-Abonnement über [App Store-Abonnement verwalten](https://apps.apple.com/account/subscriptions) verwalten oder kündigen

Wir antworten auf Datenschutzanfragen innerhalb der nach geltendem Recht erforderlichen Frist. Wir können Informationen anfordern, die zur Überprüfung einer Anfrage und zum Schutz der Informationen einer anderen Person erforderlich sind.

## 8. Kinder

Phasica ist nicht für Kinder konzipiert. Wir sammeln wissentlich keine personenbezogenen Daten von Kindern unter Verletzung geltenden Rechts. Wenn Sie glauben, dass ein Kind personenbezogene Daten bereitgestellt hat, wenden Sie sich an [help.phasica@outlook.com](mailto:help.phasica@outlook.com).

## 9. Sicherheit und Vorfälle

Phasica nutzt Systemschutzmaßnahmen, Zugriffskontrollen und authentifizierte Servervorgänge, die dem Umfang von Beta 1 entsprechen. Kein Online-Dienst kann absolute Sicherheit garantieren. Wenn wir einen Sicherheitsvorfall feststellen, werden wir reagieren und die nach geltendem Recht erforderlichen Benachrichtigungen bereitstellen.

## 10. Richtlinienänderungen und Kontakt

Wir können diese Richtlinie aktualisieren, wenn sich die App, die Dienste oder die gesetzlichen Anforderungen ändern. Das Datum der letzten Aktualisierung kennzeichnet das aktuelle Veröffentlichungsexemplar. Wesentliche Änderungen der Datenerhebung oder -verarbeitung werden gegebenenfalls vor Beginn der geänderten Verarbeitung berücksichtigt.

Bei Datenschutzfragen, Löschanträgen oder Beschwerden wenden Sie sich an [help.phasica@outlook.com](mailto:help.phasica@outlook.com).
