---
layout: legal
lang: zh-TW
title: 隱私權政策
legal_id: "01"
last_updated: "2026年8月6日"
permalink: /zh-tw/privacy/
translation_key: privacy
legal_review_required: true
---

> **版本**：v0.4.0 Beta 1 發布文本  
> **生效日期**：2026年8月3日  
> **最近更新**：2026年8月6日  
> **發布範圍**：External TestFlight Beta 1  
> **開發者**：Ruishen Xu  
> **隱私信箱**：[help.phasica@outlook.com](mailto:help.phasica@outlook.com)

本隱私權政策說明了 Phasica 在 External TestFlight Beta 1 版本中如何處理資訊。Phasica 可能顯示英文或簡體中文。英文版本具有法律約束效力。

## 1. Phasica 處理的資訊

Phasica 處理提供 App、保護帳號、支援測試及處理訂閱所需的資訊：

- **帳號資訊**：透過 Apple 登入識別碼與 Supabase Auth 識別碼。透過 Apple 登入，Apple 可能會提供一個轉接電子郵件地址供 Supabase Auth 保留用於身分驗證；Phasica 不會讀取、顯示或使用該轉接電子郵件
- **在地輸入的健康資訊**：週期日期、經量、症狀、情緒、筆記、習慣及排卵測試結果
- **HealthKit 資訊**：您授權 App 讀取的健康指標，以及您單獨授權 App 寫入的月經流量資訊
- **訂閱資訊**：RevenueCat 客戶與權益識別碼、購買狀態及收據相關資訊
- **郵件回饋草稿資訊**：App 版本號、構建版本號、iOS 版本、裝置型號、App 語言以及您在傳送前選擇新增或編輯的文字
- **TestFlight 回饋**：Apple 透過 TestFlight 與 App Store Connect 提供的評論、截圖、崩潰評論及技術背景資訊

Phasica 在 Beta 1 中不使用任何廣告 SDK 或統計分析 SDK。App 不會靜默傳送回饋、截圖、診斷日誌、健康記錄或帳號識別碼。

## 2. HealthKit 與在地健康資訊

Phasica 透過 Apple 的權限對話方塊申請 HealthKit 存取權限。您可以拒絕或稍後在 iOS 設定中撤銷該權限。即使您不授予 HealthKit 存取權限，核心週期記錄功能仍可正常使用，但依賴 HealthKit 指標的功能可能無法使用。

HealthKit 資料處理僅用於在地顯示、趨勢與預測計算。當 App 需要在地保留 HealthKit 資料用於上述功能時，會將其儲存在在地 SwiftData 快照中。App 不會將 HealthKit 數值傳送至 Supabase、GitHub、RevenueCat 或郵件回饋草稿中。App 不會自動將 HealthKit 數值、健康記錄、症狀、截圖或診斷日誌附加至回饋中。

App 僅在您開啟相關權限並執行操作後，才會將月經流量資訊寫入 Apple 健康。Apple 控制 Apple 健康資料的儲存與刪除。請在 Apple 的「健康」App 與設定中管理 Apple 健康記錄。

Phasica 提供資訊性估計與健康教育。它不是醫療器材，不提供醫療建議、診斷、治療或急救服務。Phasica 的預測並非避孕方法，亦不適用於避孕。請勿將 Phasica 預測作為避孕手段。

## 3. 在地儲存與帳號資料

您在 Phasica 中建立的週期與健康資訊均儲存在在地 App 的 SwiftData 儲存及相關在地偏好設定中。身分驗證憑證及其他安全材料在適用情況下使用系統 Keychain。在地健康資料不會自動複製到郵件草稿中，也不會透過 Beta 1 回饋管道傳送。

Supabase 提供身分驗證與伺服器端帳號操作。在 Beta 1 中，App 不會使用 Supabase 自動上傳週期記錄、症狀、HealthKit 數值、郵件草稿或回饋提交。Apple 的「透過 Apple 登入」可能會生成一個轉接電子郵件地址。Phasica 不會使用該 Apple 轉接電子郵件；Supabase Auth 僅出於身分驗證目的保留它。

## 4. Beta 1 回饋管道

### 4.1 Apple TestFlight 回饋

TestFlight 回饋是外部 Beta 1 測試的主要回饋管道。Apple 透過 TestFlight 接收並處理評論、截圖、崩潰評論及可用的技術背景。Phasica 團隊在 App Store Connect 中檢視這些資訊。

Apple 可能會提供 App 版本、構建版本、裝置、iOS 版本、時間、連線背景、崩潰詳情、測試者姓名或電子郵件，以及測試者的評論或截圖。除非測試者在回饋中提供了電子郵件，否則公開連結測試者可能顯示為匿名。Apple 的處理受 Apple 的條款與隱私規定約束。

請勿在 TestFlight 評論中包含健康記錄、症狀、HealthKit 數值、姓名、聯絡方式或敏感截圖。當必須透過截圖說明軟體問題時，請使用中性截圖。

### 4.2 使用者發起的郵件回饋

Beta 1 提供使用者發起的郵件回饋作為補充支援管道。當您選擇 **傳送郵件回饋** 時，App 將開啟系統郵件編輯器。在郵件離開您的裝置之前，您可以檢視、編輯、傳送或取消該郵件。App 不會在背景靜默傳送郵件。

草稿僅包含必要的非敏感技術背景：

- App 版本
- 構建版本號
- iOS 版本
- 裝置型號
- App 語言

