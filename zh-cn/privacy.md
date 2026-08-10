---
layout: legal
lang: zh-CN
title: 隐私政策
legal_id: "01"
last_updated: "2026年8月6日"
permalink: /zh-cn/privacy/
translation_key: privacy
legal_review_required: true
---

> **版本**：v0.4.0 Beta 1 发布文本  
> **生效日期**：2026年8月3日  
> **最近更新**：2026年8月6日  
> **发布范围**：External TestFlight Beta 1  
> **开发者**：Ruishen Xu  
> **隐私邮箱**：[help.phasica@outlook.com](mailto:help.phasica@outlook.com)

本隐私政策说明了 Phasica 在 External TestFlight Beta 1 版本中如何处理信息。Phasica 可能显示英文或简体中文。英文版本具有法律约束效力。

## 1. Phasica 处理的信息

Phasica 处理提供 App、保护账户、支持测试及处理订阅所需的信息：

- **账户信息**：通过 Apple 登录标识符与 Supabase Auth 标识符。通过 Apple 登录，Apple 可能会提供一个中转邮箱地址供 Supabase Auth 保留用于身份验证；Phasica 不会读取、显示或使用该中转邮箱
- **本地输入的健康信息**：周期日期、经量、症状、情绪、笔记、习惯及排卵测试结果
- **HealthKit 信息**：您授权 App 读取的健康指标，以及您单独授权 App 写入的月经流量信息
- **订阅信息**：RevenueCat 客户与权益标识符、购买状态及收据相关信息
- **邮件反馈草稿信息**：App 版本号、构建版本号、iOS 版本、设备型号、App 语言以及您在发送前选择添加或编辑的文本
- **TestFlight 反馈**：Apple 通过 TestFlight 与 App Store Connect 提供的评论、截图、崩溃评论及技术背景信息

Phasica 在 Beta 1 中不使用任何广告 SDK 或统计分析 SDK。App 不会静默发送反馈、截图、诊断日志、健康记录或账户标识符。

## 2. HealthKit 与本地健康信息

Phasica 通过 Apple 的权限对话框申请 HealthKit 访问权限。您可以拒绝或稍后在 iOS 设置中撤销该权限。即使您不授予 HealthKit 访问权限，核心周期记录功能仍可正常使用，但依赖 HealthKit 指标的功能可能无法使用。

HealthKit 数据处理仅用于本地显示、趋势与预测计算。当 App 需要在本地保留 HealthKit 数据用于上述功能时，会将其存储在本地 SwiftData 快照中。App 不会将 HealthKit 数值发送至 Supabase、GitHub、RevenueCat 或邮件反馈草稿中。App 不会自动将 HealthKit 数值、健康记录、症状、截图或诊断日志附加至反馈中。

App 仅在您开启相关权限并执行操作后，才会将月经流量信息写入 Apple 健康。Apple 控制 Apple 健康数据的存储与删除。请在 Apple 的“健康”App 与设置中管理 Apple 健康记录。

Phasica 提供资讯性估计与健康教育。它不是医疗器械，不提供医疗建议、诊断、治疗或急救服务。Phasica 的预测并非避孕方法，亦不适用于避孕。请勿将 Phasica 预测作为避孕手段。

## 3. 本地存储与账户数据

您在 Phasica 中创建的周期与健康信息均存储在本地 App 的 SwiftData 存储及相关本地偏好设置中。身份验证凭据及其他安全材料在适用情况下使用系统 Keychain。本地健康数据不会自动复制到邮件草稿中，也不会通过 Beta 1 反馈渠道发送。

Supabase 提供身份验证与服务端账户操作。在 Beta 1 中，App 不会使用 Supabase 自动上传周期记录、症状、HealthKit 数值、邮件草稿或反馈提交。Apple 的“通过 Apple 登录”可能会生成一个中转邮箱地址。Phasica 不会使用该 Apple 中转邮箱；Supabase Auth 仅出于身份验证目的保留它。

## 4. Beta 1 反馈渠道

### 4.1 Apple TestFlight 反馈

TestFlight 反馈是外部 Beta 1 测试的主要反馈渠道。Apple 通过 TestFlight 接收并处理评论、截图、崩溃评论及可用的技术背景。Phasica 团队在 App Store Connect 中查看这些信息。

Apple 可能会提供 App 版本、构建版本、设备、iOS 版本、时间、连接背景、崩溃详情、测试者姓名或邮箱，以及测试者的评论或截图。除非测试者在反馈中提供了邮箱，否则公开链接测试者可能显示为匿名。Apple 的处理受 Apple 的条款与隐私规定约束。

请勿在 TestFlight 评论中包含健康记录、症状、HealthKit 数值、姓名、联系方式或敏感截图。当必须通过截图说明软件问题时，请使用中性截图。

### 4.2 用户发起的邮件反馈

Beta 1 提供用户发起的邮件反馈作为补充支持渠道。当您选择 **发送邮件反馈** 时，App 将打开系统邮件编辑器。在邮件离开您的设备之前，您可以查看、编辑、发送或取消该邮件。App 不会在后台静默发送邮件。

草稿仅包含必要的非敏感技术背景：