草稿不會自動包含 Supabase 使用者 ID、Apple 使用者識別碼、RevenueCat App 使用者 ID、週期資料、症狀、性或生殖資訊、懷孕或生育資訊、HealthKit 資料、SwiftData、UserDefaults 或 Keychain 內容、診斷日誌、截圖、精確裝置識別碼、精確位置、地區或身分驗證資訊。

草稿提示您：「傳送前請核對郵件內容。除非您出於支援目的主動分享，否則請勿包含健康資訊或其他敏感個人資訊。」

收件人地址為 `help.phasica@outlook.com`。如果未設定郵件帳號，App 將提示郵件不可用，並將此地址作為手動聯絡選項顯示。如果您取消郵件編輯器，Phasica 不會將其視為已傳送的報告，也不會記錄為成功提交。

當您選擇 **傳送** 後，您的郵件提供者與收件人將處理該郵件。Phasica 無法控制保留在您的「已傳送」信箱、郵件備份或收件人信箱中的副本。您在傳送前仍負有核對郵件內容的責任。

郵件管道用於支援、故障排除、安全審查及產品改進，不會用於廣告投放。

### 4.3 Beta 1 中無自動回饋上傳

Beta 1 不會自動將回饋傳送至 Supabase 或 GitHub。之前從 Supabase 到 GitHub Issue 的實作保留在程式碼庫歷史中以備將來評估。它不是啟動的 Beta 1 回饋路徑。現有歷史測試記錄或遠端記錄（如有）未在本政策中聲明為已被自動刪除。

## 5. 第三方服務

Phasica 為上述目的使用以下服務：

| 服務 | 目的 | Beta 1 資料邊界 |
|---|---|---|
| Apple 及 TestFlight | 身分驗證、Apple 健康、訂閱計費、Beta 分發及 TestFlight 回饋 | Apple 按照 Apple 政策與 TestFlight 文件中的說明處理資訊 |
| Supabase | 身分驗證及伺服器端帳號刪除 | 無自動 Beta 1 回饋或 HealthKit 數值上傳 |
| RevenueCat | 訂閱權益與購買恢復 | Phasica 不傳送 HealthKit 數值或健康記錄 |
| 您選擇的郵件提供者 | 在您核對並批准後傳送郵件 | 僅接收您選擇傳送的草稿內容及編輯器中顯示的技術欄位 |

Phasica 不出售個人資訊。Phasica 不會將服務角色金鑰、私鑰、身分驗證權牌、使用者識別碼或在地健康資料庫傳送至回饋信箱。

## 6. 保留與刪除

### 6.1 在地資料

帳號刪除後，在地健康資料仍保留在裝置上。**卸載 App 即可刪除 Phasica 儲存的在地健康資料。** 卸載 Phasica 不會刪除保留在 Apple 健康中的記錄。

### 6.2 帳號與伺服器資料

您可以從「設定」發起帳號刪除。該流程將刪除 Supabase Auth 帳號及相關的雲端業務資料。App 的帳號刪除契約不承諾移除在地健康資料、Apple 健康記錄、郵件提供者副本或主動帳號刪除操作之外的現有遠端記錄。

帳號刪除不可逆。它不會取消 Apple App Store 訂閱。請單獨使用 [管理 App Store 訂閱](https://apps.apple.com/account/subscriptions) 來檢視或取消訂閱。

Supabase 帳號刪除與提供者備份處理仍受提供者的技術刪除流程及適用法律保留要求的約束。如需明確刪除狀態，請透過隱私信箱聯絡我們。

### 6.3 回饋保留

Beta 1 不會從 App 回饋路徑建立新的 Supabase 回饋列或 GitHub Issues。郵件副本由您選擇的郵件服務及收件人保留。現有的歷史測試資料或遠端記錄需要由所有人進行審查；本政策並不聲明它們已被自動移除。

## 7. 您的選擇與權利

您可以：

- 在 iOS 設定中拒絕或撤銷 HealthKit 權限
- 在傳送前核對、編輯或取消郵件回饋草稿
- 在「設定」中刪除您的 Phasica 帳號
- 透過傳送郵件至 [help.phasica@outlook.com](mailto:help.phasica@outlook.com) 查詢隱私資訊或明確刪除狀態
- 透過 [管理 App Store 訂閱](https://apps.apple.com/account/subscriptions) 管理或取消 Apple 訂閱

我們將在適用法律要求的期限內回應隱私請求。我們可能會要求提供驗證請求及保護他人資訊所需的能力。

## 8. 未成年人

Phasica 並非專為兒童設計。我們不會在違反適用法律的情況下故意收集兒童的個人資訊。如果您認為兒童提供了個人資訊，請聯絡 [help.phasica@outlook.com](mailto:help.phasica@outlook.com)。

## 9. 安全與事件

Phasica 採用適合 Beta 1 範圍的系統保護、存取控制及身分驗證伺服器端操作。任何線上服務都無法保證絕對安全。如果我們發現安全事件，我們將作出回應並提供適用法律要求的通知。

## 10. 政策變更與聯絡方式

當 App、服務或法律要求發生變化時，我們可能會更新本政策。「最近更新」日期標明了當前發布的文本。在要求的情況下，對資料收集或處理的重大變更將在變更處理開始前予以體現。

如有隱私問題、刪除請求或抱怨，請聯絡 [help.phasica@outlook.com](mailto:help.phasica@outlook.com)。