- App 版本
- 构建版本号
- iOS 版本
- 设备型号
- App 语言

草稿不会自动包含 Supabase 用户 ID、Apple 用户标识符、RevenueCat App 用户 ID、周期数据、症状、性或生殖信息、怀孕或生育信息、HealthKit 数据、SwiftData、UserDefaults 或 Keychain 内容、诊断日志、截图、精确设备标识符、精确位置、地区或身份验证信息。

草稿提示您：“发送前请核对邮件内容。除非您出于支持目的主动分享，否则请勿包含健康信息或其他敏感个人信息。”

收件人地址为 `help.phasica@outlook.com`。如果未配置邮件账户，App 将提示邮件不可用，并将此地址作为手动联系选项显示。如果您取消邮件编辑器，Phasica 不会将其视为已发送的报告，也不会记录为成功提交。

当您选择 **发送** 后，您的邮件提供商与收件人将处理该邮件。Phasica 无法控制保留在您的“已发送”邮箱、邮件备份或收件人邮箱中的副本。您在发送前仍负有核对邮件内容的责任。

邮件渠道用于支持、故障排除、安全审查及产品改进，不会用于广告投放。

### 4.3 Beta 1 中无自动反馈上传

Beta 1 不会自动将反馈发送至 Supabase 或 GitHub。之前从 Supabase 到 GitHub Issue 的实现保留在代码库历史中以备将来评估。它不是激活的 Beta 1 反馈路径。现有历史测试记录或远程记录（如有）未在本政策中声明为已被自动删除。

## 5. 第三方服务

Phasica 为上述目的使用以下服务：

| 服务 | 目的 | Beta 1 数据边界 |
|---|---|---|
| Apple 及 TestFlight | 身份验证、Apple 健康、订阅计费、Beta 分发及 TestFlight 反馈 | Apple 按照 Apple 政策与 TestFlight 文档中的说明处理信息 |
| Supabase | 身份验证及服务端账户删除 | 无自动 Beta 1 反馈或 HealthKit 数值上传 |
| RevenueCat | 订阅权益与购买恢复 | Phasica 不发送 HealthKit 数值或健康记录 |
| 您选择的邮件提供商 | 在您核对并批准后发送邮件 | 仅接收您选择发送的草稿内容及编辑器中显示的技术字段 |

Phasica 不出售个人信息。Phasica 不会将服务角色密钥、私钥、身份验证令牌、用户标识符或本地健康数据库发送至反馈邮箱。

## 6. 保留与删除

### 6.1 本地数据

账户删除后，本地健康数据仍保留在设备上。**卸载 App 即可删除 Phasica 存储的本地健康数据。** 卸载 Phasica 不会删除保留在 Apple 健康中的记录。

### 6.2 账户与服务器数据

您可以从“设置”发起账户删除。该流程将删除 Supabase Auth 账户及相关的云端业务数据。App 的账户删除契约不承诺移除本地健康数据、Apple 健康记录、邮件提供商副本或主动账户删除操作之外的现有远程记录。

账户删除不可逆。它不会取消 Apple App Store 订阅。请单独使用 [管理 App Store 订阅](https://apps.apple.com/account/subscriptions) 来查看或取消订阅。

Supabase 账户删除与提供商备份处理仍受提供商的技术删除流程及适用法律保留要求的约束。如需明确删除状态，请通过隐私邮箱联系我们。

### 6.3 反馈保留

Beta 1 不会从 App 反馈路径创建新的 Supabase 反馈行或 GitHub Issues。邮件副本由您选择的邮件服务及收件人保留。现有的历史测试数据或远程记录需要由所有者进行审查；本政策并不声明它们已被自动移除。

## 7. 您的选择与权利

您可以：

- 在 iOS 设置中拒绝或撤销 HealthKit 权限
- 在发送前核对、编辑或取消邮件反馈草稿
- 在“设置”中删除您的 Phasica 账户
- 通过发送邮件至 [help.phasica@outlook.com](mailto:help.phasica@outlook.com) 查询隐私信息或明确删除状态
- 通过 [管理 App Store 订阅](https://apps.apple.com/account/subscriptions) 管理或取消 Apple 订阅

我们将在适用法律要求的期限内回应隐私请求。我们可能会要求提供验证请求及保护他人信息所需的信息。

## 8. 未成年人

Phasica 并非专为儿童设计。我们不会在违反适用法律的情况下故意收集儿童的个人信息。如果您认为儿童提供了个人信息，请联系 [help.phasica@outlook.com](mailto:help.phasica@outlook.com)。

## 9. 安全与事件

Phasica 采用适合 Beta 1 范围的系统保护、访问控制及身份验证服务端操作。任何在线服务都无法保证绝对安全。如果我们发现安全事件，我们将作出回应并提供适用法律要求的通知。

## 10. 政策变更与联系方式

当 App、服务或法律要求发生变化时，我们可能会更新本政策。“最近更新”日期标明了当前发布的文本。在要求的情况下，对数据收集或处理的重大变更将在变更处理开始前予以体现。

如有隐私问题、删除请求或投诉，请联系 [help.phasica@outlook.com](mailto:help.phasica@outlook.com)。
